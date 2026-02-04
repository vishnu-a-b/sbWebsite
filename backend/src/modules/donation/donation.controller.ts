import { Request, Response } from 'express';
import Donation, { DonationType, PaymentStatus } from './donation.model.js';
import Transaction, { TransactionType } from './transaction.model.js';
import Fellowship from '../fellowship/fellowship.model.js';
import Campaign, { CampaignStatus } from '../campaign/campaign.model.js';
import {
  buildPaymentRequest,
  validateAndVerifyResponse,
  isPaymentSuccessful,
  getPaymentStatusMessage,
  generateOrderId
} from './utils/billdesk.util.js';
import emailService from '../../services/email.service.js';

/**
 * Initiate donation payment
 */
export const initiateDonation = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      donorName,
      email,
      phone,
      amount,
      donationType = DonationType.GENERAL,
      panNumber,
      address,
      notes,
      fellowshipId,
      campaignId
    } = req.body;

    // Validation
    if (!donorName || !email || !amount) {
      res.status(400).json({
        success: false,
        error: 'Required fields: donorName, email, amount'
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

    // If fellowship donation, validate fellowship exists
    if (fellowshipId) {
      const fellowship = await Fellowship.findById(fellowshipId);
      if (!fellowship) {
        res.status(404).json({
          success: false,
          error: 'Fellowship not found'
        });
        return;
      }

      // Check if already paid this month
      const now = new Date();
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const lastPaymentThisMonth = fellowship.lastPaymentDate &&
        fellowship.lastPaymentDate >= firstDayOfMonth;

      if (lastPaymentThisMonth) {
        res.status(400).json({
          success: false,
          error: 'Payment already made for this month'
        });
        return;
      }
    }

    // If campaign donation, validate campaign exists and is active
    if (campaignId) {
      const campaign = await Campaign.findById(campaignId);
      if (!campaign) {
        res.status(404).json({
          success: false,
          error: 'Campaign not found'
        });
        return;
      }

      if (campaign.status !== CampaignStatus.ACTIVE) {
        res.status(400).json({
          success: false,
          error: 'This campaign is not currently active'
        });
        return;
      }
    }

    // Generate unique order ID
    const gatewayOrderId = generateOrderId();

    // Create donation record
    const donation = await Donation.create({
      donorName,
      email,
      phone,
      panNumber,
      address,
      amount,
      donationType,
      notes,
      gatewayOrderId,
      fellowshipId,
      campaignId,
      paymentStatus: PaymentStatus.PENDING
    });

    // Build BillDesk payment request
    const paymentRequest = buildPaymentRequest({
      orderId: gatewayOrderId,
      amount,
      currency: 'INR',
      customerName: donorName,
      customerEmail: email,
      customerPhone: phone,
      additionalInfo: donationType
    });

    // Log transaction
    await Transaction.create({
      donationId: donation._id,
      transactionType: TransactionType.PAYMENT_INITIATED,
      requestPayload: {
        orderId: gatewayOrderId,
        amount,
        donorName,
        email
      },
      bdOrderId: gatewayOrderId,
      checksumSent: paymentRequest.checksum,
      success: true
    });

    // Return payment URL and message
    res.json({
      success: true,
      donationId: donation._id,
      orderId: gatewayOrderId,
      paymentUrl: paymentRequest.url,
      paymentMsg: paymentRequest.msg,
      checksum: paymentRequest.checksum,
      message: 'Donation initiated. Redirect to payment gateway.'
    });
  } catch (error) {
    console.error('Initiate donation error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to initiate donation'
    });
  }
};

/**
 * Handle BillDesk return callback (user redirect after payment)
 */
