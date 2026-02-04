import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAbout extends Document {
  heroTitle: string;
  heroSubtitle: string;

  storyTitle: string;
  storyDescription: string;
  storyImage: string;

  // Home page about section
  homeTitle: string;
  homeBadge: string;
  homeIntro: string;
  homeDescription: string;
  homeImage: string;
  homeButtonText: string;
  homeButtonLink: string;

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
  storyDescription: { type: String, default: '' },
  storyImage: { type: String, default: '' },

  // Home page about section
  homeTitle: { type: String, default: 'The First Palliative Hospital in India' },
  homeBadge: { type: String, default: 'Established 1993' },
  homeIntro: { type: String, default: 'Shanthibhavan Palliative Hospital operates as a division of the Franciscan Sisters of St. Clare Charitable Trust.' },
  homeDescription: { type: String, default: 'We function as a no-bill hospital with 49 beds, providing comprehensive palliative care without bills and cash counters. Our aim is to improve the quality of life of people with life-limiting or disabling diseases.' },
  homeImage: { type: String, default: 'https://shanthibhavan.in/images/products/5b46fcb5b0482.jpeg' },
  homeButtonText: { type: String, default: 'Learn More About Us' },
  homeButtonLink: { type: String, default: '/about' },

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
}, { timestamps: true, collection: 'abouts' });

const About: Model<IAbout> = mongoose.models.About || mongoose.model<IAbout>('About', AboutSchema);

export default About;
