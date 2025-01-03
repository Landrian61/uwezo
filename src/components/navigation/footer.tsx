import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md shadow-sm mt-auto dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-[#34476c] dark:text-gold">
              UWEZO
            </h3>
            <p className="text-gray-600 text-sm dark:text-white">
              We are a friendly team of developers who work together to ensure
              that you receive the best support you require.
            </p>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#34476c] dark:text-gold">
              Emergency Contact
            </h3>
            <div className="space-y-2">
              {["+256 326 300 310", "+256 741 004 464", "+256 741 004 465"].map(
                (phone) => (
                  <p
                    key={phone}
                    className="text-gray-600 dark:text-gray-400 text-sm flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {phone}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#34476c] dark:text-gold">
              Important Links
            </h3>
            <div className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Contact Us", href: "/contact" }
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-gray-600 hover:text-[#3C4F76] dark:hover:text-gold dark:text-gray-400 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-4">
          <p className="text-center text-gray-600 text-sm dark:text-white">
            Copyright © {new Date().getFullYear()} Uwezo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
