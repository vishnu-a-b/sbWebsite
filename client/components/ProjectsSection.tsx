import Link from "next/link";
import { Button } from "./ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/Card";
import { getProjects } from "@/app/actions/cms/projects";
import { ArrowRight, Heart } from "lucide-react";

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
    return null;
  }

  // Determine link path based on type
  const getProjectLink = (projectId: string) => {
    return type === 'benevity' ? `/benevity/${projectId}` : `/projects/${projectId}`;
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project: any) => (
            <Link href={getProjectLink(project._id)} key={project._id} className="block h-full">
              <Card className="h-full border-0 shadow-xl bg-white overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  {project.featuredImage ? (
                    <img
                      src={project.featuredImage}
                      alt={project.projectName}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                      <Heart className="w-16 h-16 text-primary/30" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg backdrop-blur-sm">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-primary transition-colors">
                    {project.projectName}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription
                    className="text-base text-gray-700 leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: project.shortDescription }}
                  />
                  <div className="mt-6 flex justify-start">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide group-hover:bg-primary group-hover:text-white transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {type === 'benevity' && (
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="https://causes.benevity.org/" target="_blank">
                <Heart className="w-5 h-5 mr-2" />
                Support on Benevity
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
