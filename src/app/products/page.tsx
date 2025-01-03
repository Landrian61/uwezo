"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

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

const projects = [
  {
    title: "UWEZO Logo",
    description: "Uwezo's Company Logo",
    image: "/Graphics/logo2.svg",
    category: "Graphics Design"
  },
  {
    title: "UWEZO Website",
    description: "UWEZO's Company Website.",
    image: "/Websites/Uwezo.png",
    demoLink: "https://uwezo.vercel.app/",
    githubLink: "https://github.com/Landrian61/uwezo",
    category: "Websites"
  },
  

 
];

const categories = [
  "All",
  "Graphics Design",
  "Websites",
  "Healthcare",
  "Fintech"
];

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setFilteredProjects(
      selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-black pt-16">
      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 dark:text-white">
            Our{" "}
            <span className="text-transparent from-[#3C4F76] to-[#0077B6]  bg-clip-text bg-gradient-to-r dark:from-gold dark:to-orange">
              Products
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Explore our portfolio of innovative solutions that are transforming
            industries and empowering businesses across the globe.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-delayed">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? " from-[#3C4F76] to-[#0077B6] bg-gradient-to-r dark:from-gold dark:to-orange text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 animate-fade-in-up dark:bg-black border-gray-600`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <Button
                    variant="default"
                    className="flex-1 text-white bg-gradient-to-r from-[#3C4F76] to-[#0077B6]  dark:from-gold dark:to-orange"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-white dark:text-black"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <WaveSVG />

      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-16 h-16 bg-[#2596be]/10 rounded-full animate-float-slow" />
        <div className="absolute top-40 right-[15%] w-20 h-20 bg-[#80cccc]/10 rounded-full animate-float-slower" />
      </div>
    </main>
  );
}
