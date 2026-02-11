import { Schema, model, Document } from 'mongoose';

export interface IGalleryDocument extends Document {
  imageUrl: string;
  altText: string;
  category: string;
  priority: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const GallerySchema = new Schema<IGalleryDocument>({
  imageUrl: { type: String, required: true },
  altText: { type: String, required: true },
  category: { type: String, default: 'General' },
  priority: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default model<IGalleryDocument>('Gallery', GallerySchema);
