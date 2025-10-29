"use client";

import { ProjectCard } from "./components/ProjectCard";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Property Renting Web App",
      description: "A full-stack property rental web app that allows users to compare accommodation prices by date and destination. I developed the authentication and role-based access system, property and room management, and the responsive landing page with server-side data handling using",
      image: "/project/roomrent-1.png",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Supabase"],
      liveUrl: "https://roomrent-fe.vercel.app/",
      githubUrl: "https://github.com/accaria/roomrent-fe",
    },
    {
      title: "Cashier App (POS)",
      description:
        "A full-stack internal POS system for managing in-store sales. The app includes secure role-based authentication for admin and cashier, transaction and product management, and daily shift reports",
      image: "/project/poshub-ss.png",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Supabase"],
      liveUrl: "https://poshub-fe.vercel.app/",
      githubUrl: "https://github.com/gregoriusgrd/poshub-fe",
    },
    {
        title: "Ladang Lima Clone",
        description:
            "A clone of the Ladang Lima e-commerce website. This project focuses on creating a responsive and visually appealing user interface that mirrors the original site.",
        image: "/project/ladang-lima-ss.png",
        techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Headless CMS"],
        liveUrl: "https://ladang-lima-clone.vercel.app/",
        githubUrl: "https://github.com/gregoriusgrd/ladang-lima-clone"
    }
  ];

  return (
    <section
      id="projects"
      className="border-t border-gray-100 bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-20 flex justify-center"
    >
      <div className="w-full max-w-6xl space-y-10">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <p className="text-gray-600">
            Here are some of the projects {"I've"} worked on:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
