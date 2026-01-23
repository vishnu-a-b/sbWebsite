import { getNewsEvent } from "@/app/actions/cms/newsEvents";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Calendar, ArrowLeft, Tag, Share2 } from "lucide-react";
import RevealAnimation from "@/components/RevealAnimation";

export const dynamic = 'force-dynamic';

export default async function NewsEventDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const item = await getNewsEvent(id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">News/Event Not Found</h1>
          <Button asChild>
            <Link href="/news-events">Back to All News</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Dynamic Header */}
      <section className="bg-primary pt-32 pb-40 relative overflow-hidden">
        <div className="container px-4 mx-auto max-w-4xl relative z-10">
          <RevealAnimation direction="down">
            <Link href="/news-events" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              BACK TO ALL NEWS
            </Link>
          </RevealAnimation>
          
          <RevealAnimation>
            <div className="mb-6">
               <span className={`px-4 py-1.5 text-xs font-bold rounded-full backdrop-blur-md border ${
                 item.type === 'news' 
                 ? 'bg-blue-500/20 text-blue-100 border-blue-400/30' 
                 : 'bg-green-500/20 text-green-100 border-green-400/30'
               }`}>
                 {item.type.toUpperCase()}
               </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tighter">
              {item.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/70">
              <div className="flex items-center gap-2 font-medium">
                <Calendar className="w-5 h-5" />
                {item.eventDate ? new Date(item.eventDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Ongoing'}
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Tag className="w-5 h-5" />
                SHANTHIBHAVAN CARE
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Content Section */}
      <section className="-mt-20 pb-24 relative z-20">
        <div className="container px-4 mx-auto max-w-4xl">
          <RevealAnimation delay={0.2}>
            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
              {/* Main Image */}
              {item.images && item.images[0] && (
                <div className="relative aspect-video w-full overflow-hidden">
                  <img 
                    src={item.images[0]} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-8 md:p-16">
                {/* Intro Text */}
                <p className="text-xl font-bold text-primary mb-10 leading-relaxed italic border-l-4 border-secondary pl-6">
                  {item.description}
                </p>

                {/* Content */}
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                  {item.fullContent ? (
                    item.fullContent.split('\n').map((para: string, i: number) => (
                      <p key={i}>{para}</p>
                    ))
                  ) : (
                    <p>Details for this {item.type} are being updated. Check back soon for the full report.</p>
                  )}
                </div>

                {/* Gallery or secondary images if any */}
                {item.images && item.images.length > 1 && (
                  <div className="grid grid-cols-2 gap-4 mt-12">
                    {item.images.slice(1).map((img : string, i: number) => (
                      <div key={i} className="rounded-2xl overflow-hidden aspect-square shadow-lg">
                         <img src={img} className="w-full h-full object-cover" alt={`${item.title} gallery ${i}`} />
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                   <div className="flex gap-4">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Share2 className="w-4 h-4" />
                      </Button>
                   </div>
                   <Button asChild size="lg" className="rounded-full px-12 font-bold shadow-lg">
                      <Link href="/news-events">See More Stories</Link>
                   </Button>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </div>
  );
}
