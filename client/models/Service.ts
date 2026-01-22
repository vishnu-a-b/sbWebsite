import mongoose, { Schema, model, models, Document } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  icon: string;
  color?: string;
  priority: number;
  isActive: boolean;
  startDate: Date;
  expiryDate: Date;
  showOnFirstFace: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String },
  priority: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  startDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  showOnFirstFace: { type: Boolean, default: false },
}, { timestamps: true });

const Service = models.Service || model<IService>('Service', ServiceSchema);

export default Service;
