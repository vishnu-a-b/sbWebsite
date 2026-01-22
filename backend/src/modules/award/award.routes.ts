import express, { Request, Response, Router } from 'express';
import Award, { IAwardDocument } from './award.model.js';

const router: Router = express.Router();

interface AwardRequestBody {
  title?: string;
  awardingAuthority?: string;
  year?: number;
  description?: string;
  image?: string;
  priority?: number;
  isActive?: boolean;
  startDate?: Date;
  expiryDate?: Date;
  showOnFirstFace?: boolean;
}

// GET all awards (with CMS filtering)
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const now = new Date();
    const awards: IAwardDocument[] = await Award.find({
      isActive: true,
      startDate: { $lte: now },
      expiryDate: { $gte: now },
    })
      .sort({ year: -1, priority: -1 })
      .exec();

    res.json({ success: true, awards });
  } catch (error) {
    console.error('Error fetching awards:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch awards' });
  }
});

// GET all awards (admin - no filtering)
router.get('/admin', async (_req: Request, res: Response): Promise<void> => {
  try {
    const awards: IAwardDocument[] = await Award.find()
      .sort({ year: -1, priority: -1 })
      .exec();

    res.json({ success: true, awards });
  } catch (error) {
    console.error('Error fetching awards:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch awards' });
  }
});

// CREATE new award
router.post('/', async (req: Request<{}, {}, AwardRequestBody>, res: Response): Promise<void> => {
  try {
    const awardData: AwardRequestBody = req.body;
    const newAward: IAwardDocument = await Award.create(awardData);
    res.status(201).json({ success: true, award: newAward });
  } catch (error) {
    console.error('Error creating award:', error);
    res.status(500).json({ success: false, error: 'Failed to create award' });
  }
});

// UPDATE award by ID
router.put('/:id', async (req: Request<{ id: string }, {}, AwardRequestBody>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData: AwardRequestBody = req.body;
    const updatedAward: IAwardDocument | null = await Award.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedAward) {
      res.status(404).json({ success: false, error: 'Award not found' });
      return;
    }

    res.json({ success: true, award: updatedAward });
  } catch (error) {
    console.error('Error updating award:', error);
    res.status(500).json({ success: false, error: 'Failed to update award' });
  }
});

// DELETE award by ID
router.delete('/:id', async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedAward: IAwardDocument | null = await Award.findByIdAndDelete(id);

    if (!deletedAward) {
      res.status(404).json({ success: false, error: 'Award not found' });
      return;
    }

    res.json({ success: true, message: 'Award deleted successfully' });
  } catch (error) {
    console.error('Error deleting award:', error);
    res.status(500).json({ success: false, error: 'Failed to delete award' });
  }
});

// SEED default awards
router.post('/seed', async (_req: Request, res: Response): Promise<void> => {
  try {
    // Clear existing awards
    await Award.deleteMany({});

    const defaultAwards = [
      {
        title: "Excellence in Palliative Care Award",
        awardingAuthority: "Kerala State Health Department",
        year: 2024,
        description: "Recognized for outstanding contribution to palliative care services and community health initiatives in Kerala.",
        image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800",
        priority: 10,
        isActive: true,
        startDate: new Date('2024-01-01'),
        expiryDate: new Date('2026-12-31')
      },
      {
        title: "Best No-Bill Hospital Award",
        awardingAuthority: "Indian Medical Association",
        year: 2023,
        description: "Honored as the best no-bill hospital in India for providing free healthcare services to underserved communities.",
        image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?auto=format&fit=crop&q=80&w=800",
        priority: 9,
        isActive: true,
        startDate: new Date('2023-01-01'),
        expiryDate: new Date('2026-12-31')
      },
      {
        title: "Community Service Excellence",
        awardingAuthority: "Thiruvananthapuram District Administration",
        year: 2023,
        description: "Awarded for exceptional community service and impact on public health in Thiruvananthapuram District.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
        priority: 8,
        isActive: true,
        startDate: new Date('2023-01-01'),
        expiryDate: new Date('2026-12-31')
      },
      {
        title: "Green Healthcare Initiative Award",
        awardingAuthority: "Ministry of Environment",
        year: 2022,
        description: "Recognized for implementing solar-powered healthcare facilities and sustainable medical practices.",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
        priority: 7,
        isActive: true,
        startDate: new Date('2022-01-01'),
        expiryDate: new Date('2026-12-31')
      },
      {
        title: "Compassionate Care Award",
        awardingAuthority: "National Palliative Care Association",
        year: 2022,
        description: "Honored for demonstrating exceptional compassion and dignity in end-of-life care services.",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800",
        priority: 6,
        isActive: true,
        startDate: new Date('2022-01-01'),
        expiryDate: new Date('2026-12-31')
      },
      {
        title: "Healthcare Innovation Award",
        awardingAuthority: "Indian Healthcare Federation",
        year: 2021,
        description: "Awarded for innovative approaches to palliative care delivery and community health programs.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
        priority: 5,
        isActive: true,
        startDate: new Date('2021-01-01'),
        expiryDate: new Date('2026-12-31')
      }
    ];

    await Award.insertMany(defaultAwards);
    res.json({ success: true, message: 'Awards seeded successfully', count: defaultAwards.length });
  } catch (error) {
    console.error('Error seeding awards:', error);
    res.status(500).json({ success: false, error: 'Failed to seed awards' });
  }
});

export default router;
