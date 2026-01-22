import { Schema, model, Document } from 'mongoose';

export interface INewsEventDocument extends Document {
  title: string;
  description: string;
  fullContent: string;
  eventDate: Date;
  images: string[];
  type: 'news' | 'event';
  priority: number;
  isActive: boolean;
  startDate: Date;
  expiryDate: Date;
  showOnFirstFace: boolean;
  isScheduled: boolean;
  scheduledPublishDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const NewsEventSchema = new Schema<INewsEventDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  fullContent: { type: String, required: true },
  eventDate: { type: Date, required: true },
  images: [{ type: String }],
  type: { type: String, enum: ['news', 'event'], required: true },
  priority: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  startDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  showOnFirstFace: { type: Boolean, default: false },
  isScheduled: { type: Boolean, default: false },
  scheduledPublishDate: { type: Date },
}, { timestamps: true });

export default model<INewsEventDocument>('NewsEvent', NewsEventSchema);
