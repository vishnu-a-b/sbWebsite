import { Card, CardContent } from "@/components/ui/Card";
import { Users, Target, History, Lightbulb } from "lucide-react";
import { getAboutContent } from "@/app/actions/about";

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  const aboutContent = await getAboutContent();

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

        {/* Leadership Section - Still Static or Separate CMS? User asked to "set about page into db" */}
        {/* For now, I will leave Leadership and Awards as static until requested otherwise, or unless they are part of `team` and `awards` modules which are already handled elsewhere? */}
        {/* Yes, Team and Awards have their own modules. I should probably verify if they are dynamically fetched. */}
        {/* The user specifically asked "like this set about page into db" relative to the previous banner seeding. */}
        {/* I will assume they mean the main textual content. I'll stick to the about model fields. */}
        
        <div className="bg-slate-50 p-8 md:p-12 rounded-xl text-center mb-16 md:mb-20">
           <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-primary">Leadership & Patronage</h2>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
             <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gradient-to-br from-secondary/50 to-secondary rounded-full mb-4 flex items-center justify-center text-4xl shadow-md">⛪</div>
                <h3 className="font-bold text-lg">Mar Andrews Thazhath</h3>
                <p className="text-sm text-primary font-semibold">Chief Patron</p>
                <p className="text-xs text-primary/70 mt-1">Archbishop of Thrissur</p>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gradient-to-br from-secondary/50 to-secondary rounded-full mb-4 flex items-center justify-center text-4xl shadow-md">✝️</div>
                <h3 className="font-bold text-lg">Fr. Joy Koothur</h3>
                <p className="text-sm text-primary font-semibold">CEO & Co-Founder</p>
                <p className="text-xs text-primary/70 mt-1">Leading the mission</p>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gradient-to-br from-secondary/50 to-secondary rounded-full mb-4 flex items-center justify-center text-4xl shadow-md">🙏</div>
                <h3 className="font-bold text-lg">Sr. Beatrice Scalinci</h3>
                <p className="text-sm text-primary font-semibold">Co-Founder</p>
                <p className="text-xs text-primary/70 mt-1">Franciscan Sisters of St. Clare</p>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gradient-to-br from-secondary/50 to-secondary rounded-full mb-4 flex items-center justify-center text-4xl shadow-md">💝</div>
                <h3 className="font-bold text-lg">Sr. Maria Chiara</h3>
                <p className="text-sm text-primary font-semibold">Co-Founder</p>
                <p className="text-xs text-primary/70 mt-1">Franciscan Sisters of St. Clare</p>
             </div>
           </div>
        </div>

        {/* Awards & Recognition - Static for now, as it matches the file I read */}
        <div className="mb-16 md:mb-20">
           <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-primary">Awards & Recognition</h2>
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
             <Card className="text-center p-6 hover:shadow-lg transition-shadow">
               <CardContent className="pt-4">
                 <div className="text-4xl mb-4">🏆</div>
                 <h3 className="font-bold mb-2">National Award</h3>
                 <p className="text-sm text-primary/80">
                   Asia Today Media and Research Group for exceptional contributions
                 </p>
               </CardContent>
             </Card>
             <Card className="text-center p-6 hover:shadow-lg transition-shadow">
               <CardContent className="pt-4">
                 <div className="text-4xl mb-4">🏅</div>
                 <h3 className="font-bold mb-2">URF Award</h3>
                 <p className="text-sm text-primary/80">
                   For establishing India's first palliative hospital
                 </p>
               </CardContent>
             </Card>
             <Card className="text-center p-6 hover:shadow-lg transition-shadow">
               <CardContent className="pt-4">
                 <div className="text-4xl mb-4">💼</div>
                 <h3 className="font-bold mb-2">Chamber of Commerce</h3>
                 <p className="text-sm text-primary/80">
                   Best Social Service Award (2019)
                 </p>
               </CardContent>
             </Card>
             <Card className="text-center p-6 hover:shadow-lg transition-shadow">
               <CardContent className="pt-4">
                 <div className="text-4xl mb-4">⭐</div>
                 <h3 className="font-bold mb-2">Human Rights Foundation</h3>
                 <p className="text-sm text-primary/80">
                   Human Excellence Award
                 </p>
               </CardContent>
             </Card>
           </div>
        </div>
        </div>
      </section>
    </div>
  );
}