export const handleBillDeskReturn = async (req: Request, res: Response): Promise<void> => {
  try {
    const responseString = req.body.msg || req.query.msg as string;

    if (!responseString) {
      res.status(400).json({
        success: false,
        error: 'No response data received'
      });
      return;
    }

    // Validate and verify response
    const validation = validateAndVerifyResponse(responseString);

    if (!validation.isValid || !validation.response) {
      res.status(400).json({
        success: false,
        error: validation.error || 'Invalid response',
        checksumVerified: false
      });
      return;
    }

    const { response, checksumVerified } = validation;

    // Find donation by order ID
    const donation = await Donation.findOne({ gatewayOrderId: response.orderId });

    if (!donation) {
      res.status(404).json({
        success: false,
        error: 'Donation not found'
      });
      return;
    }

    // Update donation with response data
    donation.transactionId = response.transactionId;
    donation.authStatus = response.authStatus;
    donation.bankReferenceNumber = response.bankReferenceNumber;
    donation.gatewayResponse = responseString;
    donation.checksumVerified = checksumVerified;

    // Update payment status based on auth status
    if (response.authStatus && isPaymentSuccessful(response.authStatus)) {
      donation.paymentStatus = PaymentStatus.SUCCESS;

      // If fellowship donation, update fellowship
      if (donation.fellowshipId) {
        const fellowship = await Fellowship.findById(donation.fellowshipId);
        if (fellowship) {
          fellowship.lastPaymentDate = new Date();
          fellowship.totalPaid += donation.amount;
          fellowship.totalPayments += 1;
          fellowship.donations.push(donation._id);
          await fellowship.save();
        }
      }

      // If campaign donation, update campaign
      if (donation.campaignId) {
        const campaign = await Campaign.findById(donation.campaignId);
        if (campaign) {
          campaign.raisedAmount += donation.amount;
          campaign.donorCount += 1;
          campaign.donations.push(donation._id);
          await campaign.save();
        }
      }
    } else {
      donation.paymentStatus = PaymentStatus.FAILED;
    }

    await donation.save();

    // Log transaction
    await Transaction.create({
      donationId: donation._id,
      transactionType: TransactionType.PAYMENT_RETURN,
      responsePayload: response,
      bdOrderId: response.orderId,
      bdTransactionId: response.transactionId,
      checksumReceived: response.checksum,
      checksumVerified,
      success: isPaymentSuccessful(response.authStatus || ''),
      ipAddress: req.ip
    });

    // Send email notification
    if (donation.paymentStatus === PaymentStatus.SUCCESS) {
      emailService.sendDonationSuccess({
        email: donation.email,
        donorName: donation.donorName,
        amount: donation.amount,
        currency: donation.currency,
        transactionId: response.transactionId || donation.gatewayOrderId || 'N/A',
        donationType: donation.donationType,
        receiptNumber: donation.receiptNumber
      }).catch(err => console.error('Failed to send success email:', err));
    } else {
      emailService.sendDonationFailed({
        email: donation.email,
        donorName: donation.donorName,
        amount: donation.amount,
        currency: donation.currency,
        reason: getPaymentStatusMessage(response.authStatus || '')
      }).catch(err => console.error('Failed to send failure email:', err));
    }

    // Redirect to frontend with status
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    const statusMessage = getPaymentStatusMessage(response.authStatus || '');

    if (donation.paymentStatus === PaymentStatus.SUCCESS) {
      res.redirect(
        `${frontendUrl}/donate/success?orderId=${response.orderId}&receiptNumber=${donation.receiptNumber}`
      );
    } else {
      res.redirect(
        `${frontendUrl}/donate/failed?orderId=${response.orderId}&message=${encodeURIComponent(statusMessage)}`
      );
    }
  } catch (error) {
    console.error('BillDesk return callback error:', error);
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    res.redirect(`${frontendUrl}/donate/failed?message=Processing%20error`);
  }
};

/**
 * Handle BillDesk webhook (server-to-server notification)
 */
