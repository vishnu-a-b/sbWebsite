import express, { Request, Response, Router } from 'express';
import HomeSection, { IHomeSectionDocument } from './home-section.model.js';

const router: Router = express.Router();

interface HomeSectionRequestBody {
  sectionName?: string;
  sectionType?: 'hero' | 'about' | 'services' | 'projects' | 'awards' | 'news' | 'donation' | 'cta';
  title?: string;
  subtitle?: string;
  content?: string;
  ctaText?: string;
  ctaLink?: string;
  priority?: number;
  isActive?: boolean;
  isFirstFace?: boolean;
  startDate?: Date;
  expiryDate?: Date;
}

// GET all homepage sections (with CMS filtering)
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const now = new Date();
    const sections: IHomeSectionDocument[] = await HomeSection.find({
      isActive: true,
      startDate: { $lte: now },
      expiryDate: { $gte: now },
    })
      .sort({ priority: -1, createdAt: -1 })
      .exec();

    res.json({ success: true, sections });
  } catch (error) {
    console.error('Error fetching homepage sections:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch homepage sections' });
  }
});

// GET all homepage sections (admin - no filtering)
router.get('/admin', async (_req: Request, res: Response): Promise<void> => {
  try {
    const sections: IHomeSectionDocument[] = await HomeSection.find()
      .sort({ priority: -1, createdAt: -1 })
      .exec();

    res.json({ success: true, sections });
  } catch (error) {
    console.error('Error fetching homepage sections:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch homepage sections' });
  }
});

// CREATE new homepage section
router.post('/', async (req: Request<{}, {}, HomeSectionRequestBody>, res: Response): Promise<void> => {
  try {
    const sectionData: HomeSectionRequestBody = req.body;
    const newSection: IHomeSectionDocument = await HomeSection.create(sectionData);
    res.status(201).json({ success: true, section: newSection });
  } catch (error) {
    console.error('Error creating homepage section:', error);
    res.status(500).json({ success: false, error: 'Failed to create homepage section' });
  }
});

// UPDATE homepage section by ID
router.put('/:id', async (req: Request<{ id: string }, {}, HomeSectionRequestBody>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData: HomeSectionRequestBody = req.body;
    const updatedSection: IHomeSectionDocument | null = await HomeSection.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedSection) {
      res.status(404).json({ success: false, error: 'Homepage section not found' });
      return;
    }

    res.json({ success: true, section: updatedSection });
  } catch (error) {
    console.error('Error updating homepage section:', error);
    res.status(500).json({ success: false, error: 'Failed to update homepage section' });
  }
});

// DELETE homepage section by ID
router.delete('/:id', async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedSection: IHomeSectionDocument | null = await HomeSection.findByIdAndDelete(id);

    if (!deletedSection) {
      res.status(404).json({ success: false, error: 'Homepage section not found' });
      return;
    }

    res.json({ success: true, message: 'Homepage section deleted successfully' });
  } catch (error) {
    console.error('Error deleting homepage section:', error);
    res.status(500).json({ success: false, error: 'Failed to delete homepage section' });
  }
});

export default router;
