import express, { Request, Response, Router } from 'express';
import Gallery, { IGalleryDocument } from './gallery.model.js';

const router: Router = express.Router();

interface GalleryRequestBody {
  imageUrl?: string;
  altText?: string;
  category?: string;
  priority?: number;
  isActive?: boolean;
}

// GET all gallery images (public - only active)
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const images: IGalleryDocument[] = await Gallery.find({ isActive: true })
      .sort({ priority: -1, createdAt: -1 })
      .exec();

    res.json({ success: true, images });
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch gallery images' });
  }
});

// GET all gallery images (admin - no filtering)
router.get('/admin', async (_req: Request, res: Response): Promise<void> => {
  try {
    const images: IGalleryDocument[] = await Gallery.find()
      .sort({ priority: -1, createdAt: -1 })
      .exec();

    res.json({ success: true, images });
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch gallery images' });
  }
});

// GET single gallery image
router.get('/:id', async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const image: IGalleryDocument | null = await Gallery.findById(id);

    if (!image) {
      res.status(404).json({ success: false, error: 'Gallery image not found' });
      return;
    }

    res.json({ success: true, image });
  } catch (error) {
    console.error('Error fetching gallery image:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch gallery image' });
  }
});

// CREATE new gallery image
router.post('/', async (req: Request<{}, {}, GalleryRequestBody>, res: Response): Promise<void> => {
  try {
    const imageData: GalleryRequestBody = req.body;
    const newImage: IGalleryDocument = await Gallery.create(imageData);
    res.status(201).json({ success: true, image: newImage });
  } catch (error) {
    console.error('Error creating gallery image:', error);
    res.status(500).json({ success: false, error: 'Failed to create gallery image' });
  }
});

// UPDATE gallery image by ID
router.put('/:id', async (req: Request<{ id: string }, {}, GalleryRequestBody>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData: GalleryRequestBody = req.body;
    const updatedImage: IGalleryDocument | null = await Gallery.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedImage) {
      res.status(404).json({ success: false, error: 'Gallery image not found' });
      return;
    }

    res.json({ success: true, image: updatedImage });
  } catch (error) {
    console.error('Error updating gallery image:', error);
    res.status(500).json({ success: false, error: 'Failed to update gallery image' });
  }
});

// DELETE gallery image by ID
router.delete('/:id', async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedImage: IGalleryDocument | null = await Gallery.findByIdAndDelete(id);

    if (!deletedImage) {
      res.status(404).json({ success: false, error: 'Gallery image not found' });
      return;
    }

    res.json({ success: true, message: 'Gallery image deleted successfully' });
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    res.status(500).json({ success: false, error: 'Failed to delete gallery image' });
  }
});

export default router;
