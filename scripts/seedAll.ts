import connectToDatabase from '../lib/db';
import Banner from '../models/Banner';
import AboutImage from '../models/AboutImage';
import Gallery from '../models/Gallery';

const bannerData = [
  {
    title: "Welcome to Shanthibhavan",
    description: "India's First Palliative Hospital - Providing compassionate care without bills or cash counters",
    imageUrl: "https://shanthibhavan.in/images/banner/5b56c7058a275.jpeg",
    order: 1,
    isActive: true,
  },
  {
    title: "Compassionate Care for All",
    description: "49-bed no-bill hospital with 24/7 nursing, pain management, and ICU facilities",
    imageUrl: "https://shanthibhavan.in/images/banner/5b56c70be1224.jpeg",
    order: 2,
    isActive: true,
  },
  {
    title: "Home Care Services",
    description: "15 vehicles providing 24/7 emergency home care across Thrissur District",
    imageUrl: "https://shanthibhavan.in/images/products/5b46fddd7d27d.jpeg",
    order: 3,
    isActive: true,
  },
  {
    title: "Free Dialysis Unit",
    description: "Solar-powered dialysis facility with 40-patient capacity, completely free of charge",
    imageUrl: "https://shanthibhavan.in/images/products/5b46fb5737c29.jpeg",
    order: 4,
    isActive: true,
  },
];

const aboutImageData = [
  {
    imageUrl: "https://shanthibhavan.in/images/banner/5b56c7058a275.jpeg",
    altText: "Shanthibhavan Palliative Hospital - India's First No-Bill Palliative Hospital",
    isActive: true,
  },
];

const galleryImages = [
  { imageUrl: "https://shanthibhavan.in/images/products/5b46fcb5b0482.jpeg", altText: "Hospital Care", category: "care" },
  { imageUrl: "https://shanthibhavan.in/images/products/5b46fddd7d27d.jpeg", altText: "Palliative Home Care", category: "care" },
  { imageUrl: "https://shanthibhavan.in/images/products/5b46fb5737c29.jpeg", altText: "Free Dialysis Treatment", category: "services" },
  { imageUrl: "https://shanthibhavan.in/images/products/5b4708488e94c.jpeg", altText: "Free Ambulance Service", category: "services" },
  { imageUrl: "https://shanthibhavan.in/images/products/5b4700199a8e3.jpeg", altText: "Emergency Care Services", category: "services" },
  { imageUrl: "https://shanthibhavan.in/images/products/5b46f73f1b039.jpeg", altText: "Free Food for Patients", category: "services" },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/690862fae90fe.jpeg", altText: "Hospital Activities", category: "events" },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3dd093ea3e.jpeg", altText: "Patient Care", category: "care" },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3dd08de31e.jpeg", altText: "Medical Services", category: "services" },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3dd0877dd6.jpeg", altText: "Care Team", category: "care" },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3dc4eaeba5.jpeg", altText: "Hospital Facility", category: "facility" },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3dc4e65a9b.jpeg", altText: "Community Service", category: "events" },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3dc4def388.jpeg", altText: "Compassionate Care", category: "care" },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3db9bec446.jpeg", altText: "Hospital Environment", category: "facility" },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3db9b461eb.jpeg", altText: "Medical Equipment", category: "facility" },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/66e3db9ae3080.jpeg", altText: "Care Activities", category: "care" },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/637c74188b6da.jpeg", altText: "Hospital Events", category: "events" },
  { imageUrl: "https://shanthibhavan.in/images/album/photos/637c72b3c756e.jpeg", altText: "Community Outreach", category: "events" },
  { imageUrl: "https://shanthibhavan.in/images/articles/66def4898e6a7.jpeg", altText: "Award Recognition", category: "events" },
  { imageUrl: "https://shanthibhavan.in/images/articles/66def3e6beb9d.jpeg", altText: "Recognition Ceremony", category: "events" },
  { imageUrl: "https://shanthibhavan.in/images/products/5b9b9dcd01a34.jpeg", altText: "Early Medical Detection", category: "services" },
  { imageUrl: "https://shanthibhavan.in/images/products/5b9b932a43a69.jpeg", altText: "Scanning Services", category: "services" },
  { imageUrl: "https://shanthibhavan.in/images/products/5b9ba0e32c4cc.jpeg", altText: "Pharmacy Services", category: "services" },
  { imageUrl: "https://shanthibhavan.in/images/products/5b47096891615.jpeg", altText: "Ortho Care", category: "services" },
];

async function seedAll() {
  try {
    console.log('Connecting to database...');
    await connectToDatabase();

    console.log('\n--- Seeding Banners ---');
    await Banner.deleteMany({});
    const banners = await Banner.insertMany(bannerData);
    console.log(`✓ Successfully seeded ${banners.length} banners`);

    console.log('\n--- Seeding About Images ---');
    await AboutImage.deleteMany({});
    const aboutImages = await AboutImage.insertMany(aboutImageData);
    console.log(`✓ Successfully seeded ${aboutImages.length} about image(s)`);

    console.log('\n--- Seeding Gallery Images ---');
    await Gallery.deleteMany({});
    const gallery = await Gallery.insertMany(galleryImages);
    console.log(`✓ Successfully seeded ${gallery.length} gallery images`);

    console.log('\n✓ All data seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedAll();
