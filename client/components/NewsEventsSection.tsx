import { getNewsEvents } from "@/app/actions/cms/newsEvents";
import { Card, CardContent } from "./ui/Card";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";
import RevealAnimation from "./RevealAnimation";

export default async function NewsEventsSection() {
  const items = await getNewsEvents();
  
  if (!items || items.length === 0) return null;

  // Show only top 3 news/events on home
  const displayItems = items.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <RevealAnimation>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Latest News & Events
              </h2>
              <div className="w-20 h-1.5 bg-secondary mx-auto md:mx-0 mb-6 rounded-full" />
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Stay updated with the latest happenings at Shanthibhavan Palliative Hospital.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-2 font-bold hover:bg-primary hover:text-white transition-all">
              <Link href="/news-events" className="flex items-center gap-2">
                  View All News <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </RevealAnimation>

        <div className="grid gap-8 md:grid-cols-3">
          {displayItems.map((item: any, index: number) => (
            <RevealAnimation key={item._id} delay={index * 0.1}>
              <Link href={`/news-events/${item._id}`} className="block h-full group">
                <Card className="overflow-hidden flex flex-col h-full border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-slate-50">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={item.images && item.images[0] ? item.images[0] : "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800"}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
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
                  </div>
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-primary/60 text-sm font-semibold mb-4">
                      <Calendar className="h-4 w-4" />
                      {item.eventDate ? new Date(item.eventDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent'}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-8 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="mt-auto flex items-center text-primary font-bold text-sm tracking-wide transform group-hover:translate-x-2 transition-transform duration-300">
                      READ MORE <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
