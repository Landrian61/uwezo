"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Company Name/Logo */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#80cccc] animate-fade-in">
          <Link href="/">UWEZO</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 animate-fade-in">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" }
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-[#2596be] transition-colors relative group"
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#2596be] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden"
          variant="ghost"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4 font-extrabold">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" }
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-[#2596be] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
