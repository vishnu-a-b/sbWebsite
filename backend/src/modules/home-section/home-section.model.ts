import { Schema, model, Document } from 'mongoose';

export interface IHomeSectionDocument extends Document {
  sectionName: string;
  sectionType: 'hero' | 'about' | 'services' | 'projects' | 'awards' | 'news' | 'donation' | 'cta';
  title: string;
  subtitle?: string;
  content?: string;
  ctaText?: string;
  ctaLink?: string;
  priority: number;
  isActive: boolean;
  isFirstFace: boolean;
  startDate: Date;
  expiryDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const HomeSectionSchema = new Schema<IHomeSectionDocument>({
  sectionName: { type: String, required: true, unique: true },
  sectionType: {
    type: String,
    enum: ['hero', 'about', 'services', 'projects', 'awards', 'news', 'donation', 'cta'],
    required: true,
  },
  title: { type: String, required: true },
  subtitle: { type: String },
  content: { type: String },
  ctaText: { type: String },
  ctaLink: { type: String },
  priority: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  isFirstFace: { type: Boolean, default: false },
  startDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
}, { timestamps: true });

export default model<IHomeSectionDocument>('HomeSection', HomeSectionSchema);
