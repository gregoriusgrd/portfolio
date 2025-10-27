"use client";

import { Briefcase, GraduationCap } from "lucide-react";

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
            Computer Science graduate currently completing a Full-Stack Development Bootcamp at Purwadhika, 
            with hands-on experience building mobile application during a year-long internship. Comfortable using JavaScript, 
            React, Next.js, Node.js, Express.js and PostgreSQL. Actively learning through real-world projects and 
            looking to grow as a web and mobile developer through team collaboration.
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
                Designed and developed mobile apps using Java to support MSME operations across Indonesia, focusing on responsive UI and core features.
              </li>
              <li>Resolved 10+ critical bugs and integrated APIs in collaboration with cross-functional teams to meet client needs.</li>
              <li>Collaborated with UI/UX team to implement 5+ interface updates based on feedback from 200+ testers.</li>
              <li>Worked in Agile environment, participating in daily stand-ups, sprint planning, and used Trello to organize tasks and support team progress.</li>
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
              Bachelor's Degree in Computer Science
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
