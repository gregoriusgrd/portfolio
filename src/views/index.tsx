"use client";

import { HeroSection } from "@/views/01-hero/HeroSection";
import { AboutSection } from "./02-about/AboutSection";

export default function HomeView() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
    </main>
  );
}
