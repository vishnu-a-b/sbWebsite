import { Schema, model, Document } from 'mongoose';

export interface IFooterDocument extends Document {
  // Contact Info
  address: string;
  phone: string;
  email: string;
  description: string;

  // Social Media Links
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  linkedin: string;
  whatsapp: string;

  // Copyright
  copyrightText: string;

  createdAt: Date;
  updatedAt: Date;
}

const FooterSchema = new Schema<IFooterDocument>({
  address: { type: String, default: 'Golden Hills, P.O, near to PMS Dental College, Venkode, Vattappara, Thiruvananthapuram, Kerala 695028' },
  phone: { type: String, default: '+91 9142653804' },
  email: { type: String, default: 'office@shanthibhavan.in' },
  description: { type: String, default: 'India\'s first no-bill palliative hospital. Providing compassionate care with dignity and love. A beacon of hope for those in need.' },

  facebook: { type: String, default: '' },
  instagram: { type: String, default: '' },
  youtube: { type: String, default: '' },
  twitter: { type: String, default: '' },
  linkedin: { type: String, default: '' },
  whatsapp: { type: String, default: '' },

  copyrightText: { type: String, default: 'Shanthibhavan Palliative Hospital. All rights reserved.' },
}, { timestamps: true });

export const Footer = model<IFooterDocument>('Footer', FooterSchema, 'footer');
