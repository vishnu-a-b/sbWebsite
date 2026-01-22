import mongoose, { Document, Schema } from 'mongoose';

export interface ITeamMember extends Document {
  name: string;
  role: string;
  designation: string;
  bio: string;
  image: string;
  specialization?: string;
  experience?: number;
  priority: number;
  isActive: boolean;
  startDate: Date;
  expiryDate: Date;
  showOnAboutPage: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TeamMemberSchema = new Schema<ITeamMember>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    designation: { type: String, required: true },
    bio: { type: String, required: true },
    image: { type: String, required: true },
    specialization: { type: String },
    experience: { type: Number },
    priority: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    startDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    showOnAboutPage: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.TeamMember || mongoose.model<ITeamMember>('TeamMember', TeamMemberSchema);
