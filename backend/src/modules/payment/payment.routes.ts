import express, { Request, Response, Router } from 'express';
import Payment, { IPaymentDocument } from './payment.model.js';

const router: Router = express.Router();

interface PaymentRequestBody {
  donorName?: string;
  email?: string;
  phone?: string;
  amount?: number;
  currency?: string;
  paymentMethod?: 'card' | 'upi' | 'netbanking' | 'bank_transfer' | 'cash' | 'other';
  transactionId?: string;
  status?: 'pending' | 'completed' | 'failed' | 'refunded';
  purpose?: 'general' | 'medical' | 'dialysis' | 'infrastructure' | 'other';
  notes?: string;
  receiptUrl?: string;
  benevityDonation?: boolean;
}

// GET all payments
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const payments: IPaymentDocument[] = await Payment.find().sort({ createdAt: -1 });
    res.json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch payments' });
  }
});

// CREATE new payment
router.post('/', async (req: Request<{}, {}, PaymentRequestBody>, res: Response): Promise<void> => {
  try {
    const paymentData: PaymentRequestBody = req.body;
    const newPayment: IPaymentDocument = await Payment.create(paymentData);
    res.status(201).json({ success: true, payment: newPayment });
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ success: false, error: 'Failed to create payment' });
  }
});

// GET payment by ID
router.get('/:id', async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const payment: IPaymentDocument | null = await Payment.findById(id);

    if (!payment) {
      res.status(404).json({ success: false, error: 'Payment not found' });
      return;
    }

    res.json({ success: true, payment });
  } catch (error) {
    console.error('Error fetching payment:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch payment' });
  }
});

export default router;
