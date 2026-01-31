import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Admin, { AdminRole } from '../modules/admin/admin.model.js';
import Fellowship, { FellowshipStatus } from '../modules/fellowship/fellowship.model.js';
import Donation, { DonationType, PaymentStatus, ApprovalStatus } from '../modules/donation/donation.model.js';
import Campaign, { CampaignStatus } from '../modules/campaign/campaign.model.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shanthibhavan';

// Test Admin Users
const adminUsers = [
  {
    username: 'superadmin',
    email: 'superadmin@shanthibhavan.org',
    passwordHash: 'Admin@123',
    role: AdminRole.SUPER_ADMIN,
    isActive: true
  },
  {
    username: 'agent1',
    email: 'agent@shanthibhavan.org',
    passwordHash: 'Agent@123',
    role: AdminRole.AGENT,
    isActive: true
  },
  {
    username: 'approver1',
    email: 'approver@shanthibhavan.org',
    passwordHash: 'Approver@123',
    role: AdminRole.APPROVER,
    isActive: true
  },
  {
    username: 'accounts1',
    email: 'accounts@shanthibhavan.org',
    passwordHash: 'Accounts@123',
    role: AdminRole.ACCOUNTS,
    isActive: true
  }
];

// Test Fellowships
const fellowships = [
  {
    subscriberName: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 9876543210',
    address: '123 MG Road, Bangalore 560001',
    panNumber: 'ABCDE1234F',
    monthlyAmount: 5000,
    status: FellowshipStatus.ACTIVE,
    isEmailVerified: true,
    totalPaid: 25000,
    totalPayments: 5
  },
  {
    subscriberName: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 9876543211',
    address: '456 Indiranagar, Bangalore 560038',
    panNumber: 'FGHIJ5678K',
    monthlyAmount: 2500,
    status: FellowshipStatus.ACTIVE,
    isEmailVerified: true,
    totalPaid: 7500,
    totalPayments: 3
  },
  {
    subscriberName: 'Amit Patel',
    email: 'amit.patel@example.com',
    phone: '+91 9876543212',
    address: '789 Koramangala, Bangalore 560034',
    monthlyAmount: 10000,
    status: FellowshipStatus.PAUSED,
    pausedAt: new Date(),
    pausedReason: 'Financial constraints - will resume next quarter',
    isEmailVerified: true,
    totalPaid: 30000,
    totalPayments: 3
  },
  {
    subscriberName: 'Sneha Reddy',
    email: 'sneha.reddy@example.com',
    phone: '+91 9876543213',
    address: '321 Whitefield, Bangalore 560066',
    panNumber: 'LMNOP9012Q',
    monthlyAmount: 1000,
    status: FellowshipStatus.ACTIVE,
    isEmailVerified: false,
    totalPaid: 0,
    totalPayments: 0
  },
  {
    subscriberName: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    phone: '+91 9876543214',
    monthlyAmount: 3000,
    status: FellowshipStatus.CANCELLED,
    cancelledAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    cancelledReason: 'Relocated abroad',
    isEmailVerified: true,
    totalPaid: 9000,
    totalPayments: 3
  }
];

