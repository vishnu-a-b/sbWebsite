import express, { Request, Response, Router } from 'express';
import Banner, { IBannerDocument } from './banner.model.js';

const router: Router = express.Router();

interface BannerRequestBody {
  title?: string;
  description?: string;
  subtitle?: string;
  mediaType?: 'image' | 'video';
  imageUrl?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  order?: number;
  isActive?: boolean;
}

// SEED default banners
router.post('/seed', async (_req: Request, res: Response): Promise<void> => {
  try {
    const benevityCount = await Banner.countDocuments({ location: 'benevity' });
    if (benevityCount > 0) {
      res.json({ success: true, message: 'Benevity banners already exist', count: benevityCount });
      return;
    }

    const defaultBanners = [
      {
        title: 'Double Your Impact',
        subtitle: 'Benevity Corporate Matching',
        description: 'Your donation can go twice as far. Many companies match employee contributions dollar for dollar.',
        imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2000&auto=format&fit=crop',
        mediaType: 'image',
        ctaText: 'Find Us on Benevity',
        ctaLink: 'https://causes.benevity.org/',
        location: 'benevity',
        order: 1,
        isActive: true,
        startDate: new Date(),
        expiryDate: new Date(new Date().setFullYear(new Date().getFullYear() + 10)), // 10 years
        showOnFirstFace: true
      },
      {
        title: 'Workplace Giving',
        subtitle: 'Easy & Tax Efficient',
        description: 'Donate directly from your payroll with instant tax receipts and complete transparency.',
        imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop',
        mediaType: 'image',
        ctaText: 'Find Us on Benevity',
        ctaLink: 'https://causes.benevity.org/',
        location: 'benevity',
        order: 2,
        isActive: true,
        startDate: new Date(),
        expiryDate: new Date(new Date().setFullYear(new Date().getFullYear() + 10)),
        showOnFirstFace: true
      },
      {
        title: 'Global Community',
        subtitle: 'Supporting Shanthibhavan',
        description: 'Join a global network of corporate heroes making a difference in palliative care.',
        imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop',
        mediaType: 'image',
        ctaText: 'Find Us on Benevity',
        ctaLink: 'https://causes.benevity.org/',
        location: 'benevity',
        order: 3,
        isActive: true,
        startDate: new Date(),
        expiryDate: new Date(new Date().setFullYear(new Date().getFullYear() + 10)),
        showOnFirstFace: true
      }
    ];

    await Banner.insertMany(defaultBanners);
    res.json({ success: true, message: 'Seeded default Benevity banners', count: defaultBanners.length });
  } catch (error) {
    console.error('Error seeding banners:', error);
    res.status(500).json({ success: false, error: 'Failed to seed banners' });
  }
});

// GET all active banners
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const location = req.query.location as string;
    const filter: any = { isActive: true };
    if (location) {
      filter.location = location;
    }
    
    // If no location specified, maybe return all? 
    // Or if we want to restrict homepage to 'home', we should default to 'home' if client doesn't specify?
    // But admin might use this? Admin usually has separate route or uses this?
    // If this is public API, let's allow filtering.
    
    const banners: IBannerDocument[] = await Banner.find(filter).sort({ order: 1 });
    res.json({ success: true, banners });
  } catch (error) {
    console.error('Error fetching banners:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch banners' });
  }
});

// CREATE new banner
router.post('/', async (req: Request<{}, {}, BannerRequestBody>, res: Response): Promise<void> => {
  try {
    const bannerData: BannerRequestBody = req.body;
    const newBanner: IBannerDocument = await Banner.create(bannerData);
    res.status(201).json({ success: true, banner: newBanner });
  } catch (error) {
    console.error('Error creating banner:', error);
    res.status(500).json({ success: false, error: 'Failed to create banner' });
  }
});

// UPDATE banner by ID
router.patch('/:id', async (req: Request<{ id: string }, {}, BannerRequestBody>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData: BannerRequestBody = req.body;
    const updatedBanner: IBannerDocument | null = await Banner.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedBanner) {
      res.status(404).json({ success: false, error: 'Banner not found' });
      return;
    }

    res.json({ success: true, banner: updatedBanner });
  } catch (error) {
    console.error('Error updating banner:', error);
    res.status(500).json({ success: false, error: 'Failed to update banner' });
  }
});

// DELETE banner by ID
router.delete('/:id', async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedBanner: IBannerDocument | null = await Banner.findByIdAndDelete(id);

    if (!deletedBanner) {
      res.status(404).json({ success: false, error: 'Banner not found' });
      return;
    }

    res.json({ success: true, message: 'Banner deleted successfully' });
  } catch (error) {
    console.error('Error deleting banner:', error);
    res.status(500).json({ success: false, error: 'Failed to delete banner' });
  }
});

export default router;
