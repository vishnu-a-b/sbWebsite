import { Schema, model, Document } from 'mongoose';

export interface IVolunteerDocument extends Document {
  name: string;
  email: string;
  phone: string;
  role: string;
  message?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

const VolunteerSchema = new Schema<IVolunteerDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, default: 'General' },
  message: { type: String },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
}, { timestamps: true });

export default model<IVolunteerDocument>('Volunteer', VolunteerSchema);
