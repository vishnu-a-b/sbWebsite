import * as jose from 'jose';
import crypto from 'crypto';
import { getBillDeskConfig } from '../../../config/billdesk.js';

// ============================================
// INTERFACES
// ============================================

export interface BillDeskOrderRequest {
  orderId: string;
  amount: number;
  currency?: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  additionalInfo?: Record<string, string>;
}

export interface BillDeskOrderResponse {
  orderid: string;
  bdorderid: string;
  mercid: string;
  rdata: string;  // Encrypted response data for SDK
  status: string;
  createdon: string;
  next_step: string;
}

export interface BillDeskTransactionResponse {
  mercid: string;
  orderid: string;
  bdorderid: string;
  transactionid: string;
  transaction_date: string;
  amount: string;
  surcharge: string;
  txn_amount: string;
  currency: string;
  auth_status: string;
  transaction_error_code: string;
  transaction_error_desc: string;
  transaction_error_type: string;
  payment_method_type: string;
  itemcode: string;
  bankid: string;
  bank_ref_no: string;
  objectid: string;
  ru: string;
  additional_info: Record<string, string>;
  discount_response?: any;
  refund_details?: any[];
}

// Auth status codes
export const AUTH_STATUS = {
  SUCCESS: '0300',
  FAILURE: '0399',
  PENDING: '0002',
  CANCELLED: 'NA',  // User cancelled via cross button
} as const;

// ============================================
// JWS/JWE UTILITIES
// ============================================

/**
 * Create JWS (JSON Web Signature) for request
 */
export const createJWS = async (payload: object, privateKeyPem: string, clientId: string): Promise<string> => {
  const privateKey = crypto.createPrivateKey(privateKeyPem);

  const jws = await new jose.CompactSign(
    new TextEncoder().encode(JSON.stringify(payload))
  )
    .setProtectedHeader({
      alg: 'RS256',
      clientid: clientId,
    })
    .sign(privateKey);

  return jws;
};

/**
 * Verify and decode JWS response from BillDesk
 */
export const verifyJWS = async (token: string, publicKeyPem: string): Promise<{ payload: any; verified: boolean }> => {
  try {
    const publicKey = crypto.createPublicKey(publicKeyPem);

    const { payload } = await jose.compactVerify(token, publicKey);
    const decodedPayload = JSON.parse(new TextDecoder().decode(payload));

    return {
      payload: decodedPayload,
      verified: true,
    };
  } catch (error) {
    console.error('JWS verification failed:', error);
    return {
      payload: null,
      verified: false,
    };
  }
};

/**
 * Create JWE (JSON Web Encryption) - if needed for specific requests
 */
export const createJWE = async (payload: object, publicKeyPem: string, clientId: string): Promise<string> => {
  const publicKey = crypto.createPublicKey(publicKeyPem);

  const jwe = await new jose.CompactEncrypt(
    new TextEncoder().encode(JSON.stringify(payload))
  )
    .setProtectedHeader({
      alg: 'RSA-OAEP-256',
      enc: 'A256GCM',
      clientid: clientId,
    })
    .encrypt(publicKey);

  return jwe;
};

/**
 * Decrypt JWE response
 */
export const decryptJWE = async (token: string, privateKeyPem: string): Promise<any> => {
  try {
    const privateKey = crypto.createPrivateKey(privateKeyPem);

    const { plaintext } = await jose.compactDecrypt(token, privateKey);
    return JSON.parse(new TextDecoder().decode(plaintext));
  } catch (error) {
    console.error('JWE decryption failed:', error);
    return null;
  }
};

// ============================================
// BILLDESK V2 API FUNCTIONS
// ============================================

/**
 * Generate unique order ID
 * Format: DN-YYYYMMDDHHMMSS-RANDOM (alphanumeric, 10-35 chars)
 */
export const generateOrderId = (): string => {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[-:T.]/g, '').slice(0, 14);
  const random = Math.floor(1000 + Math.random() * 9000);
  return `DN${timestamp}${random}`;
};

/**
 * Generate trace ID for request tracking
 */
export const generateTraceId = (): string => {
  return `TRC${Date.now()}${Math.floor(Math.random() * 10000)}`;
};

/**
 * Get timestamp in IST format (yyyyMMddHHmmss)
 */
export const getISTTimestamp = (): string => {
  const now = new Date();
  // Convert to IST (UTC+5:30)
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(now.getTime() + istOffset);

  return istDate.toISOString()
    .replace(/[-:T.Z]/g, '')
    .slice(0, 14);
};

/**
 * Create Order API - Step 2 of BillDesk V2
 */
