import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/Projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-[#0f172a]">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">
            Featured{" "}
            <span className="text-blue-500">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-slate-400">
            Real-world applications I've built from concept to deployment.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="flex items-center gap-2 border border-blue-500 rounded-lg px-6 py-3 hover:bg-blue-500"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}