// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 bg-gray-50">
      {/* Hero Section */}
      <section className="text-center max-w-3xl px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Empowering Your Tech Future with UWEZO
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          At UWEZO, we build cutting-edge technology solutions to transform and
          elevate your business.
        </p>
        <div className="flex justify-center space-x-4">
          {/* Updated Link usage without <a> */}
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-[#2596be] text-white text-sm font-semibold hover:bg-[#80cccc] transition"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 text-sm font-semibold hover:bg-gray-300 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className=" flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <Image
              src="/creativity.gif"
              alt="Innovation Icon"
              width={60}
              height={60}
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">Innovation</h3>
            <p className="text-sm text-gray-600 mt-2">
              We leverage the latest technologies to bring innovative solutions
              to life.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <Image
              src="/encryption.gif"
              alt="Security Icon"
              width={60}
              height={60}
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">Security</h3>
            <p className="text-sm text-gray-600 mt-2">
              Our solutions are built with security in mind, protecting your
              data and privacy.
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <Image
              src="/page-optimization.gif"
              alt="Performance Icon"
              width={60}
              height={60}
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">
              High Performance
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Optimized for performance, our solutions ensure fast and reliable
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to Take Your Business to the Next Level?
        </h2>
        {/* Updated Link usage without <a> */}
        <Link
          href="/contact"
          className="px-8 py-3 rounded-lg bg-[#2596be] text-white text-sm font-semibold hover:bg-[#80cccc] transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
