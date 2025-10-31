"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, FileUser, Send } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6">
      {/* Email */}
      <div className="flex items-start gap-3">
        <Mail className="mt-0.5" />
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <a
            href="mailto:gregorius.gerald21@gmail.com"
            className="text-sm font-medium text-gray-900 hover:underline"
          >
            gregorius.gerald21@gmail.com
          </a>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start gap-3">
        <MapPin className="mt-0.5" />
        <div>
          <p className="text-sm text-gray-500">Location</p>
          <p className="text-sm">Jakarta, Indonesia</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button asChild variant="outline">
          <a
            href="https://github.com/gregoriusgrd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            Github
          </a>
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://www.linkedin.com/in/gregorius-geraldin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
            Linkedin
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="/contact/CV_Gregorius_Geraldin_ATS.pdf" download>
            <FileUser />
            Download CV
          </a>
        </Button>
      </div>
    </div>
  );
};
