// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Import Montserrat from next/font/google
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import { ThemeProvider } from "next-themes"; 

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"] 
});

// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

// Metadata for the application
export const metadata: Metadata = {
  title: "UWEZO",
  description: "UWEZO Official Website"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {/* Wrapping the app in ThemeProvider for light/dark theme support */}
          <Header /> {/* Header component with theme toggle */}
          {children}
          <Footer /> {/* Footer component */}
        </ThemeProvider>
      </body>
    </html>
  );
}
