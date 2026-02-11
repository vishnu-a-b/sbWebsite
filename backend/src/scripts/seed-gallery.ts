import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Gallery from '../modules/gallery/gallery.model.js';

dotenv.config();

const galleryImages = [
  // Gallery/Album Photos
  {
    imageUrl: 'https://shanthibhavan.in/images/album/photos/690862fae90fe.jpeg',
    altText: 'Life at Shanthibhavan',
    category: 'Hospital Life',
    priority: 100,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/album/photos/66e3dd093ea3e.jpeg',
    altText: 'Care and Compassion',
    category: 'Patient Care',
    priority: 95,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/album/photos/66e3dd08de31e.jpeg',
    altText: 'Medical Team at Work',
    category: 'Medical Team',
    priority: 90,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/album/photos/66e3dd0877dd6.jpeg',
    altText: 'Nursing Care',
    category: 'Patient Care',
    priority: 85,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/album/photos/66e3dc4eaeba5.jpeg',
    altText: 'Hospital Facilities',
    category: 'Facilities',
    priority: 80,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/album/photos/66e3dc4e65a9b.jpeg',
    altText: 'Community Support',
    category: 'Community',
    priority: 75,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/album/photos/66e3dc4def388.jpeg',
    altText: 'Moments of Hope',
    category: 'Hospital Life',
    priority: 70,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/album/photos/66e3db9bec446.jpeg',
    altText: 'Physiotherapy Session',
    category: 'Rehabilitation',
    priority: 65,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/album/photos/66e3db9b461eb.jpeg',
    altText: 'Patient Rehabilitation',
    category: 'Rehabilitation',
    priority: 60,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/album/photos/66e3db9ae3080.jpeg',
    altText: 'Spiritual Care',
    category: 'Spiritual Care',
    priority: 55,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/album/photos/637c74188b6da.jpeg',
    altText: 'Counseling Session',
    category: 'Support Services',
    priority: 50,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/album/photos/637c72b3c756e.jpeg',
    altText: 'Volunteer Activities',
    category: 'Volunteers',
    priority: 45,
    isActive: true,
  },
  // Services Images
  {
    imageUrl: 'https://shanthibhavan.in/images/products/5b46fddd7d27d.jpeg',
    altText: 'Palliative Home Care',
    category: 'Services',
    priority: 40,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/products/5b46fb5737c29.jpeg',
    altText: 'Free Dialysis Unit',
    category: 'Services',
    priority: 35,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/products/5b4708488e94c.jpeg',
    altText: 'Ambulance Services',
    category: 'Services',
    priority: 30,
    isActive: true,
  },
  // Featured Projects
  {
    imageUrl: 'https://shanthibhavan.in/images/pages/5fcb957946de6.jpeg',
    altText: "Joy's Touch Project",
    category: 'Projects',
    priority: 25,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/pages/62a2cd7037ce5.jpeg',
    altText: 'Devadeyam Elder Village',
    category: 'Projects',
    priority: 20,
    isActive: true,
  },
  {
    imageUrl: 'https://shanthibhavan.in/images/pages/5fcb954aa8cce.jpeg',
    altText: 'San Damiano Hilltop Kitchen',
    category: 'Projects',
    priority: 15,
    isActive: true,
  },
];

async function seedGallery() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/shanthibhavan';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Clear existing gallery images (optional)
    await Gallery.deleteMany({});
    console.log('Cleared existing gallery images');

    // Insert new images
    await Gallery.insertMany(galleryImages);
    console.log(`Added ${galleryImages.length} gallery images successfully!`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding gallery:', error);
    process.exit(1);
  }
}

seedGallery();
