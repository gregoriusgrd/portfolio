"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-20 bg-gradient-to-b from-white to-gray-50"
    >
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
          I build modern, fast, and scalable web applications with clean
          architecture and delightful user experiences.
        </p>

        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <Button className="px-6 py-3 text-base">View My Work</Button>
          <Button variant="outline" className="px-6 py-3 text-base">
            Contact Me
          </Button>
        </div>
      </div>

      {/* Kanan: Foto atau Ilustrasi */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <Image
            src="/hero/profile-picture.jpg" // pasfoto
            alt="Profile picture"
            fill
            className="object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
