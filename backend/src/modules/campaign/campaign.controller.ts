import { Request, Response } from 'express';
import Campaign, { CampaignStatus } from './campaign.model.js';

// Get all active campaigns (public)
export const getActiveCampaigns = async (_req: Request, res: Response): Promise<void> => {
  try {
    const campaigns = await Campaign.find({ status: CampaignStatus.ACTIVE })
      .select('title slug shortDescription image goalAmount raisedAmount donorCount startDate endDate isFeatured')
      .sort({ isFeatured: -1, createdAt: -1 });

    res.json({ success: true, campaigns });
  } catch (error) {
    console.error('Get campaigns error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch campaigns' });
  }
};

// Get campaign by slug (public)
export const getCampaignBySlug = async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug } = req.params;

    const campaign = await Campaign.findOne({ slug, status: CampaignStatus.ACTIVE })
      .select('-donations -createdBy');

    if (!campaign) {
      res.status(404).json({ success: false, error: 'Campaign not found' });
      return;
    }

    res.json({ success: true, campaign });
  } catch (error) {
    console.error('Get campaign error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch campaign' });
  }
};

// Get featured campaigns (public)
export const getFeaturedCampaigns = async (_req: Request, res: Response): Promise<void> => {
  try {
    const campaigns = await Campaign.find({
      status: CampaignStatus.ACTIVE,
      isFeatured: true
    })
      .select('title slug shortDescription image goalAmount raisedAmount donorCount')
      .limit(3)
      .sort({ createdAt: -1 });

    res.json({ success: true, campaigns });
  } catch (error) {
    console.error('Get featured campaigns error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch campaigns' });
  }
};

// Admin: Create campaign
export const createCampaign = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.admin) {
      res.status(401).json({ success: false, error: 'Authentication required' });
      return;
    }

    const {
      title,
      slug,
      description,
      shortDescription,
      image,
      goalAmount,
      startDate,
      endDate,
      isFeatured
    } = req.body;

    if (!title || !slug || !description || !goalAmount || !startDate) {
      res.status(400).json({
        success: false,
        error: 'Title, slug, description, goal amount, and start date are required'
      });
      return;
    }

    // Check if slug already exists
    const existingCampaign = await Campaign.findOne({ slug: slug.toLowerCase() });
    if (existingCampaign) {
      res.status(400).json({ success: false, error: 'Campaign with this slug already exists' });
      return;
    }

    const campaign = await Campaign.create({
      title,
      slug: slug.toLowerCase().replace(/\s+/g, '-'),
      description,
      shortDescription,
      image,
      goalAmount,
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : undefined,
      isFeatured: isFeatured || false,
      status: CampaignStatus.DRAFT,
      createdBy: req.admin._id
    });

    res.status(201).json({ success: true, campaign });
  } catch (error) {
    console.error('Create campaign error:', error);
    res.status(500).json({ success: false, error: 'Failed to create campaign' });
  }
};

// Admin: List all campaigns
export const listCampaigns = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, page = '1', limit = '20' } = req.query;

    const query: Record<string, unknown> = {};
    if (status && Object.values(CampaignStatus).includes(status as CampaignStatus)) {
      query.status = status;
    }

    const pageNum = parseInt(page as string, 10) || 1;
    const limitNum = Math.min(parseInt(limit as string, 10) || 20, 100);
    const skip = (pageNum - 1) * limitNum;

    const [campaigns, total] = await Promise.all([
      Campaign.find(query)
        .populate('createdBy', 'username')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limitNum),
      Campaign.countDocuments(query)
    ]);

    res.json({
      success: true,
      campaigns,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum)
      }
    });
  } catch (error) {
    console.error('List campaigns error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch campaigns' });
  }
};

// Admin: Get campaign by ID
export const getCampaignById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const campaign = await Campaign.findById(id)
      .populate('createdBy', 'username')
      .populate('donations');

    if (!campaign) {
      res.status(404).json({ success: false, error: 'Campaign not found' });
      return;
    }

    res.json({ success: true, campaign });
  } catch (error) {
    console.error('Get campaign error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch campaign' });
  }
};