export const createOrder = async (request: BillDeskOrderRequest): Promise<{
  success: boolean;
  data?: BillDeskOrderResponse;
  error?: string;
}> => {
  const config = getBillDeskConfig();

  const traceId = generateTraceId();
  const timestamp = getISTTimestamp();

  // Build order request payload
  const orderPayload = {
    mercid: config.merchantId,
    orderid: request.orderId,
    amount: request.amount.toFixed(2),
    order_date: new Date().toISOString(),
    currency: request.currency || '356', // 356 = INR
    ru: config.returnUrl,
    additional_info: {
      additional_info1: request.customerName,
      additional_info2: request.customerEmail,
      additional_info3: request.customerPhone || '',
      additional_info4: request.additionalInfo?.donationType || 'general',
      additional_info5: request.additionalInfo?.donationId || '',
      additional_info6: '',
      additional_info7: '',
    },
    itemcode: 'DIRECT',
    device: {
      init_channel: 'internet',
      ip: '127.0.0.1',
      user_agent: 'Mozilla/5.0',
      accept_header: 'text/html',
    },
  };

  try {
    // Create JWS token for the request
    const jwsToken = await createJWS(orderPayload, config.privateKey, config.clientId);

    // Make API call to BillDesk
    const response = await fetch(config.createOrderUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jose',
        'Accept': 'application/jose',
        'BD-Traceid': traceId,
        'BD-Timestamp': timestamp,
      },
      body: jwsToken,
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error('BillDesk Create Order failed:', response.status, responseText);
      return {
        success: false,
        error: `API error: ${response.status}`,
      };
    }

    // Verify and decode JWS response
    const { payload, verified } = await verifyJWS(responseText, config.publicKey);

    if (!verified || !payload) {
      return {
        success: false,
        error: 'Response verification failed',
      };
    }

    // Check for error in response
    if (payload.status === 'FAILED' || payload.objectid === 'error') {
      return {
        success: false,
        error: payload.message || payload.error_description || 'Order creation failed',
      };
    }

    return {
      success: true,
      data: payload as BillDeskOrderResponse,
    };
  } catch (error) {
    console.error('Create order error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Retrieve Transaction API - Step 7 of BillDesk V2
 */
export const retrieveTransaction = async (orderId: string, bdOrderId?: string): Promise<{
  success: boolean;
  data?: BillDeskTransactionResponse;
  error?: string;
}> => {
  const config = getBillDeskConfig();

  const traceId = generateTraceId();
  const timestamp = getISTTimestamp();

  const retrievePayload = {
    mercid: config.merchantId,
    orderid: orderId,
    ...(bdOrderId && { bdorderid: bdOrderId }),
    refund_details: 'true',  // Always check refund status
  };

  try {
    const jwsToken = await createJWS(retrievePayload, config.privateKey, config.clientId);

    const response = await fetch(config.retrieveTransactionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jose',
        'Accept': 'application/jose',
        'BD-Traceid': traceId,
        'BD-Timestamp': timestamp,
      },
      body: jwsToken,
    });

    const responseText = await response.text();

    if (!response.ok) {
      return {
        success: false,
        error: `API error: ${response.status}`,
      };
    }

    const { payload, verified } = await verifyJWS(responseText, config.publicKey);

    if (!verified || !payload) {
      return {
        success: false,
        error: 'Response verification failed',
      };
    }

    return {
      success: true,
      data: payload as BillDeskTransactionResponse,
    };
  } catch (error) {
    console.error('Retrieve transaction error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Parse and verify callback/webhook response
 */
export const parseCallbackResponse = async (responseToken: string): Promise<{
  isValid: boolean;
  response: BillDeskTransactionResponse | null;
  checksumVerified: boolean;
  error?: string;
}> => {
  const config = getBillDeskConfig();

  try {
    const { payload, verified } = await verifyJWS(responseToken, config.publicKey);

    if (!verified || !payload) {
      return {
        isValid: false,
        response: null,
        checksumVerified: false,
        error: 'JWS verification failed',
      };
    }

    return {
      isValid: true,
      response: payload as BillDeskTransactionResponse,
      checksumVerified: verified,
    };
  } catch (error) {
    console.error('Parse callback error:', error);
    return {
      isValid: false,
      response: null,
      checksumVerified: false,
      error: error instanceof Error ? error.message : 'Parse error',
    };
  }
};

/**
 * Check if payment was successful
 */
export const isPaymentSuccessful = (authStatus: string): boolean => {
  return authStatus === AUTH_STATUS.SUCCESS;
};

/**
 * Check if payment is pending
 */
export const isPaymentPending = (authStatus: string): boolean => {
  return authStatus === AUTH_STATUS.PENDING;
};

/**
 * Check if payment failed
 */
export const isPaymentFailed = (authStatus: string): boolean => {
  return authStatus === AUTH_STATUS.FAILURE;
};

/**
 * Get human-readable status message
 */
export const getPaymentStatusMessage = (authStatus: string, errorDesc?: string): string => {
  const statusMap: Record<string, string> = {
    [AUTH_STATUS.SUCCESS]: 'Payment successful',
    [AUTH_STATUS.FAILURE]: errorDesc || 'Payment failed',
    [AUTH_STATUS.PENDING]: 'Payment is being processed. Please check back after some time.',
    [AUTH_STATUS.CANCELLED]: 'Payment cancelled by user',
  };

  return statusMap[authStatus] || `Payment status: ${authStatus}`;
};

/**
 * Check if response is terminal state cancellation
 * User clicked cancel (X) button on payment page
 */
export const isTerminalCancellation = (body: any): boolean => {
  // terminal_state=111&orderid=ORDERID format
  return body.terminal_state === '111' || body.terminal_state === 111;
};

/**
 * Build payment page redirect data
 */
export const buildPaymentPageData = (orderResponse: BillDeskOrderResponse) => {
  const config = getBillDeskConfig();

  return {
    url: config.paymentPageUrl,
    bdorderid: orderResponse.bdorderid,
    merchantid: config.merchantId,
    rdata: orderResponse.rdata,
  };
};
