// src/components/Header.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Ensure the correct import for ShadCN UI

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Company Name/Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">UWEZO</Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-gray-900">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button className="md:hidden" variant="outline">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Header;
