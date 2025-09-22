"use client";

import AnimatedRoles from "./components/AnimatedRoles";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 h-[80vh] px-4 items-center justify-items-center">
      <div className="flex h-auto w-full items-center justify-center border-4 border-red-700">
        <Image
          src="/hero/computer-animation.gif"
          alt="Computer Animation"
          width={500}
          height={500}
          className="rounded-full object-cover"
        />
      </div>

      <div className="my-auto border-4 border-blue-700 text-center md:text-left space-y-4">
        <p className="text-sm md:text-base">Hello, I'm</p>
        <h1 className="text-2xl md:text-4xl font-bold">Gregorius Geraldin</h1>

        <AnimatedRoles />

        {/* CV & Contact */}
        <div className="flex gap-4 justify-center md:justify-start">
          <Button variant="outline">
            <a href="/hero/CV - Gregorius Geraldin.pdf" download>
              Download CV
            </a>
          </Button>
          <Button>
            <Link href="#contact">
              Contact Me
            </Link>
          </Button>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/gregoriusgeraldin/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin className="h-8 w-8 " />
          </a>
          <a href="https://github.com/gregoriusgeraldin" target="_blank" rel="noopener noreferrer">
            <BsGithub className="h-8 w-8 " />
          </a>
        </div>
      </div>
    </section>
  );
}
