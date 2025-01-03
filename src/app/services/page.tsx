"use client";
import React, { useEffect, useState } from "react";
import {
  FaTools,
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
  FaBullhorn,
  FaPencilAlt,
  FaUserFriends,
  FaNetworkWired
} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

const WaveSVG = () => (
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      className="fill-azure/10 dark:fill-gold/10"
      d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
  </svg>
);

const services = [
  {
    title: "Hardware/Software Installation",
    icon: <FaTools className="text-3xl text-azure dark:text-gold" />,
    description:
      "Installation, maintenance, and troubleshooting of hardware and software."
  },
  {
    title: "IT Support and Help Desk",
    icon: <FaUserFriends className="text-3xl text-azure dark:text-gold" />,
    description:
      "Dedicated support for IT-related issues to ensure smooth operations."
  },
  {
    title: "Graphics Design",
    icon: <FaPalette className="text-3xl text-azure dark:text-gold" />,
    description:
      "Creating stunning visuals, logos, and branding materials for businesses."
  },
  {
    title: "UI/UX Design",
    icon: <FaLaptopCode className="text-3xl text-azure dark:text-gold" />,
    description: "Designing seamless and user-friendly digital experiences."
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-3xl text-azure dark:text-gold" />,
    description:
      "Building responsive and dynamic websites tailored to client needs."
  },
  {
    title: "Application Development",
    icon: <FaMobileAlt className="text-3xl text-azure dark:text-gold" />,
    description:
      "Developing mobile and desktop applications to drive business efficiency."
  },
  {
    title: "Social Media Marketing",
    icon: <FaBullhorn className="text-3xl text-azure dark:text-gold" />,
    description:
      "Promoting brands and engaging audiences through social platforms."
  },
  {
    title: "Content Creation and Marketing",
    icon: <FaPencilAlt className="text-3xl text-azure dark:text-gold" />,
    description: "Crafting high-quality content to drive engagement and growth."
  },
  {
    title: "Online Advertising",
    icon: <FaNetworkWired className="text-3xl text-azure dark:text-gold" />,
    description:
      "Strategic online ad campaigns to maximize business visibility."
  }
];

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-black pt-16">
      {/* Services Section */}
      <section
        className={`relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12 text-center transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-azure to-turquoise dark:from-gold dark:to-orange">
            Services
          </span>
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 bg-white dark:bg-white/5 border-gray-200 dark:border-white/10"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-azure/10 dark:bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <WaveSVG />
    </main>
  );
}
