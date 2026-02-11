import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Campaign, { CampaignStatus } from '../modules/campaign/campaign.model.js';
import Admin from '../modules/admin/admin.model.js';

dotenv.config();

const campaigns = [
  // Active Campaigns 2025-26
  {
    title: 'Basic Patient Kit (Individual)',
    slug: 'basic-patient-kit-2025',
    description: 'Each patient at Shanthibhavan receives a basic patient kit containing essential items for comfort and daily care. These kits include personal hygiene products, comfortable clothing, bedding essentials, and other necessities that help maintain dignity and comfort during their stay.\n\nYour contribution helps us provide these essential kits to patients who often arrive with nothing. Every kit makes a direct impact on patient comfort and care quality.',
    shortDescription: 'Essential items for comfort and daily care for patients',
    image: 'https://shanthibhavan.in/images/products/692004cdddda5.jpeg',
    goalAmount: 2500000,
    raisedAmount: 0,
    donorCount: 0,
    currency: 'INR',
    status: CampaignStatus.ACTIVE,
    startDate: new Date('2025-01-01'),
    endDate: new Date('2026-03-31'),
    isFeatured: true,
  },
  {
    title: 'Support for Dialysis 25-26',
    slug: 'dialysis-support-2025-26',
    description: 'Shanthibhavan provides free dialysis services to patients who cannot afford this life-saving treatment. Each dialysis session costs approximately ₹900, and many patients require 2-3 sessions per week.\n\nOur dialysis unit serves hundreds of patients annually, providing hope and extending lives. Your support helps us maintain and expand this critical service, ensuring no one is denied treatment due to financial constraints.',
    shortDescription: 'Free dialysis services for patients in need',
    image: 'https://shanthibhavan.in/images/products/68c3baedcf7ae.jpeg',
    goalAmount: 6112800,
    raisedAmount: 427896,
    donorCount: 47,
    currency: 'INR',
    status: CampaignStatus.ACTIVE,
    startDate: new Date('2025-04-01'),
    endDate: new Date('2026-03-31'),
    isFeatured: true,
  },
  {
    title: 'Sponsorship for Free Food Campaign 25-26',
    slug: 'free-food-campaign-2025-26',
    description: 'Nutrition is a vital part of patient care and recovery. Shanthibhavan provides three nutritious meals daily to all patients and their caregivers, completely free of charge.\n\nOur kitchen serves over 200 meals every day, prepared with care and attention to dietary needs. Each day of sponsorship costs ₹12,000 and feeds everyone at our facility. Your support ensures no patient goes hungry while receiving care.',
    shortDescription: 'Nutritious meals for patients and caregivers',
    image: 'https://shanthibhavan.in/images/products/68c3b9df2b3a9.jpeg',
    goalAmount: 4380000,
    raisedAmount: 262800,
    donorCount: 22,
    currency: 'INR',
    status: CampaignStatus.ACTIVE,
    startDate: new Date('2025-04-01'),
    endDate: new Date('2026-03-31'),
    isFeatured: true,
  },
  // Past Campaigns (for reference/history)
  {
    title: 'Free Food Campaign 24-25',
    slug: 'free-food-campaign-2024-25',
    description: 'Annual food sponsorship campaign for the year 2024-25. This campaign helped provide nutritious meals to patients and caregivers throughout the year.',
    shortDescription: 'Annual food sponsorship for patients',
    image: 'https://shanthibhavan.in/images/products/68c3b9df2b3a9.jpeg',
    goalAmount: 4380000,
    raisedAmount: 1576800,
    donorCount: 89,
    currency: 'INR',
    status: CampaignStatus.COMPLETED,
    startDate: new Date('2024-04-01'),
    endDate: new Date('2025-03-31'),
    isFeatured: false,
  },
  {
    title: 'Dialysis Support 24-25',
    slug: 'dialysis-support-2024-25',
    description: 'Free dialysis campaign for 2024-25. This campaign provided life-saving dialysis treatment to hundreds of patients who could not afford the treatment.',
    shortDescription: 'Life-saving dialysis treatment support',
    image: 'https://shanthibhavan.in/images/products/68c3baedcf7ae.jpeg',
    goalAmount: 6112800,
    raisedAmount: 3117528,
    donorCount: 156,
    currency: 'INR',
    status: CampaignStatus.COMPLETED,
    startDate: new Date('2024-04-01'),
    endDate: new Date('2025-03-31'),
    isFeatured: false,
  },
  {
    title: 'Monthly Running Expense - TVM Hospital',
    slug: 'monthly-expense-tvm-hospital',
    description: 'Support the monthly operational expenses of our Trivandrum hospital facility. This includes utilities, maintenance, medical supplies, and staff support.',
    shortDescription: 'Operational support for Trivandrum facility',
    image: 'https://shanthibhavan.in/images/products/5b46fddd7d27d.jpeg',
    goalAmount: 7200000,
    raisedAmount: 1296000,
    donorCount: 67,
    currency: 'INR',
    status: CampaignStatus.ACTIVE,
    startDate: new Date('2024-01-01'),
    endDate: new Date('2026-12-31'),
    isFeatured: false,
  },
  {
    title: 'General Donation',
    slug: 'general-donation',
    description: 'Your general donation supports all aspects of our mission - from patient care and medical supplies to facility maintenance and staff training. Every contribution makes a difference in providing compassionate, dignified care to those in need.',
    shortDescription: 'Support our overall mission of compassionate care',
    image: 'https://shanthibhavan.in/images/pages/5fcb957946de6.jpeg',
    goalAmount: 2500000,
    raisedAmount: 325000,
    donorCount: 45,
    currency: 'INR',
    status: CampaignStatus.ACTIVE,
    startDate: new Date('2024-01-01'),
    endDate: new Date('2030-12-31'),
    isFeatured: false,
  },
  {
    title: 'Emergency Medical Fund',
    slug: 'emergency-medical-fund',
    description: 'The Emergency Medical Fund provides immediate support for critical patient needs that arise unexpectedly. This includes emergency medications, urgent medical procedures, and critical care equipment.',
    shortDescription: 'Immediate support for critical patient emergencies',
    image: 'https://shanthibhavan.in/images/products/5b9ba2e59c882.jpeg',
    goalAmount: 1500000,
    raisedAmount: 187500,
    donorCount: 28,
    currency: 'INR',
    status: CampaignStatus.ACTIVE,
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-12-31'),
    isFeatured: false,
  },
];

async function seedCampaigns() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/shanthibhavan';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Get an admin user for createdBy field
    let admin = await Admin.findOne({ role: 'super_admin' });
    if (!admin) {
      admin = await Admin.findOne();
    }

    if (!admin) {
      console.error('No admin user found. Please run seed.ts first to create admin users.');
      process.exit(1);
    }

    console.log(`Using admin: ${admin.username} (${admin._id})`);

    // Clear existing campaigns
    await Campaign.deleteMany({});
    console.log('Cleared existing campaigns');

    // Add createdBy to each campaign and insert
    const campaignsWithAdmin = campaigns.map(campaign => ({
      ...campaign,
      createdBy: admin._id,
    }));

    await Campaign.insertMany(campaignsWithAdmin);
    console.log(`Added ${campaigns.length} campaigns successfully!`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding campaigns:', error);
    process.exit(1);
  }
}

seedCampaigns();
