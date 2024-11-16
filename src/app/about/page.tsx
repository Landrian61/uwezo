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
            fill="#2596be"
            fillOpacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
    </svg>
);

const services = [
    {
        title: "Information Technology",
        icon: "🔊",
        items: [
            "Hardware and software installation, maintenance, and troubleshooting",
            "IT support and help desk services",
            "Software development and programming"
        ]
    },
    {
        title: "Digital Media Design",
        icon: "💡",
        items: [
            "Creating visual content using digital tools like graphics, videos, and animations",
            "Designing user interfaces and user experiences",
            "Developing digital graphics, logos, and branding materials",
            "3D modeling and animation",
            "Web design and development"
        ]
    },
    {
        title: "Digital Marketing",
        icon: "📈",
        items: [
            "Social media marketing and management",
            "Content marketing and creation",
            "Online advertising"
        ]
    }
];

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
        <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-16">
            {/* Vision & Mission Section */}
            <section
                className={`relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-12 text-center transition-all duration-1000 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
                    About{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#80cccc]">
                        UWEZO
                    </span>
                </h1>

                <div className="grid gap-8 md:grid-cols-2 mt-12">
                    <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-500">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Our Vision
                        </h2>
                        <p className="text-gray-600">
                            To be the leading force in technological innovation, creating
                            solutions that empower businesses and individuals to achieve their
                            full potential in the digital age.
                        </p>
                        <p className="text-gray-600 pt-4">
                            To create a young Ugandan Generation that is innovative,
                            productive and self reliant in Digital technology.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-500">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-600">
                            We are committed to delivering cutting-edge technology solutions
                            that transform businesses, enhance user experiences, and drive
                            sustainable growth through innovation and excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                    Our Services
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-500"
                        >
                            <CardContent className="p-6">
                                <div className="w-16 h-16 bg-[#2596be]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-3xl">{service.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                                    {service.title}
                                </h3>
                                <ul className="text-gray-600 space-y-2">
                                    {service.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start">
                                            <span className="text-[#2596be] mr-2">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
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
                                    <Card className="group hover:shadow-xl transition-all duration-500">
                                        <CardContent className="p-6">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={200}
                                                height={200}
                                                className="rounded-full mx-auto mb-4 object-cover"
                                            />
                                            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                                                {member.name}
                                            </h3>
                                            <p className="text-[#2596be] font-medium text-center mb-3">
                                                {member.role}
                                            </p>
                                            <p className="text-gray-600 text-center text-sm">
                                                {member.bio}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>

            {/* Location Section */}
            <section className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Location</h2>
                <Card className="hover:shadow-xl transition-all duration-500">
                    <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            UWEZO Headquarters
                        </h3>
                        <p className="text-gray-600">
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
                <div className="absolute top-20 left-[10%] w-16 h-16 bg-[#2596be]/10 rounded-full animate-float-slow" />
                <div className="absolute top-40 right-[15%] w-20 h-20 bg-[#80cccc]/10 rounded-full animate-float-slower" />
            </div>
        </main>
    );
}
