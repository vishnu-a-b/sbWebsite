import express, { Request, Response, Router } from 'express';
import FeaturedProject, { IFeaturedProjectDocument } from './featured-project.model.js';

const router: Router = express.Router();

interface ProjectRequestBody {
  projectName?: string;
  shortDescription?: string;
  fullDescription?: string;
  featuredImage?: string;
  gallery?: string[];
  priority?: number;
  isActive?: boolean;
  startDate?: Date;
  expiryDate?: Date;
  showOnFirstFace?: boolean;
  showOnSecondFace?: boolean;
  showOnBenevity?: boolean;
}

// GET all projects (with CMS filtering)
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const now = new Date();
    const { showOnBenevity, showOnFirstFace } = req.query;
    
    const filter: any = {
      isActive: true,
      startDate: { $lte: now },
      expiryDate: { $gte: now },
    };

    if (showOnBenevity === 'true') {
      filter.showOnBenevity = true;
    }

    if (showOnFirstFace === 'true') {
      filter.showOnFirstFace = true;
    }

    const projects: IFeaturedProjectDocument[] = await FeaturedProject.find(filter)
      .sort({ priority: -1, createdAt: -1 })
      .exec();

    res.json({ success: true, projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch projects' });
  }
});

// GET all projects (admin - no filtering)
router.get('/admin', async (_req: Request, res: Response): Promise<void> => {
  try {
    const projects: IFeaturedProjectDocument[] = await FeaturedProject.find()
      .sort({ priority: -1, createdAt: -1 })
      .exec();

    res.json({ success: true, projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch projects' });
  }
});

// GET project by ID
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const project = await FeaturedProject.findById(id);
    
    if (!project) {
      res.status(404).json({ success: false, error: 'Project not found' });
      return;
    }

    res.json({ success: true, project });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch project' });
  }
});

// CREATE new project
router.post('/', async (req: Request<{}, {}, ProjectRequestBody>, res: Response): Promise<void> => {
  try {
    const projectData: ProjectRequestBody = req.body;
    const newProject: IFeaturedProjectDocument = await FeaturedProject.create(projectData);
    res.status(201).json({ success: true, project: newProject });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ success: false, error: 'Failed to create project' });
  }
});

// UPDATE project by ID
router.put('/:id', async (req: Request<{ id: string }, {}, ProjectRequestBody>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData: ProjectRequestBody = req.body;
    const updatedProject: IFeaturedProjectDocument | null = await FeaturedProject.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedProject) {
      res.status(404).json({ success: false, error: 'Project not found' });
      return;
    }

    res.json({ success: true, project: updatedProject });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ success: false, error: 'Failed to update project' });
  }
});

// DELETE project by ID
router.delete('/:id', async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedProject: IFeaturedProjectDocument | null = await FeaturedProject.findByIdAndDelete(id);

    if (!deletedProject) {
      res.status(404).json({ success: false, error: 'Project not found' });
      return;
    }

    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ success: false, error: 'Failed to delete project' });
  }
});

// SEED default projects
router.post('/seed', async (_req: Request, res: Response): Promise<void> => {
  try {
    // Clear existing projects
    await FeaturedProject.deleteMany({});

    const defaultProjects = [
      {
        projectName: "Community Health Outreach Program",
        shortDescription: "Bringing healthcare to underserved rural communities through mobile clinics and health education.",
        fullDescription: `Our Community Health Outreach Program is a comprehensive initiative designed to bridge the healthcare gap in rural and underserved areas of Thiruvananthapuram District. Through our fleet of mobile clinics, we bring essential medical services directly to communities that lack easy access to healthcare facilities.

The program includes regular health screenings, preventive care education, vaccination drives, and basic medical consultations. Our team of dedicated healthcare professionals travels to remote villages, conducting health camps and providing free medical check-ups to residents who might otherwise go without care.

We focus on early detection of common health issues, maternal and child health, chronic disease management, and health education. The program has successfully reached over 50 villages, providing care to thousands of individuals who previously had limited access to medical services.

Through partnerships with local community leaders and organizations, we've created a sustainable model that not only treats illness but also empowers communities with knowledge about preventive healthcare, nutrition, and healthy living practices.`,
        featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        gallery: [
          "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800"
        ],
        priority: 10,
        isActive: true,
        showOnFirstFace: true,
        startDate: new Date('2023-01-01'),
        expiryDate: new Date('2030-12-31')
      },
      {
        projectName: "Palliative Care Training Initiative",
        shortDescription: "Empowering healthcare workers and family caregivers with specialized palliative care skills.",
        fullDescription: `The Palliative Care Training Initiative addresses the critical shortage of trained palliative care professionals in our region. This comprehensive program offers certification courses, workshops, and hands-on training for nurses, doctors, and family caregivers.

Our curriculum covers pain management, symptom control, psychological support, communication skills, and end-of-life care. We've trained over 200 healthcare professionals and 500 family caregivers, significantly improving the quality of palliative care available in our community.

The program includes both theoretical instruction and practical training at our hospital facility, where trainees work alongside experienced palliative care specialists. We also offer ongoing support and refresher courses to ensure that skills remain current and effective.

By building local capacity in palliative care, we're creating a sustainable network of trained professionals who can provide compassionate, skilled care to patients with life-limiting illnesses throughout the region.`,
        featuredImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
        gallery: [
          "https://images.unsplash.com/photo-1582719471384-89d3bcfa2855?auto=format&fit=crop&q=80&w=800"
        ],
        priority: 9,
        isActive: true,
        showOnFirstFace: true,
        startDate: new Date('2023-03-01'),
        expiryDate: new Date('2030-12-31')
      },
      {
        projectName: "Solar-Powered Dialysis Center",
        shortDescription: "Sustainable, eco-friendly dialysis facility providing free treatment to kidney patients.",
        fullDescription: `Our Solar-Powered Dialysis Center represents a breakthrough in sustainable healthcare infrastructure. This state-of-the-art facility harnesses solar energy to power dialysis machines, ensuring uninterrupted service while reducing environmental impact and operational costs.

The center can accommodate 40 patients daily, providing life-saving kidney dialysis treatment completely free of charge to indigent patients. By utilizing renewable energy, we've created a model that is both environmentally responsible and economically sustainable.

The facility is equipped with modern dialysis machines, water purification systems, and backup power to ensure continuous operation. Our team of nephrologists and trained technicians maintain the highest standards of care and safety.

Beyond treatment, we provide comprehensive patient education on kidney health, dietary management, and lifestyle modifications. We also offer transportation assistance for patients who have difficulty reaching our facility, ensuring that no one is denied treatment due to logistical barriers.`,
        featuredImage: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&q=80&w=1200",
        gallery: [
          "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800"
        ],
        priority: 8,
        isActive: true,
        showOnFirstFace: true,
        startDate: new Date('2022-06-01'),
        expiryDate: new Date('2030-12-31')
      }
    ];

    await FeaturedProject.insertMany(defaultProjects);
    res.json({ success: true, message: 'Projects seeded successfully', count: defaultProjects.length });
  } catch (error) {
    console.error('Error seeding projects:', error);
    res.status(500).json({ success: false, error: 'Failed to seed projects' });
  }
});

export default router;
