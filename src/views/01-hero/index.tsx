"use client";

import AnimatedRoles from "./components/AnimatedRoles";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

      <div className="mx-auto border-4 border-blue-700 text-center md:text-left">
        <p className="text-4xl">Hello, I'm</p>
        <h1 className="text-4xl">Gregorius Geraldin</h1>

        <AnimatedRoles />

        {/* CV & Contact */}
        <div>
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
      </div>
    </section>
  );
}
