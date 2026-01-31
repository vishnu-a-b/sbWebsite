import { Schema, model, Document, Types } from 'mongoose';

export enum DonationType {
  GENERAL = 'general',
  FELLOWSHIP = 'fellowship',
  CAMPAIGN = 'campaign'
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED'
}

export enum ApprovalStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

export interface IDonationDocument extends Document {
  // Donor Information
  donorName: string;
  email: string;
  phone?: string;
  countryCode?: string;
  panNumber?: string;
  address?: string;

  // Donation Details
  amount: number;
  currency: string;
  donationType: DonationType;
  notes?: string;

  // Payment Gateway Fields (BillDesk)
  paymentStatus: PaymentStatus;
  transactionId?: string; // BillDesk transaction ID
  gatewayOrderId?: string; // Our generated order ID
  bankReferenceNumber?: string;
  paymentMethod?: string; // card, upi, netbanking, etc.

  // BillDesk Response Data
  authStatus?: string; // BillDesk auth status code
  gatewayResponse?: string; // Full response from BillDesk
  checksumVerified?: boolean;

  // Offline Payment Workflow
  isOffline: boolean;
  approvalStatus?: ApprovalStatus;
  addedBy?: Types.ObjectId; // Admin who added offline payment
  approvedBy?: Types.ObjectId; // Admin who approved/rejected
  approvalDate?: Date;
  rejectionReason?: string;
  offlinePaymentMethod?: string; // cash, cheque, bank_transfer

  // Receipt
  receiptNumber?: string;
  receiptUrl?: string;
  receiptGenerated: boolean;

  // Fellowship Link
  fellowshipId?: Types.ObjectId;

  // Campaign Link
  campaignId?: Types.ObjectId;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

const DonationSchema = new Schema<IDonationDocument>({
  // Donor Information
  donorName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  countryCode: {
    type: String,
    trim: true,
    default: '+91'
  },
  panNumber: {
    type: String,
    uppercase: true,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },

  // Donation Details
  amount: {
    type: Number,
    required: true,
    min: 1
  },
  currency: {
    type: String,
    default: 'INR',
    uppercase: true
  },
  donationType: {
    type: String,
    enum: Object.values(DonationType),
    required: true,
    default: DonationType.GENERAL
  },
  notes: {
    type: String,
    trim: true
  },

  // Payment Gateway Fields
  paymentStatus: {
    type: String,
    enum: Object.values(PaymentStatus),
    default: PaymentStatus.PENDING
  },
  transactionId: {
    type: String,
    sparse: true,
    index: true
  },
  gatewayOrderId: {
    type: String,
    unique: true,
    sparse: true,
    index: true
  },
  bankReferenceNumber: {
    type: String
  },
  paymentMethod: {
    type: String
  },

  // BillDesk Response Data
  authStatus: {
    type: String
  },
  gatewayResponse: {
    type: String
  },
  checksumVerified: {
    type: Boolean
  },

  // Offline Payment Workflow
  isOffline: {
    type: Boolean,
    default: false
  },
  approvalStatus: {
    type: String,
    enum: Object.values(ApprovalStatus)
  },
  addedBy: {
    type: Schema.Types.ObjectId,
    ref: 'Admin'
  },
  approvedBy: {
    type: Schema.Types.ObjectId,
    ref: 'Admin'
  },
  approvalDate: {
    type: Date
  },
  rejectionReason: {
    type: String
  },
  offlinePaymentMethod: {
    type: String
  },

  // Receipt
  receiptNumber: {
    type: String,
    unique: true,
    sparse: true
  },
  receiptUrl: {
    type: String
  },
  receiptGenerated: {
    type: Boolean,
    default: false
  },

  // Fellowship Link
  fellowshipId: {
    type: Schema.Types.ObjectId,
    ref: 'Fellowship'
  },

  // Campaign Link
  campaignId: {
    type: Schema.Types.ObjectId,
    ref: 'Campaign'
  }
}, { timestamps: true });

// Index for faster queries
DonationSchema.index({ createdAt: -1 });
DonationSchema.index({ paymentStatus: 1, createdAt: -1 });
DonationSchema.index({ isOffline: 1, approvalStatus: 1 });
DonationSchema.index({ email: 1 });

// Generate receipt number before saving successful donations
DonationSchema.pre('save', async function(next) {
  if (this.isModified('paymentStatus') &&
      this.paymentStatus === PaymentStatus.SUCCESS &&
      !this.receiptNumber) {
    // Generate receipt number: DN-YYYYMMDD-XXXXX
    const date = new Date();
    const dateStr = date.toISOString().split('T')[0].replace(/-/g, '');
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    this.receiptNumber = `DN-${dateStr}-${randomNum}`;
  }
  next();
});

export default model<IDonationDocument>('Donation', DonationSchema);
