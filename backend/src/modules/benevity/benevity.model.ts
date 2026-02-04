import { Schema, model, Document } from 'mongoose';
import { IBannerDocument } from '../banner/banner.model.js';
import { IFeaturedProjectDocument } from '../featured-project/featured-project.model.js';

// BENEVITY PAGE HERO CONTENT
export interface IBenevityPageDocument extends Document {
  // Hero Section
  badge: string;
  title: string;
  highlightText: string;
  description: string;
  backgroundImage: string;
  // Stats
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  // CTA
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  // Card Content
  cardTitle: string;
  cardSubtitle: string;
  cardFeature1: string;
  cardFeature2: string;
  cardFeature3: string;
  cardFeature4: string;
  createdAt: Date;
  updatedAt: Date;
}

const BenevityPageSchema = new Schema<IBenevityPageDocument>({
  badge: { type: String, default: 'Official Benevity Partner' },
  title: { type: String, default: 'Double Your Impact with' },
  highlightText: { type: String, default: 'Corporate Giving' },
  description: { type: String, default: 'Join thousands of corporate employees making a difference. Your donation through Benevity can be matched by your employer, doubling the lives you save.' },
  backgroundImage: { type: String, default: '' },
  stat1Value: { type: String, default: '2x' },
  stat1Label: { type: String, default: 'Matching Impact' },
  stat2Value: { type: String, default: '500+' },
  stat2Label: { type: String, default: 'Partner Companies' },
  stat3Value: { type: String, default: '100%' },
  stat3Label: { type: String, default: 'Tax Deductible' },
  ctaText: { type: String, default: 'Donate via Benevity' },
  ctaLink: { type: String, default: 'https://causes.benevity.org/' },
  secondaryCtaText: { type: String, default: 'Learn How It Works' },
  secondaryCtaLink: { type: String, default: '#how-it-works' },
  cardTitle: { type: String, default: 'Benevity Platform' },
  cardSubtitle: { type: String, default: 'Workplace Giving Made Easy' },
  cardFeature1: { type: String, default: 'Automatic payroll deductions' },
  cardFeature2: { type: String, default: 'Employer donation matching' },
  cardFeature3: { type: String, default: 'Instant tax receipts' },
  cardFeature4: { type: String, default: 'Track your impact' },
}, { timestamps: true });

export const BenevityPage = model<IBenevityPageDocument>('BenevityPage', BenevityPageSchema, 'benevity-page');

// Re-use interfaces if possible, or define new ones if they diverge.
// For now, they are identical in structure to their main counterparts.

// BENEVITY BANNER
const BenevityBannerSchema = new Schema<IBannerDocument>({
  title: { type: String, required: true },
  description: { type: String },
  subtitle: { type: String },
  mediaType: { type: String, enum: ['image', 'video'], default: 'image' },
  imageUrl: { type: String },
  videoUrl: { type: String },
  thumbnailUrl: { type: String },
  ctaText: { type: String },
  ctaLink: { type: String },
  location: { type: String, default: 'benevity' }, // Though redundant if using separate collection, good for consistency
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export const BenevityBanner = model<IBannerDocument>('BenevityBanner', BenevityBannerSchema, 'benevity-banners');

// BENEVITY PROJECT
const BenevityProjectSchema = new Schema<IFeaturedProjectDocument>({
  projectName: { type: String, required: true },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String, required: true },
  featuredImage: { type: String, required: true },
  gallery: [{ type: String }],
  priority: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  startDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  // These flags might not be needed for Benevity-specific projects, but keeping schema consistent allows potential reuse or migration
  showOnFirstFace: { type: Boolean, default: false },
  showOnSecondFace: { type: Boolean, default: false },
  showOnBenevity: { type: Boolean, default: true }, 
  link: { type: String },
}, { timestamps: true });

export const BenevityProject = model<IFeaturedProjectDocument>('BenevityProject', BenevityProjectSchema, 'benevity-projects');
