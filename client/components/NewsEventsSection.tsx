import { getNewsEvents } from "@/app/actions/cms/newsEvents";
import { Card, CardContent } from "./ui/Card";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";

export default async function NewsEventsSection() {
  const items = await getNewsEvents();
  
  if (!items || items.length === 0) return null;

  // Show only top 3 news/events on home
  const displayItems = items.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary mb-4">
              Latest News & Events
            </h2>
            <p className="text-gray-600 text-lg">
              Stay updated with the latest happenings at Shanthibhavan Palliative Hospital.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/news-events" className="flex items-center gap-2">
                View All News <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {displayItems.map((item: any) => (
            <Card key={item._id} className="group overflow-hidden flex flex-col h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.images && item.images[0] ? item.images[0] : "/images/placeholder-news.jpg"}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${item.type === 'news' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                        {item.type.toUpperCase()}
                    </span>
                </div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  {item.eventDate ? new Date(item.eventDate).toLocaleDateString() : 'Recent'}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-auto">
                    <Link href={`/news-events/${item._id}`} className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
