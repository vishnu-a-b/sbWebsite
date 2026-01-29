import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Admin, { AdminRole } from '../modules/admin/admin.model.js';
import Fellowship, { FellowshipStatus } from '../modules/fellowship/fellowship.model.js';
import Donation, { DonationType, PaymentStatus, ApprovalStatus } from '../modules/donation/donation.model.js';

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
    console.log('Existing data cleared');

    // Create Admin Users
    console.log('\nCreating admin users...');
    for (const admin of adminUsers) {
      const newAdmin = await Admin.create(admin);
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
