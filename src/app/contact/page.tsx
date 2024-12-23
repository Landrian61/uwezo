"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

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

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactInfo = ({ icon: Icon, title, content }: any) => (
  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300">
    <div className="bg-gradient-to-r from-[#2596be] to-[#80cccc] p-3 rounded-full">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Handle form submission (e.g., send data to an API)
    console.log("Form Data:", data);
    setIsSubmitting(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-16">
      <div
        className={`relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#80cccc]">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to discuss a project? We'd love to hear from
            you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="animate-fade-in-delayed hover:shadow-xl transition-all duration-500">
            <CardContent className="p-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className="w-full border-gray-200 focus:border-[#2596be] focus:ring-[#2596be]"
                          />
                        </FormControl>
                        <FormDescription className="text-gray-500">
                          Please enter your full name.
                        </FormDescription>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Email"
                            type="email"
                            {...field}
                            className="w-full border-gray-200 focus:border-[#2596be] focus:ring-[#2596be]"
                          />
                        </FormControl>
                        <FormDescription className="text-gray-500">
                          We'll never share your email.
                        </FormDescription>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your Message"
                            {...field}
                            className="w-full border-gray-200 focus:border-[#2596be] focus:ring-[#2596be]"
                            rows={4}
                          />
                        </FormControl>
                        <FormDescription className="text-gray-500">
                          Describe your inquiry in detail.
                        </FormDescription>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2596be] to-[#80cccc] hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-delayed-more">
            <ContactInfo icon={Mail} title="Email" content="info@uwezo.com" />
            <ContactInfo icon={Phone} title="Phone" content="+1 234 567 8900" />
            <ContactInfo
              icon={MapPin}
              title="Address"
              content="123 Innovation Drive, Tech Valley, Silicon City"
            />
          </div>
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
