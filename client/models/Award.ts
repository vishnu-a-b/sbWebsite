import mongoose, { Document, Schema } from 'mongoose';

export interface IAward extends Document {
  title: string;
  awardingAuthority: string;
  year: number;
  description: string;
  image: string;
  priority: number;
  isActive: boolean;
  startDate: Date;
  expiryDate: Date;
  showOnFirstFace: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const AwardSchema = new Schema<IAward>(
  {
    title: { type: String, required: true },
    awardingAuthority: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    priority: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    startDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    showOnFirstFace: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Award || mongoose.model<IAward>('Award', AwardSchema);