// Admin: Update campaign
export const updateCampaign = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Don't allow updating certain fields
    delete updates.raisedAmount;
    delete updates.donorCount;
    delete updates.donations;
    delete updates.createdBy;

    // Handle slug update
    if (updates.slug) {
      updates.slug = updates.slug.toLowerCase().replace(/\s+/g, '-');
      const existingCampaign = await Campaign.findOne({
        slug: updates.slug,
        _id: { $ne: id }
      });
      if (existingCampaign) {
        res.status(400).json({ success: false, error: 'Campaign with this slug already exists' });
        return;
      }
    }

    const campaign = await Campaign.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );

    if (!campaign) {
      res.status(404).json({ success: false, error: 'Campaign not found' });
      return;
    }

    res.json({ success: true, campaign });
  } catch (error) {
    console.error('Update campaign error:', error);
    res.status(500).json({ success: false, error: 'Failed to update campaign' });
  }
};

// Admin: Update campaign status
export const updateCampaignStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !Object.values(CampaignStatus).includes(status)) {
      res.status(400).json({ success: false, error: 'Valid status is required' });
      return;
    }

    const campaign = await Campaign.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!campaign) {
      res.status(404).json({ success: false, error: 'Campaign not found' });
      return;
    }

    res.json({ success: true, campaign, message: `Campaign status updated to ${status}` });
  } catch (error) {
    console.error('Update campaign status error:', error);
    res.status(500).json({ success: false, error: 'Failed to update campaign status' });
  }
};

// Admin: Delete campaign
export const deleteCampaign = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const campaign = await Campaign.findById(id);
    if (!campaign) {
      res.status(404).json({ success: false, error: 'Campaign not found' });
      return;
    }

    // Don't allow deleting campaigns with donations
    if (campaign.donorCount > 0) {
      res.status(400).json({
        success: false,
        error: 'Cannot delete campaign with donations. Mark as cancelled instead.'
      });
      return;
    }

    await Campaign.findByIdAndDelete(id);

    res.json({ success: true, message: 'Campaign deleted successfully' });
  } catch (error) {
    console.error('Delete campaign error:', error);
    res.status(500).json({ success: false, error: 'Failed to delete campaign' });
  }
};

// Get campaign stats
export const getCampaignStats = async (_req: Request, res: Response): Promise<void> => {
  try {
    const stats = await Campaign.aggregate([
      {
        $facet: {
          byStatus: [
            { $group: { _id: '$status', count: { $sum: 1 } } }
          ],
          overall: [
            {
              $group: {
                _id: null,
                totalCampaigns: { $sum: 1 },
                totalRaised: { $sum: '$raisedAmount' },
                totalDonors: { $sum: '$donorCount' },
                totalGoal: { $sum: '$goalAmount' }
              }
            }
          ],
          active: [
            { $match: { status: CampaignStatus.ACTIVE } },
            {
              $group: {
                _id: null,
                activeCount: { $sum: 1 },
                activeRaised: { $sum: '$raisedAmount' },
                activeGoal: { $sum: '$goalAmount' }
              }
            }
          ]
        }
      }
    ]);

    const byStatus: Record<string, number> = {};
    stats[0].byStatus.forEach((item: { _id: string; count: number }) => {
      byStatus[item._id] = item.count;
    });

    const overall = stats[0].overall[0] || {
      totalCampaigns: 0,
      totalRaised: 0,
      totalDonors: 0,
      totalGoal: 0
    };

    const active = stats[0].active[0] || {
      activeCount: 0,
      activeRaised: 0,
      activeGoal: 0
    };

    res.json({
      success: true,
      stats: {
        byStatus,
        ...overall,
        ...active,
        completionRate: overall.totalGoal > 0
          ? Math.round((overall.totalRaised / overall.totalGoal) * 100)
          : 0
      }
    });
  } catch (error) {
    console.error('Campaign stats error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch campaign statistics' });
  }
};
