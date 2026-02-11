import mongoose from 'mongoose';
import dotenv from 'dotenv';
import TeamMember from '../modules/team-member/team-member.model.js';

dotenv.config();

const pillars = [
  {
    name: 'Mar Andrews Thazhath',
    role: 'Leadership & Patronage',
    designation: 'Chief Patron',
    bio: 'Archbishop of Thrissur and Chief Patron of Shanthibhavan. His Excellency provides spiritual guidance and patronage to the mission of compassionate care.',
    image: 'https://shanthibhavan.in/images/team/5ac754958c056.jpeg',
    specialization: '',
    experience: 0,
    priority: 100,
    isActive: true,
    startDate: new Date('2020-01-01'),
    expiryDate: new Date('2030-12-31'),
    showOnAboutPage: true,
  },
  {
    name: 'Fr. Joy Koothur',
    role: 'Leadership & Patronage',
    designation: 'CEO & Co-Founder',
    bio: 'Visionary leader and Co-Founder of Shanthibhavan. Fr. Joy Koothur has dedicated his life to serving the terminally ill and ensuring dignified care for all.',
    image: 'https://shanthibhavan.in/images/team/5ac764c7d310a.jpeg',
    specialization: '',
    experience: 0,
    priority: 90,
    isActive: true,
    startDate: new Date('2020-01-01'),
    expiryDate: new Date('2030-12-31'),
    showOnAboutPage: true,
  },
  {
    name: 'Sr. Beatrice Scalinci',
    role: 'Leadership & Patronage',
    designation: 'Co-Founder',
    bio: 'Co-Founder of Shanthibhavan from the Franciscan Sisters of St. Clare. Sr. Beatrice has been instrumental in establishing the compassionate care model.',
    image: 'https://shanthibhavan.in/images/team/team3.jpg',
    specialization: '',
    experience: 0,
    priority: 80,
    isActive: true,
    startDate: new Date('2020-01-01'),
    expiryDate: new Date('2030-12-31'),
    showOnAboutPage: true,
  },
  {
    name: 'Sr. Maria Chiara',
    role: 'Leadership & Patronage',
    designation: 'Co-Founder',
    bio: 'Co-Founder of Shanthibhavan from the Franciscan Sisters of St. Clare. Sr. Maria Chiara continues to inspire the mission of love and healing.',
    image: 'https://shanthibhavan.in/images/team/team4.jpg',
    specialization: '',
    experience: 0,
    priority: 70,
    isActive: true,
    startDate: new Date('2020-01-01'),
    expiryDate: new Date('2030-12-31'),
    showOnAboutPage: true,
  },
];

async function seedPillars() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/shanthibhavan';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    for (const pillar of pillars) {
      // Check if member already exists
      const existing = await TeamMember.findOne({ name: pillar.name });
      if (existing) {
        console.log(`Updating: ${pillar.name}`);
        await TeamMember.findByIdAndUpdate(existing._id, pillar);
      } else {
        console.log(`Creating: ${pillar.name}`);
        await TeamMember.create(pillar);
      }
    }

    console.log('Pillars seeded successfully!');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding pillars:', error);
    process.exit(1);
  }
}

seedPillars();
