import { Schema, model, Document } from 'mongoose';

export interface IAboutImageDocument extends Document {
  imageUrl: string;
  altText: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const AboutImageSchema = new Schema<IAboutImageDocument>({
  imageUrl: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: 'Shanthibhavan Hospital',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

export default model<IAboutImageDocument>('AboutImage', AboutImageSchema);
