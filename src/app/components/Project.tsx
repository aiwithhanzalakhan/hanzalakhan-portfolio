"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { useEffect, useState } from "react";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/image";

interface ProjectType {
  title: string;
  description: string;
  image: any;
  demo: string;
  github: string;
  tags: string[];
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  // 🔹 Fetch from Sanity
  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"] | order(_createdAt desc) {
          title,
          description,
          image,
          demo,
          github,
          tags
        }`
      )
      .then(setProjects);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-28 bg-gradient-to-b from-gray-50 via-white to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-widest font-semibold text-indigo-600">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            A curated selection of projects demonstrating clean UI,
            smooth animations, and scalable frontend architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <Tilt
                options={{ max: 15, scale: 1.03, speed: 400 }}
                className="group relative rounded-3xl overflow-hidden
                bg-white/80 backdrop-blur
                shadow-[0_30px_80px_-25px_rgba(0,0,0,0.35)]
                border border-white/30"
              >
                {/* Image */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={urlFor(project.image).url()}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6
                    bg-gradient-to-t from-black/80 via-black/40 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-200 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full
                          bg-indigo-600 text-white font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        className="px-4 py-2 rounded-lg bg-indigo-600
                        text-sm font-semibold text-white hover:bg-indigo-700 transition"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        className="px-4 py-2 rounded-lg border border-white
                        text-sm font-semibold text-white
                        hover:bg-white hover:text-gray-900 transition"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
