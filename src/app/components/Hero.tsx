// components/Hero.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-gray-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Hi, I'm <span className="text-blue-600">Hanzala Khan</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            I’m a Front-End Developer & Designer specializing in building 
            modern, responsive, and interactive web experiences.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 relative w-full max-w-md md:max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto md:mx-0 rounded-full overflow-hidden shadow-2xl border-4 border-blue-50 hover:scale-105 transition-transform">
            <Image
              src="/profile.jpg" // Replace with your image
              alt="Profile Image"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>

      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full opacity-20 -z-10"></div>
    </section>
  );
};

export default Hero;
