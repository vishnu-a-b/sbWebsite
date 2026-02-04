import express, { Request, Response, Router } from 'express';
import { Footer } from './footer.model.js';

const router: Router = express.Router();

// GET Footer Content
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    let footer = await Footer.findOne().sort({ createdAt: -1 });
    if (!footer) {
      // Create default footer if none exists
      footer = await Footer.create({});
    }
    res.json(footer);
  } catch (error) {
    console.error('Error fetching footer content:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch footer content' });
  }
});

// UPDATE or CREATE Footer Content
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { _id, ...data } = req.body; // Exclude _id from update data
    let footer = await Footer.findOne();

    if (footer) {
      footer = await Footer.findByIdAndUpdate(footer._id, data, { new: true });
    } else {
      footer = await Footer.create(data);
    }

    res.json({ success: true, data: footer });
  } catch (error) {
    console.error('Error saving footer content:', error);
    res.status(500).json({ success: false, error: 'Failed to save footer content' });
  }
});

// SEED Footer Content
router.post('/seed', async (_req: Request, res: Response): Promise<void> => {
  try {
    await Footer.deleteMany({});

    const defaultContent = {
      address: 'Golden Hills, P.O, near to PMS Dental College, Venkode, Vattappara, Thiruvananthapuram, Kerala 695028',
      phone: '+91 9142653804',
      email: 'office@shanthibhavan.in',
      description: 'India\'s first no-bill palliative hospital. Providing compassionate care with dignity and love. A beacon of hope for those in need.',
      facebook: 'https://facebook.com/shanthibhavan',
      instagram: 'https://instagram.com/shanthibhavan',
      youtube: 'https://youtube.com/@shanthibhavan',
      twitter: '',
      linkedin: '',
      whatsapp: '+919142653804',
      copyrightText: 'Shanthibhavan Palliative Hospital. All rights reserved.',
    };

    const footer = await Footer.create(defaultContent);
    res.json({ success: true, message: 'Seeded footer content', data: footer });
  } catch (error) {
    console.error('Error seeding footer content:', error);
    res.status(500).json({ success: false, error: 'Failed to seed footer content' });
  }
});

export default router;
