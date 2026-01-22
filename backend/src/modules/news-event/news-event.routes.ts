import express, { Request, Response, Router } from 'express';
import NewsEvent, { INewsEventDocument } from './news-event.model.js';

const router: Router = express.Router();

interface NewsEventRequestBody {
  title?: string;
  description?: string;
  fullContent?: string;
  eventDate?: Date;
  images?: string[];
  type?: 'news' | 'event';
  priority?: number;
  isActive?: boolean;
  startDate?: Date;
  expiryDate?: Date;
  showOnFirstFace?: boolean;
  isScheduled?: boolean;
  scheduledPublishDate?: Date;
}

// GET all news/events (with CMS filtering)
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const now = new Date();
    const { type } = req.query;

    const query: any = {
      isActive: true,
      startDate: { $lte: now },
      expiryDate: { $gte: now },
    };

    // Add scheduled publish date check
    query.$or = [
      { isScheduled: false },
      { isScheduled: true, scheduledPublishDate: { $lte: now } }
    ];

    // Filter by type if provided
    if (type && (type === 'news' || type === 'event')) {
      query.type = type;
    }

    const items: INewsEventDocument[] = await NewsEvent.find(query)
      .sort({ eventDate: -1, priority: -1 })
      .exec();

    res.json({ success: true, items });
  } catch (error) {
    console.error('Error fetching news/events:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch news/events' });
  }
});

// GET all news/events (admin - no filtering)
router.get('/admin', async (req: Request, res: Response): Promise<void> => {
  try {
    const { type } = req.query;
    const query: any = {};

    if (type && (type === 'news' || type === 'event')) {
      query.type = type;
    }

    const items: INewsEventDocument[] = await NewsEvent.find(query)
      .sort({ eventDate: -1, priority: -1 })
      .exec();

    res.json({ success: true, items });
  } catch (error) {
    console.error('Error fetching news/events:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch news/events' });
  }
});

// CREATE new news/event
router.post('/', async (req: Request<{}, {}, NewsEventRequestBody>, res: Response): Promise<void> => {
  try {
    const itemData: NewsEventRequestBody = req.body;
    const newItem: INewsEventDocument = await NewsEvent.create(itemData);
    res.status(201).json({ success: true, item: newItem });
  } catch (error) {
    console.error('Error creating news/event:', error);
    res.status(500).json({ success: false, error: 'Failed to create news/event' });
  }
});

// UPDATE news/event by ID
router.put('/:id', async (req: Request<{ id: string }, {}, NewsEventRequestBody>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData: NewsEventRequestBody = req.body;
    const updatedItem: INewsEventDocument | null = await NewsEvent.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedItem) {
      res.status(404).json({ success: false, error: 'News/Event not found' });
      return;
    }

    res.json({ success: true, item: updatedItem });
  } catch (error) {
    console.error('Error updating news/event:', error);
    res.status(500).json({ success: false, error: 'Failed to update news/event' });
  }
});

// DELETE news/event by ID
router.delete('/:id', async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedItem: INewsEventDocument | null = await NewsEvent.findByIdAndDelete(id);

    if (!deletedItem) {
      res.status(404).json({ success: false, error: 'News/Event not found' });
      return;
    }

    res.json({ success: true, message: 'News/Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting news/event:', error);
    res.status(500).json({ success: false, error: 'Failed to delete news/event' });
  }
});

// SEED default news & events
router.post('/seed', async (_req: Request, res: Response): Promise<void> => {
  try {
    // Clear existing news/events
    await NewsEvent.deleteMany({});

    const defaultItems = [
      {
        title: "Annual Health Camp 2024 - Registration Open",
        description: "Join us for our annual free health screening camp. Get comprehensive health check-ups, consultations, and health education.",
        fullContent: "We are excited to announce our Annual Health Camp 2024! This year's camp will be bigger and better, offering free health screenings, specialist consultations, and health education sessions. Register now to secure your spot.",
        eventDate: new Date('2026-03-15'),
        images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"],
        type: 'event' as const,
        priority: 10,
        isActive: true,
        startDate: new Date('2026-01-01'),
        expiryDate: new Date('2027-03-20'),
        isScheduled: false
      },
      {
        title: "Shanthibhavan Receives National Recognition",
        description: "Our hospital has been recognized by the National Palliative Care Association for excellence in compassionate care.",
        fullContent: "We are honored to receive the National Recognition Award from the Palliative Care Association of India. This recognition celebrates our commitment to providing dignified, compassionate care to all patients.",
        eventDate: new Date('2026-02-10'),
        images: ["https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800"],
        type: 'news' as const,
        priority: 9,
        isActive: true,
        startDate: new Date('2026-02-01'),
        expiryDate: new Date('2027-12-31'),
        isScheduled: false
      },
      {
        title: "New Solar-Powered Dialysis Wing Inaugurated",
        description: "Our new eco-friendly dialysis center powered entirely by solar energy is now operational, serving 40 patients daily.",
        fullContent: "The inauguration of our solar-powered dialysis wing marks a significant milestone in sustainable healthcare. This facility demonstrates our commitment to both patient care and environmental responsibility.",
        eventDate: new Date('2026-01-20'),
        images: ["https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"],
        type: 'news' as const,
        priority: 8,
        isActive: true,
        startDate: new Date('2026-01-15'),
        expiryDate: new Date('2027-12-31'),
        isScheduled: false
      },
      {
        title: "Palliative Care Training Workshop - March 2026",
        description: "Two-day intensive workshop for healthcare professionals and family caregivers. Learn essential palliative care skills.",
        fullContent: "Join our comprehensive Palliative Care Training Workshop designed for nurses, doctors, and family caregivers. This hands-on program covers pain management, symptom control, and compassionate communication.",
        eventDate: new Date('2026-03-25'),
        images: ["https://images.unsplash.com/photo-1582719471384-89d3bcfa2855?auto=format&fit=crop&q=80&w=800"],
        type: 'event' as const,
        priority: 7,
        isActive: true,
        startDate: new Date('2026-02-01'),
        expiryDate: new Date('2026-03-30'),
        isScheduled: false
      },
      {
        title: "Community Outreach Program Reaches 10,000 Patients",
        description: "Our mobile health clinics have successfully provided care to over 10,000 patients in rural areas.",
        fullContent: "We are proud to announce that our Community Health Outreach Program has reached a major milestone, serving over 10,000 patients across 50 villages in Thiruvananthapuram District.",
        eventDate: new Date('2026-01-05'),
        images: ["https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800"],
        type: 'news' as const,
        priority: 6,
        isActive: true,
        startDate: new Date('2026-01-01'),
        expiryDate: new Date('2027-12-31'),
        isScheduled: false
      },
      {
        title: "World Palliative Care Day Celebration",
        description: "Join us in celebrating World Palliative Care Day with special programs, awareness sessions, and community activities.",
        fullContent: "Mark your calendars for World Palliative Care Day! We'll be hosting awareness sessions, free consultations, and community activities to promote understanding of palliative care.",
        eventDate: new Date('2026-10-12'),
        images: ["https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800"],
        type: 'event' as const,
        priority: 5,
        isActive: true,
        startDate: new Date('2026-09-01'),
        expiryDate: new Date('2026-10-15'),
        isScheduled: false
      }
    ];

    await NewsEvent.insertMany(defaultItems);
    res.json({ success: true, message: 'News & Events seeded successfully', count: defaultItems.length });
  } catch (error) {
    console.error('Error seeding news/events:', error);
    res.status(500).json({ success: false, error: 'Failed to seed news/events' });
  }
});

export default router;
