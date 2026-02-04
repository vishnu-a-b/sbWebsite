'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Heart, ArrowDown } from 'lucide-react';

interface VideoHeroProps {
  videoUrl: string;
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  thumbnailUrl?: string;
}

export default function VideoHero({
  videoUrl,
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  thumbnailUrl,
}: VideoHeroProps) {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={thumbnailUrl}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/50"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-8">

            {/* Subtitle Badge */}
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-effect px-6 py-3 rounded-full flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
                <span className="text-white text-sm md:text-base font-medium">
                  {subtitle}
                </span>
              </motion.div>
            )}

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-white max-w-5xl leading-tight"
            >
              {title}
            </motion.h1>

            {/* Description */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed"
              >
                {description}
              </motion.p>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              {ctaText && ctaLink && (
                <Button asChild size="lg" className="h-16 text-lg px-8 bg-white text-primary hover:bg-gray-100 shadow-2xl transition-transform hover:scale-105 active:scale-95">
                  <Link href={ctaLink}>
                    {ctaText}
                  </Link>
                </Button>
              )}
              <Button asChild size="lg" className="h-16 text-lg px-8 bg-white text-primary hover:bg-gray-100 shadow-2xl transition-transform hover:scale-105 active:scale-95 border-none">
                <Link href="/benevity" className="flex items-center gap-2">
                  <Heart className="w-5 h-5 fill-primary text-primary animate-pulse" />
                  Support us on Benevity
                </Link>
              </Button>
            </motion.div>

            {/* Floating Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-4 md:gap-8 mt-12 max-w-3xl w-full"
            >
              <div className="glass-effect p-4 md:p-6 rounded-2xl backdrop-blur-md">
                <div className="text-2xl md:text-4xl font-bold text-white">400k+</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">Patients Served</div>
              </div>
              <div className="glass-effect p-4 md:p-6 rounded-2xl backdrop-blur-md">
                <div className="text-2xl md:text-4xl font-bold text-white">49</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">Bed Hospital</div>
              </div>
              <div className="glass-effect p-4 md:p-6 rounded-2xl backdrop-blur-md">
                <div className="text-2xl md:text-4xl font-bold text-white">24/7</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">Care Available</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
}
