import connectToDatabase from '../lib/db';
import Banner from '../models/Banner';

async function makeVideoFirst() {
  try {
    await connectToDatabase();

    console.log('Setting video banner as first...');

    // Update all image banners to have higher order
    await Banner.updateMany(
      { mediaType: { $ne: 'video' } },
      { $set: { order: 10 } }
    );

    // Set video banner to order -1 to be first
    await Banner.updateMany(
      { mediaType: 'video', videoUrl: '/video/hero.mp4' },
      { $set: { order: -1 } }
    );

    console.log('✅ Video banner is now first!');
    console.log('🎬 Refresh http://localhost:3000 to see your video!');

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    process.exit(0);
  }
}

makeVideoFirst();
