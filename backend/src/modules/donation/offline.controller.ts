import { Request, Response } from 'express';
import Donation, { DonationType, PaymentStatus, ApprovalStatus } from './donation.model.js';

/**
 * Add offline payment (Agent role)
 */
export const addOfflinePayment = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.admin) {
      res.status(401).json({
        success: false,
        error: 'Authentication required'
      });
      return;
    }

    const {
      donorName,
      email,
      phone,
      amount,
      donationType = DonationType.GENERAL,
      panNumber,
      address,
      notes,
      offlinePaymentMethod
    } = req.body;

    // Validation
    if (!donorName || !email || !amount || !offlinePaymentMethod) {
      res.status(400).json({
        success: false,
        error: 'Required fields: donorName, email, amount, offlinePaymentMethod'
      });
      return;
    }

    if (amount < 1) {
      res.status(400).json({
        success: false,
        error: 'Amount must be at least 1'
      });
      return;
    }

    // Create offline donation record
    const donation = await Donation.create({
      donorName,
      email,
      phone,
      panNumber,
      address,
      amount,
      donationType,
      notes,
      isOffline: true,
      offlinePaymentMethod,
      paymentStatus: PaymentStatus.PENDING,
      approvalStatus: ApprovalStatus.PENDING,
      addedBy: req.admin._id
    });

    res.status(201).json({
      success: true,
      donation,
      message: 'Offline payment added. Pending approval.'
    });
  } catch (error) {
    console.error('Add offline payment error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to add offline payment'
    });
  }
};

/**
 * Get pending approvals (Approver role)
 */
export const getPendingApprovals = async (_req: Request, res: Response): Promise<void> => {
  try {
    const pendingDonations = await Donation.find({
      isOffline: true,
      approvalStatus: ApprovalStatus.PENDING
    })
      .populate('addedBy', 'username email')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      donations: pendingDonations,
      count: pendingDonations.length
    });
  } catch (error) {
    console.error('Get pending approvals error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch pending approvals'
    });
  }
};

/**
 * Approve offline payment (Approver role)
 */
export const approveOfflinePayment = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.admin) {
      res.status(401).json({
        success: false,
        error: 'Authentication required'
      });
      return;
    }

    const { id } = req.params;

    const donation = await Donation.findOne({
      _id: id,
      isOffline: true,
      approvalStatus: ApprovalStatus.PENDING
    });

    if (!donation) {
      res.status(404).json({
        success: false,
        error: 'Donation not found or already processed'
      });
      return;
    }

    // Update donation
    donation.approvalStatus = ApprovalStatus.APPROVED;
    donation.paymentStatus = PaymentStatus.SUCCESS;
    donation.approvedBy = req.admin._id;
    donation.approvalDate = new Date();

    await donation.save();

    res.json({
      success: true,
      donation,
      message: 'Offline payment approved successfully'
    });
  } catch (error) {
    console.error('Approve payment error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to approve payment'
    });
  }
};

/**
 * Reject offline payment (Approver role)
 */
export const rejectOfflinePayment = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.admin) {
      res.status(401).json({
        success: false,
        error: 'Authentication required'
      });
      return;
    }

    const { id } = req.params;
    const { reason } = req.body;

    if (!reason) {
      res.status(400).json({
        success: false,
        error: 'Rejection reason is required'
      });
      return;
    }

    const donation = await Donation.findOne({
      _id: id,
      isOffline: true,
      approvalStatus: ApprovalStatus.PENDING
    });

    if (!donation) {
      res.status(404).json({
        success: false,
        error: 'Donation not found or already processed'
      });
      return;
    }

    // Update donation
    donation.approvalStatus = ApprovalStatus.REJECTED;
    donation.paymentStatus = PaymentStatus.FAILED;
    donation.approvedBy = req.admin._id;
    donation.approvalDate = new Date();
    donation.rejectionReason = reason;

    await donation.save();

    res.json({
      success: true,
      donation,
      message: 'Offline payment rejected'
    });
  } catch (error) {
    console.error('Reject payment error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to reject payment'
    });
  }
};

/**
 * Get offline payment history
 */
export const getOfflinePaymentHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      approvalStatus,
      startDate,
      endDate,
      page = 1,
      limit = 20
    } = req.query;

    const filter: any = { isOffline: true };

    if (approvalStatus) {
      filter.approvalStatus = approvalStatus;
    }

    if (startDate || endDate) {
      filter.createdAt = {};
      if (startDate) filter.createdAt.$gte = new Date(startDate as string);
      if (endDate) filter.createdAt.$lte = new Date(endDate as string);
    }

    const skip = (Number(page) - 1) * Number(limit);

    const [donations, total] = await Promise.all([
      Donation.find(filter)
        .populate('addedBy', 'username email')
        .populate('approvedBy', 'username email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit)),
      Donation.countDocuments(filter)
    ]);

    res.json({
      success: true,
      donations,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Get offline payment history error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch offline payment history'
    });
  }
};
