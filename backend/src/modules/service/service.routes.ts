import express, { Request, Response, Router } from 'express';
import Service, { IServiceDocument } from './service.model.js';

const router: Router = express.Router();

// Helper to create slug
const createSlug = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start
    .replace(/-+$/, '');      // Trim - from end
};

interface ServiceRequestBody {
  title?: string;
  description?: string;
  icon?: string;
  color?: string;
  priority?: number;
  isActive?: boolean;
  startDate?: Date;
  expiryDate?: Date;
  showOnFirstFace?: boolean;
}

// SEED default services
router.post('/seed', async (_req: Request, res: Response): Promise<void> => {
  try {
    // Clear existing services to ensure a fresh seed from the official list
    await Service.deleteMany({});


    const defaultServices = [
      {
        title: "49-Bed Hospital Care",
        description: `Our flagship 49-bed palliative hospital represents the first of its kind in India, operating as a completely no-bill facility with no cash counters. We provide comprehensive inpatient care with 24/7 medical supervision, ensuring that every patient receives the attention and treatment they deserve regardless of their financial situation.

Our facility includes a fully-equipped ICU with ventilator support, advanced pain management protocols, and comprehensive symptom control measures. Our multidisciplinary team of doctors, nurses, and support staff work together to create individualized care plans that address not just physical symptoms, but also emotional, psychological, and spiritual needs.

The hospital environment is designed to be warm and compassionate, providing dignity and comfort to patients in their most vulnerable moments. We believe that quality palliative care should be accessible to all, which is why we operate entirely on donations and charitable support, ensuring no patient is ever turned away due to inability to pay.

Our services include round-the-clock nursing care, regular physician consultations, medication management, nutritional support, and family counseling. We also provide bereavement support to families, helping them navigate the difficult journey of caring for a loved one with a life-limiting illness.`,
        icon: "Bed",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
        color: "text-primary",
        priority: 15,
        isActive: true,
        startDate: new Date()
      },
      {
        title: "Palliative Home Care",
        description: `Our Palliative Home Care program brings quality medical care directly to patients in the comfort of their own homes. With a fleet of 15 specialized vehicles covering the entire Thiruvananthapuram District, we ensure that distance and mobility challenges never stand in the way of receiving excellent palliative care.

Each home care team consists of trained nurses, doctors, and support staff who make regular visits to assess patient needs, provide medical treatments, and offer guidance to family caregivers. We understand that many patients prefer to spend their time at home surrounded by loved ones, and our home care program makes this possible while ensuring they receive professional medical attention.

Our services include wound care, medication administration, pain management, physiotherapy at home, and training family members in basic caregiving skills. We also coordinate with our hospital facility for seamless transitions when inpatient care becomes necessary.

The home care program operates on a scheduled visit basis, with emergency response capabilities for urgent situations. Our teams carry essential medical equipment and supplies, enabling them to provide a wide range of treatments in the home setting. This service has been instrumental in improving quality of life for thousands of patients who wish to remain in familiar surroundings while receiving expert palliative care.`,
        icon: "Home",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
        color: "text-secondary",
        priority: 14,
        isActive: true,
        startDate: new Date()
      },
      {
        title: "Free Dialysis Service",
        description: `Our state-of-the-art dialysis center represents a breakthrough in sustainable healthcare, powered entirely by solar energy. With the capacity to serve 40 patients, this facility provides life-saving kidney dialysis treatment completely free of charge to indigent patients who would otherwise have no access to this essential service.

Chronic kidney disease affects thousands in our community, and regular dialysis is often the difference between life and death. Recognizing that the cost of dialysis treatment is prohibitive for many families, we established this center to ensure that financial constraints never prevent someone from receiving this vital care.

Our dialysis unit is equipped with modern machines and staffed by experienced nephrologists and trained technicians who ensure each treatment is safe and effective. We maintain strict protocols for infection control and patient safety, meeting international standards for dialysis care.

Beyond the treatment itself, we provide comprehensive support including pre-dialysis counseling, dietary guidance, and coordination with other medical services. We also offer transportation assistance for patients who have difficulty reaching our facility, ensuring that logistics never become a barrier to treatment. The solar-powered design of our facility not only reduces operational costs but also ensures uninterrupted service even during power outages, making our dialysis center reliable and sustainable.`,
        icon: "Activity",
        image: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&q=80&w=800",
        color: "text-secondary",
        priority: 12,
        isActive: true,
        startDate: new Date()
      },
      {
        title: "Free Ambulance Service",
        description: `Our dedicated ambulance fleet provides rapid emergency response and non-emergency medical transport services to all Indians, completely free of charge. Each ambulance is equipped with advanced life-saving equipment and staffed by trained paramedics who can provide critical care during transport.

We understand that medical emergencies can happen at any time, which is why our ambulance service operates 24/7, 365 days a year. Whether it's a cardiac emergency, accident trauma, or the need to transport a palliative patient to our facility, our ambulances are ready to respond quickly and professionally.

Our vehicles are equipped with oxygen support, cardiac monitors, emergency medications, and other essential medical equipment. The paramedic teams are trained in advanced life support techniques and work in coordination with our hospital emergency department to ensure seamless care transitions.

Beyond emergency response, our ambulances also provide scheduled transport for patients who need to attend medical appointments, dialysis sessions, or other healthcare services but lack the means to travel safely. This service has been particularly valuable for elderly patients and those with mobility challenges, ensuring they can access the care they need without the stress and expense of arranging private transport.`,
        icon: "Truck",
        image: "https://images.unsplash.com/photo-1616781750569-424f113a109a?auto=format&fit=crop&q=80&w=800",
        color: "text-secondary",
        priority: 6,
        isActive: true,
        startDate: new Date()
      },
      {
        title: "General Pharmacy",
        description: `Our on-site pharmacy ensures that all registered patients have access to essential medications without financial barriers. We provide both subsidized and completely free medications, depending on the patient's financial situation and medical needs.

The pharmacy stocks a comprehensive range of medications commonly needed in palliative care, including pain management drugs, antibiotics, anti-nausea medications, and other essential medicines. Our pharmacists work closely with our medical team to ensure proper medication management and patient education.

We understand that the cost of medications can be overwhelming for families already dealing with the stress of serious illness. Our pharmacy program removes this burden, ensuring that treatment plans are never compromised due to inability to afford prescribed medications.

In addition to dispensing medications, our pharmacy staff provide counseling on proper medication use, potential side effects, and drug interactions. We also coordinate with external pharmacies when specialized medications are needed, leveraging our network to obtain the best possible prices and ensure continuity of care. For patients in our home care program, we arrange medication delivery to their homes, making it even easier for them to maintain their treatment regimens.`,
        icon: "Pill",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800",
        color: "text-primary",
        priority: 7,
        isActive: true,
        startDate: new Date()
      },
      {
        title: "Free Food Service",
        description: `Nutrition is a crucial component of palliative care, and our free food service ensures that all in-patients and their bystanders receive nutritious, balanced meals four times daily. We believe that no one should go hungry while caring for a loved one or receiving treatment themselves.

Our kitchen prepares meals that are not only nutritious but also tailored to meet the dietary requirements of palliative patients. We work with nutritionists to create menus that provide adequate calories and nutrients while being easy to digest and appealing to patients who may have reduced appetites or specific dietary restrictions.

The four daily meals include breakfast, lunch, an evening snack, and dinner, ensuring that patients and their caregivers have consistent access to food throughout the day. We accommodate special dietary needs including diabetic diets, low-sodium options, and soft foods for patients with swallowing difficulties.

Beyond the nutritional aspect, shared meals provide an opportunity for social interaction and normalcy in what can be a challenging hospital environment. Our dining areas are designed to be welcoming spaces where families can gather and share meals together, supporting the emotional and social dimensions of healing. This service has been particularly meaningful for families who travel from distant areas to be with their loved ones, removing the worry and expense of arranging meals during an already difficult time.`,
        icon: "UtensilsCrossed",
        image: "https://images.unsplash.com/photo-1594968155205-09ce15273b0a?auto=format&fit=crop&q=80&w=800",
        color: "text-primary",
        priority: 5,
        isActive: true,
        startDate: new Date()
      },
      {
        title: "Physiotherapy Unit",
        description: `Our specialized physiotherapy unit provides comprehensive rehabilitation services designed to improve mobility, reduce pain, and enhance quality of life for patients with physical disabilities or chronic conditions. Our team of licensed physiotherapists creates individualized treatment plans based on each patient's specific needs and goals.

Physiotherapy plays a vital role in palliative care by helping patients maintain independence and function for as long as possible. Our services include therapeutic exercises, manual therapy, pain management techniques, and mobility training. We work with patients recovering from strokes, managing chronic pain conditions, dealing with cancer-related fatigue, and facing various other physical challenges.

Our facility is equipped with modern physiotherapy equipment including parallel bars, exercise mats, resistance bands, and specialized mobility aids. We also provide training in the use of assistive devices such as walkers, canes, and wheelchairs, ensuring patients can use them safely and effectively.

For patients in our home care program, our physiotherapists make home visits to provide treatment in familiar surroundings and to assess the home environment for safety modifications. We also train family members in basic exercises and transfer techniques, empowering them to support their loved one's physical rehabilitation between professional sessions. The goal of our physiotherapy program is not just physical improvement, but also psychological well-being, as maintaining mobility and independence significantly contributes to a patient's sense of dignity and quality of life.`,
        icon: "PersonStanding",
        image: "https://images.unsplash.com/photo-1583336633292-2ec4172f3e09?auto=format&fit=crop&q=80&w=800",
        color: "text-primary",
        priority: 9,
        isActive: true,
        startDate: new Date()
      },
      {
        title: "Early Medical Detection",
        description: `The Abhayam initiative, operated by Shanthibhavan Institute, focuses on disease prevention through early detection. We organize regular health camps throughout the community, offering free blood and urine tests to help identify serious conditions like cancer and kidney disease in their early stages when treatment is most effective.

Early detection can be the difference between successful treatment and advanced disease. Many serious illnesses develop silently, showing no symptoms until they reach advanced stages. Our screening camps aim to catch these conditions early, giving patients the best possible chance for successful treatment and improved outcomes.

Our mobile testing units visit rural and underserved areas where access to diagnostic services is limited. We provide a range of tests including blood sugar levels, kidney function tests, liver function tests, and cancer markers. All tests are conducted by trained laboratory technicians using quality-controlled equipment, ensuring accurate and reliable results.

When abnormalities are detected, we don't just provide test results – we ensure follow-up care. Our team helps patients understand their results, connects them with appropriate specialists, and provides guidance on next steps. For those who cannot afford further diagnostic tests or treatment, we work with our network of partner hospitals and charitable programs to ensure they receive the care they need.

The Abhayam program also includes health education components, teaching community members about risk factors, healthy lifestyle choices, and the importance of regular health screenings. By combining testing with education, we aim to create a culture of preventive healthcare that can reduce the burden of serious illness in our community.`,
        icon: "Microscope",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
        color: "text-primary",
        priority: 11,
        isActive: true,
        startDate: new Date()
      },
      {
        title: "Telemedicine Services",
        description: `Our telemedicine program leverages technology to connect patients with healthcare professionals, making quality medical consultations accessible from the comfort of home. This service has been particularly valuable for patients with mobility challenges, those living in remote areas, and during times when in-person visits are difficult or impossible.

Through secure video consultations, our doctors can assess symptoms, review test results, adjust treatment plans, and provide medical advice. Patients can discuss their concerns, ask questions, and receive personalized guidance without the need to travel to our facility. This is especially beneficial for palliative care patients who may find travel exhausting or painful.

Our telemedicine platform is designed to be user-friendly, accessible even to those with limited technical experience. We provide support in setting up the technology and ensure that language is never a barrier to receiving care. Consultations can be conducted in multiple local languages, making the service truly accessible to our diverse community.

Beyond individual consultations, we use telemedicine for follow-up appointments, medication reviews, and coordination between our home care teams and hospital-based specialists. This ensures continuity of care and allows for quick adjustments to treatment plans when needed.

The telemedicine service also includes prescription management – doctors can send prescriptions directly to our pharmacy or to the patient's preferred pharmacy, streamlining the medication access process. For patients enrolled in our home care program, telemedicine consultations can help determine when a home visit is needed versus when issues can be addressed remotely, optimizing the use of our resources while ensuring patients receive timely care.`,
        icon: "Video",
        image: "https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&q=80&w=800",
        color: "text-primary",
        priority: 3,
        isActive: true,
        startDate: new Date()
      }
    ];

    const servicesWithSlugs = defaultServices.map(service => ({
        ...service,
        slug: createSlug(service.title)
    }));

    await Service.insertMany(servicesWithSlugs);
    res.json({ success: true, message: 'Services seeded successfully', count: servicesWithSlugs.length });
  } catch (error) {
    console.error('Error seeding services:', error);
    res.status(500).json({ success: false, error: 'Failed to seed services' });
  }
});

