import express, { Request, Response, Router } from 'express';
import Volunteer, { IVolunteerDocument } from './volunteer.model.js';

const router: Router = express.Router();

interface VolunteerRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  message?: string;
  status?: 'pending' | 'approved' | 'rejected';
}

// GET all volunteers
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const volunteers: IVolunteerDocument[] = await Volunteer.find().sort({ createdAt: -1 });
    res.json(volunteers);
  } catch (error) {
    console.error('Error fetching volunteers:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch volunteers' });
  }
});

// CREATE new volunteer
router.post('/', async (req: Request<{}, {}, VolunteerRequestBody>, res: Response): Promise<void> => {
  try {
    const volunteerData: VolunteerRequestBody = req.body;
    const newVolunteer: IVolunteerDocument = await Volunteer.create(volunteerData);
    res.status(201).json({ success: true, volunteer: newVolunteer });
  } catch (error) {
    console.error('Error creating volunteer:', error);
    res.status(500).json({ success: false, error: 'Failed to create volunteer' });
  }
});

export default router;
