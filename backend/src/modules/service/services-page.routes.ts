import express, { Request, Response, Router } from 'express';
import ServicesPage from './services-page.model.js';

const router: Router = express.Router();

// GET page content
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    let page = await ServicesPage.findOne().sort({ createdAt: -1 });
    if (!page) {
      res.json(null);
      return;
    }
    res.json(page);
  } catch (error) {
    console.error('Error fetching services page content:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch content' });
  }
});

// UPDATE or CREATE (Singleton)
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    
    let page = await ServicesPage.findOne();
    
    if (page) {
      page = await ServicesPage.findByIdAndUpdate(page._id, data, { new: true });
    } else {
      page = await ServicesPage.create(data);
    }
    
    res.json({ success: true, data: page });
  } catch (error) {
    console.error('Error saving services page content:', error);
    res.status(500).json({ success: false, error: 'Failed to save content' });
  }
});

// SEED default content
router.post('/seed', async (_req: Request, res: Response): Promise<void> => {
  try {
    const count = await ServicesPage.countDocuments();
    if (count > 0) {
      res.json({ success: true, message: 'Content already exists' });
      return;
    }

    const defaultContent = {
      heroTitle: 'Our Services',
      heroSubtitle: '"For the people, by the people." All our services are provided completely free of charge, with no bills and no counters.',
      helperTitle: 'No Barriers to Care',
      helperDescription: 'There are no barriers of religion, caste, or creed. Everyone is equal here. If you need relief from pain or support during terminal illness, our doors are always open.',
      ctaButtonText: 'Contact Us',
      ctaLink: '/contact'
    };

    await ServicesPage.create(defaultContent);
    res.json({ success: true, message: 'Seeded default services page content' });
  } catch (error) {
    console.error('Error seeding services page content:', error);
    res.status(500).json({ success: false, error: 'Failed to seed content' });
  }
});

export default router;
