"use client";

import { Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex min-h-[70vh] items-center justify-center border-t border-gray-100 bg-white px-4 py-20 sm:px-6"
    >
      <div className="w-full max-w-5xl space-y-10">
        {/* About Me */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="max-w-3xl leading-relaxed text-gray-600">
            I’m a{" "}
            <span className="font-medium text-gray-900">
              Full-Stack Web Developer
            </span>{" "}
            who enjoys turning ideas into scalable, usable products. Comfortable
            across the stack (Next.js, Node.js, Prisma, PostgreSQL), with a
            focus on clean architecture and great UX.
          </p>
        </div>

        {/* Experience Highlights */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Briefcase size={20} />
            <h3 className="text-xl font-semibold">Experience Highlights</h3>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h4 className="font-medium text-gray-900">
                Full-Stack Developer (Final Project)
              </h4>
              <p className="text-sm text-gray-600">2025</p>
            </div>
            
            
            <p className="text-sm text-gray-600">
              Property Renting Web App - Purwadhika
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-600">
              <li>
                Auth (email verification, JWT, role-based) & property
                management.
              </li>
              <li>REST API dengan Node.js, Express, Prisma, PostgreSQL</li>
              <li>Responsive UI (Next.js, React Hook Form, Zustand)</li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h4 className="font-medium text-gray-900">
                Backend Developer (Mini Project)
              </h4>
              <p className="text-sm text-gray-600">2024-2025</p>
            </div>
            <p className="text-sm text-gray-600">Node.js / Express / Prisma</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-600">
              <li>
                Server-side pagination, filtering, transaksi, laporan harian
              </li>
              <li>Clean architecture + testing dasar</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
