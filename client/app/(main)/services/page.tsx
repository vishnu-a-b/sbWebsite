import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { getServices } from "@/app/actions/service";
import { getServicesPageContent } from "@/app/actions/servicesPage";
// Import all icons used (map string to component)
import * as LucideIcons from "lucide-react";

// Fallback services if DB is empty
const DEFAULT_SERVICES = [
  {
    title: "49-Bed Hospital Care",
    description: "Comprehensive palliative hospital care with 24/7 medical supervision, ICU with ventilator facility, pain management, and symptom control in a compassionate no-bill environment.",
    icon: "Bed",
    color: "text-primary"
  },
  // ... (keeping fallback just in case, though getServices should return empty array if fail)
];

// Opt out of caching
export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  // Fetch services from backend API
  const dbServices = await getServices();
  const pageContent = await getServicesPageContent();
  
  // Fallback to default static services if backend returns empty (e.g. not seeded or down)
  const services = dbServices && dbServices.length > 0 ? dbServices : DEFAULT_SERVICES;

  // Defaults for page content if null
  const heroTitle = pageContent?.heroTitle || "Our Services";
  const heroSubtitle = pageContent?.heroSubtitle || '"For the people, by the people." All our services are provided completely free of charge, with no bills and no counters.';
  const helperTitle = pageContent?.helperTitle || "No Barriers to Care";
  const helperDescription = pageContent?.helperDescription || "There are no barriers of religion, caste, or creed. Everyone is equal here. If you need relief from pain or support during terminal illness, our doors are always open.";
  const ctaButtonText = pageContent?.ctaButtonText || "Contact Us";
  const ctaLink = pageContent?.ctaLink || "/contact";

  return (
    <div className="flex flex-col min-h-screen bg-white">
       <section className="bg-gradient-to-r from-primary to-primary/90 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{heroTitle}</h1>
        <p className="text-white/90 max-w-2xl mx-auto px-4">
          {heroSubtitle}
        </p>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service: any, index: number) => {
            // Dynamically resolve icon component
            // @ts-ignore
            const IconComponent = LucideIcons[service.icon] || LucideIcons.Activity;
            const colorClass = service.color || "text-primary";
            const linkHref = service.slug ? `/services/${service.slug}` : '#';

            return (
              <Link href={linkHref} key={index} className="block h-full">
                <Card className="h-full border-0 shadow-xl bg-white overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    {service.image ? (
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-primary/30" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg backdrop-blur-sm">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-700 leading-relaxed line-clamp-3">
                      {service.description}
                    </CardDescription>
                    <div className="mt-6 flex justify-start">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide group-hover:bg-primary group-hover:text-white transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                            Learn More <LucideIcons.ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center bg-muted p-8 md:p-10 rounded-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">{helperTitle}</h3>
          <p className="mb-6 md:mb-8 text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            {helperDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button asChild size="lg">
               <Link href={ctaLink}>{ctaButtonText}</Link>
             </Button>
             <Button asChild size="lg" variant="outline">
               <Link href="/donate">Support Our Cause</Link>
             </Button>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
