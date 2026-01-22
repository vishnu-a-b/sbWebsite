import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Heart, CheckCircle2, DollarSign, FileText, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import BenevityHero from "@/components/BenevityHero";
import { getBanners } from "@/app/actions/banner";
import ProjectsSection from "@/components/ProjectsSection";

export default async function BenevityPage() {
  const banners = await getBanners('benevity');
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
       {/* Hero Section */}
       <BenevityHero slides={banners} />

       {/* Benevity Projects Section */}
       <ProjectsSection type="benevity" />

      {/* Dignity Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-12">
            <Heart className="w-12 h-12 md:w-16 md:h-16 text-secondary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Dignity is Not for Sale</h2>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              At Shanthibhavan, there are no billing counters. We believe that every human being deserves a pain-free,
              dignified life, regardless of their bank balance. From our solar-powered dialysis units to our "Joy's Touch"
              emergency response system, we combine cutting edge technology with radical compassion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-t-4 border-t-secondary">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-primary">100% Free</h3>
                <p className="text-gray-700">
                  Palliative Hospital Care, Dialysis, Food etc.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-primary">Community Driven</h3>
                <p className="text-gray-700">
                  Funded by people like you, for people in need.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-secondary">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-primary">Innovation</h3>
                <p className="text-gray-700">
                  Sustainable healthcare models that prioritize the planet and the patient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Heroes Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Calling All Corporate Heroes</h2>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Are you a corporate employee? Your kindness just got a promotion. Shanthibhavan is officially a
              registered charity on the Benevity platform. This means it is easier than ever for you to make a
              difference directly from your workplace.
            </p>
          </div>

          <div className="bg-secondary/20 border-2 border-secondary rounded-xl p-6 md:p-8 mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Why donate via Benevity?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-4 mb-4 shadow-md">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-primary">Corporate Matching</h4>
                <p className="text-gray-700 text-sm">
                  Many companies will match your donation dollar for dollar (or rupee for rupee).
                  Your $50 could become $100 for our patients.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-4 mb-4 shadow-md">
                  <FileText className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-primary">Tax Efficiency</h4>
                <p className="text-gray-700 text-sm">
                  Get instant tax receipts and easy payroll deductions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-4 mb-4 shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-primary">Trust & Transparency</h4>
                <p className="text-gray-700 text-sm">
                  Our presence on Benevity confirms our commitment to global standards of non-profit accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* How to Support Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-secondary/20">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How to Support Us Today</h2>
            <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-2">It takes less than 2 minutes to save a life.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-lg mb-2 text-primary">Log In</h3>
              <p className="text-gray-700 text-sm">Open your company's Benevity portal.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-lg mb-2 text-primary">Search</h3>
              <p className="text-gray-700 text-sm">Type "Shanthibhavan Palliative Hospital" in the search bar.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-lg mb-2 text-primary">Donate</h3>
              <p className="text-gray-700 text-sm">Choose a one-time gift or a recurring monthly contribution.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-lg mb-2 text-primary">Match</h3>
              <p className="text-gray-700 text-sm">Don't forget to click "Request Match" if your company offers it!</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-800 italic mb-8 font-medium">
              "We cannot add days to their lives, but with your help, we can add life to their days."
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-lg px-8 py-6">
              <Link href="https://causes.benevity.org/" target="_blank" rel="noopener noreferrer">
                Find Us on Benevity Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
