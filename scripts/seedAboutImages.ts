import connectToDatabase from '../lib/db';
import AboutImage from '../models/AboutImage';

const aboutImageData = [
  {
    imageUrl: "https://shanthibhavan.in/images/banner/5b56c7058a275.jpeg",
    altText: "Shanthibhavan Palliative Hospital - India's First No-Bill Palliative Hospital",
    isActive: true,
  },
];

async function seedAboutImages() {
  try {
    console.log('Connecting to database...');
    await connectToDatabase();

    console.log('Clearing existing about images...');
    await AboutImage.deleteMany({});

    console.log('Seeding about images...');
    const result = await AboutImage.insertMany(aboutImageData);

    console.log(`Successfully seeded ${result.length} about image(s)!`);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding about images:', error);
    process.exit(1);
  }
}

seedAboutImages();
