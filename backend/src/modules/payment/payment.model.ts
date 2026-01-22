import { Schema, model, Document } from 'mongoose';

export interface IPaymentDocument extends Document {
  donorName: string;
  email: string;
  phone?: string;
  amount: number;
  currency: string;
  paymentMethod: 'card' | 'upi' | 'netbanking' | 'bank_transfer' | 'cash' | 'other';
  transactionId?: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  purpose: 'general' | 'medical' | 'dialysis' | 'infrastructure' | 'other';
  notes?: string;
  receiptUrl?: string;
  benevityDonation: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema = new Schema<IPaymentDocument>({
  donorName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  paymentMethod: { type: String, enum: ['card', 'upi', 'netbanking', 'bank_transfer', 'cash', 'other'], required: true },
  transactionId: { type: String, unique: true, sparse: true },
  status: { type: String, enum: ['pending', 'completed', 'failed', 'refunded'], default: 'pending' },
  purpose: { type: String, enum: ['general', 'medical', 'dialysis', 'infrastructure', 'other'], default: 'general' },
  notes: { type: String },
  receiptUrl: { type: String },
  benevityDonation: { type: Boolean, default: false },
}, { timestamps: true });

export default model<IPaymentDocument>('Payment', PaymentSchema);
