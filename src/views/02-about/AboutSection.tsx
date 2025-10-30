"use client";

import { Briefcase, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex min-h-[70vh] items-center justify-center border-t border-gray-100 bg-white px-4 py-20 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-6xl w-full space-y-10 text-center md:text-left">
        {/* About Me */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="max-w-3xl leading-relaxed text-gray-600">
            Full-Stack Web Developer and Computer Science fresh graduate with one year of mobile
            development experience and recent completion of {"Purwadhika's"} Full-Stack Web Development
            Bootcamp. Comfortable using JavaScript, React, Next.js, Node.js, Express.js, and PostgreSQL.
            Passionate about building scalable web and mobile applications, continuously learning through
            real-world projects, and growing through team collaboration.
          </p>
        </div>

        {/* Experience */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Briefcase size={20} />
            <h3 className="text-xl font-semibold">Work Experience</h3>
          </div>

          <div className="rounded-lg border border-gray-200 shadow-sm p-4">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h4 className="font-medium text-gray-900">
                Bina Nusantara University
              </h4>
              <p className="text-sm text-gray-600">Feb 2023 - Feb 2024</p>
            </div>
            <p className="text-sm text-gray-600">
              Mobile Apps Developer Intern
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-600">
              <li>
                Built mobile apps using Java to support MSME operations across Indonesia focusing on responsive UI and essential business features.
              </li>
              <li>Resolved 10+ major bugs and integrated RESTful APIs with cross-functional teams.</li>
              <li>Collaborated with the UI/UX team to deliver 5+ interface improvements based on feedback from 200+ testers.</li>
              <li>Worked in Agile sprints, joined daily stand-ups and weekly syncs, using Trello to improve coordination and ensure on-time delivery.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <GraduationCap size={20} />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>

          {/* Purwadhika */}
          <div className="rounded-lg border border-gray-200 shadow-sm p-4">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h4 className="font-medium text-gray-900">
                Purwadhika
              </h4>
              <p className="text-sm text-gray-600">April 2025 - Present</p>
            </div>
            <p className="text-sm text-gray-600">
              FullStack Web Development
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-600">
              <li>
                <span className="font-medium">Relevant Coursework:</span> JavaScript, TypeScript, React, Next.js, Node.js, Express.js, Prisma, PostgreSQL, 
                RESTful APIs, Responsive Web Design, Version Control with Git.
              </li>
            </ul>
          </div>

          {/* Binus */}
          <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h4 className="font-medium text-gray-900">
                Bina Nusantara University
              </h4>
              <p className="text-sm text-gray-600">Sep 2020 - Sep 2024</p>
            </div>
            <p className="text-sm text-gray-600">
              {"Bachelor's"} Degree in Computer Science
            </p>
            <p className="text-sm text-gray-600">GPA: 3.34</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-600">
              <li>
                <span className="font-medium">Relevant Coursework:</span> Web Programming, Mobile Programming, Software Engineering, UI/UX Design, Data Structures, Database Systems.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
