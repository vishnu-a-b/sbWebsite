import { Schema, model, Document } from 'mongoose';

export interface IServicesPageDocument extends Document {
  heroTitle: string;
  heroSubtitle: string;
  
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaLink: string;
  
  helperTitle: string; // "No Barriers to Care"
  helperDescription: string;
  
  metadata: {
    seoTitle: string;
    seoDescription: string;
  };
}

const ServicesPageSchema = new Schema<IServicesPageDocument>({
  heroTitle: { type: String, default: 'Our Services' },
  heroSubtitle: { type: String, default: '"For the people, by the people." All our services are provided completely free of charge, with no bills and no counters.' },
  
  // The bottom CTA section
  helperTitle: { type: String, default: 'No Barriers to Care' },
  helperDescription: { type: String, default: 'There are no barriers of religion, caste, or creed. Everyone is equal here. If you need relief from pain or support during terminal illness, our doors are always open.' },
  
  ctaButtonText: { type: String, default: 'Contact Us' },
  ctaLink: { type: String, default: '/contact' },
  ctaTitle: { type: String }, // Optional extra fields if needed later
  ctaDescription: { type: String },

  metadata: {
    seoTitle: { type: String, default: 'Services - Shanthibhavan Palliative Hospital' },
    seoDescription: { type: String, default: 'Explore our free palliative care services.' }
  }
}, { timestamps: true });

export default model<IServicesPageDocument>('ServicesPage', ServicesPageSchema);
