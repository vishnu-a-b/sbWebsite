import { Schema, model, Document, Types } from 'mongoose';

export enum TransactionType {
  PAYMENT_INITIATED = 'payment_initiated',
  PAYMENT_RETURN = 'payment_return',
  PAYMENT_WEBHOOK = 'payment_webhook',
  STATUS_CHECK = 'status_check'
}

export interface ITransactionDocument extends Document {
  donationId: Types.ObjectId;
  transactionType: TransactionType;

  // Request Details
  requestPayload?: any;
  requestHeaders?: any;
  requestUrl?: string;

  // Response Details
  responsePayload?: any;
  responseHeaders?: any;
  responseStatus?: number;

  // BillDesk Specific
  bdOrderId?: string;
  bdTransactionId?: string;
  checksumSent?: string;
  checksumReceived?: string;
  checksumVerified?: boolean;

  // Status & Metadata
  success: boolean;
  errorMessage?: string;
  ipAddress?: string;

  createdAt: Date;
  updatedAt: Date;
}

const TransactionSchema = new Schema<ITransactionDocument>({
  donationId: {
    type: Schema.Types.ObjectId,
    ref: 'Donation',
    required: true,
    index: true
  },
  transactionType: {
    type: String,
    enum: Object.values(TransactionType),
    required: true
  },

  // Request Details
  requestPayload: {
    type: Schema.Types.Mixed
  },
  requestHeaders: {
    type: Schema.Types.Mixed
  },
  requestUrl: {
    type: String
  },

  // Response Details
  responsePayload: {
    type: Schema.Types.Mixed
  },
  responseHeaders: {
    type: Schema.Types.Mixed
  },
  responseStatus: {
    type: Number
  },

  // BillDesk Specific
  bdOrderId: {
    type: String,
    index: true
  },
  bdTransactionId: {
    type: String,
    index: true
  },
  checksumSent: {
    type: String
  },
  checksumReceived: {
    type: String
  },
  checksumVerified: {
    type: Boolean
  },

  // Status & Metadata
  success: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String
  },
  ipAddress: {
    type: String
  }
}, { timestamps: true });

// Index for faster queries
TransactionSchema.index({ createdAt: -1 });
TransactionSchema.index({ donationId: 1, createdAt: -1 });

export default model<ITransactionDocument>('Transaction', TransactionSchema);