// GET all services (with CMS filtering)
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const now = new Date();
    const services: IServiceDocument[] = await Service.find({
      isActive: true,
      startDate: { $lte: now },
      $or: [
        { expiryDate: { $gte: now } },
        { expiryDate: { $exists: false } },
        { expiryDate: null }
      ]
    })
      .sort({ priority: -1, createdAt: -1 })
      .exec();

    res.json({ success: true, services });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch services' });
  }
});

// GET all services (admin - no filtering)
router.get('/admin', async (_req: Request, res: Response): Promise<void> => {
  console.log('GET /api/services/admin hit');
  try {
    const services: IServiceDocument[] = await Service.find()
      .sort({ priority: -1, createdAt: -1 })
      .exec();

    console.log(`Found ${services.length} services for admin`);
    res.json({ success: true, services });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch services' });
  }
});

// GET service by SLUG
router.get('/slug/:slug', async (req: Request<{ slug: string }>, res: Response): Promise<void> => {
  try {
    const { slug } = req.params;
    const service: IServiceDocument | null = await Service.findOne({ slug });

    if (!service) {
      res.status(404).json({ success: false, error: 'Service not found' });
      return;
    }

    res.json({ success: true, service });
  } catch (error) {
    console.error('Error fetching service by slug:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch service' });
  }
});

