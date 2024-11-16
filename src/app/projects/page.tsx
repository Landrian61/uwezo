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
    title: "AI-Powered Analytics Dashboard",
    description:
      "A sophisticated analytics platform that leverages artificial intelligence to provide real-time insights and predictive analysis for business metrics.",
    image: "/AI.jpg",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example",
    category: "Enterprise"
  },
  {
    title: "Smart IoT Home System",
    description:
      "An innovative IoT solution that integrates with various smart home devices to provide seamless automation and energy management.",
    image: "/iot.jpg",
    technologies: ["Node.js", "MongoDB", "MQTT", "React Native"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example",
    category: "IoT"
  },
  {
    title: "Blockchain Supply Chain",
    description:
      "A blockchain-based supply chain management system ensuring transparency and traceability in product distribution.",
    image: "/blockchain.png",
    technologies: ["Solidity", "Ethereum", "React", "Node.js"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example",
    category: "Blockchain"
  },
  {
    title: "E-Learning Platform",
    description:
      "A comprehensive e-learning platform featuring interactive courses, real-time collaboration, and AI-powered personalized learning paths.",
    image: "/learning.jpg",
    technologies: ["Next.js", "PostgreSQL", "Python", "Docker"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example",
    category: "Education"
  },
  {
    title: "Healthcare Management System",
    description:
      "A secure and scalable healthcare management solution for hospitals and clinics, featuring EMR integration and telehealth capabilities.",
    image: "/hospital.png",
    technologies: ["Vue.js", "Java Spring", "MySQL", "AWS"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example",
    category: "Healthcare"
  },
  {
    title: "Fintech Payment Gateway",
    description:
      "A robust payment processing system supporting multiple currencies and payment methods with advanced fraud detection.",
    image: "/fintech.png",
    technologies: ["Node.js", "Redis", "PostgreSQL", "React"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example",
    category: "Fintech"
  }
];

const categories = [
  "All",
  "Enterprise",
  "IoT",
  "Blockchain",
  "Education",
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
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-16">
      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#80cccc]">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  ? "bg-gradient-to-r from-[#2596be] to-[#80cccc]"
                  : ""
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
              className={`group hover:shadow-xl transition-all duration-500 animate-fade-in-up`}
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
                  <h3 className="font-bold text-xl text-gray-800">
                    {project.title}
                  </h3>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="default"
                    className="flex-1 bg-gradient-to-r from-[#2596be] to-[#80cccc]"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button variant="outline" className="flex-1">
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
