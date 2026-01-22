import { Schema, model, Document } from 'mongoose';

export interface IServiceDocument extends Document {
  title: string;
  slug: string;
  description: string;
  icon: string;
  image?: string;
  color?: string;
  priority: number;
  isActive: boolean;
  startDate: Date;
  expiryDate?: Date;
  showOnFirstFace: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IServiceDocument>({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  image: { type: String },
  color: { type: String },
  priority: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  startDate: { type: Date, required: true },
  expiryDate: { type: Date },
  showOnFirstFace: { type: Boolean, default: false },
}, { timestamps: true });

export default model<IServiceDocument>('Service', ServiceSchema);
