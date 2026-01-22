import mongoose, { Schema, model, models, Document } from 'mongoose';

export interface IBanner extends Document {
  title: string;
  description?: string;
  subtitle?: string;
  mediaType: 'image' | 'video';
  imageUrl?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  location?: 'home' | 'benevity';
  priority: number;
  isActive: boolean;
  startDate: Date;
  expiryDate: Date;
  showOnFirstFace: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BannerSchema = new Schema<IBanner>({
  title: { type: String, required: true },
  description: { type: String },
  subtitle: { type: String },
  mediaType: { type: String, enum: ['image', 'video'], default: 'image' },
  imageUrl: { type: String },
  videoUrl: { type: String },
  thumbnailUrl: { type: String },
  ctaText: { type: String },
  ctaLink: { type: String },
  location: { type: String, enum: ['home', 'benevity'], default: 'home' },
  priority: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  startDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  showOnFirstFace: { type: Boolean, default: true },
}, { timestamps: true });

const Banner = models.Banner || model<IBanner>('Banner', BannerSchema);

export default Banner;
