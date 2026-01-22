import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Payment from '@/models/Payment';
import Volunteer from '@/models/Volunteer';
import Contact from '@/models/Contact';

export async function GET() {
  try {
    await connectToDatabase();

    // Get payment statistics
    const totalPayments = await Payment.countDocuments();
    const completedPayments = await Payment.countDocuments({ status: 'completed' });

    const paymentAggregation = await Payment.aggregate([
      { $match: { status: 'completed' } },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: '$amount' },
        }
      }
    ]);

    const totalDonations = paymentAggregation[0]?.totalAmount || 0;

    // Get other statistics
    const totalVolunteers = await Volunteer.countDocuments();
    const totalContacts = await Contact.countDocuments();

    // Get recent payments (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentPayments = await Payment.countDocuments({
      createdAt: { $gte: thirtyDaysAgo },
      status: 'completed'
    });

    // Monthly donation trend
    const monthlyTrend = await Payment.aggregate([
      {
        $match: {
          status: 'completed',
          createdAt: { $gte: new Date(new Date().getFullYear(), 0, 1) }
        }
      },
      {
        $group: {
          _id: { $month: '$createdAt' },
          amount: { $sum: '$amount' },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    return NextResponse.json({
      payments: {
        total: totalPayments,
        completed: completedPayments,
        totalAmount: totalDonations,
        recent: recentPayments,
      },
      volunteers: {
        total: totalVolunteers,
      },
      contacts: {
        total: totalContacts,
      },
      monthlyTrend,
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}
