const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shanthibhavan';

const bannerSchema = new mongoose.Schema({
  title: String,
  description: String,
  ctaText: String,
  ctaLink: String,
  mediaType: String,
  videoUrl: String,
  imageUrl: String,
  thumbnailUrl: String,
  subtitle: String,
  order: Number,
  isActive: Boolean
}, { timestamps: true });

const Banner = mongoose.models.Banner || mongoose.model('Banner', bannerSchema);

async function updateBanner() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Update all banners with Book Appointment to Donate Now
    const result = await Banner.updateMany(
      {
        $or: [
          { ctaText: 'Book Appointment' },
          { ctaLink: '/appointment' }
        ]
      },
      {
        $set: {
          ctaText: 'Donate Now',
          ctaLink: '/donate'
        }
      }
    );

    console.log('Updated banners:', result);
    console.log(`Modified ${result.modifiedCount} banner(s)`);

    // Show all banners
    const banners = await Banner.find({});
    console.log('\nAll banners:');
    banners.forEach(b => {
      console.log(`- ${b.title}: ${b.ctaText} -> ${b.ctaLink}`);
    });

    await mongoose.disconnect();
    console.log('\nDone!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

updateBanner();
