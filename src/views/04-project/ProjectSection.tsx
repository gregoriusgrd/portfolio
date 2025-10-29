"use client";

import { ProjectCard } from "./components/ProjectCard";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Property Renting Web App",
      description: "A property rental web app for comparing accommodation prices by date and destination. I developed the landing page, user and tenant authentication system, and property management features with a responsive UI and server-side data handling.",
      image: "/project/roomrent-ss.png",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Supabase"],
      liveUrl: "https://roomrent-fe.vercel.app/",
      githubUrl: "https://github.com/accaria/roomrent-fe",
    },
    {
      title: "Cashier App (POS)",
      description:
        "A full-stack internal POS system for managing in-store sales. Cashiers handle daily transactions and shifts, while admins manage products, cashiers, and reports. Built with secure authentication, form validation, and soft-delete data management.",
      image: "/project/poshub-ss.png",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Supabase"],
      liveUrl: "https://poshub-fe.vercel.app/",
      githubUrl: "https://github.com/gregoriusgrd/poshub-fe",
    },
    {
        title: "Ladang Lima Clone",
        description:
            "A clone of the Ladang Lima e-commerce website, built using Next.js and Tailwind CSS. This project focuses on creating a responsive and visually appealing user interface that mirrors the original site.",
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
            Here are some of the projects I've worked on:
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
