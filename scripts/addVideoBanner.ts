import connectToDatabase from '../lib/db';
import Banner from '../models/Banner';

async function addVideoBanner() {
  try {
    await connectToDatabase();

    console.log('Checking existing banners...');

    // Check if video banner already exists
    const existingVideoBanner = await Banner.findOne({
      videoUrl: '/video/hero.mp4'
    });

    if (existingVideoBanner) {
      console.log('✅ Video banner already exists!');
      return;
    }

    // Create new video banner
    const videoBanner = await Banner.create({
      title: 'For the People, By the People',
      subtitle: "India's First No-Bill Palliative Hospital",
      description: 'The First Palliative Hospital in India with no bills and bill counters. Dedicated to improving the quality of life for bedridden patients.',
      mediaType: 'video',
      videoUrl: '/video/hero.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop',
      ctaText: 'Donate Now',
      ctaLink: '/donate',
      order: 0,
      isActive: true,
    });

    console.log('✅ Video banner created successfully!');
    console.log('📹 Video URL:', videoBanner.videoUrl);
    console.log('🎬 Now visit http://localhost:3000 to see your video hero!');

  } catch (error) {
    console.error('❌ Error adding video banner:', error);
  } finally {
    process.exit(0);
  }
}

addVideoBanner();
