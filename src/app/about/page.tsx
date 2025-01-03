"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
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

const teamMembers = [
  {
    name: "Prossy ",
    role: "CEO/Founder",
    image: "/07.jpg",
    bio: "Visionary leader with 15+ years of tech industry experience"
  },
  {
    name: "Andrew Brian",
    role: "CTO",
    image: "/05.jpg",
    bio: "Technical expert specializing in scalable architecture"
  },
  {
    name: "Amma",
    role: "Head of Marketing",
    image: "/01.jpg",
    bio: "Digital marketing strategist with global brand experience"
  },
  {
    name: "Kate",
    role: "Sales Director",
    image: "/02.jpg",
    bio: "Relationship builder driving business growth"
  }
];

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-black pt-16">
      {/* Vision & Mission Section */}
      <section
        className={`relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-12 text-center transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C4F76] to-[#0077B6]  dark:from-gold dark:to-orange">
            UWEZO
          </span>
        </h1>

        <div className="grid gap-8 md:grid-rows-2 mt-12">
          <div className="bg-white dark:bg-white/5 rounded-xl p-6 hover:shadow-xl transition-all duration-500">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              To be the leading force in technological innovation, creating
              solutions that empower businesses and individuals to achieve their
              full potential in the digital age.
            </p>
            <p className="text-gray-600 dark:text-gray-300 pt-4">
              To create a young Ugandan Generation that is innovative,
              productive and self reliant in Digital technology.
            </p>
          </div>

          <div className="bg-white dark:bg-white/5 rounded-xl p-6 hover:shadow-xl transition-all duration-500">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We are committed to delivering cutting-edge technology solutions
              that transform businesses, enhance user experiences, and drive
              sustainable growth through innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Our Team
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="group hover:shadow-xl transition-all duration-500 bg-white dark:bg-white/5 border-gray-200 dark:border-white/10">
                    <CardContent className="p-6">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-2">
                        {member.name}
                      </h3>
                      <p className="text-azure dark:text-gold font-medium text-center mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white dark:bg-white/10 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20" />
          <CarouselNext className="bg-white dark:bg-white/10 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20" />
        </Carousel>
      </section>

      {/* Location Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Our Location
        </h2>
        <Card className="hover:shadow-xl transition-all duration-500 bg-white dark:bg-white/5 border-gray-200 dark:border-white/10">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              UWEZO Headquarters
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              123 Innovation Drive
              <br />
              Tech Valley, Silicon City
              <br />
              Contact: +1 234 567 8900
              <br />
              Email: info@uwezo.com
            </p>
          </CardContent>
        </Card>
      </section>

      <WaveSVG />

      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-16 h-16 bg-azure/10 dark:bg-gold/10 rounded-full animate-float-slow" />
        <div className="absolute top-40 right-[15%] w-20 h-20 bg-turquoise/10 dark:bg-orange/10 rounded-full animate-float-slower" />
      </div>
    </main>
  );
}
