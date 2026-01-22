'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import VideoHero from './VideoHero';
import { motion } from 'framer-motion';

// Fallback banners if none in DB
const DEFAULT_BANNERS = [
  {
    _id: 'default1',
    title: 'For the People, By the People',
    subtitle: 'India\'s First No-Bill Palliative Hospital',
    description: 'The First Palliative Hospital in India with no bills and bill counters. Dedicated to improving the quality of life for bedridden patients.',
    mediaType: 'video',
    videoUrl: '/video/hero.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop',
    ctaText: 'Donate Now',
    ctaLink: '/donate',
  },
  {
    _id: 'default2',
    title: 'Compassionate Care, Always Free',
    subtitle: '24/7 Emergency Care Available',
    description: 'We provide comprehensive medical, psychological, and spiritual care for the terminally ill, ensuring dignity in every moment.',
    mediaType: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop',
    ctaText: 'Learn More',
    ctaLink: '/about',
  },
  {
    _id: 'default3',
    title: 'Adding Life to Days',
    subtitle: 'Serving with Compassion',
    description: 'Our mission is to add life to days, not just days to life. Join us in our journey of serving the destitute.',
    mediaType: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?q=80&w=2000&auto=format&fit=crop',
    ctaText: 'Donate Now',
    ctaLink: '/donate',
  }
];

export default function BannerCarousel({ dbBanners }: { dbBanners: any[] }) {
  const banners = dbBanners && dbBanners.length > 0 ? dbBanners : DEFAULT_BANNERS;

  // If first banner is a video, show VideoHero
  if (banners.length > 0 && banners[0].mediaType === 'video' && banners[0].videoUrl) {
    return (
      <VideoHero
        videoUrl={banners[0].videoUrl}
        title={banners[0].title}
        subtitle={banners[0].subtitle}
        description={banners[0].description}
        ctaText={banners[0].ctaText}
        ctaLink={banners[0].ctaLink}
        thumbnailUrl={banners[0].thumbnailUrl}
      />
    );
  }

  // Otherwise use carousel
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <div className="relative w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {banners.map((banner, index) => (
          <div key={banner._id} className="relative flex-[0_0_100%] min-w-0">
            {banner.mediaType === 'video' && banner.videoUrl ? (
              <VideoHero
                videoUrl={banner.videoUrl}
                title={banner.title}
                subtitle={banner.subtitle}
                description={banner.description}
                ctaText={banner.ctaText}
                ctaLink={banner.ctaLink}
                thumbnailUrl={banner.thumbnailUrl}
              />
            ) : (
              <div className="relative h-screen min-h-[600px]">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url('${banner.imageUrl}')` }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-0" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="flex flex-col items-center text-center space-y-6"
                    >
                      {banner.subtitle && (
                        <div className="glass-effect px-6 py-3 rounded-full">
                          <span className="text-white text-sm md:text-base font-medium">
                            {banner.subtitle}
                          </span>
                        </div>
                      )}
                      <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white max-w-5xl leading-tight">
                        {banner.title}
                      </h1>
                      <p className="mx-auto max-w-3xl text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
                        {banner.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100">
                          <Link href={banner.ctaLink || '/donate'}>
                            {banner.ctaText || 'Donate Now'}
                          </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm">
                          <Link href="/about">Learn More</Link>
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
