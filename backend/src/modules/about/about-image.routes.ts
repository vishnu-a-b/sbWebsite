import express, { Request, Response, Router } from 'express';
import AboutImage, { IAboutImageDocument } from './about-image.model.js';

const router: Router = express.Router();

interface AboutImageRequestBody {
  imageUrl?: string;
  altText?: string;
}

// GET active about image
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const aboutImage: IAboutImageDocument | null = await AboutImage.findOne({ isActive: true });
    res.json(aboutImage);
  } catch (error) {
    console.error('Error fetching about image:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch about image' });
  }
});

// CREATE or UPDATE about image
router.post('/', async (req: Request<{}, {}, AboutImageRequestBody>, res: Response): Promise<void> => {
  try {
    const imageData: AboutImageRequestBody = req.body;

    // Deactivate all existing images
    await AboutImage.updateMany({}, { isActive: false });

    // Create new active image
    const newImage: IAboutImageDocument = await AboutImage.create({ ...imageData, isActive: true });
    res.status(201).json({ success: true, image: newImage });
  } catch (error) {
    console.error('Error creating about image:', error);
    res.status(500).json({ success: false, error: 'Failed to create about image' });
  }
});

export default router;
