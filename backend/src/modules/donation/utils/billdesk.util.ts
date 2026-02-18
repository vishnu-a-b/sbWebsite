import * as jose from 'jose';
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
  customerIp?: string;
  additionalInfo?: Record<string, string>;
}

export interface BillDeskOrderResponse {
  orderid: string;
  bdorderid: string;
  mercid: string;
  status: string;
  createdon: string;
  next_step: string;
  links: Array<{
    href: string;
    rel: string;
    method: string;
    parameters?: Record<string, string>;
  }>;
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
 * Create signed and encrypted request for BillDesk.
 * Flow: JSON payload → JWE encrypt (dir + A256GCM) → JWS sign (HS256)
 */
export const createSignedRequest = async (
  payload: object,
  signingKey: string,
  encryptionKey: string,
  clientId: string,
  signingKeyId: string,
  encryptionKeyId: string,
): Promise<string> => {
  const encSecret = new TextEncoder().encode(encryptionKey);
  const sigSecret = new TextEncoder().encode(signingKey);

  // Step 1: Encrypt payload with JWE (dir + A256GCM)
  const jwe = await new jose.CompactEncrypt(
    new TextEncoder().encode(JSON.stringify(payload))
  )
    .setProtectedHeader({
      alg: 'dir',
      enc: 'A256GCM',
      kid: encryptionKeyId,
      clientid: clientId,
    })
    .encrypt(encSecret);

  // Step 2: Sign the JWE token with JWS (HS256)
  const jws = await new jose.CompactSign(
    new TextEncoder().encode(jwe)
  )
    .setProtectedHeader({
      alg: 'HS256',
      kid: signingKeyId,
      clientid: clientId,
    })
    .sign(sigSecret);

  return jws;
};

/**
 * Create JWS-only signed request (no encryption).
 * Some BillDesk APIs may only need JWS signing.
 */
export const createJWS = async (
  payload: object,
  signingKey: string,
  clientId: string,
  signingKeyId: string,
): Promise<string> => {
  const secret = new TextEncoder().encode(signingKey);

  const jws = await new jose.CompactSign(
    new TextEncoder().encode(JSON.stringify(payload))
  )
    .setProtectedHeader({
      alg: 'HS256',
      kid: signingKeyId,
      clientid: clientId,
    })
    .sign(secret);

  return jws;
};

/**
 * Verify JWS response and decrypt JWE payload from BillDesk.
 * Flow: JWS verify → JWE decrypt → JSON payload
 */
export const verifyAndDecryptResponse = async (
  token: string,
  signingKey: string,
  encryptionKey: string,
): Promise<{ payload: any; verified: boolean }> => {
  try {
    const sigSecret = new TextEncoder().encode(signingKey);
    const encSecret = new TextEncoder().encode(encryptionKey);

    // Step 1: Verify JWS
    const { payload: jwsPayload } = await jose.compactVerify(token, sigSecret);
    const jweToken = new TextDecoder().decode(jwsPayload);

    // Step 2: Decrypt JWE
    const { plaintext } = await jose.compactDecrypt(jweToken, encSecret);
    const decodedPayload = JSON.parse(new TextDecoder().decode(plaintext));

    return { payload: decodedPayload, verified: true };
  } catch {
    // Response might be JWS-only (no JWE wrapping)
    try {
      const sigSecret = new TextEncoder().encode(signingKey);
      const { payload } = await jose.compactVerify(token, sigSecret);
      const decodedPayload = JSON.parse(new TextDecoder().decode(payload));
      return { payload: decodedPayload, verified: true };
    } catch (error) {
      console.error('Response verification failed:', error);
      return { payload: null, verified: false };
    }
  }
};

/**
 * Verify and decode JWS-only response from BillDesk
 */
export const verifyJWS = async (token: string, signingKey: string): Promise<{ payload: any; verified: boolean }> => {
  try {
    const secret = new TextEncoder().encode(signingKey);
    const { payload } = await jose.compactVerify(token, secret);
    const decodedPayload = JSON.parse(new TextDecoder().decode(payload));
    return { payload: decodedPayload, verified: true };
  } catch (error) {
    console.error('JWS verification failed:', error);
    return { payload: null, verified: false };
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
 * Get ISO 8601 date string with IST offset (+05:30)
 * Required format: 2024-01-15T15:30:00+05:30
 */
export const getISTOrderDate = (): string => {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(now.getTime() + istOffset);

  // Build ISO string without the trailing 'Z', truncate milliseconds, append IST offset
  const iso = istDate.toISOString(); // e.g. 2024-01-15T15:30:00.000Z
  return iso.slice(0, 19) + '+05:30';
};

/**
 * Create Order API - Step 2 of BillDesk V2
 */
export const createOrder = async (request: BillDeskOrderRequest): Promise<{
  success: boolean;
  data?: BillDeskOrderResponse;
  error?: string;
  encodedRequest?: string;
  encodedResponse?: string;
}> => {
  const config = getBillDeskConfig();

  const traceId = generateTraceId();

  // Build order request payload
  const orderPayload = {
    mercid: config.merchantId,
    orderid: request.orderId,
    amount: request.amount.toFixed(2),
    order_date: getISTOrderDate(),
    currency: request.currency || '356', // 356 = INR
    ru: config.returnUrl,
    additional_info: {
      additional_info1: request.customerName || 'NA',
      additional_info2: request.customerEmail || 'NA',
      additional_info3: request.customerPhone || 'NA',
      additional_info4: request.additionalInfo?.donationType || 'NA',
      additional_info5: request.additionalInfo?.donationId || 'NA',
      additional_info6: 'NA',
      additional_info7: 'NA',
    },
    itemcode: 'DIRECT',
    device: {
      init_channel: 'internet',
      ip: request.customerIp || '127.0.0.1',
      user_agent: 'Mozilla/5.0',
      accept_header: 'text/html',
    },
  };

  try {
    // Create signed & encrypted request (JSON → JWE → JWS)
    const requestToken = await createSignedRequest(
      orderPayload, config.signingKey, config.encryptionKey,
      config.clientId, config.keyId, config.keyId,
    );

    console.log('BillDesk Create Order request:', {
      url: config.createOrderUrl,
      traceId,
      orderid: orderPayload.orderid,
      amount: orderPayload.amount,
      order_date: orderPayload.order_date,
      ru: orderPayload.ru,
      mercid: orderPayload.mercid,
      customerIp: orderPayload.device.ip,
    });

    // Make API call to BillDesk
    const response = await fetch(config.createOrderUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jose',
        'Accept': 'application/jose',
        'BD-Traceid': traceId,
        'BD-Timestamp': Math.floor(Date.now() / 1000).toString(),
      },
      body: requestToken,
    });

    const responseText = await response.text();

    if (!response.ok) {
      // Error responses from BillDesk may be plain JSON (not JOSE-encrypted)
      let errorPayload: any = null;
      try {
        errorPayload = JSON.parse(responseText);
      } catch {
        // Not plain JSON — try JOSE decryption
        const { payload } = await verifyAndDecryptResponse(
          responseText, config.signingKey, config.encryptionKey,
        );
        errorPayload = payload;
      }
      const errorMsg = errorPayload?.message || errorPayload?.error_description || `API error: ${response.status}`;
      console.error('BillDesk Create Order failed response:', {
        status: response.status,
        error: errorMsg,
        payload: errorPayload,
        rawResponse: responseText.slice(0, 500),
      });
      return {
        success: false,
        error: errorMsg,
      };
    }

    // Success path — decrypt JOSE response
    const { payload, verified } = await verifyAndDecryptResponse(
      responseText, config.signingKey, config.encryptionKey,
    );

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

    console.log('BillDesk Create Order success response:', JSON.stringify({
      orderid: payload.orderid,
      bdorderid: payload.bdorderid,
      status: payload.status,
      next_step: payload.next_step,
      links: payload.links,
    }, null, 2));

    return {
      success: true,
      data: payload as BillDeskOrderResponse,
      encodedRequest: requestToken,
      encodedResponse: responseText,
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

  const retrievePayload = {
    mercid: config.merchantId,
    orderid: orderId,
    ...(bdOrderId && { bdorderid: bdOrderId }),
    refund_details: 'true',  // Always check refund status
  };

  try {
    const requestToken = await createSignedRequest(
      retrievePayload, config.signingKey, config.encryptionKey,
      config.clientId, config.keyId, config.keyId,
    );

    const response = await fetch(config.retrieveTransactionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jose',
        'Accept': 'application/jose',
        'BD-Traceid': traceId,
        'BD-Timestamp': Math.floor(Date.now() / 1000).toString(),
      },
      body: requestToken,
    });

    const responseText = await response.text();

    if (!response.ok) {
      return {
        success: false,
        error: `API error: ${response.status}`,
      };
    }

    const { payload, verified } = await verifyAndDecryptResponse(
      responseText, config.signingKey, config.encryptionKey,
    );

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
    const { payload, verified } = await verifyAndDecryptResponse(
      responseToken, config.signingKey, config.encryptionKey,
    );

    if (!verified || !payload) {
      return {
        isValid: false,
        response: null,
        checksumVerified: false,
        error: 'Response verification/decryption failed',
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
 * Build payment page redirect data from Create Order response links
 */
export const buildPaymentPageData = (orderResponse: BillDeskOrderResponse) => {
  const config = getBillDeskConfig();

  // Find the redirect link from the links array
  const redirectLink = orderResponse.links?.find(
    (l) => l.rel === 'redirect' || l.method === 'POST'
  );

  const url = redirectLink?.href || config.paymentPageUrl;
  const params = redirectLink?.parameters || {};
  const headers = (redirectLink as any)?.headers || {};

  return {
    url,
    bdorderid: params.bdorderid || orderResponse.bdorderid,
    merchantid: params.mercid || config.merchantId,
    rdata: params.rdata || '',
    authorization: headers.authorization || '',
  };
};
