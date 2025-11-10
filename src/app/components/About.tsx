// components/About.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:gap-12">
        
        {/* Profile Image */}
        <motion.div
          className="w-full md:w-1/3 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-72 h-72 mx-auto md:mx-0 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <Image
              src="/profile.jpg" // Replace with your image
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          className="md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            Hi! I'm Hanzala Khan, a passionate Front-End Developer and Designer 
            specialized in building responsive, user-friendly web experiences. 
            I love crafting clean, modern designs and writing efficient, scalable code.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Skills & Expertise
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "UI/UX Design"].map(skill => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-50 text-blue-600 font-medium rounded-full shadow-sm hover:bg-blue-100 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
