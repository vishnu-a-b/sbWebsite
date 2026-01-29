import crypto from 'crypto';
import { getBillDeskConfig } from '../../../config/billdesk.js';

export interface BillDeskPaymentRequest {
  orderId: string;
  amount: number;
  currency: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  additionalInfo?: string;
}

export interface BillDeskPaymentResponse {
  merchantId: string;
  orderId: string;
  transactionId: string;
  amount: string;
  authStatus: string;
  bankReferenceNumber?: string;
  additionalInfo1?: string;
  additionalInfo2?: string;
  checksum: string;
}

/**
 * Generate HMAC-SHA256 checksum for BillDesk request
 */
export const generateChecksum = (data: string, key: string): string => {
  const hmac = crypto.createHmac('sha256', key);
  hmac.update(data);
  return hmac.digest('hex').toUpperCase();
};

/**
 * Verify checksum from BillDesk response
 */
export const verifyChecksum = (data: string, receivedChecksum: string, key: string): boolean => {
  const calculatedChecksum = generateChecksum(data, key);
  return calculatedChecksum === receivedChecksum.toUpperCase();
};

/**
 * Build BillDesk payment request string (pipe-separated)
 * Format: MerchantID|OrderID|Amount|NA|NA|NA|NA|ReturnURL|Checksum
 */
export const buildPaymentRequest = (request: BillDeskPaymentRequest): { msg: string; checksum: string; url: string } => {
  const config = getBillDeskConfig();

  // Format amount to 2 decimal places
  const formattedAmount = request.amount.toFixed(2);

  // Build pipe-separated string (simplified format for sandbox)
  // Full format: MerchantID|OrderID|NA|Amount|NA|NA|NA|ReturnURL|ChecksumKey|AdditionalInfo1|AdditionalInfo2|AdditionalInfo3|AdditionalInfo4|AdditionalInfo5
  const msgParts = [
    config.merchantId,
    request.orderId,
    'NA', // Customer ID (optional)
    formattedAmount,
    'NA', // Product description
    'NA', // Date
    'NA', // Currency
    config.returnUrl,
    config.securityId
  ];

  // Add additional info if provided
  if (request.additionalInfo) {
    msgParts.push(request.additionalInfo);
  }

  const msg = msgParts.join('|');
  const checksum = generateChecksum(msg, config.checksumKey);

  return {
    msg,
    checksum,
    url: config.paymentUrl
  };
};

/**
 * Parse BillDesk response (pipe-separated format)
 */
export const parsePaymentResponse = (responseString: string): Partial<BillDeskPaymentResponse> | null => {
  try {
    const parts = responseString.split('|');

    if (parts.length < 8) {
      console.error('Invalid BillDesk response format');
      return null;
    }

    return {
      merchantId: parts[0],
      orderId: parts[1],
      transactionId: parts[2],
      amount: parts[3],
      authStatus: parts[4],
      bankReferenceNumber: parts[5] !== 'NA' ? parts[5] : undefined,
      additionalInfo1: parts[6] !== 'NA' ? parts[6] : undefined,
      additionalInfo2: parts[7] !== 'NA' ? parts[7] : undefined,
      checksum: parts[parts.length - 1] // Checksum is always last
    };
  } catch (error) {
    console.error('Error parsing BillDesk response:', error);
    return null;
  }
};

/**
 * Check if payment was successful based on auth status
 * BillDesk auth status codes:
 * 0300 - Success
 * 0399 - In process
 * 0400 - Failure
 * 0401 - Cancelled by user
 * etc.
 */
export const isPaymentSuccessful = (authStatus: string): boolean => {
  return authStatus === '0300';
};

/**
 * Get human-readable status message
 */
export const getPaymentStatusMessage = (authStatus: string): string => {
  const statusMap: { [key: string]: string } = {
    '0300': 'Payment successful',
    '0399': 'Payment in process',
    '0400': 'Payment failed',
    '0401': 'Payment cancelled by user',
    '0002': 'Invalid merchant ID',
    '0003': 'Invalid transaction amount',
    '0004': 'Invalid checksum',
    '0005': 'Invalid order ID'
  };

  return statusMap[authStatus] || `Payment status: ${authStatus}`;
};

/**
 * Validate BillDesk response and verify checksum
 */
export const validateAndVerifyResponse = (responseString: string): {
  isValid: boolean;
  response: Partial<BillDeskPaymentResponse> | null;
  checksumVerified: boolean;
  error?: string;
} => {
  const config = getBillDeskConfig();

  // Parse response
  const response = parsePaymentResponse(responseString);

  if (!response) {
    return {
      isValid: false,
      response: null,
      checksumVerified: false,
      error: 'Failed to parse response'
    };
  }

  // Extract checksum from response
  const receivedChecksum = response.checksum || '';

  // Remove checksum from response string for verification
  const parts = responseString.split('|');
  const dataWithoutChecksum = parts.slice(0, -1).join('|');

  // Verify checksum
  const checksumVerified = verifyChecksum(dataWithoutChecksum, receivedChecksum, config.checksumKey);

  if (!checksumVerified) {
    return {
      isValid: false,
      response,
      checksumVerified: false,
      error: 'Checksum verification failed'
    };
  }

  return {
    isValid: true,
    response,
    checksumVerified: true
  };
};

/**
 * Generate unique order ID
 * Format: DN-YYYYMMDDHHMMSS-RANDOM
 */
export const generateOrderId = (): string => {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[-:T.]/g, '').slice(0, 14);
  const random = Math.floor(1000 + Math.random() * 9000);
  return `DN-${timestamp}-${random}`;
};
