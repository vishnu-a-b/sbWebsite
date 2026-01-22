import { Schema, model, Document } from 'mongoose';

export interface IBannerDocument extends Document {
  title: string;
  description?: string;
  subtitle?: string;
  mediaType: 'image' | 'video';
  imageUrl?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  location: 'home' | 'benevity';
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BannerSchema = new Schema<IBannerDocument>({
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
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default model<IBannerDocument>('Banner', BannerSchema);
