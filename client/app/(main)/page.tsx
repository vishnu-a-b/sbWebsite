import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Heart, Activity, Users, Truck, Clock, HandHeart } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import BannerCarousel from '@/components/BannerCarousel';
import { getBanners } from '@/app/actions/banner';
import { getServices } from '@/app/actions/service';
import ProjectsSection from '@/components/ProjectsSection';
import AwardsSection from '@/components/AwardsSection';
import NewsEventsSection from '@/components/NewsEventsSection';
import BenevitySection from '@/components/BenevitySection';
import RevealAnimation from '@/components/RevealAnimation';
import ParallaxSection from '@/components/ParallaxSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import Magnetic from '@/components/Magnetic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shanthibhavan Palliative Hospital | First Palliative Hospital in India',
  description: 'Shanthibhavan is India\'s first palliative hospital providing compassionate, no-bill care with 49 beds. Comprehensive palliative care, home care services, and free dialysis facility.',
  keywords: 'palliative care, hospice, Shanthibhavan, Kerala, India, no-bill hospital, free healthcare, home care, dialysis',
  openGraph: {
    title: 'Shanthibhavan Palliative Hospital | First Palliative Hospital in India',
    description: 'Providing compassionate palliative care since inception. No bills, no cash counters - just care.',
    type: 'website',
    images: [
      {
        url: 'https://shanthibhavan.in/images/products/5b46fcb5b0482.jpeg',
        width: 1200,
        height: 630,
        alt: 'Shanthibhavan Palliative Hospital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shanthibhavan Palliative Hospital',
    description: 'India\'s first no-bill palliative hospital providing compassionate care',
  },
};

// Opt out of caching for now to see updates immediately
export const dynamic = 'force-dynamic';

export default async function Home() {
  const [banners, services] = await Promise.all([
    getBanners('home'),
    getServices()
  ]);

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Shanthibhavan Palliative Hospital',
    description: 'India\'s first palliative hospital providing compassionate, no-bill care with 49 beds',
    url: 'https://shanthibhavan.in',
    logo: 'https://shanthibhavan.in/images/products/5b46fcb5b0482.jpeg',
    foundingDate: '1993',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Thiruvananthapuram',
      addressRegion: 'Kerala',
      addressCountry: 'IN'
    },
    medicalSpecialty: 'Palliative Care',
    hospitalAffiliation: 'Franciscan Sisters of St. Clare Charitable Trust',
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Palliative Care'
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Home Care Services'
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Dialysis'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '100'
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section with Banner */}
      <BannerCarousel dbBanners={banners} />

      {/* About Section */}
      <section className="w-full py-20 md:py-32 bg-slate-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0f635c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <RevealAnimation direction="left">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-2">
                  Established 1993
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                  The First Palliative Hospital in India
                </h2>
                <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                  Shanthibhavan Palliative Hospital operates as a division of the Franciscan Sisters of St. Clare Charitable Trust.
                </p>
                <div className="w-20 h-1 bg-secondary rounded-full" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  We function as a no-bill hospital with 49 beds, providing comprehensive palliative care without bills and cash counters.
                  Our aim is to improve the quality of life of people with life-limiting or disabling diseases.
                </p>
                <div className="flex pt-4">
                  <Button asChild variant="default" size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
            </RevealAnimation>
            
            <RevealAnimation direction="right" delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl rotate-2 transition-transform group-hover:rotate-1" />
                <div className="absolute -inset-4 bg-secondary/5 rounded-3xl -rotate-2 transition-transform group-hover:-rotate-1" />
                <ParallaxSection offset={-30}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="https://shanthibhavan.in/images/products/5b46fcb5b0482.jpeg"
                      alt="Hospital Care at Shanthibhavan"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </ParallaxSection>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Our Services
              </h2>
              <div className="w-24 h-1.5 bg-secondary mx-auto mb-6 rounded-full" />
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Comprehensive care and support for patients and their families, provided with radical compassion and zero cost.
              </p>
            </div>
          </RevealAnimation>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services && services.length > 0 ? (
              services.slice(0, 6).map((service: any, index: number) => {
                // @ts-ignore
                const IconComponent = LucideIcons[service.icon] || LucideIcons.Activity;
                const linkHref = service.slug ? `/services/${service.slug}` : '#';

                return (
                  <RevealAnimation key={service._id} delay={index * 0.1}>
                    <Link href={linkHref} className="block h-full">
                      <Card className="h-full hover:shadow-2xl transition-all duration-500 group overflow-hidden border-none shadow-lg rounded-2xl">
                        <div className="relative h-60 w-full overflow-hidden">
                          <img 
                            src={service.image || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"} 
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                               <IconComponent className="h-7 w-7 text-primary" />
                            </div>
                          </div>
                        </div>
                        <CardHeader className="p-6 pb-2">
                          <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="px-6 pb-6">
                          <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                            {service.description}
                          </p>
                          <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                            Learn more <LucideIcons.ArrowRight className="ml-2 h-4 w-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </RevealAnimation>
                );
              })
            ) : (
              // Fallback cards would go here with similar RevealAnimation wrapper
              null 
            )}
          </div>
          <RevealAnimation delay={0.4}>
            <div className="flex justify-center mt-16">
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 border-2 hover:bg-primary hover:text-white transition-all">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Awards Section */}
      <AwardsSection />

      {/* News & Events Section */}
      <NewsEventsSection />

      {/* Benevity Section */}
      <BenevitySection />

      {/* Stats Section with Glassmorphism */}
      <section className="w-full py-24 md:py-32 bg-primary relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-[0.03] skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-white opacity-[0.02] -skew-x-12 -translate-x-1/2" />

        <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            <RevealAnimation direction="up" delay={0.1}>
              <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center hover:bg-white/15 transition-all duration-500 hover:-translate-y-2">
                <Users className="h-10 w-10 mx-auto mb-6 text-white/70 group-hover:text-white transition-colors" />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                  <AnimatedCounter end={400} suffix="k+" />
                </h3>
                <p className="text-white/60 font-medium uppercase tracking-wider text-xs">Total Visitors</p>
              </div>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.2}>
              <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center hover:bg-white/15 transition-all duration-500 hover:-translate-y-2">
                <HandHeart className="h-10 w-10 mx-auto mb-6 text-white/70 group-hover:text-white transition-colors" />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                  <AnimatedCounter end={49} />
                </h3>
                <p className="text-white/60 font-medium uppercase tracking-wider text-xs">Bed Hospital</p>
              </div>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.3}>
              <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center hover:bg-white/15 transition-all duration-500 hover:-translate-y-2">
                <Activity className="h-10 w-10 mx-auto mb-6 text-white/70 group-hover:text-white transition-colors" />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                  <AnimatedCounter end={15} />
                </h3>
                <p className="text-white/60 font-medium uppercase tracking-wider text-xs">Home Care Vehicles</p>
              </div>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.4}>
              <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center hover:bg-white/15 transition-all duration-500 hover:-translate-y-2">
                <Clock className="h-10 w-10 mx-auto mb-6 text-white/70 group-hover:text-white transition-colors" />
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                  24/7
                </h3>
                <p className="text-white/60 font-medium uppercase tracking-wider text-xs">Emergency Care</p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Immersive Call to Action */}
      <section className="w-full py-24 md:py-40 relative overflow-hidden group">
        <Image
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop"
          alt="Support Shanthibhavan"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
        
        <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10 text-center text-white">
          <RevealAnimation direction="up">
            <h2 className="text-4xl font-bold mb-8 sm:text-5xl md:text-7xl tracking-tighter leading-tight">
              You Can Make a <span className="text-secondary">Difference</span>
            </h2>
            <p className="mb-12 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Your support helps us continue providing free care to those who need it most.
              Volunteer your time or donate to our cause.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Magnetic>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-secondary hover:text-primary rounded-full px-10 py-7 text-lg font-bold transition-all">
                  <Link href="/donate">Donate Today</Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg font-bold transition-all">
                  <Link href="/volunteer">Become a Volunteer</Link>
                </Button>
              </Magnetic>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </div>
  );
}
