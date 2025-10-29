"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 640px) 100vw, 33vw"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-gray-200 bg-gray-50 px-2 py-1 text-sm text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {(liveUrl || githubUrl) && (
          <div className="flex items-center gap-3 mt-4 pt-2">
            {liveUrl && (
              <a target="_blank" rel="noopener noreferrer" href={liveUrl}>
                <Button variant="outline" className="cursor-pointer flex items-center gap-1">
                  <ExternalLink size={16} /> Live Demo
                </Button>
              </a>
            )}
            {githubUrl && (
              <a target="_blank" rel="noopener noreferrer" href={githubUrl}>
                <Button variant="outline" className="cursor-pointer">
                  <Github size={16} /> GitHub
                </Button>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
