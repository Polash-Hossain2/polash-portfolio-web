"use client";

import Image from "next/image";
import Link from "next/link";
import {  ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/Projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Card className="overflow-hidden rounded-xl bg-slate-900 border border-slate-700">
      <div className="relative h-56">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="text-slate-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex gap-4">
          <Link href={project.github}>
            
            <FaGithub />
          </Link>

          <Link href={project.live}>
            <ExternalLink />
          </Link>
        </div>
      </div>
    </Card>
  );
}