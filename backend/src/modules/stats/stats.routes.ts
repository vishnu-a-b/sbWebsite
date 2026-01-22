import express, { Request, Response, Router } from 'express';
import Payment from '../payment/payment.model.js';
import Volunteer from '../volunteer/volunteer.model.js';
import Contact from '../contact/contact.model.js';
import { PaymentAggregation, MonthlyTrendItem, StatsResponse } from '../../types/index.js';

const router: Router = express.Router();

// GET statistics
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    // Get payment statistics
    const totalPayments: number = await Payment.countDocuments();
    const completedPayments: number = await Payment.countDocuments({ status: 'completed' });

    const paymentAggregation: PaymentAggregation[] = await Payment.aggregate([
      { $match: { status: 'completed' } },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: '$amount' },
        }
      }
    ]);

    const totalDonations: number = paymentAggregation[0]?.totalAmount || 0;

    // Get other statistics
    const totalVolunteers: number = await Volunteer.countDocuments();
    const totalContacts: number = await Contact.countDocuments();

    // Get recent payments (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentPayments: number = await Payment.countDocuments({
      createdAt: { $gte: thirtyDaysAgo },
      status: 'completed'
    });

    // Monthly donation trend
    const monthlyTrend: MonthlyTrendItem[] = await Payment.aggregate([
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

    const response: StatsResponse = {
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
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

export default router;
