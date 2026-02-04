import { Schema, model, Document, Types } from 'mongoose';

export enum CampaignStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  PAUSED = 'paused',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export interface ICampaignDocument extends Document {
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  image?: string;
  goalAmount: number;
  raisedAmount: number;
  donorCount: number;
  currency: string;
  status: CampaignStatus;
  startDate: Date;
  endDate?: Date;
  isFeatured: boolean;
  createdBy: Types.ObjectId;
  donations: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const CampaignSchema = new Schema<ICampaignDocument>({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    maxlength: 200
  },
  image: {
    type: String
  },
  goalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  raisedAmount: {
    type: Number,
    default: 0,
    min: 0
  },
  donorCount: {
    type: Number,
    default: 0,
    min: 0
  },
  currency: {
    type: String,
    default: 'INR'
  },
  status: {
    type: String,
    enum: Object.values(CampaignStatus),
    default: CampaignStatus.DRAFT
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'Admin',
    required: true
  },
  donations: [{
    type: Schema.Types.ObjectId,
    ref: 'Donation'
  }]
}, { timestamps: true });

// Indexes
CampaignSchema.index({ status: 1 });
CampaignSchema.index({ slug: 1 });
CampaignSchema.index({ isFeatured: 1, status: 1 });

export default model<ICampaignDocument>('Campaign', CampaignSchema);
