import { Schema, model, Document } from 'mongoose';
import { IBannerDocument } from '../banner/banner.model.js';
import { IFeaturedProjectDocument } from '../featured-project/featured-project.model.js';

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
}, { timestamps: true });

export const BenevityProject = model<IFeaturedProjectDocument>('BenevityProject', BenevityProjectSchema, 'benevity-projects');
