// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Tilt } from "react-tilt";
// import { useEffect, useState } from "react";
// import { client } from "@/app/lib/sanity";
// import { urlFor } from "@/app/lib/image";

// interface ProjectType {
//   title: string;
//   description: string;
//   image: any;
//   demo: string;
//   github: string;
//   tags: string[];
// }

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// import { easeInOut, Variants } from "framer-motion";

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: easeInOut, 
//     },
//   },
// };


// export default function Projects() {
//   const [projects, setProjects] = useState<ProjectType[]>([]);

//   // 🔹 Fetch from Sanity
//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "project"] | order(_createdAt desc) {
//           title,
//           description,
//           image,
//           demo,
//           github,
//           tags
//         }`
//       )
//       .then(setProjects);
//   }, []);

//   return (
//     <section
//       id="projects"
//       className="relative py-28 bg-gradient-to-b from-gray-50 via-white to-indigo-50"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <span className="text-sm uppercase tracking-widest font-semibold text-indigo-600">
//             Portfolio
//           </span>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
//             Featured Projects
//           </h2>
//           <p className="mt-4 max-w-2xl mx-auto text-gray-600">
//             A curated selection of projects demonstrating clean UI,
//             smooth animations, and scalable frontend architecture.
//           </p>
//         </motion.div>

//         {/* Projects Grid */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
//         >
//           {projects.map((project) => (
//             <motion.div key={project.title} variants={fadeUp}>
//               <Tilt
//                 options={{ max: 15, scale: 1.03, speed: 400 }}
//                 className="group relative rounded-3xl overflow-hidden
//                 bg-white/80 backdrop-blur
//                 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.35)]
//                 border border-white/30"
//               >
//                 {/* Image */}
//                 <div className="relative h-72 w-full overflow-hidden">
//                   <Image
//                     src={urlFor(project.image).url()}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 flex flex-col justify-end p-6
//                     bg-gradient-to-t from-black/80 via-black/40 to-transparent
//                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   >
//                     <h3 className="text-xl font-bold text-white mb-2">
//                       {project.title}
//                     </h3>

//                     <p className="text-sm text-gray-200 mb-4 line-clamp-3">
//                       {project.description}
//                     </p>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tags?.map((tag) => (
//                         <span
//                           key={tag}
//                           className="text-xs px-3 py-1 rounded-full
//                           bg-indigo-600 text-white font-medium"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex gap-3">
//                       <a
//                         href={project.demo}
//                         target="_blank"
//                         className="px-4 py-2 rounded-lg bg-indigo-600
//                         text-sm font-semibold text-white hover:bg-indigo-700 transition"
//                       >
//                         Live Demo
//                       </a>
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         className="px-4 py-2 rounded-lg border border-white
//                         text-sm font-semibold text-white
//                         hover:bg-white hover:text-gray-900 transition"
//                       >
//                         GitHub
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </Tilt>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// import useSWR from "swr";

// const fetcher = (url: string) => fetch(url).then(res => res.json());

// export default function Home() {
//   const { data: projects, error } = useSWR("/api/projects", fetcher);

//   if (error) return <div>Failed to load</div>;
//   if (!projects) return <div>Loading...</div>;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//       {projects.map((project: any) => (
//         <div key={project._id} className="border p-4 rounded">
//           <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover mb-2"/>
//           <h2 className="text-xl font-bold">{project.title}</h2>
//           <p>{project.description}</p>
//           {project.link && <a href={project.link} target="_blank" className="text-blue-500">View Project</a>}
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


export default function Home() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProjects(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //   {projects.map((project) => (
    //     <div key={project._id} className="border p-4 rounded">
    //       <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover mb-2"/>
    //       <h2 className="text-xl font-bold">{project.title}</h2>
    //       <p>{project.description}</p>
    //       {project.link && <a href={project.link} target="_blank" className="text-blue-500">View Project</a>}
    //     </div>
    //   ))}
    // </div>
    //   <section className="bg-[#0b0f19] py-16 px-4">
    //   <div className="max-w-6xl mx-auto">
    //     <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
    //       My Projects
    //     </h1>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {projects.map((project) => (
    //         <div
    //           key={project._id}
    //           className="group bg-[#111827] border border-white/10 rounded-2xl overflow-hidden 
    //                      shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
    //         >
    //           {/* IMAGE */}
    //           <div className="relative overflow-hidden">
    //             <img
    //               src={project.imageUrl}
    //               alt={project.title}
    //               className="w-full h-52 object-cover transform 
    //                          group-hover:scale-110 transition duration-500"
    //             />

    //             {/* OVERLAY */}
    //             <div
    //               className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
    //                          opacity-0 group-hover:opacity-100 transition"
    //             />
    //           </div>

    //           {/* CONTENT */}
    //           <div className="p-6">
    //             <h2 className="text-xl font-semibold text-white mb-2">
    //               {project.title}
    //             </h2>

    //             <p className="text-gray-400 text-sm leading-relaxed mb-4">
    //               {project.description}
    //             </p>

    //             {project.link && (
    //               <a
    //                 href={project.link}
    //                 target="_blank"
    //                 className="inline-flex items-center gap-2 text-sm font-medium
    //                            text-cyan-400 hover:text-cyan-300 transition"
    //               >
    //                 View Project
    //                 <span className="group-hover:translate-x-1 transition">→</span>
    //               </a>
    //             )}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section
      id="projects"
      className="relative py-24 overflow-hidden bg-gradient-to-br 
             from-gray-900 via-gray-800 to-indigo-900 text-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
            Projects
          </span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                rotateX: 5,
                rotateY: -5,
                scale: 1.05,
                boxShadow: "0px 25px 50px rgba(79,70,229,0.35)",
              }}
              transition={{ duration: 0.4 }}
              className="group relative bg-black/10 backdrop-blur-xl 
                     border border-white/20 rounded-3xl 
                     overflow-hidden shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover 
                         group-hover:scale-110 transition duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t 
                            from-black/80 via-black/30 to-transparent 
                            opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 
                           text-sm font-medium text-indigo-400 
                           hover:text-indigo-300 transition"
                  >
                    View Project
                    <span className="group-hover:translate-x-1 transition">→</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
