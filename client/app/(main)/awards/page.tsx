import { Card, CardContent } from "@/components/ui/Card";
import { Award, Calendar, Building2 } from "lucide-react";
import API_BASE_URL from "@/lib/api";
import { getImageUrl } from "@/lib/image-url";
import RevealAnimation from "@/components/RevealAnimation";

export const dynamic = 'force-dynamic';

interface AwardItem {
  _id: string;
  title: string;
  awardingAuthority: string;
  year: number;
  description: string;
  image: string;
  priority: number;
}

async function getAwards(): Promise<AwardItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/awards`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch awards');
    }

    const data = await res.json();
    return data.awards || [];
  } catch (error) {
    console.error('Error fetching awards:', error);
    return [];
  }
}

export default async function AwardsPage() {
  const awards = await getAwards();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
          />
        </div>
        <div className="container px-4 md:px-6 mx-auto max-w-4xl relative z-10">
          <RevealAnimation>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-semibold text-sm mb-6">
              <Award className="w-4 h-4" />
              Recognition
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Awards & Recognition
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Celebrating our journey of compassionate care and the recognition we've received
              for our commitment to serving those in need.
            </p>
          </RevealAnimation>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          {awards.length === 0 ? (
            <div className="text-center py-16">
              <Award className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No Awards Found</h2>
              <p className="text-gray-600">Check back later for our achievements and recognition.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {awards.map((award, index) => (
                <RevealAnimation key={award._id} delay={index * 0.1}>
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className={`relative h-64 md:h-auto md:min-h-[320px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <img
                          src={getImageUrl(award.image)}
                          alt={award.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
                        {/* Year Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-secondary text-primary text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                            {award.year}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <CardContent className={`p-8 md:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <div className="space-y-4">
                          {/* Award Icon */}
                          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/20">
                            <Award className="w-7 h-7 text-primary" />
                          </div>

                          {/* Title */}
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {award.title}
                          </h2>

                          {/* Awarding Authority */}
                          <div className="flex items-center gap-2 text-primary font-semibold">
                            <Building2 className="w-5 h-5" />
                            <span>{award.awardingAuthority}</span>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {award.description}
                          </p>

                          {/* Year (Mobile) */}
                          <div className="flex items-center gap-2 text-gray-500 md:hidden">
                            <Calendar className="w-4 h-4" />
                            <span>Awarded in {award.year}</span>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </RevealAnimation>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      {awards.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl">
            <RevealAnimation>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Our Impact in Numbers
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  These recognitions reflect our unwavering commitment to providing compassionate,
                  dignified care to all who need it.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">{awards.length}</div>
                  <div className="text-gray-600 font-medium">Awards Received</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">27+</div>
                  <div className="text-gray-600 font-medium">Years of Service</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-gray-600 font-medium">Patients Served</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Free Care</div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </section>
      )}
    </div>
  );
}
