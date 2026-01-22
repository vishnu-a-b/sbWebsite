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
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
                The First Palliative Hospital in India
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Shanthibhavan Palliative Hospital operates as a division of the Franciscan Sisters of St. Clare Charitable Trust.
                We function as a no-bill hospital with 49 beds, providing comprehensive palliative care without bills and cash counters.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Palliative care aims to improve the quality of life of people with life-limiting or disabling diseases,
                by treating pain and by providing emotional, mental and social support.
              </p>
              <Button asChild variant="default" size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://shanthibhavan.in/images/products/5b46fcb5b0482.jpeg"
                alt="Hospital Care at Shanthibhavan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive care and support for patients and their families
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services && services.length > 0 ? (
              services.slice(0, 6).map((service: any) => {
                // @ts-ignore
                const IconComponent = LucideIcons[service.icon] || LucideIcons.Activity;
                const linkHref = service.slug ? `/services/${service.slug}` : '#';

                return (
                  <Link href={linkHref} key={service._id} className="block h-full">
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden border-none shadow-md">
                      <div className="relative h-48 w-full overflow-hidden">
                        <img 
                          src={service.image || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-end p-4">
                           <IconComponent className="h-8 w-8 text-white mt-auto" />
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })
            ) : (
              <>
                <Card className="hover:shadow-lg transition-all duration-300 group overflow-hidden border-none shadow-md">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" alt="Hospital Care" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-end p-4">
                        <Heart className="h-8 w-8 text-white mt-auto" />
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">49-Bed Hospital Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Round-the-clock nursing, pain management, ICU with ventilator facility, and symptom control.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-all duration-300 group overflow-hidden border-none shadow-md">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop" alt="Home Care" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-end p-4">
                        <Truck className="h-8 w-8 text-white mt-auto" />
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Home Care Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      15 vehicles across Thiruvananthapuram District bringing care directly to patients' homes.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-all duration-300 group overflow-hidden border-none shadow-md">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop" alt="Free Dialysis" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-end p-4">
                        <Activity className="h-8 w-8 text-white mt-auto" />
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Free Dialysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Sustainable solar-powered dialysis facility providing free treatment.
                    </p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
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

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 text-center">
            <div className="space-y-2">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-4xl font-bold">400k+</h3>
              <p className="text-sm opacity-90">Total Visitors</p>
            </div>
            <div className="space-y-2">
              <HandHeart className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-4xl font-bold">49</h3>
              <p className="text-sm opacity-90">Bed Hospital</p>
            </div>
            <div className="space-y-2">
              <Activity className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-4xl font-bold">15</h3>
              <p className="text-sm opacity-90">Home Care Vehicles</p>
            </div>
            <div className="space-y-2">
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-sm opacity-90">Emergency Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 sm:text-4xl md:text-5xl text-primary">
            You Can Make a Difference
          </h2>
          <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto">
            Your support helps us continue providing free care to those who need it most.
            Volunteer your time or donate to our cause.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/donate">Donate Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
