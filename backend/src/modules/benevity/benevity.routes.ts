import express, { Request, Response, Router } from 'express';
import { BenevityBanner, BenevityProject, BenevityPage } from './benevity.model.js';

const router: Router = express.Router();

// --- PAGE CONTENT (HERO) ---

// GET Benevity Page Content
router.get('/page', async (_req: Request, res: Response): Promise<void> => {
  try {
    let page = await BenevityPage.findOne().sort({ createdAt: -1 });
    res.json(page);
  } catch (error) {
    console.error('Error fetching benevity page content:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch page content' });
  }
});

// UPDATE or CREATE Benevity Page Content
router.post('/page', async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    let page = await BenevityPage.findOne();

    if (page) {
      page = await BenevityPage.findByIdAndUpdate(page._id, data, { new: true });
    } else {
      page = await BenevityPage.create(data);
    }

    res.json({ success: true, data: page });
  } catch (error) {
    console.error('Error saving benevity page content:', error);
    res.status(500).json({ success: false, error: 'Failed to save page content' });
  }
});

// SEED Benevity Page Content
router.post('/page/seed', async (_req: Request, res: Response): Promise<void> => {
  try {
    await BenevityPage.deleteMany({});

    const defaultContent = {
      badge: 'Donate Through Your Workplace',
      title: 'Your Company Can',
      highlightText: 'Double Your Donation',
      description: 'Are you a corporate employee? Search for "Shanthibhavan" on your company\'s Benevity portal and donate today. Many employers match donations dollar-for-dollar — your $50 becomes $100 for patients in need.',
      backgroundImage: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2000&auto=format&fit=crop',
      stat1Value: '2x',
      stat1Label: 'Your Donation Doubled',
      stat2Value: '₹0',
      stat2Label: 'Cost to Patients',
      stat3Value: '100%',
      stat3Label: 'Goes to Care',
      ctaText: 'Donate Now on Benevity',
      ctaLink: 'https://causes.benevity.org/',
      secondaryCtaText: 'How to Donate',
      secondaryCtaLink: '#how-it-works',
      cardTitle: 'Why Donate via Benevity?',
      cardSubtitle: 'Simple. Impactful. Matched.',
      cardFeature1: 'Your employer may match your gift',
      cardFeature2: 'Easy payroll deduction option',
      cardFeature3: 'Instant tax receipt provided',
      cardFeature4: '100% reaches Shanthibhavan',
    };

    const page = await BenevityPage.create(defaultContent);
    res.json({ success: true, message: 'Seeded benevity page content', data: page });
  } catch (error) {
    console.error('Error seeding benevity page content:', error);
    res.status(500).json({ success: false, error: 'Failed to seed page content' });
  }
});

// --- BANNERS ---

// GET Benevity Banners
router.get('/banners', async (_req: Request, res: Response): Promise<void> => {
  try {
    const banners = await BenevityBanner.find({ isActive: true }).sort({ order: 1 });
    res.json({ success: true, banners });
  } catch (error) {
    console.error('Error fetching benevity banners:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch banners' });
  }
});

// SEED Benevity Banners
router.post('/banners/seed', async (_req: Request, res: Response): Promise<void> => {
  try {
    const count = await BenevityBanner.countDocuments({});
    if (count > 0) {
       // Optional: clear and re-seed? Or just return existing?
       // Let's clear and re-seed to ensure the "Seed" button works as a reset/init
       await BenevityBanner.deleteMany({});
    }

    const defaultBanners = [
      {
        title: 'Double Your Impact',
        subtitle: 'Benevity Corporate Matching',
        description: 'Your donation can go twice as far. Many companies match employee contributions dollar for dollar.',
        imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2000&auto=format&fit=crop',
        mediaType: 'image',
        ctaText: 'Find Us on Benevity',
        ctaLink: 'https://causes.benevity.org/',
        order: 1,
        isActive: true,
      },
      {
        title: 'Workplace Giving',
        subtitle: 'Easy & Tax Efficient',
        description: 'Donate directly from your payroll with instant tax receipts and complete transparency.',
        imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop',
        mediaType: 'image',
        ctaText: 'Find Us on Benevity',
        ctaLink: 'https://causes.benevity.org/',
        order: 2,
        isActive: true,
      },
      {
        title: 'Global Community',
        subtitle: 'Supporting Shanthibhavan',
        description: 'Join a global network of corporate heroes making a difference in palliative care.',
        imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop',
        mediaType: 'image',
        ctaText: 'Find Us on Benevity',
        ctaLink: 'https://causes.benevity.org/',
        order: 3,
        isActive: true,
      }
    ];

    await BenevityBanner.insertMany(defaultBanners);
    res.json({ success: true, message: 'Seeded benevity-banners collection', count: defaultBanners.length });
  } catch (error) {
    console.error('Error seeding benevity banners:', error);
    res.status(500).json({ success: false, error: 'Failed to seed banners' });
  }
});


