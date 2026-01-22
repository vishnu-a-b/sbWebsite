import Link from "next/link";
import { Button } from "./ui/Button";
import { Card, CardContent } from "./ui/Card";
import { getProjects } from "@/app/actions/cms/projects";

interface ProjectsSectionProps {
  type?: 'featured' | 'benevity';
}

export default async function ProjectsSection({ type = 'featured' }: ProjectsSectionProps) {
  const projects = await getProjects(
    type === 'benevity' ? { showOnBenevity: true } : { showOnFirstFace: true }
  );
  console.log(`ProjectsSection (${type}): fetched projects count:`, projects ? projects.length : 0);

  if (!projects || projects.length === 0) {
    return (
      <section className="py-12 bg-red-50">
        <div className="container px-4 text-center ">
          <p className="text-red-500 font-bold">Debug: ProjectsSection matched 0 projects.</p>
          <p className="text-sm text-gray-600">Check console logs for details.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {type === 'benevity' ? 'Benevity Projects' : 'Featured Projects'}
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
             Support specific initiatives that resonate with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any) => (
            <Card key={project._id} className="overflow-hidden flex flex-col h-full border-0 shadow-lg group hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.featuredImage}
                  alt={project.projectName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {project.projectName}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                  {project.shortDescription}
                </p>
                <div className="flex flex-col gap-3 mt-auto">
                    <Button asChild variant="outline" className="w-full">
                       <Link href={`/projects/${project._id}`}>Know More</Link>
                    </Button>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                       <Link href="https://causes.benevity.org/" target="_blank">Support on Benevity</Link>
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
