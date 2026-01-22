import { getAwards } from "@/app/actions/cms/awards";
import { Card, CardContent } from "./ui/Card";
import { Award as AwardIcon } from "lucide-react";

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
          {awards.map((award: any) => (
            <Card key={award._id} className="h-full hover:shadow-lg transition-shadow border-none shadow-md">
              <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                <img
                  src={award.image || "/images/placeholder-award.jpg"}
                  alt={award.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                    <AwardIcon className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-lg leading-tight mb-1">{award.title}</h3>
                        <p className="text-primary text-sm font-medium">{award.year}</p>
                    </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{award.awardingAuthority}</p>
                <p className="text-gray-500 text-xs line-clamp-3">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
