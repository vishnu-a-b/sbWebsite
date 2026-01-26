import Link from "next/link";
import { Button } from "./ui/Button";
import { Card, CardContent } from "./ui/Card";
import { getProjects } from "@/app/actions/cms/projects";
import HorizontalScrollProjects from "./HorizontalScrollProjects";

interface ProjectsSectionProps {
  type?: 'featured' | 'benevity';
}

export default async function ProjectsSection({ type = 'featured' }: ProjectsSectionProps) {
  const projects = await getProjects(
    type === 'benevity' ? { showOnBenevity: true } : { showOnFirstFace: true }
  );
  
  const title = type === 'benevity' ? 'Benevity Projects' : 'Featured Projects';
  const description = 'Support specific initiatives that resonate with you.';

  if (!projects || projects.length === 0) {
    return null; // Silent fail for better UI
  }

  if (type === 'featured') {
    return <HorizontalScrollProjects projects={projects} title={title} description={description} />;
  }

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tighter">{title}</h2>
          <p className="text-gray-800 text-lg leading-relaxed max-w-3xl mx-auto">
             {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any) => (
            <Card key={project._id} className="overflow-hidden flex flex-col h-full border-0 shadow-xl group hover:shadow-2xl transition-all duration-500 rounded-2xl">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.featuredImage}
                  alt={project.projectName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardContent className="flex flex-col flex-grow p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {project.projectName}
                </h3>
                <p className="text-gray-600 text-base mb-8 flex-grow line-clamp-3 leading-relaxed">
                  {project.shortDescription}
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                    <Button asChild variant="outline" className="w-full rounded-full border-2">
                       <Link href={`/projects/${project._id}`}>Know More</Link>
                    </Button>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 rounded-full font-bold">
                       <Link href={project.link || "https://causes.benevity.org/"} target="_blank">Support on Benevity</Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
