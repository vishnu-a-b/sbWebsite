import { Request, Response } from 'express';
import Fellowship, { FellowshipStatus } from './fellowship.model.js';
import crypto from 'crypto';
import emailService from '../../services/email.service.js';

// Create a new fellowship subscription
export const createFellowship = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      subscriberName,
      email,
      phone,
      address,
      panNumber,
      monthlyAmount,
      notes
    } = req.body;

    // Validation
    if (!subscriberName || !email || !phone || !monthlyAmount) {
      res.status(400).json({
        success: false,
        error: 'Subscriber name, email, phone, and monthly amount are required'
      });
      return;
    }

    if (monthlyAmount < 1) {
      res.status(400).json({
        success: false,
        error: 'Monthly amount must be at least 1'
      });
      return;
    }

    // Check if email already exists
    const existingFellowship = await Fellowship.findOne({ email: email.toLowerCase() });
    if (existingFellowship) {
      res.status(400).json({
        success: false,
        error: 'A fellowship subscription already exists with this email'
      });
      return;
    }

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const verificationTokenExpiry = new Date();
    verificationTokenExpiry.setHours(verificationTokenExpiry.getHours() + 24);

    // Calculate first payment due date (1st of next month)
    const nextPaymentDue = new Date();
    nextPaymentDue.setMonth(nextPaymentDue.getMonth() + 1);
    nextPaymentDue.setDate(1);
    nextPaymentDue.setHours(0, 0, 0, 0);

    const fellowship = await Fellowship.create({
      subscriberName,
      email: email.toLowerCase(),
      phone,
      address,
      panNumber,
      monthlyAmount,
      notes,
      status: FellowshipStatus.ACTIVE,
      startDate: new Date(),
      nextPaymentDue,
      verificationToken,
      verificationTokenExpiry
    });

    // Send welcome email with verification link
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    const verificationLink = `${frontendUrl}/fellowship/verify/${verificationToken}`;

    emailService.sendFellowshipWelcome({
      email: fellowship.email,
      subscriberName: fellowship.subscriberName,
      monthlyAmount: fellowship.monthlyAmount,
      currency: fellowship.currency,
      verificationLink
    }).catch(err => console.error('Failed to send welcome email:', err));

    res.status(201).json({
      success: true,
      fellowship: {
        id: fellowship._id,
        subscriberName: fellowship.subscriberName,
        email: fellowship.email,
        phone: fellowship.phone,
        monthlyAmount: fellowship.monthlyAmount,
        status: fellowship.status,
        startDate: fellowship.startDate,
        nextPaymentDue: fellowship.nextPaymentDue
      }
    });
  } catch (error) {
    console.error('Create fellowship error:', error);
    res.status(500).json({ success: false, error: 'Failed to create fellowship subscription' });
  }
};

// List all fellowships with filters
export const listFellowships = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      status,
      search,
      page = '1',
      limit = '20',
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    const query: Record<string, unknown> = {};

    // Filter by status
    if (status && Object.values(FellowshipStatus).includes(status as FellowshipStatus)) {
      query.status = status;
    }

    // Search by name, email, or phone
    if (search && typeof search === 'string') {
      query.$or = [
        { subscriberName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ];
    }

    const pageNum = parseInt(page as string, 10) || 1;
    const limitNum = Math.min(parseInt(limit as string, 10) || 20, 100);
    const skip = (pageNum - 1) * limitNum;

    const sortField = ['createdAt', 'subscriberName', 'monthlyAmount', 'lastPaymentDate', 'nextPaymentDue'].includes(sortBy as string)
      ? sortBy as string
      : 'createdAt';
    const sortDirection = sortOrder === 'asc' ? 1 : -1;

    const [fellowships, total] = await Promise.all([
      Fellowship.find(query)
        .select('-verificationToken -verificationTokenExpiry')
        .sort({ [sortField]: sortDirection })
        .skip(skip)
        .limit(limitNum),
      Fellowship.countDocuments(query)
    ]);

    res.json({
      success: true,
      fellowships,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum)
      }
    });
  } catch (error) {
    console.error('List fellowships error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch fellowships' });
  }
};

// Get a single fellowship by ID
export const getFellowshipById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const fellowship = await Fellowship.findById(id)
      .select('-verificationToken -verificationTokenExpiry')
      .populate('donations');

    if (!fellowship) {
      res.status(404).json({ success: false, error: 'Fellowship not found' });
      return;
    }

    res.json({ success: true, fellowship });
  } catch (error) {
    console.error('Get fellowship error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch fellowship' });
  }
};

