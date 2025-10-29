"use client";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white py-8 text-center text-gray-600">
      <p className="text-sm">
        © {new Date().getFullYear()} Gregorius Geraldin. All rights reserved.
      </p>
    </footer>
  );
};
