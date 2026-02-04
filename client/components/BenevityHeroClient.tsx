'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Heart, ArrowRight } from 'lucide-react';

interface BenevityPageContent {
  badge?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  backgroundImage?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  stat3Value?: string;
  stat3Label?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  cardTitle?: string;
  cardSubtitle?: string;
  cardFeature1?: string;
  cardFeature2?: string;
  cardFeature3?: string;
  cardFeature4?: string;
}

interface BenevityHeroClientProps {
  content: BenevityPageContent | null;
}

export default function BenevityHeroClient({ content }: BenevityHeroClientProps) {
  const badge = content?.badge || 'Official Benevity Partner';
  const title = content?.title || 'Double Your Gift,';
  const highlightText = content?.highlightText || 'Double the Care';
  const description = content?.description || 'Support Shanthibhavan Palliative Hospital through your company\'s Benevity portal. Your employer matches your donation—twice the comfort for patients in need.';
  const defaultBg = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop';
  const backgroundImage = (content?.backgroundImage && content.backgroundImage.trim() !== '') ? content.backgroundImage : defaultBg;
  const stat1Value = content?.stat1Value || '2x';
  const stat1Label = content?.stat1Label || 'Matching Impact';
  const stat2Value = content?.stat2Value || '500+';
  const stat2Label = content?.stat2Label || 'Partner Companies';
  const stat3Value = content?.stat3Value || '100%';
  const stat3Label = content?.stat3Label || 'Tax Deductible';
  const ctaText = content?.ctaText || 'Support Us on Benevity';
  const ctaLink = content?.ctaLink || 'https://causes.benevity.org/';
  const secondaryCtaText = content?.secondaryCtaText || 'How It Works';
  const secondaryCtaLink = content?.secondaryCtaLink || '#how-it-works';

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Corporate giving and compassion"
          fill
          className="object-cover transition-transform duration-[20s] ease-in-out hover:scale-110"
          priority
          unoptimized
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-[1]" />

      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-sm px-4 py-1.5 rounded-full mb-6 hover:bg-white/20 transition-colors duration-300">
            {badge}
          </span>

          {/* Bold headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {title}{" "}
            <span className="text-secondary">{highlightText}</span>
          </h1>

          {/* Short, punchy description */}
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-xl">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Link href={ctaLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <a
              href={secondaryCtaLink}
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-3 rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              {secondaryCtaText}
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-white/20">
            <div className="group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">{stat1Value}</div>
              <div className="text-sm text-white/70 mt-1">{stat1Label}</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{stat2Value}</div>
              <div className="text-sm text-white/70 mt-1">{stat2Label}</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{stat3Value}</div>
              <div className="text-sm text-white/70 mt-1">{stat3Label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
