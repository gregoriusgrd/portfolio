"use client";

import { HeroSection } from "@/views/01-hero/HeroSection";
import { AboutSection } from "./02-about/AboutSection";
import { SkillsSection } from "./03-skills/SkillsSection";
import { ProjectsSection } from "./04-project/ProjectSection";

export default function HomeView() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