// --- PROJECTS ---

// GET Benevity Projects
router.get('/projects', async (_req: Request, res: Response): Promise<void> => {
  try {
    const projects = await BenevityProject.find({ isActive: true }).sort({ priority: -1, createdAt: -1 });
    res.json({ success: true, projects });
  } catch (error) {
    console.error('Error fetching benevity projects:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch projects' });
  }
});

// CREATE Benevity Project (used when Admin checks "Show on Benevity"?)
// OR we just use this endpoint for explicit management.
router.post('/projects', async (req: Request, res: Response): Promise<void> => {
  try {
    const project = await BenevityProject.create(req.body);
    res.status(201).json({ success: true, project });
  } catch (error) {
     console.error('Error creating benevity project:', error);
     res.status(500).json({ success: false, error: 'Failed to create project' });
  }
});

// GET Benevity Projects (Admin - All)
router.get('/projects/admin', async (_req: Request, res: Response): Promise<void> => {
  try {
    const projects = await BenevityProject.find({}).sort({ priority: -1, createdAt: -1 });
    res.json({ success: true, projects });
  } catch (error) {
    console.error('Error fetching benevity projects for admin:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch projects' });
  }
});

// SEED Benevity Projects (Demo Data)
router.post('/projects/seed', async (_req: Request, res: Response): Promise<void> => {
    try {
        await BenevityProject.deleteMany({});
        const demoProjects = [
            {
                projectName: "Community Dialysis Center",
                shortDescription: "Providing free dialysis to over 500 patients monthly.",
                fullDescription: "Our dialysis center operates 24/7 to ensure no patient is turned away. With state-of-the-art machines and compassionate care, we provide life-saving treatment completely free of cost. Your support helps us maintain these machines and provide medication.",
                featuredImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                startDate: new Date(),
                expiryDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
                isActive: true,
                showOnBenevity: true,
                priority: 10
            },
            {
                projectName: "Joy's Touch Emergency Response",
                shortDescription: "Rapid response capability for palliative emergencies.",
                fullDescription: "Joy's Touch is our dedicated emergency response unit. We provide immediate assistance to palliative care patients in distress, ensuring they are never alone in their most critical moments. This program funds the ambulance service and emergency medical kits.",
                featuredImage: "https://images.unsplash.com/photo-1516574187841-69301905a304?q=80&w=800&auto=format&fit=crop",
                startDate: new Date(),
                expiryDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
                isActive: true,
                showOnBenevity: true,
                priority: 9
            },
            {
                projectName: "Nutritional Support Program",
                shortDescription: "Ensuring no patient fights illness on an empty stomach.",
                fullDescription: "Nutrition is a vital part of recovery and comfort. We provide free, nutritious meals to all our inpatients and their bystanders. Your donation covers the cost of ingredients and preparation for these essential daily meals.",
                featuredImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
                startDate: new Date(),
                expiryDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
                isActive: true,
                showOnBenevity: true,
                priority: 8
            }
        ];
        await BenevityProject.insertMany(demoProjects);
        res.json({ success: true, message: 'Seeded benevity-projects collection with 3 projects' });
    } catch (error) {
        console.error('Error seeding benevity projects:', error);
        res.status(500).json({ success: false, error: 'Failed to seed projects' });
    }
});

// Get Project by ID (for detail page)
router.get('/projects/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const project = await BenevityProject.findById(id);
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


// UPDATE Benevity Project
router.put('/projects/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const project = await BenevityProject.findByIdAndUpdate(id, req.body, { new: true });
    if (!project) {
        res.status(404).json({ success: false, error: 'Project not found' });
        return;
    }
    res.json({ success: true, project });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ success: false, error: 'Failed to update project' });
  }
});

// DELETE Benevity Project
router.delete('/projects/:id', async (req: Request, res: Response): Promise<void> => {
 try {
    const { id } = req.params;
    await BenevityProject.findByIdAndDelete(id);
    res.json({ success: true, message: 'Project deleted' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ success: false, error: 'Failed to delete project' });
  }
});

export default router;
