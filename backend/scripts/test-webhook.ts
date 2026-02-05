import crypto from 'crypto';
import fetch from 'node-fetch';

// Configuration - Update these with your BillDesk UAT credentials
const CHECKSUM_KEY = process.env.BILLDESK_CHECKSUM_KEY || 'your-checksum-key';
const MERCHANT_ID = process.env.BILLDESK_MERCHANT_ID || 'your-merchant-id';
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5002';

// Generate HMAC-SHA256 checksum
function generateChecksum(data: string, key: string): string {
  const hmac = crypto.createHmac('sha256', key);
  hmac.update(data);
  return hmac.digest('hex').toUpperCase();
}

// Simulate webhook for a specific order
async function simulateWebhook(
  orderId: string,
  authStatus: '0300' | '0399' | '0002' = '0300', // 0300=Success, 0399=Failed, 0002=Pending
  amount: string = '100.00'
) {
  const transactionId = `TXN${Date.now()}`;
  const bankRefNum = `BANK${Date.now()}`;

  // Build response string (pipe-separated)
  // Format: MerchantID|OrderID|TransactionID|Amount|AuthStatus|BankRefNum|NA|NA
  const msgParts = [
    MERCHANT_ID,
    orderId,
    transactionId,
    amount,
    authStatus,
    bankRefNum,
    'NA',
    'NA'
  ];

  const dataWithoutChecksum = msgParts.join('|');
  const checksum = generateChecksum(dataWithoutChecksum, CHECKSUM_KEY);
  const fullMsg = `${dataWithoutChecksum}|${checksum}`;

  console.log('\n=== Simulating BillDesk Webhook ===');
  console.log('Order ID:', orderId);
  console.log('Auth Status:', authStatus, authStatus === '0300' ? '(Success)' : authStatus === '0399' ? '(Failed)' : '(Pending)');
  console.log('Transaction ID:', transactionId);
  console.log('Amount:', amount);
  console.log('Full Message:', fullMsg);
  console.log('Checksum:', checksum);
  console.log('');

  try {
    const response = await fetch(`${BACKEND_URL}/api/donation/callback/billdesk/webhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `msg=${encodeURIComponent(fullMsg)}`
    });

    const result = await response.json();
    console.log('Response Status:', response.status);
    console.log('Response Body:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
}

// Get order ID from command line argument
const orderId = process.argv[2];
const authStatus = (process.argv[3] as '0300' | '0399' | '0002') || '0300';
const amount = process.argv[4] || '100.00';

if (!orderId) {
  console.log(`
Usage: npx ts-node scripts/test-webhook.ts <orderId> [authStatus] [amount]

Arguments:
  orderId     - The order ID from initiate donation (e.g., DN-20260204123456-1234)
  authStatus  - Payment status code (default: 0300)
                0300 = Success
                0399 = Failed
                0002 = Pending
  amount      - Transaction amount (default: 100.00)

Examples:
  npx ts-node scripts/test-webhook.ts DN-20260204123456-1234
  npx ts-node scripts/test-webhook.ts DN-20260204123456-1234 0300 500.00
  npx ts-node scripts/test-webhook.ts DN-20260204123456-1234 0399

Environment Variables:
  BILLDESK_CHECKSUM_KEY  - Your BillDesk checksum key
  BILLDESK_MERCHANT_ID   - Your BillDesk merchant ID
  BACKEND_URL            - Backend URL (default: http://localhost:5002)
`);
  process.exit(1);
}

simulateWebhook(orderId, authStatus, amount);
