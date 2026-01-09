// // "use client";

// // import Image from "next/image";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import { TypeAnimation } from "react-type-animation";
// // import Particles from "react-tsparticles";
// // import { loadFull } from "tsparticles";
// // import { useRef } from "react";

// // const skills = [
// //   "React",
// //   "Next.js",
// //   "Tailwind CSS",
// //   "JavaScript",
// //   "TypeScript",
// //   "UI / UX Design",
// // ];

// // export default function About() {
// //   const ref = useRef(null);

// //   // Scroll animation (Hero-style)
// //   const { scrollYProgress } = useScroll({
// //     target: ref,
// //     offset: ["start end", "start center"],
// //   });

// //   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
// //   const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

// //   return (
// //     <section
// //       ref={ref}
// //       id="about"
// //       className="relative py-32 overflow-hidden
// //       bg-gradient-to-br from-gray-50 via-white to-indigo-50
// //       dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950"
// //     >
// //       {/* 🌌 PARTICLES */}
// //       <Particles
// //         init={async (engine) => await loadFull(engine)}
// //         options={{
// //           fullScreen: false,
// //           particles: {
// //             number: { value: 40 },
// //             color: { value: "#6366f1" },
// //             opacity: { value: 0.25 },
// //             size: { value: 2 },
// //             move: { enable: true, speed: 0.4 },
// //           },
// //         }}
// //         className="absolute inset-0 -z-10"
// //       />

// //       {/* Ambient blobs */}
// //       <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-indigo-400/20 blur-3xl rounded-full" />
// //       <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-400/20 blur-3xl rounded-full" />

// //       <motion.div
// //         style={{ opacity, y }}
// //         className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center"
// //       >
// //         {/* IMAGE */}
// //         <motion.div
// //           whileHover={{ scale: 1.03, rotate: 1 }}
// //           transition={{ type: "spring", stiffness: 120 }}
// //           className="flex justify-center md:justify-start"
// //         >
// //           <div
// //             className="relative w-[340px] h-[420px] rounded-3xl overflow-hidden
// //             shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]
// //             ring-1 ring-white/30 dark:ring-white/10"
// //           >
// //             <Image
// //               src="/picture/Imag3.jpeg"
// //               fill
// //               alt="Hanzala Khan Frontend Developer"
// //               className="object-cover"
// //               priority
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
// //           </div>
// //         </motion.div>

// //         {/* CONTENT */}
// //         <div className="text-center md:text-left">
// //           <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
// //             About Me
// //           </span>

// //           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
// //             Frontend Developer
// //           </h2>

// //           {/* ✨ TYPING ROLES */}
// //           <TypeAnimation
// //             sequence={[
// //               "React & Next.js Specialist",
// //               2000,
// //               "UI Focused Frontend Engineer",
// //               2000,
// //               "Tailwind CSS Power User",
// //               2000,
// //             ]}
// //             speed={50}
// //             repeat={Infinity}
// //             className="text-2xl font-semibold text-indigo-600 mb-6"
// //           />

// //           {/* 🧠 ATS TEXT */}
// //           <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-10">
// //             I’m{" "}
// //             <span className="font-semibold text-gray-900 dark:text-white">
// //               Hanzala Khan
// //             </span>
// //             , a frontend developer specializing in{" "}
// //             <span className="text-gray-900 dark:text-white font-medium">
// //               React, Next.js, Tailwind CSS and modern JavaScript
// //             </span>
// //             . I build fast, accessible and scalable user interfaces with a strong
// //             focus on performance, clean architecture and user experience.
// //           </p>

