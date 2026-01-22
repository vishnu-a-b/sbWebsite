import { Schema, model, Document } from 'mongoose';

export interface IContactDocument extends Document {
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContactDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  status: {
    type: String,
    enum: ['new', 'read', 'replied'],
    default: 'new'
  },
}, { timestamps: true });

export default model<IContactDocument>('Contact', ContactSchema);