// Update fellowship details
export const updateFellowship = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const {
      subscriberName,
      phone,
      address,
      panNumber,
      monthlyAmount,
      notes
    } = req.body;

    const fellowship = await Fellowship.findById(id);
    if (!fellowship) {
      res.status(404).json({ success: false, error: 'Fellowship not found' });
      return;
    }

    // Only allow updates to certain fields
    if (subscriberName) fellowship.subscriberName = subscriberName;
    if (phone) fellowship.phone = phone;
    if (address !== undefined) fellowship.address = address;
    if (panNumber !== undefined) fellowship.panNumber = panNumber;
    if (monthlyAmount && monthlyAmount >= 1) fellowship.monthlyAmount = monthlyAmount;
    if (notes !== undefined) fellowship.notes = notes;

    await fellowship.save();

    res.json({
      success: true,
      fellowship: {
        id: fellowship._id,
        subscriberName: fellowship.subscriberName,
        email: fellowship.email,
        phone: fellowship.phone,
        monthlyAmount: fellowship.monthlyAmount,
        status: fellowship.status
      }
    });
  } catch (error) {
    console.error('Update fellowship error:', error);
    res.status(500).json({ success: false, error: 'Failed to update fellowship' });
  }
};

// Pause a fellowship
export const pauseFellowship = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { reason } = req.body;

    const fellowship = await Fellowship.findById(id);
    if (!fellowship) {
      res.status(404).json({ success: false, error: 'Fellowship not found' });
      return;
    }

    if (fellowship.status !== FellowshipStatus.ACTIVE) {
      res.status(400).json({
        success: false,
        error: `Cannot pause a fellowship with status: ${fellowship.status}`
      });
      return;
    }

    fellowship.status = FellowshipStatus.PAUSED;
    fellowship.pausedAt = new Date();
    fellowship.pausedReason = reason || undefined;

    await fellowship.save();

    // Send pause notification email
    emailService.sendFellowshipPaused({
      email: fellowship.email,
      subscriberName: fellowship.subscriberName,
      reason: reason || undefined
    }).catch(err => console.error('Failed to send pause email:', err));

    res.json({
      success: true,
      message: 'Fellowship paused successfully',
      fellowship: {
        id: fellowship._id,
        status: fellowship.status,
        pausedAt: fellowship.pausedAt
      }
    });
  } catch (error) {
    console.error('Pause fellowship error:', error);
    res.status(500).json({ success: false, error: 'Failed to pause fellowship' });
  }
};

// Resume a paused fellowship
export const resumeFellowship = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const fellowship = await Fellowship.findById(id);
    if (!fellowship) {
      res.status(404).json({ success: false, error: 'Fellowship not found' });
      return;
    }

    if (fellowship.status !== FellowshipStatus.PAUSED) {
      res.status(400).json({
        success: false,
        error: `Cannot resume a fellowship with status: ${fellowship.status}`
      });
      return;
    }

    fellowship.status = FellowshipStatus.ACTIVE;
    fellowship.pausedAt = undefined;
    fellowship.pausedReason = undefined;

    // Recalculate next payment due
    const nextPaymentDue = new Date();
    nextPaymentDue.setMonth(nextPaymentDue.getMonth() + 1);
    nextPaymentDue.setDate(1);
    nextPaymentDue.setHours(0, 0, 0, 0);
    fellowship.nextPaymentDue = nextPaymentDue;

    await fellowship.save();

    res.json({
      success: true,
      message: 'Fellowship resumed successfully',
      fellowship: {
        id: fellowship._id,
        status: fellowship.status,
        nextPaymentDue: fellowship.nextPaymentDue
      }
    });
  } catch (error) {
    console.error('Resume fellowship error:', error);
    res.status(500).json({ success: false, error: 'Failed to resume fellowship' });
  }
};

// Cancel a fellowship
export const cancelFellowship = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { reason } = req.body;

    const fellowship = await Fellowship.findById(id);
    if (!fellowship) {
      res.status(404).json({ success: false, error: 'Fellowship not found' });
      return;
    }

    if (fellowship.status === FellowshipStatus.CANCELLED) {
      res.status(400).json({
        success: false,
        error: 'Fellowship is already cancelled'
      });
      return;
    }

    fellowship.status = FellowshipStatus.CANCELLED;
    fellowship.cancelledAt = new Date();
    fellowship.cancelledReason = reason || undefined;
    fellowship.endDate = new Date();

    await fellowship.save();

    // Send cancellation notification email
    emailService.sendFellowshipCancelled({
      email: fellowship.email,
      subscriberName: fellowship.subscriberName,
      reason: reason || undefined
    }).catch(err => console.error('Failed to send cancellation email:', err));

    res.json({
      success: true,
      message: 'Fellowship cancelled successfully',
      fellowship: {
        id: fellowship._id,
        status: fellowship.status,
        cancelledAt: fellowship.cancelledAt
      }
    });
  } catch (error) {
    console.error('Cancel fellowship error:', error);
    res.status(500).json({ success: false, error: 'Failed to cancel fellowship' });
  }
};

