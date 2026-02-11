import { Card, CardContent } from "@/components/ui/Card";
import { Users, Target, History, Lightbulb, Award, ArrowRight } from "lucide-react";
import { getAboutContent } from "@/app/actions/about";
import { getAboutPageLeadership } from "@/app/actions/cms/team";
import { getImageUrl } from "@/lib/image-url";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import API_BASE_URL from "@/lib/api";

export const dynamic = 'force-dynamic';

interface LeadershipMember {
  _id: string;
  name: string;
  role: string;
  designation: string;
  image: string;
  priority: number;
}

interface AwardItem {
  _id: string;
  title: string;
  awardingAuthority: string;
  year: number;
  description: string;
  image: string;
}

async function getAwards(): Promise<AwardItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/awards`, {
      cache: 'no-store',
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.awards || [];
  } catch {
    return [];
  }
}

export default async function AboutPage() {
  const [aboutContent, leadershipMembers, awards] = await Promise.all([
    getAboutContent(),
    getAboutPageLeadership(),
    getAwards(),
  ]);

  if (!aboutContent) {
    return <div className="p-12 text-center">Loading...</div>; // Or handle error/empty state gracefully
  }

  const {
    heroTitle,
    heroSubtitle,
    storyTitle,
    storyDescription,
    storyImage,
    mission,
    vision,
    motto,
    belief
  } = aboutContent;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/90 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{heroTitle}</h1>
        <p className="text-white/90 max-w-2xl mx-auto px-4">
          {heroSubtitle}
        </p>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
           <div>
             <h2 className="text-3xl font-bold mb-6 text-primary">{storyTitle}</h2>
             <div className="space-y-4 text-primary leading-relaxed text-base md:text-lg whitespace-pre-line">
               {storyDescription}
             </div>
           </div>
           <div className="h-full min-h-[300px] bg-gray-200 rounded-xl overflow-hidden shadow-lg relative">
             <img src={storyImage} alt={storyTitle} className="w-full h-full object-cover absolute inset-0" />
           </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20">
          <Card className="text-center p-4 border-t-4 border-t-primary">
            <CardContent className="pt-6">
              <Target className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{mission?.title}</h3>
              <p className="text-primary/80 text-sm">
                {mission?.description}
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-4 border-t-4 border-t-secondary">
             <CardContent className="pt-6">
              <Users className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{vision?.title}</h3>
              <p className="text-primary/80 text-sm">
                {vision?.description}
              </p>
            </CardContent>
          </Card>
           <Card className="text-center p-4 border-t-4 border-t-primary">
             <CardContent className="pt-6">
              <History className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{motto?.title}</h3>
              <p className="text-primary/80 text-sm">
                {motto?.description}
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-4 border-t-4 border-t-secondary">
             <CardContent className="pt-6">
              <Lightbulb className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{belief?.title}</h3>
              <p className="text-primary/80 text-sm">
                {belief?.description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Section - Dynamic from team members with showOnAboutPage: true */}
        {leadershipMembers.length > 0 && (
          <div className="bg-slate-50 p-8 md:p-12 rounded-xl text-center mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-primary">Leadership & Patronage</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {leadershipMembers.map((member: LeadershipMember) => (
                <div key={member._id} className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full mb-4 overflow-hidden shadow-md bg-gray-200">
                    <img
                      src={getImageUrl(member.image)}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold">{member.designation}</p>
                  <p className="text-xs text-primary/70 mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Awards & Recognition - Dynamic from database */}
        {awards.length > 0 && (
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-primary">Awards & Recognition</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {awards.slice(0, 4).map((award) => (
                <Card key={award._id} className="text-center p-6 hover:shadow-lg transition-shadow group overflow-hidden">
                  <CardContent className="pt-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-secondary/20 flex items-center justify-center">
                      <img
                        src={getImageUrl(award.image)}
                        alt={award.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">{award.title}</h3>
                    <p className="text-xs text-secondary font-semibold mb-2">{award.year}</p>
                    <p className="text-sm text-primary/80 line-clamp-2">
                      {award.awardingAuthority}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild variant="outline" className="rounded-full px-8 border-2 hover:bg-primary hover:text-white transition-all">
                <Link href="/awards">
                  View All Awards
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        )}
        </div>
      </section>
    </div>
  );
}
