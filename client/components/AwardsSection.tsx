import { getAwards } from "@/app/actions/cms/awards";
import { Card, CardContent } from "./ui/Card";
import { Award as AwardIcon, ArrowRight } from "lucide-react";
import { getImageUrl } from "@/lib/image-url";
import { Button } from "./ui/Button";
import Link from "next/link";

export default async function AwardsSection() {
  const awards = await getAwards();

  if (!awards || awards.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary mb-4">
            Awards & Recognition
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by various prestigious organizations.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {awards.slice(0, 4).map((award: any) => (
            <Link key={award._id} href="/awards" className="block h-full">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-none shadow-md group">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                  <img
                    src={getImageUrl(award.image) || "/images/placeholder-award.jpg"}
                    alt={award.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <AwardIcon className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors">{award.title}</h3>
                      <p className="text-secondary text-sm font-semibold">{award.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{award.awardingAuthority}</p>
                  <p className="text-gray-500 text-xs line-clamp-2">{award.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Button asChild variant="outline" size="lg" className="rounded-full px-10 border-2 hover:bg-primary hover:text-white transition-all">
            <Link href="/awards">
              View All Awards
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
