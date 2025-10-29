"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { ScreenShare, Contact } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-20"
    >
      {/* Container utama dengan max-width */}
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
        
        {/* Kiri: Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Hello, I’m
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Gregorius Geraldin
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700">
            Full-Stack Web Developer
          </h2>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0">
            I design and build modern, scalable web applications that combine clean architecture with thoughtful user experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 pt-4">
            <Button asChild className="px-6 py-3 text-base">
              <a href="#projects">
                <ScreenShare />
                View My Work
              </a>
            </Button>
            <Button asChild variant="outline" className="px-6 py-3 text-base">
              <a href="#contact"><Contact />Contact Me</a>
            </Button>
          </div>
        </div>

        {/* Kanan: Foto */}
        <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80">
            <Image
              src="/hero/profile-picture.jpg"
              alt="Profile picture"
              fill
              className="object-cover rounded-full shadow-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}

      <div className="absolute bottom-12 w-full flex justify-center">
        <a href="#about" className="inline-block mt-6 text-gray-500 hover:text-gray-900">
          <ArrowDown size={30} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};
