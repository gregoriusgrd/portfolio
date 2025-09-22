"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      id="navbar"
      className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200"
    >
      {/* Desktop Tampilan */}
      <nav className="hidden h-20 items-center justify-between px-10 py-4 md:flex">
        <div className="text-lg font-semibold md:text-xl">
          Gregorius Geraldin
        </div>
        <ul className="flex gap-8 text-lg md:text-xl">
          <li>
            <Link href="#about" className="transition hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="transition hover:text-gray-300">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="transition hover:text-gray-300">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#experience" className="transition hover:text-gray-300">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#contact" className="transition hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
