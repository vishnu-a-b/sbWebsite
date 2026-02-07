export interface BillDeskConfig {
  env: 'sandbox' | 'production';
  merchantId: string;
  clientId: string;
  publicKey: string;      // BillDesk's public key for encrypting requests
  privateKey: string;     // Your private key for signing requests
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
    : 'https://pguat.billdesk.io';

  const paymentPageBaseUrl = env === 'production'
    ? 'https://pay.billdesk.com'
    : 'https://uat1.billdesk.com';

  const config: BillDeskConfig = {
    env,
    merchantId: process.env.BILLDESK_MERCHANT_ID || '',
    clientId: process.env.BILLDESK_CLIENT_ID || '',
    publicKey: process.env.BILLDESK_PUBLIC_KEY || '',
    privateKey: process.env.BILLDESK_PRIVATE_KEY || '',
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
