"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Menu,
  X,
  ChevronRight
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "123 Tech Street, Kampala, Uganda"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+256 123 456 789"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "info@uwezo.com"
    }
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="fixed w-full bg-white dark:bg-black backdrop-blur-md z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#34476c] dark:bg-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between px-4 py-2 text-sm">
            <div className="flex items-center space-x-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="hidden md:flex items-center space-x-2 text-white dark:text-gray-300"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            {/* Mobile Contact Info */}
            <div className="md:hidden flex items-center space-x-4">
              <Link
                href="tel:+254123456789"
                className="text-gray-600 dark:text-gray-300"
              >
                <Phone className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:info@uwezo.com"
                className="text-gray-600 dark:text-gray-300"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="#"
                className="text-white dark:text-gray-300 hover:text-gold dark:hover:text-gold"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-white dark:text-gray-300 hover:text-gold dark:hover:text-gold"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <Link href="/">
            <img
              src="/logo/logo1.svg"
              alt="Company Logo"
              width={200}
              height={150}
              className="w-auto h-12 dark:filter dark:brightness-200 dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 dark:text-white hover:text-[#3C4F76]  dark:hover:text-gold transition-colors relative group py-2 font-semibold"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#3C4F76]  dark:bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 dark:text-white"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-navy shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between text-gray-600 dark:text-white hover:text-azure dark:hover:text-gold transition-colors py-3 border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
              <ChevronRight className="w-4 h-4" />
            </Link>
          ))}
          <div className="pt-4">
            <Button className="w-full bg-azure hover:bg-azure/90 dark:bg-gold dark:hover:bg-gold/90">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
