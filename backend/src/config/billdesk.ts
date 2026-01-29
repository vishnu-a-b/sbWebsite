export interface BillDeskConfig {
  env: 'sandbox' | 'production';
  merchantId: string;
  securityId: string;
  checksumKey: string;
  paymentUrl: string;
  returnUrl: string;
  webhookUrl: string;
}

export const getBillDeskConfig = (): BillDeskConfig => {
  const env = (process.env.BILLDESK_ENV || 'sandbox') as 'sandbox' | 'production';

  const config: BillDeskConfig = {
    env,
    merchantId: process.env.BILLDESK_MERCHANT_ID || '',
    securityId: process.env.BILLDESK_SECURITY_ID || '',
    checksumKey: process.env.BILLDESK_CHECKSUM_KEY || '',
    paymentUrl: process.env.BILLDESK_PAYMENT_URL || 'https://uat.billdesk.com/pgidsk/PGIMerchantPayment',
    returnUrl: `${process.env.BACKEND_URL || 'http://localhost:5001'}/api/donation/callback/billdesk/return`,
    webhookUrl: `${process.env.BACKEND_URL || 'http://localhost:5001'}/api/donation/callback/billdesk/webhook`
  };

  // Validate configuration
  if (!config.merchantId || !config.securityId || !config.checksumKey) {
    console.warn('⚠️  BillDesk configuration incomplete. Please set BILLDESK_* environment variables.');
  }

  return config;
};

export default getBillDeskConfig;
