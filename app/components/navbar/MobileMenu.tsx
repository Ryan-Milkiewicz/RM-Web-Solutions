"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden relative">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
        className="flex flex-col gap-1"
      >
        <span className="h-0.5 w-6 bg-white"></span>
        <span className="h-0.5 w-6 bg-white"></span>
        <span className="h-0.5 w-6 bg-white"></span>
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute right-0 top-10 w-40 rounded-md border bg-white shadow-md font-sora font-bold">
          <Link
            href="/#home"
            className="block px-4 py-2 text-gray-800 hover:text-orange-500 hover:bg-orange-50 transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#about-us"
            className="block px-4 py-2 text-gray-800 hover:text-orange-500 hover:bg-orange-50 transition"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#services"
            className="block px-4 py-2 text-gray-800 hover:text-orange-500 hover:bg-orange-50 transition"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact-us"
            className="block px-4 py-2 text-gray-800 hover:text-orange-500 hover:bg-orange-50 transition"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
