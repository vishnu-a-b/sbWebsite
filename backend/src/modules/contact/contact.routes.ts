import express, { Request, Response, Router } from 'express';
import Contact, { IContactDocument } from './contact.model.js';

const router: Router = express.Router();

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  status?: 'new' | 'read' | 'replied';
}

// GET all contacts
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const contacts: IContactDocument[] = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch contacts' });
  }
});

// CREATE new contact
router.post('/', async (req: Request<{}, {}, ContactRequestBody>, res: Response): Promise<void> => {
  try {
    const contactData: ContactRequestBody = req.body;
    const newContact: IContactDocument = await Contact.create(contactData);
    res.status(201).json({ success: true, contact: newContact });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ success: false, error: 'Failed to create contact' });
  }
});

export default router;
