"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Mail, MessageCircle } from "lucide-react";

const WaveSVG = () => (
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      className="fill-turquoise/10 dark:bg-orange/10"
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
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-black">
      {/* Hero Section */}
      <section
        className={`relative z-10 text-center max-w-3xl mx-auto px-6 pt-32 pb-12 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in">
          Empowering Your Tech Future with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C4F76] to-[#0077B6] dark:from-gold dark:to-orange">
            UWEZO
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delayed">
          Transforming businesses through innovative technology solutions and
          cutting-edge expertise
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delayed-more">
          <Link href="/contact" className="group relative">
            <Button className="px-8 py-6 bg-[#3C4F76] hover:bg-[#0077B6] dark:bg-gold dark:hover:bg-gold/90 text-lg text-white">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Link href="/projects">
            <Button
              variant="outline"
              className="px-8 py-6 text-lg bg-white dark:text-black"
            >
              View Our Work
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl mt-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Hardware/Software Installation",
              image: "/services/hardware.jpg",
              description:
                "Installation, maintenance, and troubleshooting of hardware and software."
            },
            {
              title: "IT Support and Help Desk",
              image: "/services/IT-support.jpg",
              description:
                "Dedicated support for IT-related issues to ensure smooth operations."
            },
            {
              title: "Graphics Design",
              image: "/services/graphics.jpg",
              description:
                "Creating stunning visuals, logos, and branding materials for businesses."
            },
            {
              title: "UI/UX Design",
              image: "/services/ui-design.jpg",
              description:
                "Designing seamless and user-friendly digital experiences."
            },
            {
              title: "Web Development",
              image: "/services/web-design.jpg",
              description:
                "Building responsive and dynamic websites tailored to client needs."
            },
            {
              title: "Content Creation and Marketing",
              image: "/services/content-creation.jpg",
              description:
                "Crafting high-quality content to drive engagement and growth."
            }
          ].map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-duration-300 dark:bg-black border-none"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={200}
                className="mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose UWEZO
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              "10+ years of industry experience",
              "Certified technical experts",
              "24/7 support and maintenance",
              "Agile development methodology"
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-azure dark:text-gold" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <div className="relative">
            <Image
              src="/services/team.jpg"
              alt="Our Team"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "UWEZO Website",
              image: "/Websites/Uwezo.png",
              category: "Websites"
            },
            {
              title: "UWEZO Company Logo",
              image: "/Graphics/logo2.svg",
              category: "Graphics Design"
            }
          ].map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group dark:bg-black border-none"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <span className="text-sm text-gray-500">
                  {project.category}
                </span>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/products">
            <Button variant="outline" className="bg-white dark:text-black">
              View All Projects
            </Button>
          </Link>
        </div>
      </section>

      <section className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Subscribe to our newsletter for the latest tech insights and company
          updates
        </p>
        <div className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-azure dark:focus:ring-gold"
          />
          <Button className="bg-[#3C4F76] hover:bg-[#0077B6] dark:bg-gold dark:hover:bg-gold/90 text-white">
            <Mail className="mr-2" /> Subscribe
          </Button>
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Let&apos;s discuss how we can help you achieve your technology goals
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-[#3C4F76] hover:bg-[#0077B6] dark:bg-gold dark:hover:bg-gold/90 text-white">
            <MessageCircle className="mr-2" /> Schedule a Consultation
          </Button>
        </div>
      </section>

      <WaveSVG />

      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-16 h-16 bg-[#49c4c242] dark:bg-gold/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-[15%] w-20 h-20 bg-[#49c4c242] dark:bg-orange/10 rounded-full animate-float-slower"></div>
        <div className="absolute top-60 left-[30%] w-12 h-12 bg-[#49c4c242] dark:bg-gold/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-80 right-[25%] w-24 h-24 bg-[#49c4c242] dark:bg-orange/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-96 left-[50%] w-10 h-10 bg-[#49c4c242] dark:bg-gold/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-112 right-[35%] w-18 h-18 bg-[#49c4c242] dark:bg-orange/10 rounded-full animate-float-slow"></div>
      </div>
    </main>
  );
}
