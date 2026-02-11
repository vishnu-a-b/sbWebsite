import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Award from '../modules/award/award.model.js';

dotenv.config();

const awards = [
  {
    title: 'National Award from Asia Today Media and Research Group',
    awardingAuthority: 'Asia Today Media and Research Group',
    year: 2023,
    description: 'Rev. Fr Joy Koothur, co-founder and CEO of Shanthibhavan Palliative Hospital, received the prestigious National Award from Asia Today Media and Research Group, recognizing his exceptional contributions and the hospital\'s outstanding community service in the field of palliative care.',
    image: 'https://shanthibhavan.in/images/articles/66def4898e6a7.jpeg',
    priority: 100,
    isActive: true,
    startDate: new Date('2020-01-01'),
    expiryDate: new Date('2030-12-31'),
    showOnFirstFace: true,
  },
  {
    title: 'URF Award for Establishing India\'s First Palliative Hospital',
    awardingAuthority: 'URF (United Religious Forum)',
    year: 2022,
    description: 'Recognition for establishing India\'s first palliative hospital, presented by Sri. Adv. V.S. Sunilkumar to Rev. Fr. Joy Koothur. This award acknowledges the pioneering effort in creating a dedicated facility for palliative care in India.',
    image: 'https://shanthibhavan.in/images/articles/66def3e6beb9d.jpeg',
    priority: 90,
    isActive: true,
    startDate: new Date('2020-01-01'),
    expiryDate: new Date('2030-12-31'),
    showOnFirstFace: true,
  },
  {
    title: 'Best Social Service Award',
    awardingAuthority: 'Chamber of Commerce',
    year: 2019,
    description: 'Honored the CEO & Co-founder for outstanding contributions to palliative care and social service. This award recognizes the hospital\'s commitment to providing free healthcare services to those in need without any discrimination.',
    image: 'https://shanthibhavan.in/images/articles/66def159ac179.jpeg',
    priority: 80,
    isActive: true,
    startDate: new Date('2020-01-01'),
    expiryDate: new Date('2030-12-31'),
    showOnFirstFace: true,
  },
  {
    title: 'Human Excellence Award',
    awardingAuthority: 'Human Rights Foundation',
    year: 2021,
    description: 'Recognition for promoting and protecting human rights, presented to Fr. Joy Koothur. This award celebrates the hospital\'s dedication to ensuring dignity and compassionate care for all patients, regardless of their background or financial status.',
    image: 'https://shanthibhavan.in/images/articles/66def5722ffc6.jpeg',
    priority: 70,
    isActive: true,
    startDate: new Date('2020-01-01'),
    expiryDate: new Date('2030-12-31'),
    showOnFirstFace: true,
  },
];

async function seedAwards() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/shanthibhavan';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Clear existing awards
    await Award.deleteMany({});
    console.log('Cleared existing awards');

    // Insert new awards
    await Award.insertMany(awards);
    console.log(`Added ${awards.length} awards successfully!`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding awards:', error);
    process.exit(1);
  }
}

seedAwards();
