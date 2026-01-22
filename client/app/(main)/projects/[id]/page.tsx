import { getProject } from "@/app/actions/cms/projects";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Calendar, CalendarClock } from "lucide-react";
import RevealAnimation from "@/components/RevealAnimation";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h1>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={project.featuredImage}
          alt={project.projectName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto max-w-5xl">
            <RevealAnimation>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 shadow-sm">
                {project.projectName}
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.1}>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed shadow-sm">
                {project.shortDescription}
              </p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
           <Link href="/benevity" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Benevity Page
           </Link>

           <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600">
               <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span>Started: {new Date(project.startDate).toLocaleDateString()}</span>
               </div>
           </div>

           <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed whitespace-pre-line mb-12">
              {project.fullDescription}
           </div>
           
           {/* Gallery */}
           {project.gallery && project.gallery.length > 0 && (
             <div className="mb-12">
               <h3 className="text-2xl font-bold text-primary mb-6">Project Gallery</h3>
               <div className="grid md:grid-cols-2 gap-4">
                 {project.gallery.map((img: string, index: number) => (
                   <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-video">
                     <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                   </div>
                 ))}
               </div>
             </div>
           )}

           <div className="bg-secondary/10 border-l-4 border-secondary p-8 rounded-r-xl">
             <h3 className="text-2xl font-bold text-primary mb-4">Support this Project</h3>
             <p className="text-gray-700 mb-6">
               Help us continue this vital work. Your support through Benevity makes a direct impact.
             </p>
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
               <Link href="https://causes.benevity.org/" target="_blank">
                 Support on Benevity
               </Link>
             </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