// //           {/* SKILLS */}
// //           <div className="flex flex-wrap justify-center md:justify-start gap-4">
// //             {skills.map((skill) => (
// //               <motion.span
// //                 key={skill}
// //                 whileHover={{
// //                   scale: 1.08,
// //                   boxShadow: "0 12px 30px rgba(99,102,241,0.35)",
// //                 }}
// //                 className="px-5 py-2 text-sm font-semibold rounded-full
// //                 bg-white/80 dark:bg-slate-800/80 backdrop-blur
// //                 text-indigo-600 dark:text-indigo-400
// //                 border border-indigo-100 dark:border-slate-700"
// //               >
// //                 {skill}
// //               </motion.span>
// //             ))}
// //           </div>
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import Image from "next/image";
// import {Typed} from "react-typed";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// export default function Hero() {
//   const controls = useAnimation();
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const particlesInit = async (main:any) => {
//     await loadFull(main);
//   };

//   return (
//     <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      
//       {/* Particles Background */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           fpsLimit: 60,
//           background: { color: "transparent" },
//           particles: {
//             color: { value: "#4f46e5" },
//             links: { color: "#4f46e5", distance: 150, enable: true, opacity: 0.3, width: 1 },
//             collisions: { enable: true },
//             move: { enable: true, speed: 2, direction: "none", outModes: "bounce" },
//             number: { value: 50 },
//             opacity: { value: 0.4 },
//             shape: { type: "circle" },
//             size: { value: { min: 1, max: 4 } },
//           },
//         }}
//         className="absolute inset-0 z-0"
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           style={{ opacity: 1 - scrollY / 500 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//             Hi, I’m <span className="text-indigo-400">Hanzala</span> 👋
//           </h1>

//           {/* Typing Animation */}
//           <Typed
//             className="mt-4 text-2xl md:text-3xl text-gray-300 font-semibold block"
//             strings={[
//               "Frontend Developer",
//               "Next.js & React Specialist",
//               "Building Modern Web Interfaces",
//             ]}
//             typeSpeed={60}
//             backSpeed={40}
//             loop
//           />

//           <p className="mt-6 text-gray-300 text-lg max-w-lg">
//             I design and develop responsive, user-centric web applications using
//             Next.js, React, and Tailwind CSS. My focus is on performance, accessibility,
//             and modern design principles to create scalable web solutions.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <motion.a
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               href="#projects"
//               className="px-6 py-3 bg-indigo-500 rounded-lg font-semibold"
//             >
//               View Projects
//             </motion.a>

//             <motion.a
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               href="#contact"
//               className="px-6 py-3 border border-white/30 rounded-lg"
//             >
//               Contact Me
//             </motion.a>
//           </div>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           style={{ opacity: 1 - scrollY / 600 }}
//           className="flex justify-center"
//         >
//           <motion.div
//             animate={{ y: [0, -15, 0] }}
//             transition={{ repeat: Infinity, duration: 4 }}
//           >
//             <Image
//               src="/picture/Imag3.jpeg"
//               alt="Hero Image"
//               width={420}
//               height={420}
//               className="rounded-2xl shadow-2xl"
//             />
//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "UI/UX Design",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden
      bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900
      text-white"
    >
      {/* Ambient gradients */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-indigo-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-500/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <motion.div
            whileHover={{ rotate: 1.5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative w-[340px] h-[420px] rounded-3xl overflow-hidden ring-1 ring-white/20"
          >
            <Image
             src="/unnamed.jpg"

              fill
              alt="Hanzala Khan"
              className="object-cover"
              priority
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" /> */}
          </motion.div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block mb-4 text-sm font-semibold tracking-widest text-indigo-400 uppercase"
          >
            About Me
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold leading-tight
            text-white mb-6"
          >
            Frontend Developer <br />
            <span className="text-indigo-400">Building Modern UI Experiences</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl"
          >
            I'm <span className="font-semibold text-white">Hanzala Khan</span>, a frontend-focused developer
            creating fast, responsive, and visually appealing web interfaces using
            Next.js, React, and Tailwind CSS. I focus on performance, accessibility, and modern design.
          </motion.p>

          <motion.h3
            variants={fadeUp}
            className="text-xl font-semibold text-white mb-5"
          >
            Core Technologies
          </motion.h3>

          {/* Skills */}
          <motion.div
            variants={container}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={fadeUp}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 12px 30px rgba(99,102,241,0.35)",
                }}
                whileTap={{ scale: 0.96 }}
                className="px-5 py-2 text-sm font-semibold rounded-full
                bg-white/10 backdrop-blur
                text-indigo-400
                border border-indigo-600
                transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
