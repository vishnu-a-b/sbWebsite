import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IServicesPage extends Document {
  heroTitle: string;
  heroSubtitle: string;
  
  helperTitle: string;
  helperDescription: string;
  
  ctaButtonText: string;
  ctaLink: string;
  ctaTitle?: string;
  ctaDescription?: string;

  metadata: {
    seoTitle: string;
    seoDescription: string;
  };

  createdAt: Date;
  updatedAt: Date;
}

const ServicesPageSchema = new Schema<IServicesPage>({
  heroTitle: { type: String, default: 'Our Services' },
  heroSubtitle: { type: String, default: '' },
  
  helperTitle: { type: String, default: 'No Barriers to Care' },
  helperDescription: { type: String, default: '' },
  
  ctaButtonText: { type: String, default: 'Contact Us' },
  ctaLink: { type: String, default: '/contact' },
  ctaTitle: { type: String },
  ctaDescription: { type: String },

  metadata: {
    seoTitle: { type: String, default: 'Services' },
    seoDescription: { type: String, default: '' }
  }
}, { timestamps: true });

const ServicesPage: Model<IServicesPage> = mongoose.models.ServicesPage || mongoose.model<IServicesPage>('ServicesPage', ServicesPageSchema);

export default ServicesPage;
