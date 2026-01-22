import { getServiceBySlug } from "@/app/actions/service";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Calendar, Info, Phone } from "lucide-react";
import RevealAnimation from "@/components/RevealAnimation";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h1>
        <Button asChild>
          <Link href="/services">Back to Services</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        {service.image ? (
            <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            />
        ) : (
             <div className="w-full h-full bg-primary flex items-center justify-center text-white">
                <span className="text-6xl font-bold opacity-20">{service.title[0]}</span>
             </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto max-w-5xl">
            <RevealAnimation>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 shadow-sm">
                {service.title}
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.1}>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed shadow-sm">
                 {service.description.substring(0, 150)}...
              </p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
           <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
           </Link>

           <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600">
               <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span>Available Since: {new Date(service.startDate || new Date()).getFullYear()}</span>
               </div>
           </div>

           <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed whitespace-pre-line mb-12">
              {service.description}
           </div>
           
           <div className="bg-secondary/10 border-l-4 border-secondary p-8 rounded-r-xl">
             <h3 className="text-2xl font-bold text-primary mb-4">Need this Service?</h3>
             <p className="text-gray-700 mb-6">
               All our services are completely free. Contact us today to avail this service or to refer someone in need.
             </p>
             <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/contact">
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Us
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/donate">
                        Support Our Mission
                    </Link>
                </Button>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
