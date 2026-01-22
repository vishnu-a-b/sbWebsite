import mongoose, { Schema, model, models } from 'mongoose';

const PaymentSchema = new Schema({
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

const Payment = models.Payment || model('Payment', PaymentSchema);

export default Payment;
