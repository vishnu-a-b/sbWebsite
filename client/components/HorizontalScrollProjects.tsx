'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import Link from 'next/link';

export default function HorizontalScrollProjects({ projects, title, description }: { projects: any[], title: string, description: string }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl absolute top-20 left-1/2 -translate-x-1/2 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tighter">{title}</h2>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">{description}</p>
            </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-4 md:px-20 mt-20">
          {projects.map((project) => (
            <div key={project._id} className="group relative h-[450px] w-[350px] md:w-[450px] overflow-hidden rounded-3xl bg-slate-100 flex-shrink-0 shadow-2xl">
              <img
                src={project.featuredImage}
                alt={project.projectName}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              
              <div className="absolute bottom-0 p-8 text-white w-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.projectName}</h3>
                <p className="text-white/80 line-clamp-2 mb-6 text-sm md:text-base">{project.shortDescription}</p>
                <div className="flex gap-4">
                  <Button asChild variant="secondary" className="rounded-full">
                    <Link href={`/projects/${project._id}`}>Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
