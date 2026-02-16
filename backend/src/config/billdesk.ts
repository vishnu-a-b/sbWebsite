export interface BillDeskConfig {
  env: 'sandbox' | 'production';
  merchantId: string;
  clientId: string;
  keyId: string;           // Key ID for JWS/JWE headers
  encryptionKey: string;   // Symmetric key for JWE encryption (A256GCM)
  signingKey: string;      // Symmetric key for JWS signing (HS256)
  returnUrl: string;
  webhookUrl: string;
  // V2 API endpoints
  createOrderUrl: string;
  paymentPageUrl: string;
  retrieveTransactionUrl: string;
}

export const getBillDeskConfig = (): BillDeskConfig => {
  const env = (process.env.BILLDESK_ENV || 'sandbox') as 'sandbox' | 'production';

  const baseUrl = env === 'production'
    ? 'https://api.billdesk.com'
    : 'https://uat1.billdesk.com/u2';

  const paymentPageBaseUrl = env === 'production'
    ? 'https://pay.billdesk.com'
    : 'https://uat1.billdesk.com';

  const config: BillDeskConfig = {
    env,
    merchantId: process.env.BILLDESK_MERCHANT_ID || '',
    clientId: process.env.BILLDESK_CLIENT_ID || '',
    keyId: process.env.BILLDESK_KEY_ID || '',
    encryptionKey: process.env.BILLDESK_ENCRYPTION_KEY || '',
    signingKey: process.env.BILLDESK_SIGNING_KEY || '',
    returnUrl: `${process.env.BACKEND_URL || 'http://localhost:5001'}/api/donation/callback/billdesk/return`,
    webhookUrl: `${process.env.BACKEND_URL || 'http://localhost:5001'}/api/donation/callback/billdesk/webhook`,
    // V2 API endpoints
    createOrderUrl: `${baseUrl}/payments/ve1_2/orders/create`,
    paymentPageUrl: `${paymentPageBaseUrl}/u2/web/v1_2/embeddedsdk`,
    retrieveTransactionUrl: `${baseUrl}/payments/ve1_2/transactions/get`,
  };

  // Validate configuration
  if (!config.merchantId || !config.clientId) {
    console.warn('⚠️  BillDesk configuration incomplete. Please set BILLDESK_* environment variables.');
  }

  return config;
};

export default getBillDeskConfig;
