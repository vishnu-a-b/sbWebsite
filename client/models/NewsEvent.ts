import mongoose, { Document, Schema } from 'mongoose';

export interface INewsEvent extends Document {
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

const NewsEventSchema = new Schema<INewsEvent>(
  {
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
  },
  { timestamps: true }
);

export default mongoose.models.NewsEvent || mongoose.model<INewsEvent>('NewsEvent', NewsEventSchema);