export const handleBillDeskWebhook = async (req: Request, res: Response): Promise<void> => {
  try {
    const responseString = req.body.msg;

    if (!responseString) {
      res.status(400).json({
        success: false,
        error: 'No response data received'
      });
      return;
    }

    // Validate and verify response
    const validation = validateAndVerifyResponse(responseString);

    if (!validation.isValid || !validation.response) {
      res.status(400).json({
        success: false,
        error: validation.error || 'Invalid response'
      });
      return;
    }

    const { response, checksumVerified } = validation;

    // Find donation by order ID
    const donation = await Donation.findOne({ gatewayOrderId: response.orderId });

    if (!donation) {
      res.status(404).json({
        success: false,
        error: 'Donation not found'
      });
      return;
    }

    // Only update if not already processed
    if (donation.paymentStatus === PaymentStatus.PENDING) {
      donation.transactionId = response.transactionId;
      donation.authStatus = response.authStatus;
      donation.bankReferenceNumber = response.bankReferenceNumber;
      donation.gatewayResponse = responseString;
      donation.checksumVerified = checksumVerified;

      if (response.authStatus && isPaymentSuccessful(response.authStatus)) {
        donation.paymentStatus = PaymentStatus.SUCCESS;

        // Update fellowship if applicable
        if (donation.fellowshipId) {
          const fellowship = await Fellowship.findById(donation.fellowshipId);
          if (fellowship && !fellowship.donations.includes(donation._id)) {
            fellowship.lastPaymentDate = new Date();
            fellowship.totalPaid += donation.amount;
            fellowship.totalPayments += 1;
            fellowship.donations.push(donation._id);
            await fellowship.save();
          }
        }

        // Update campaign if applicable
        if (donation.campaignId) {
          const campaign = await Campaign.findById(donation.campaignId);
          if (campaign && !campaign.donations.includes(donation._id)) {
            campaign.raisedAmount += donation.amount;
            campaign.donorCount += 1;
            campaign.donations.push(donation._id);
            await campaign.save();
          }
        }
      } else {
        donation.paymentStatus = PaymentStatus.FAILED;
      }

      await donation.save();

      // Send email notification (only if we just processed the payment)
      if (donation.paymentStatus === PaymentStatus.SUCCESS) {
        emailService.sendDonationSuccess({
          email: donation.email,
          donorName: donation.donorName,
          amount: donation.amount,
          currency: donation.currency,
          transactionId: response.transactionId || donation.gatewayOrderId || 'N/A',
          donationType: donation.donationType,
          receiptNumber: donation.receiptNumber
        }).catch(err => console.error('Failed to send success email:', err));
      } else if (donation.paymentStatus === PaymentStatus.FAILED) {
        emailService.sendDonationFailed({
          email: donation.email,
          donorName: donation.donorName,
          amount: donation.amount,
          currency: donation.currency,
          reason: getPaymentStatusMessage(response.authStatus || '')
        }).catch(err => console.error('Failed to send failure email:', err));
      }
    }

    // Log transaction
    await Transaction.create({
      donationId: donation._id,
      transactionType: TransactionType.PAYMENT_WEBHOOK,
      responsePayload: response,
      bdOrderId: response.orderId,
      bdTransactionId: response.transactionId,
      checksumReceived: response.checksum,
      checksumVerified,
      success: isPaymentSuccessful(response.authStatus || ''),
      ipAddress: req.ip
    });

    res.json({
      success: true,
      message: 'Webhook processed successfully'
    });
  } catch (error) {
    console.error('BillDesk webhook error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process webhook'
    });
  }
};

/**
 * Get donation by ID
 */
export const getDonationById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const donation = await Donation.findById(id)
      .populate('addedBy', 'username email')
      .populate('approvedBy', 'username email')
      .populate('fellowshipId', 'subscriberName email');

    if (!donation) {
      res.status(404).json({
        success: false,
        error: 'Donation not found'
      });
      return;
    }

    res.json({
      success: true,
      donation
    });
  } catch (error) {
    console.error('Get donation error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch donation'
    });
  }
};

/**
 * List all donations with filters
 */
export const listDonations = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      status,
      donationType,
      isOffline,
      approvalStatus,
      startDate,
      endDate,
      page = 1,
      limit = 20
    } = req.query;

    const filter: any = {};

    if (status) filter.paymentStatus = status;
    if (donationType) filter.donationType = donationType;
    if (isOffline !== undefined) filter.isOffline = isOffline === 'true';
    if (approvalStatus) filter.approvalStatus = approvalStatus;

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
    console.error('List donations error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch donations'
    });
  }
};

/**
 * Get donation statistics
 */
export const getDonationStats = async (_req: Request, res: Response): Promise<void> => {
  try {
    const [
      totalDonations,
      successfulDonations,
      totalAmount,
      generalAmount,
      fellowshipAmount,
      campaignAmount
    ] = await Promise.all([
      Donation.countDocuments(),
      Donation.countDocuments({ paymentStatus: PaymentStatus.SUCCESS }),
      Donation.aggregate([
        { $match: { paymentStatus: PaymentStatus.SUCCESS } },
        { $group: { _id: null, total: { $sum: '$amount' } } }
      ]),
      Donation.aggregate([
        {
          $match: {
            paymentStatus: PaymentStatus.SUCCESS,
            donationType: DonationType.GENERAL
          }
        },
        { $group: { _id: null, total: { $sum: '$amount' } } }
      ]),
      Donation.aggregate([
        {
          $match: {
            paymentStatus: PaymentStatus.SUCCESS,
            donationType: DonationType.FELLOWSHIP
          }
        },
        { $group: { _id: null, total: { $sum: '$amount' } } }
      ]),
      Donation.aggregate([
        {
          $match: {
            paymentStatus: PaymentStatus.SUCCESS,
            donationType: DonationType.CAMPAIGN
          }
        },
        { $group: { _id: null, total: { $sum: '$amount' } } }
      ])
    ]);

    res.json({
      success: true,
      stats: {
        totalDonations,
        successfulDonations,
        totalAmount: totalAmount[0]?.total || 0,
        generalAmount: generalAmount[0]?.total || 0,
        fellowshipAmount: fellowshipAmount[0]?.total || 0,
        campaignAmount: campaignAmount[0]?.total || 0
      }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch statistics'
    });
  }
};
