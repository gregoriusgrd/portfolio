"use client";

import { SkillCard } from "./components/SkillsCard";
import { FaHtml5, FaCss3Alt, FaGithub, FaFigma } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss, SiTypescript, SiPrisma, SiSupabase, SiPostgresql, SiVercel, SiExpress, SiJavascript } from "react-icons/si";

export const SkillsSection = () => {
  const groups = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", Icon: FaHtml5, color: "#E34F26" },
        { name: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
        { name: "React", Icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", Icon: RiNextjsFill, color: "#000000" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", Icon: FaNodeJs, color: "#539E43" },
        { name: "Express.js", Icon: SiExpress, color: "#444444" },
        { name: "Prisma", Icon: SiPrisma, color: "#0C344B" },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
        { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "GitHub", Icon: FaGithub, color: "#000000" },
        { name: "Vercel", Icon: SiVercel, color: "#000000" },
        { name: "Figma", Icon: FaFigma, color: "#F24E1E" },
      ],
    },
  ];

  return (
    <section id="skills" className="border-t border-gray-100 bg-gray-50 px-4 sm:px-6 md:px-10 lg:px-16 py-20 flex justify-center">
      <div className="max-w-6xl w-full space-y-10 text-center md:text-left">
        <div className="text-center md:text-left space-y-3">
          <h2 className="text-3xl font-bold text-gray-900">Skills & Tech Stack</h2>
          <p className="text-gray-600">Tools and tech I use to build applications.</p>
        </div>

        <div className="space-y-10">
          {groups.map(({ title, items }) => (
            <div key={title} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {items.map(({ name, Icon, color }) => (
                  <SkillCard key={name} name={name} Icon={Icon} color={color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
