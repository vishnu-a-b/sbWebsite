'use client';

import VideoHero from './VideoHero';

// Default video banner
const DEFAULT_VIDEO_BANNER = {
  _id: 'default1',
  title: 'For the People, By the People',
  subtitle: 'India\'s First No-Bill Palliative Hospital',
  description: 'The First Palliative Hospital in India with no bills and bill counters. Dedicated to improving the quality of life for bedridden patients.',
  mediaType: 'video',
  videoUrl: '/video/hero.mp4',
  thumbnailUrl: '/image/hero.jpeg',
  ctaText: 'Donate Now',
  ctaLink: '/donate',
};

export default function BannerCarousel({ dbBanners }: { dbBanners: any[] }) {
  // Find the first video banner from DB or use default
  const videoBanner = dbBanners?.find(b => b.mediaType === 'video' && b.videoUrl) || DEFAULT_VIDEO_BANNER;

  return (
    <VideoHero
      videoUrl={videoBanner.videoUrl}
      title={videoBanner.title}
      subtitle={videoBanner.subtitle}
      description={videoBanner.description}
      ctaText={videoBanner.ctaText}
      ctaLink={videoBanner.ctaLink}
      thumbnailUrl={videoBanner.thumbnailUrl}
    />
  );
}
