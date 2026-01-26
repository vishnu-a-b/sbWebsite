'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2000&auto=format&fit=crop',
    title: 'Double Your Impact',
    subtitle: 'Benevity Corporate Matching',
    description: 'Your donation can go twice as far. Many companies match employee contributions dollar for dollar.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop',
    title: 'Workplace Giving',
    subtitle: 'Easy & Tax Efficient',
    description: 'Donate directly from your payroll with instant tax receipts and complete transparency.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop',
    title: 'Global Community',
    subtitle: 'Supporting Shanthibhavan',
    description: 'Join a global network of corporate heroes making a difference in palliative care.',
  },
];

export default function BenevityHero({ slides }: { slides?: any[] }) {
  const activeSlides = slides && slides.length > 0 ? slides : SLIDES;
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  const swiperRef = useRef<any>(null);
  const [isPaused, setIsPaused] = useState(false);

  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;
    
    if (isPaused) {
      swiperRef.current.autoplay.start();
      setIsPaused(false);
    } else {
      swiperRef.current.autoplay.stop();
      setIsPaused(true);
    }
  };

  return (
    <div className="relative w-full h-[85vh] min-h-[600px] bg-black">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full relative group"
        loop={true}
      >
        {activeSlides.map((slide) => (
          <SwiperSlide key={slide._id || slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.imageUrl || slide.image}')` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                <div className="max-w-4xl mx-auto px-4 translate-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-6"
                  >
                    {slide.subtitle && (
                      <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm md:text-base font-medium border border-white/20">
                        {slide.subtitle}
                      </span>
                    )}
                    <h1 className="text-4xl  font-bold text-white leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="pt-4">
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all">
                        <Link href={slide.ctaLink || "https://causes.benevity.org/"} target={slide.ctaLink && !slide.ctaLink.startsWith('http') ? "_self" : "_blank"} rel="noopener noreferrer">
                          {slide.ctaText || "Find Us on Benevity"}
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Autoplay Progress & Control */}
        <div className="absolute bottom-8 right-8 z-10 flex items-center gap-4">
          <button 
            onClick={toggleAutoplay}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-lg"
            aria-label={isPaused ? "Resident Autoplay" : "Pause Autoplay"}
          >
            {isPaused ? <Play className="w-5 h-5 fill-current" /> : <Pause className="w-5 h-5 fill-current" />}
          </button>
          
          <div className="autoplay-progress relative w-12 h-12 flex items-center justify-center font-bold text-white">
            <svg viewBox="0 0 48 48" ref={progressCircle} className="absolute inset-0 w-full h-full rotate-[-90deg] stroke-primary">
              <circle cx="24" cy="24" r="20" fill="none" strokeWidth="4" className="stroke-white/20" />
              <circle cx="24" cy="24" r="20" fill="none" strokeWidth="4" className="stroke-current" style={{ strokeDasharray: 125.6, strokeDashoffset: 'calc(125.6px * (1 - var(--progress)))', transition: 'stroke-dashoffset 0.1s linear' }} />
            </svg>
            <span ref={progressContent} className="text-sm"></span>
          </div>
        </div>
      </Swiper>
      
      {/* Custom Styles not handled by utility classes */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 5px;
          background: #3B82F6; /* Primary Color */
          transition: width 0.3s ease;
        }
      `}</style>
    </div>
  );
}
