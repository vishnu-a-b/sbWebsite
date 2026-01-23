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
      },
       {
        projectName: "Children's Palliative Support Program",
        shortDescription: "Specialized pediatric palliative care focusing on the unique needs of children with life-limiting conditions.",
        fullDescription: `Our Children's Palliative Support Program provides holistic care for children facing serious illnesses. We focus on symptom management, emotional support for the child and family, and improving quality of life through play therapy and specialized medical care.
        
        The program is staffed by a multidisciplinary team including pediatricians, child life specialists, and psychologists who understand the unique developmental and emotional needs of children. We work closely with families to provide care both in our hospital facility and through home visits.
        
        By providing specialized support, we help children and their families navigate the challenges of serious illness with dignity, compassion, and hope.`,
        featuredImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
        gallery: [
          "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800"
        ],
        priority: 7,
        isActive: true,
        showOnFirstFace: true,
        startDate: new Date('2023-01-01'),
        expiryDate: new Date('2030-12-31')
      },
      {
        projectName: "Elderly Care & Companion Initiative",
        shortDescription: "Dedicated support for homebound elderly patients, providing medical assistance and emotional companionship.",
        fullDescription: `The Elderly Care & Companion Initiative is designed to support our aging population who may be isolated or facing chronic health challenges. Our team provides regular medical check-ups, medication management, and essential companionship to elderly individuals in their homes.
        
        We recognize the importance of social connection and psychological well-being for the elderly. Our volunteers and staff spend quality time with patients, engaging in conversations, helping with light tasks, and ensuring they feel valued and cared for.
        
        This program has significantly reduced loneliness and improved the overall health outcomes for hundreds of elderly patients in our community, allowing them to age with grace and dignity in the comfort of their own homes.`,
        featuredImage: "https://images.unsplash.com/photo-1581578731522-7455051463c7?auto=format&fit=crop&q=80&w=1200",
        gallery: [
          "https://images.unsplash.com/photo-1544161515-4af6b1d4970a?auto=format&fit=crop&q=80&w=800"
        ],
        priority: 6,
        isActive: true,
        showOnFirstFace: true,
        startDate: new Date('2023-05-01'),
        expiryDate: new Date('2030-12-31')
      },
      {
        projectName: "Free Medical Equipment Library",
        shortDescription: "Lending essential medical equipment like oxygen concentrators and hospital beds to families in need.",
        fullDescription: `The Free Medical Equipment Library is a unique initiative that provides essential medical equipment to patients who cannot afford to purchase it. We lend items such as oxygen concentrators, hospital beds, wheelchairs, and air mattresses for use at home.
        
        Many palliative care patients require specialized equipment to manage their symptoms and maintain comfort at home. By providing these items for free, we remove a significant financial burden from families and enable better home-based care.
        
        Our equipment is regularly sanitized and maintained by our technical team. We also provide training to family caregivers on how to use the equipment safely and effectively, ensuring the best possible care for the patient.`,
        featuredImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
        gallery: [
          "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800"
        ],
        priority: 5,
        isActive: true,
        showOnFirstFace: true,
        startDate: new Date('2023-02-01'),
        expiryDate: new Date('2030-12-31')
      },
      {
        projectName: '"Joy\'s Touch" Emergency Response',
        shortDescription: 'Our rapid-response emergency system designed specifically for palliative care patients at home.',
        fullDescription: `"Joy's Touch" is a proprietary emergency response system developed by Shanthibhavan. It provides palliative care patients with a simple one-touch device to alert our medical team in case of emergencies at home. 
        
        When the alert is triggered, our 24/7 command center immediately coordinates with the nearest home care vehicle and providing medical guidance over the phone until help arrives. This system has significantly reduced hospital readmissions and improved patient safety.
        
        The program is named in memory of one of our earliest supporters and represents our commitment to using technology to enhance the "human touch" in palliative care.`,
        featuredImage: 'https://images.unsplash.com/photo-1587350859743-4e6f66367375?auto=format&fit=crop&q=80&w=1200',
        gallery: [
          'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
        ],
        priority: 4,
        isActive: true,
        showOnFirstFace: true,
        startDate: new Date('2023-08-01'),
        expiryDate: new Date('2030-12-31')
      },
      {
        projectName: 'Community Kitchen & Nutrition Program',
        shortDescription: 'Providing nutritious, specialized meals to hospital inpatients and underprivileged home care patients.',
        fullDescription: `Good nutrition is a cornerstone of recovery and quality of life. Our Community Kitchen & Nutrition Program prepares over 300 meals daily, tailored to the specific dietary needs of palliative and renal patients. 
        
        We provide these meals free of charge to all our inpatients and deliver specialized meal kits to underprivileged patients being cared for at home. Our nutritionists work closely with our medical team to ensure that every patient receives the nourishment they need to manage their condition effectively.
        
        The kitchen is staffed by local volunteers and professional cooks who follow the highest standards of hygiene and nutrition. This initiative ensures that no patient at Shanthibhavan ever faces the burden of food insecurity while dealing with serious illness.`,
        featuredImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1200',
        gallery: [
          'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800'
        ],
        priority: 3,
        isActive: true,
        showOnFirstFace: true,
        startDate: new Date('2023-04-01'),
        expiryDate: new Date('2030-12-31')
      },
      {
        projectName: 'Patient Rehabilitation & Physio Center',
        shortDescription: 'Specialized physiotherapy and rehabilitation services to improve mobility and independence.',
        fullDescription: `Our Rehabilitation & Physio Center focuses on helping patients regain mobility, manage pain, and achieve the highest possible level of independence. We offer specialized physiotherapy sessions, occupational therapy, and assistive device training.
        
        Many of our patients suffer from strokes, neurological disorders, or the physical decline associated with terminal illness. Our team of experienced physiotherapists develops personalized rehabilitation plans aimed at improving quality of life and facilitating easier home-based care.
        
        The center is equipped with modern rehabilitation equipment and provides a supportive environment where patients can work towards their recovery goals at their own pace.`,
        featuredImage: 'https://images.unsplash.com/photo-1576091160291-24707684074c?auto=format&fit=crop&q=80&w=1200',
        gallery: [
          'https://images.unsplash.com/photo-1586773860418-d3b9a8ec81a2?auto=format&fit=crop&q=80&w=800'
        ],
        priority: 2,
        isActive: true,
        showOnFirstFace: true,
        startDate: new Date('2023-06-01'),
        expiryDate: new Date('2030-12-31')
      },
      {
        projectName: 'Remote Healthcare Monitoring',
        shortDescription: 'Utilizing tele-palliative care solutions to monitor and support patients in remote areas.',
        fullDescription: `Our Remote Healthcare Monitoring initiative leverages tele-medicine technology to provide care to patients in the most remote corners of our district. We provide patients and their families with tablets and wearable devices that transmit vital health data to our hospital command center.
        
        This allows our medical team to monitor symptoms, vital signs, and medication adherence in real-time, providing immediate interventions before issues escalate. Patients can also have video consultations with their doctors and nurses, reducing the need for stressful and expensive travel.
        
        This program has been a lifeline for homebound patients, ensuring they stay connected to professional care regardless of their physical location.`,
        featuredImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
        gallery: [
          'https://images.unsplash.com/photo-1584036561566-baf245f966cc?auto=format&fit=crop&q=80&w=800'
        ],
        priority: 1,
        isActive: true,
        showOnFirstFace: true,
        startDate: new Date('2023-09-01'),
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
