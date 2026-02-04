import express, { Request, Response, Router } from 'express';
import About from './about.model.js';

const router: Router = express.Router();

// GET about content
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    let about = await About.findOne().sort({ createdAt: -1 });
    if (!about) {
      // Return empty structure or null
      res.json(null);
      return;
    }
    res.json(about);
  } catch (error) {
    console.error('Error fetching about content:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch about content' });
  }
});

// UPDATE or CREATE about content (Singleton pattern)
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    
    // Check if exists
    let about = await About.findOne();
    
    if (about) {
      // Update existing
      about = await About.findByIdAndUpdate(about._id, data, { new: true });
    } else {
      // Create new
      about = await About.create(data);
    }
    
    res.json({ success: true, data: about });
  } catch (error) {
    console.error('Error saving about content:', error);
    res.status(500).json({ success: false, error: 'Failed to save about content' });
  }
});

// SEED default content
router.post('/seed', async (_req: Request, res: Response): Promise<void> => {
  try {
    await About.deleteMany({}); // Clear existing to allow re-seed
    const count = await About.countDocuments();
    if (count > 0) {
      res.json({ success: true, message: 'About content already exists' });
      return;
    }

    const defaultContent = {
      heroTitle: 'About Us',
      heroSubtitle: "For the people, by the people. India's first palliative hospital without bills or bill counters.",
      storyTitle: 'Our Story',
      storyDescription: `Shanthibhavan Palliative Hospital, located at Golden Hills, Venkode, Vattappara, Thiruvananthapuram, Kerala, stands as India's First Palliative Hospital. Operating as a division of the Franciscan Sisters of St. Clare Charitable Trust, the hospital was established with the blessings of Mar Andrews Thazhath, Archbishop of Thrissur, and co-founded by Rev. Father Joy Koothur, Sr. Beatrice Scalinci, and Sr. Maria Chiara.

The hospital is a beacon of hope for the vulnerable, equipped with 49 beds, centralized oxygen systems, ICU with ventilator facilities, and a solar-powered dialysis unit. It operates as a "No-Bill" hospital—meaning there are no bills and no cash counters. Every service, from medical care to food and accommodation, is provided completely free of charge to registered patients.

Our mission extends beyond hospital walls with 15 home care vehicles serving Thiruvananthapuram District, providing 24/7 emergency home care, free ambulance services, and comprehensive palliative support to those who need it most.`,
      storyImage: 'https://shanthibhavan.in/images/banner/5b56c7058a275.jpeg',
      // Home page about section
      homeTitle: 'The First Palliative Hospital in India',
      homeBadge: 'Established 1993',
      homeIntro: 'Shanthibhavan Palliative Hospital operates as a division of the Franciscan Sisters of St. Clare Charitable Trust.',
      homeDescription: 'We function as a no-bill hospital with 49 beds, providing comprehensive palliative care without bills and cash counters. Our aim is to improve the quality of life of people with life-limiting or disabling diseases.',
      homeImage: 'https://shanthibhavan.in/images/products/5b46fcb5b0482.jpeg',
      homeButtonText: 'Learn More About Us',
      homeButtonLink: '/about',
      mission: {
        title: 'Our Mission',
        description: 'To improve the quality of life for palliative bedridden patients, offering relief from pain and symptoms regardless of religion, caste, or creed.'
      },
      vision: {
        title: 'Our Vision',
        description: 'To become a general hospital providing emergency care and casualty services to all nearby people, supported entirely by public donations.'
      },
      motto: {
        title: 'Our Motto',
        description: '"For the people, by the people." We combine psychological and spiritual care to help people live as actively as possible until death.'
      },
      belief: {
        title: 'Our Belief',
        description: 'Every life is precious. There are no barriers here—everyone is equal. Shanthibhavan is a light of compassion, kindness, and eternal love.'
      }
    };

    await About.create(defaultContent);
    res.json({ success: true, message: 'Seeded default about content' });
  } catch (error) {
    console.error('Error seeding about content:', error);
    res.status(500).json({ success: false, error: 'Failed to seed about content' });
  }
});

export default router;
