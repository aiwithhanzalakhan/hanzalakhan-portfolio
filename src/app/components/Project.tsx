// components/Projects.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";

const projects = [
  {
    title: "E-Commerce Website",
    description: "Responsive e-commerce site built with Next.js and Tailwind CSS.",
    image: "/projects/ecommerce.jpg",
    demo: "#",
    github: "#",
    tags: ["Next.js", "Tailwind", "React"],
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio showcasing projects and skills.",
    image: "/projects/portfolio.jpg",
    demo: "#",
    github: "#",
    tags: ["Next.js", "UI/UX", "Tailwind"],
  },
  {
    title: "Crypto Price Tracker",
    description: "Real-time crypto tracking dashboard using React & APIs.",
    image: "/projects/crypto.jpg",
    demo: "#",
    github: "#",
    tags: ["React", "API", "Chart.js"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16">
          My Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <Tilt
                options={{ max: 20, scale: 1.05, speed: 400 }}
                className="relative w-full h-72 bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-lg"
              >
                <div className="relative w-full h-full overflow-hidden rounded-3xl">
                  {/* Project Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full transition-transform group-hover:scale-110 rounded-3xl"
                  />

                  {/* Animated Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 rounded-3xl">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200 mb-4">{project.description}</p>

                    {/* Tech Tags with Glow */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full font-medium bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        className="px-4 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition"
                      >
                        Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        className="px-4 py-2 border-2 border-white rounded-lg font-medium hover:bg-white hover:text-black transition"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* Animated Border Glow on Hover */}
                  <span className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all"></span>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
