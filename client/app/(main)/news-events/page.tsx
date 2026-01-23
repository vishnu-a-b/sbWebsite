import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { getPublicNewsEvents } from "@/app/actions/cms/newsEvents";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import RevealAnimation from "@/components/RevealAnimation";

export const dynamic = 'force-dynamic';

export default async function NewsEventsPage() {
  const newsEvents = await getPublicNewsEvents();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <RevealAnimation>
          <div className="container px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">News & Events</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Stay updated with the latest stories, milestones, and upcoming events from Shanthibhavan Palliative Hospital.
            </p>
          </div>
        </RevealAnimation>
      </section>

      {/* Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          {newsEvents && newsEvents.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {newsEvents.map((item: any, index: number) => (
                <RevealAnimation key={item._id} delay={index * 0.1}>
                  <Link href={`/news-events/${item._id}`} className="block h-full">
                    <Card className="h-full border-0 shadow-xl bg-white overflow-hidden group hover:shadow-2xl transition-all duration-500 rounded-2xl flex flex-col">
                      <div className="relative h-60 overflow-hidden">
                        <img 
                          src={item.images && item.images[0] ? item.images[0] : "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800"} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 z-10">
                           <span className={`px-4 py-1.5 text-xs font-bold rounded-full backdrop-blur-md border ${
                             item.type === 'news' 
                             ? 'bg-blue-500/20 text-blue-100 border-blue-400/30' 
                             : 'bg-green-500/20 text-green-100 border-green-400/30'
                           }`}>
                             {item.type.toUpperCase()}
                           </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      <CardContent className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-primary/60 text-sm font-semibold mb-4">
                          <Calendar className="h-4 w-4" />
                          {item.eventDate ? new Date(item.eventDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Ongoing'}
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </h2>
                        
                        <p className="text-gray-600 text-base leading-relaxed line-clamp-3 mb-8">
                          {item.description}
                        </p>
                        
                        <div className="mt-auto flex items-center text-primary font-bold text-sm tracking-wide transform group-hover:translate-x-2 transition-transform duration-300">
                          READ STORY <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </RevealAnimation>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl shadow-inner border border-dashed border-gray-200">
              <Tag className="w-16 h-16 mx-auto text-gray-300 mb-6" />
              <h3 className="text-2xl font-bold text-gray-400">No news or events found at the moment.</h3>
              <p className="text-gray-400 mt-2">Please check back soon for updates!</p>
            </div>
          )}

          {/* Helper CTA Section */}
          <RevealAnimation delay={0.4}>
            <div className="mt-20 text-center bg-primary p-12 md:p-16 rounded-[2rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter">Want to see our work in person?</h3>
              <p className="mb-10 text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Join our volunteer program or visit us to witness the impact of palliative care on the lives of our patients.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Button asChild size="lg" className="bg-white text-primary hover:bg-secondary hover:text-primary rounded-full px-10 py-7 font-bold text-lg shadow-lg">
                   <Link href="/volunteer">Join as Volunteer</Link>
                 </Button>
                 <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 py-7 font-bold text-lg">
                   <Link href="/contact">Visit Us</Link>
                 </Button>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </div>
  );
}