// Get fellowship statistics
export const getFellowshipStats = async (_req: Request, res: Response): Promise<void> => {
  try {
    const stats = await Fellowship.aggregate([
      {
        $facet: {
          byStatus: [
            {
              $group: {
                _id: '$status',
                count: { $sum: 1 },
                totalMonthlyAmount: { $sum: '$monthlyAmount' }
              }
            }
          ],
          overall: [
            {
              $group: {
                _id: null,
                totalFellowships: { $sum: 1 },
                totalCollected: { $sum: '$totalPaid' },
                totalPayments: { $sum: '$totalPayments' },
                avgMonthlyAmount: { $avg: '$monthlyAmount' }
              }
            }
          ],
          activeMonthlyRevenue: [
            {
              $match: { status: FellowshipStatus.ACTIVE }
            },
            {
              $group: {
                _id: null,
                monthlyRevenue: { $sum: '$monthlyAmount' },
                activeCount: { $sum: 1 }
              }
            }
          ]
        }
      }
    ]);

    const byStatus: Record<string, { count: number; totalMonthlyAmount: number }> = {};
    stats[0].byStatus.forEach((item: { _id: string; count: number; totalMonthlyAmount: number }) => {
      byStatus[item._id] = {
        count: item.count,
        totalMonthlyAmount: item.totalMonthlyAmount
      };
    });

    const overall = stats[0].overall[0] || {
      totalFellowships: 0,
      totalCollected: 0,
      totalPayments: 0,
      avgMonthlyAmount: 0
    };

    const activeStats = stats[0].activeMonthlyRevenue[0] || {
      monthlyRevenue: 0,
      activeCount: 0
    };

    res.json({
      success: true,
      stats: {
        byStatus,
        totalFellowships: overall.totalFellowships,
        totalCollected: overall.totalCollected,
        totalPayments: overall.totalPayments,
        avgMonthlyAmount: Math.round(overall.avgMonthlyAmount || 0),
        activeMonthlyRevenue: activeStats.monthlyRevenue,
        activeFellowships: activeStats.activeCount
      }
    });
  } catch (error) {
    console.error('Fellowship stats error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch fellowship statistics' });
  }
};

// Get overdue payments (fellowships with nextPaymentDue in the past)
export const getOverduePayments = async (req: Request, res: Response): Promise<void> => {
  try {
    const { page = '1', limit = '20' } = req.query;

    const pageNum = parseInt(page as string, 10) || 1;
    const limitNum = Math.min(parseInt(limit as string, 10) || 20, 100);
    const skip = (pageNum - 1) * limitNum;

    const now = new Date();

    const query = {
      status: FellowshipStatus.ACTIVE,
      nextPaymentDue: { $lt: now }
    };

    const [fellowships, total] = await Promise.all([
      Fellowship.find(query)
        .select('subscriberName email phone monthlyAmount lastPaymentDate nextPaymentDue totalPaid totalPayments')
        .sort({ nextPaymentDue: 1 })
        .skip(skip)
        .limit(limitNum),
      Fellowship.countDocuments(query)
    ]);

    res.json({
      success: true,
      fellowships,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum)
      }
    });
  } catch (error) {
    console.error('Overdue payments error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch overdue payments' });
  }
};

// Verify email
export const verifyEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { token } = req.params;

    const fellowship = await Fellowship.findOne({
      verificationToken: token,
      verificationTokenExpiry: { $gt: new Date() }
    });

    if (!fellowship) {
      res.status(400).json({
        success: false,
        error: 'Invalid or expired verification token'
      });
      return;
    }

    fellowship.isEmailVerified = true;
    fellowship.verificationToken = undefined;
    fellowship.verificationTokenExpiry = undefined;

    await fellowship.save();

    res.json({
      success: true,
      message: 'Email verified successfully'
    });
  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({ success: false, error: 'Failed to verify email' });
  }
};

// Get fellowship by email (public - for donors to check their subscription)
export const getFellowshipByEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const email = req.params.email as string;

    const fellowship = await Fellowship.findOne({ email: email.toLowerCase() })
      .select('subscriberName email monthlyAmount status startDate lastPaymentDate nextPaymentDue totalPaid totalPayments');

    if (!fellowship) {
      res.status(404).json({ success: false, error: 'Fellowship not found' });
      return;
    }

    res.json({ success: true, fellowship });
  } catch (error) {
    console.error('Get fellowship by email error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch fellowship' });
  }
};