// GET service by ID
router.get('/:id', async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const service: IServiceDocument | null = await Service.findById(id);

    if (!service) {
      res.status(404).json({ success: false, error: 'Service not found' });
      return;
    }

    res.json({ success: true, service });
  } catch (error) {
    console.error('Error fetching service:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch service' });
  }
});

// CREATE new service
router.post('/', async (req: Request<{}, {}, ServiceRequestBody>, res: Response): Promise<void> => {
  try {
    const serviceData: ServiceRequestBody = req.body;
    
    // Generate slug from title if not provided
    const slug = createSlug(serviceData.title || '');
    
    // Check for duplicate slug
    const existingService = await Service.findOne({ slug });
    if (existingService) {
        // Simple distinct logic if duplicate
        const randomSuffix = Math.floor(Math.random() * 1000);
        // We can't easily mutate the type for insert if it strictly follows ServiceRequestBody which lacks slug.
        // But Mongoose model allows it. We'll cast to any or spread.
        const serviceWithSlug = { ...serviceData, slug: `${slug}-${randomSuffix}` };
        const newService: IServiceDocument = await Service.create(serviceWithSlug);
        res.status(201).json({ success: true, service: newService });
        return;
    }

    const serviceWithSlug = { ...serviceData, slug };
    const newService: IServiceDocument = await Service.create(serviceWithSlug);
    res.status(201).json({ success: true, service: newService });
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ success: false, error: 'Failed to create service' });
  }
});

// UPDATE service by ID
router.put('/:id', async (req: Request<{ id: string }, {}, ServiceRequestBody>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData: ServiceRequestBody = req.body;
    
    let finalUpdateData: any = { ...updateData };

    // If title is updated, regenerate slug
    if (updateData.title) {
        const slug = createSlug(updateData.title);
        // Ideally checking for duplicates, but for now just updating. 
        // If unique index constraint hits, we'll catch error.
        finalUpdateData.slug = slug;
    }

    const updatedService: IServiceDocument | null = await Service.findByIdAndUpdate(id, finalUpdateData, { new: true });

    if (!updatedService) {
      res.status(404).json({ success: false, error: 'Service not found' });
      return;
    }

    res.json({ success: true, service: updatedService });
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ success: false, error: 'Failed to update service' });
  }
});

// DELETE service by ID
router.delete('/:id', async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedService: IServiceDocument | null = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      res.status(404).json({ success: false, error: 'Service not found' });
      return;
    }

    res.json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ success: false, error: 'Failed to delete service' });
  }
});

export default router;
