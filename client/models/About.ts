import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAbout extends Document {
  heroTitle: string;
  heroSubtitle: string;
  
  storyTitle: string;
  storyDescription: string; 
  storyImage: string;
  
  mission: { title: string; description: string };
  vision: { title: string; description: string };
  motto: { title: string; description: string };
  belief: { title: string; description: string };
  
  founderMessage?: string;
  timeline?: Array<{
    year: number;
    title: string;
    description: string;
  }>;

  createdAt: Date;
  updatedAt: Date;
}

const AboutSchema = new Schema<IAbout>({
  heroTitle: { type: String, default: 'About Us' },
  heroSubtitle: { type: String, default: 'For the people, by the people...' },
  
  storyTitle: { type: String, default: 'Our Story' },
  storyDescription: { type: String, required: true },
  storyImage: { type: String, required: true },
  
  mission: {
    title: { type: String, default: 'Our Mission' },
    description: { type: String, default: '' }
  },
  vision: {
    title: { type: String, default: 'Our Vision' },
    description: { type: String, default: '' }
  },
  motto: {
    title: { type: String, default: 'Our Motto' },
    description: { type: String, default: '' }
  },
  belief: {
    title: { type: String, default: 'Our Belief' },
    description: { type: String, default: '' }
  },
  
  founderMessage: { type: String },
  timeline: [{
    year: Number,
    title: String,
    description: String
  }]
}, { timestamps: true });

const About: Model<IAbout> = mongoose.models.About || mongoose.model<IAbout>('About', AboutSchema);

export default About;
