import { Schema, model, Document, Types } from 'mongoose';

export enum FellowshipStatus {
  ACTIVE = 'active',
  PAUSED = 'paused',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed'
}

export interface IFellowshipDocument extends Document {
  // Subscriber Information
  subscriberName: string;
  email: string;
  countryCode?: string;
  phone: string;
  address?: string;
  panNumber?: string;

  // Subscription Details
  monthlyAmount: number;
  currency: string;
  status: FellowshipStatus;
  startDate: Date;
  endDate?: Date;

  // Payment Tracking
  lastPaymentDate?: Date;
  nextPaymentDue?: Date;
  totalPaid: number;
  totalPayments: number;
  donations: Types.ObjectId[]; // Reference to Donation documents

  // Verification
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  verificationToken?: string;
  verificationTokenExpiry?: Date;

  // Metadata
  pausedAt?: Date;
  pausedReason?: string;
  cancelledAt?: Date;
  cancelledReason?: string;
  notes?: string;

  createdAt: Date;
  updatedAt: Date;
}

const FellowshipSchema = new Schema<IFellowshipDocument>({
  // Subscriber Information
  subscriberName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  countryCode: {
    type: String,
    trim: true,
    default: '+91'
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  panNumber: {
    type: String,
    uppercase: true,
    trim: true
  },

  // Subscription Details
  monthlyAmount: {
    type: Number,
    required: true,
    min: 1
  },
  currency: {
    type: String,
    default: 'INR',
    uppercase: true
  },
  status: {
    type: String,
    enum: Object.values(FellowshipStatus),
    default: FellowshipStatus.ACTIVE
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date
  },

  // Payment Tracking
  lastPaymentDate: {
    type: Date
  },
  nextPaymentDue: {
    type: Date
  },
  totalPaid: {
    type: Number,
    default: 0
  },
  totalPayments: {
    type: Number,
    default: 0
  },
  donations: [{
    type: Schema.Types.ObjectId,
    ref: 'Donation'
  }],

  // Verification
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  isPhoneVerified: {
    type: Boolean,
    default: false
  },
  verificationToken: {
    type: String
  },
  verificationTokenExpiry: {
    type: Date
  },

  // Metadata
  pausedAt: {
    type: Date
  },
  pausedReason: {
    type: String
  },
  cancelledAt: {
    type: Date
  },
  cancelledReason: {
    type: String
  },
  notes: {
    type: String,
    trim: true
  }
}, { timestamps: true });

// Index for faster queries
FellowshipSchema.index({ status: 1, nextPaymentDue: 1 });
FellowshipSchema.index({ createdAt: -1 });

// Calculate next payment due before saving
FellowshipSchema.pre('save', function(next) {
  if (this.isModified('lastPaymentDate') && this.lastPaymentDate) {
    // Set next payment due to first day of next month
    const nextDue = new Date(this.lastPaymentDate);
    nextDue.setMonth(nextDue.getMonth() + 1);
    nextDue.setDate(1);
    this.nextPaymentDue = nextDue;
  }
  next();
});

export default model<IFellowshipDocument>('Fellowship', FellowshipSchema);
