"use client";

import { ContactInfo } from "./components/ContactInfo";
import { ContactForm } from "./components/ContactForm";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex justify-center border-t border-gray-100 bg-gray-50 px-4 py-20 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="w-full max-w-6xl space-y-8 sm:space-y-10 text-sm md:text-base">
        {/* Heading */}
        <div className="space-y-3 text-left">
          <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
          <p className="text-gray-600 leading-relaxed">Get in touch with me.</p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
