import mongoose, { Document, Schema } from 'mongoose';

export interface IFeaturedProject extends Document {
  projectName: string;
  shortDescription: string;
  fullDescription: string;
  featuredImage: string;
  gallery: string[];
  priority: number;
  isActive: boolean;
  startDate: Date;
  expiryDate: Date;
  showOnFirstFace: boolean;
  showOnSecondFace: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const FeaturedProjectSchema = new Schema<IFeaturedProject>(
  {
    projectName: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    featuredImage: { type: String, required: true },
    gallery: [{ type: String }],
    priority: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    startDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    showOnFirstFace: { type: Boolean, default: false },
    showOnSecondFace: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.FeaturedProject || mongoose.model<IFeaturedProject>('FeaturedProject', FeaturedProjectSchema);
