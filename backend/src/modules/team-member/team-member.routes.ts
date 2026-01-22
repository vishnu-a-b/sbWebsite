import express, { Request, Response, Router } from 'express';
import TeamMember, { ITeamMemberDocument } from './team-member.model.js';

const router: Router = express.Router();

interface TeamMemberRequestBody {
  name?: string;
  role?: string;
  designation?: string;
  bio?: string;
  image?: string;
  specialization?: string;
  experience?: number;
  priority?: number;
  isActive?: boolean;
  startDate?: Date;
  expiryDate?: Date;
  showOnAboutPage?: boolean;
}

// GET all team members (with CMS filtering)
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const now = new Date();
    const members: ITeamMemberDocument[] = await TeamMember.find({
      isActive: true,
      startDate: { $lte: now },
      expiryDate: { $gte: now },
    })
      .sort({ priority: -1, createdAt: -1 })
      .exec();

    res.json({ success: true, members });
  } catch (error) {
    console.error('Error fetching team members:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch team members' });
  }
});

// GET all team members (admin - no filtering)
router.get('/admin', async (_req: Request, res: Response): Promise<void> => {
  try {
    const members: ITeamMemberDocument[] = await TeamMember.find()
      .sort({ priority: -1, createdAt: -1 })
      .exec();

    res.json({ success: true, members });
  } catch (error) {
    console.error('Error fetching team members:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch team members' });
  }
});

// CREATE new team member
router.post('/', async (req: Request<{}, {}, TeamMemberRequestBody>, res: Response): Promise<void> => {
  try {
    const memberData: TeamMemberRequestBody = req.body;
    const newMember: ITeamMemberDocument = await TeamMember.create(memberData);
    res.status(201).json({ success: true, member: newMember });
  } catch (error) {
    console.error('Error creating team member:', error);
    res.status(500).json({ success: false, error: 'Failed to create team member' });
  }
});

// UPDATE team member by ID
router.put('/:id', async (req: Request<{ id: string }, {}, TeamMemberRequestBody>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData: TeamMemberRequestBody = req.body;
    const updatedMember: ITeamMemberDocument | null = await TeamMember.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedMember) {
      res.status(404).json({ success: false, error: 'Team member not found' });
      return;
    }

    res.json({ success: true, member: updatedMember });
  } catch (error) {
    console.error('Error updating team member:', error);
    res.status(500).json({ success: false, error: 'Failed to update team member' });
  }
});

// DELETE team member by ID
router.delete('/:id', async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedMember: ITeamMemberDocument | null = await TeamMember.findByIdAndDelete(id);

    if (!deletedMember) {
      res.status(404).json({ success: false, error: 'Team member not found' });
      return;
    }

    res.json({ success: true, message: 'Team member deleted successfully' });
  } catch (error) {
    console.error('Error deleting team member:', error);
    res.status(500).json({ success: false, error: 'Failed to delete team member' });
  }
});

export default router;
