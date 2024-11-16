"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WaveSVG = () => (
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#2596be"
      fillOpacity="0.1"
      d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
  </svg>
);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-16">
      {" "}
      {/* Added pt-16 for header space */}
      {/* Hero Section */}
      <section
        className={`relative z-10 text-center max-w-3xl mx-auto px-6 pt-24 pb-12 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
          Empowering Your Tech Future with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#80cccc]">
            UWEZO
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 animate-fade-in-delayed">
          At UWEZO, we build cutting-edge technology solutions to transform and
          elevate your business.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delayed-more">
          <Link href="/projects" className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2596be] to-[#80cccc] rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-500" />
            <button className="relative px-8 py-4 bg-[#2596be] rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105">
              View Projects
            </button>
          </Link>

          <Link href="/about">
            <button className="px-8 py-4 bg-white border-2 border-gray-200 rounded-lg text-gray-800 font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </Link>
        </div>
      </section>
      {/* Features Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Innovation",
              description:
                "We leverage the latest technologies to bring innovative solutions to life.",
              image: "/creativity.gif"
            },
            {
              title: "Security",
              description:
                "Our solutions are built with security in mind, protecting your data and privacy.",
              image: "/encryption.gif"
            },
            {
              title: "High Performance",
              description:
                "Optimized for performance, our solutions ensure fast and reliable experiences.",
              image: "/page-optimization.gif"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#2596be]/5 rounded-xl" />
              <div className="relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section
        className={`relative z-10 text-center py-16 px-6 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Ready to Take Your Business to the Next Level?
        </h2>
        <Link href="/contact" className="group relative inline-block">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2596be] to-[#80cccc] rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-500" />
          <button className="relative px-8 py-4 bg-[#2596be] rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105">
            Get in Touch
          </button>
        </Link>
      </section>
      <WaveSVG />
      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-16 h-16 bg-[#2596be]/10 rounded-full animate-float-slow" />
        <div className="absolute top-40 right-[15%] w-20 h-20 bg-[#80cccc]/10 rounded-full animate-float-slower" />
      </div>
    </main>
  );
}