// Test Campaigns (will be linked to admin after creation)
const campaigns = [
  {
    title: 'Food Challenge 2024',
    slug: 'food-challenge-2024',
    description: 'Help us provide nutritious meals to patients and their families. Our Food Challenge aims to ensure no one goes hungry while receiving care at Shanthibhavan. Every meal counts in the healing process.\n\nYour contribution will help us:\n- Serve 3 nutritious meals daily to all patients\n- Provide meals to family members staying with patients\n- Ensure special dietary needs are met\n- Maintain our kitchen facilities',
    shortDescription: 'Provide nutritious meals to patients and families',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
    goalAmount: 500000,
    raisedAmount: 125000,
    donorCount: 45,
    status: CampaignStatus.ACTIVE,
    isFeatured: true,
    startDate: new Date('2024-01-01')
  },
  {
    title: 'Medical Equipment Fund',
    slug: 'medical-equipment-2024',
    description: 'We need to upgrade our medical equipment to provide better care. This campaign will help us purchase essential medical devices including monitors, wheelchairs, and diagnostic tools.\n\nEquipment we need:\n- Patient monitoring systems\n- Wheelchairs and mobility aids\n- Oxygen concentrators\n- Diagnostic equipment\n- Hospital beds with special features',
    shortDescription: 'Upgrade medical equipment for better patient care',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    goalAmount: 1000000,
    raisedAmount: 350000,
    donorCount: 78,
    status: CampaignStatus.ACTIVE,
    isFeatured: true,
    startDate: new Date('2024-02-15')
  },
  {
    title: 'Home Care Vehicle Fund',
    slug: 'home-care-vehicle',
    description: 'Our home care program reaches patients who cannot travel to the hospital. We need to add more vehicles to our fleet to expand our reach and serve more communities.\n\nWith your help, we can:\n- Purchase a new home care vehicle\n- Equip it with necessary medical supplies\n- Reach remote areas in need\n- Provide regular home visits to bedridden patients',
    shortDescription: 'Expand home care reach with new vehicles',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=1200&auto=format&fit=crop',
    goalAmount: 800000,
    raisedAmount: 280000,
    donorCount: 52,
    status: CampaignStatus.ACTIVE,
    isFeatured: true,
    startDate: new Date('2024-03-01')
  },
  {
    title: 'Building Expansion Project',
    slug: 'building-expansion',
    description: 'To serve more patients, we need to expand our facility. This campaign will fund the construction of a new wing with 20 additional beds and a dedicated rehabilitation center.',
    shortDescription: 'Expand facility with 20 new beds',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop',
    goalAmount: 5000000,
    raisedAmount: 750000,
    donorCount: 120,
    status: CampaignStatus.PAUSED,
    isFeatured: false,
    startDate: new Date('2023-06-01')
  },
  {
    title: 'Winter Warmth Drive',
    slug: 'winter-warmth-2023',
    description: 'Provide blankets, warm clothing, and heating arrangements for patients during the winter months.',
    shortDescription: 'Warmth essentials for patients in winter',
    image: 'https://images.unsplash.com/photo-1469571486292-b53601020f29?q=80&w=1200&auto=format&fit=crop',
    goalAmount: 200000,
    raisedAmount: 200000,
    donorCount: 89,
    status: CampaignStatus.COMPLETED,
    isFeatured: false,
    startDate: new Date('2023-11-01'),
    endDate: new Date('2024-01-31')
  },
  {
    title: 'Ambulance Service',
    slug: 'ambulance-service',
    description: 'Draft campaign for acquiring a new ambulance to provide emergency transport services.',
    shortDescription: 'New ambulance for emergency services',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop',
    goalAmount: 800000,
    raisedAmount: 0,
    donorCount: 0,
    status: CampaignStatus.DRAFT,
    isFeatured: false,
    startDate: new Date('2024-03-01')
  }
];

// Test Donations
const donations = [
  {
    donorName: 'Arun Mehta',
    email: 'arun.mehta@example.com',
    phone: '+91 9876543220',
    amount: 50000,
    donationType: DonationType.GENERAL,
    paymentStatus: PaymentStatus.SUCCESS,
    gatewayOrderId: 'ORD-2024-001',
    transactionId: 'TXN-2024-001',
    receiptNumber: 'DN-20240115-00001',
    panNumber: 'RSTUV3456W'
  },
  {
    donorName: 'Meera Krishnan',
    email: 'meera.k@example.com',
    phone: '+91 9876543221',
    amount: 25000,
    donationType: DonationType.GENERAL,
    paymentStatus: PaymentStatus.SUCCESS,
    gatewayOrderId: 'ORD-2024-002',
    transactionId: 'TXN-2024-002',
    receiptNumber: 'DN-20240116-00002'
  },
  {
    donorName: 'Suresh Iyer',
    email: 'suresh.iyer@example.com',
    phone: '+91 9876543222',
    amount: 10000,
    donationType: DonationType.FELLOWSHIP,
    paymentStatus: PaymentStatus.SUCCESS,
    gatewayOrderId: 'ORD-2024-003',
    transactionId: 'TXN-2024-003',
    receiptNumber: 'DN-20240117-00003'
  },
  {
    donorName: 'Lakshmi Venkat',
    email: 'lakshmi.v@example.com',
    phone: '+91 9876543223',
    amount: 5000,
    donationType: DonationType.GENERAL,
    paymentStatus: PaymentStatus.FAILED,
    gatewayOrderId: 'ORD-2024-004',
    authStatus: '0399'
  },
  {
    donorName: 'Ramesh Gupta',
    email: 'ramesh.g@example.com',
    phone: '+91 9876543224',
    amount: 15000,
    donationType: DonationType.GENERAL,
    paymentStatus: PaymentStatus.PENDING,
    gatewayOrderId: 'ORD-2024-005'
  },
  // Offline donations
  {
    donorName: 'Kavitha Nair',
    email: 'kavitha.nair@example.com',
    phone: '+91 9876543225',
    amount: 100000,
    donationType: DonationType.GENERAL,
    paymentStatus: PaymentStatus.SUCCESS,
    isOffline: true,
    offlinePaymentMethod: 'cheque',
    approvalStatus: ApprovalStatus.APPROVED,
    receiptNumber: 'DN-20240118-00004',
    notes: 'Cheque No: 123456, Bank: SBI'
  },
  {
    donorName: 'Deepak Joshi',
    email: 'deepak.j@example.com',
    phone: '+91 9876543226',
    amount: 20000,
    donationType: DonationType.GENERAL,
    paymentStatus: PaymentStatus.PENDING,
    isOffline: true,
    offlinePaymentMethod: 'bank_transfer',
    approvalStatus: ApprovalStatus.PENDING,
    notes: 'Bank transfer pending verification'
  },
  {
    donorName: 'Anita Desai',
    email: 'anita.d@example.com',
    phone: '+91 9876543227',
    amount: 5000,
    donationType: DonationType.GENERAL,
    paymentStatus: PaymentStatus.FAILED,
    isOffline: true,
    offlinePaymentMethod: 'cash',
    approvalStatus: ApprovalStatus.REJECTED,
    rejectionReason: 'Unable to verify cash receipt'
  }
];

