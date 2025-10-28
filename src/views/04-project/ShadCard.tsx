"use client";

import { Button } from "@/components/ui/button";
import { Github, Link2 } from "lucide-react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ShadCardProps = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const ShadCard = ({
  title,
  description,
  image,
  techStack,
  liveUrl,
  githubUrl,
}: ShadCardProps) => {
  return (
    <Card>
      {/* Image */}
      <CardHeader className="relative h-44 sm:h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 640px) 100vw, 33vw"
          priority={false}
        />
      </CardHeader>

      {/* Content */}
      <CardContent className="p-5 space-y-3">
        <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 leading-relaxed">{description}</CardDescription>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span key={t} className="border border-gray-100">{t}</span>
          ))}
        </div>

        <CardFooter className="flex items-center gap-3 pt-2">
          {/* Links */}
          {(liveUrl || githubUrl) && (
            <div>
              {liveUrl && (
                <a target="_blank" rel="noopener noreferrer" href={liveUrl}>
                    <Button variant="outline" className="cursor-pointer">
                        <ExternalLink size={30} /> Live Demo
                    </Button>
                </a>
              )}
              {githubUrl && (
                <a target="_blank" rel="noopener noreferrer" href={githubUrl}>
                  <Button variant="outline" className="cursor-pointer">
                    <Github size={30} /> GitHub
                  </Button>
                </a>
              )}
            </div>
          )}
        </CardFooter>
      </CardContent>
    </Card>
  );
};
