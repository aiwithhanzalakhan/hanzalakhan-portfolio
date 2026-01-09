"use client";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Code, Layout, Cloud, Palette, Zap } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-9 h-9 text-blue-400" />,
    description:
      "Crafting responsive, user-centered web interfaces using React, Next.js, and Tailwind CSS for optimal user experience.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    gradient: "from-blue-400/20 to-blue-600/10",
  },
  {
    title: "UI/UX & Motion Design",
    icon: <Palette className="w-9 h-9 text-pink-400" />,
    description:
      "Designing intuitive and visually appealing user experiences using Figma, Framer Motion, and GSAP animations.",
    tech: ["Figma", "Framer Motion", "GSAP", "Adobe XD"],
    gradient: "from-pink-400/20 to-pink-600/10",
  },
  {
    title: "Cloud & Deployment",
    icon: <Cloud className="w-9 h-9 text-purple-400" />,
    description:
      "Deploying high-performance applications with platforms like Vercel and optimizing for scalability.",
    tech: ["Vercel", "AWS", "Netlify", "CI/CD"],
    gradient: "from-purple-400/20 to-purple-600/10",
  },
  {
    title: "Performance & Optimization",
    icon: <Zap className="w-9 h-9 text-yellow-400" />,
    description:
      "Ensuring lightning-fast performance using modern optimization techniques like lazy loading and code splitting.",
    tech: ["SEO", "Lighthouse", "Caching", "Code Splitting"],
    gradient: "from-yellow-400/20 to-yellow-500/10",
  },
  {
    title: "Programming Languages",
    icon: <Code className="w-9 h-9 text-indigo-400" />,
    description:
      "Writing clean, maintainable, and efficient code in modern languages such as JavaScript and TypeScript.",
    tech: ["JavaScript", "TypeScript", "Python", "C++"],
    gradient: "from-indigo-400/20 to-indigo-600/10",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Skills() {
  const particlesInit = async (main:any) => {
    await loadFull(main);
  };

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white"
    >
      {/* Particles Background */}
      <Particles
        id="particles-skills"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          background: { color: "transparent" },
          particles: {
            color: { value: "#4f46e5" },
            links: {
              enable: true,
              distance: 150,
              color: "#4f46e5",
              opacity: 0.3,
              width: 1,
            },
            collisions: { enable: true },
            move: { enable: true, speed: 1.5, direction: "none", outModes: "bounce" },
            number: { value: 50 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Skills
          </span>
        </motion.h2>

        {/* Skill Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {skills.map((skill, index) => (
            <motion.div
            key={skill.title}
            variants={fadeUp}
            whileHover={{
              rotateX: 5,
              rotateY: -5,
              scale: 1.05,
              boxShadow: "0px 25px 50px rgba(0,0,0,0.25)",
            }}
            className={`relative bg-black/5 ${skill.gradient}  border border-white/20 rounded-3xl p-8 shadow-xl transition-all duration-300`}
          >
            {/* Icon */}
            <div className="mb-6 p-4 bg-white/10 rounded-xl w-fit backdrop-blur-md shadow-inner border border-white/20">
              {skill.icon}
            </div>
          
            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 text-white">{skill.title}</h3>
          
            {/* Description */}
            <p className="text-white text-sm mb-5 ">
              {skill.description}
            </p>
          
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {skill.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, boxShadow: "0 4px 12px rgba(79,70,229,0.3)" }}
                  className="text-xs bg-white border border-white/30 px-3 py-1 rounded-full text-black font-medium transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          ))}
        </motion.div>
      </div>
    </section>
  );
}