async function seed() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    console.log('\nClearing existing data...');
    await Admin.deleteMany({});
    await Fellowship.deleteMany({});
    await Donation.deleteMany({});
    await Campaign.deleteMany({});
    console.log('Existing data cleared');

    // Create Admin Users
    console.log('\nCreating admin users...');
    let superAdminId = null;
    for (const admin of adminUsers) {
      const newAdmin = await Admin.create(admin);
      if (newAdmin.role === AdminRole.SUPER_ADMIN) {
        superAdminId = newAdmin._id;
      }
      console.log(`  Created: ${newAdmin.username} (${newAdmin.role})`);
    }

    // Create Fellowships
    console.log('\nCreating fellowships...');
    const createdFellowships = [];
    for (const fellowship of fellowships) {
      const startDate = new Date(Date.now() - Math.random() * 180 * 24 * 60 * 60 * 1000);
      const nextPaymentDue = new Date();
      nextPaymentDue.setMonth(nextPaymentDue.getMonth() + 1);
      nextPaymentDue.setDate(1);

      const newFellowship = await Fellowship.create({
        ...fellowship,
        startDate,
        nextPaymentDue: fellowship.status === FellowshipStatus.ACTIVE ? nextPaymentDue : undefined,
        lastPaymentDate: fellowship.totalPayments > 0 ? new Date(Date.now() - 15 * 24 * 60 * 60 * 1000) : undefined
      });
      createdFellowships.push(newFellowship);
      console.log(`  Created: ${newFellowship.subscriberName} (${newFellowship.status})`);
    }

    // Create Campaigns
    console.log('\nCreating campaigns...');
    for (const campaign of campaigns) {
      const newCampaign = await Campaign.create({
        ...campaign,
        createdBy: superAdminId
      });
      console.log(`  Created: ${newCampaign.title} (${newCampaign.status})`);
    }

    // Create Donations
    console.log('\nCreating donations...');
    for (const donation of donations) {
      const createdAt = new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000);
      const newDonation = await Donation.create({
        ...donation,
        createdAt
      });
      console.log(`  Created: ${newDonation.donorName} - INR ${newDonation.amount} (${newDonation.paymentStatus})`);
    }

    // Summary
    console.log('\n========================================');
    console.log('SEED COMPLETED SUCCESSFULLY');
    console.log('========================================');
    console.log('\nAdmin Users Created:');
    console.log('----------------------------------------');
    console.log('| Username     | Password      | Role        |');
    console.log('|--------------|---------------|-------------|');
    console.log('| superadmin   | Admin@123     | SUPER_ADMIN |');
    console.log('| agent1       | Agent@123     | AGENT       |');
    console.log('| approver1    | Approver@123  | APPROVER    |');
    console.log('| accounts1    | Accounts@123  | ACCOUNTS    |');
    console.log('----------------------------------------');
    console.log(`\nFellowships: ${createdFellowships.length}`);
    console.log(`Donations: ${donations.length}`);
    console.log(`Campaigns: ${campaigns.length}`);
    console.log('\n');

  } catch (error) {
    console.error('Seed error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  }
}

seed();
