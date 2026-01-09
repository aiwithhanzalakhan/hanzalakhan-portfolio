// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import Image from "next/image";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { useCallback, useRef } from "react";

// export default function Hero() {
//   const heroRef = useRef(null);

//   // Scroll animation
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
//   const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

//   // Particles init
//   const particlesInit = useCallback(async (engine: any) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden"
//     >
//       {/* 🌌 PARTICLES BACKGROUND */}
//       <Particles
//         init={particlesInit}
//         options={{
//           fullScreen: false,
//           particles: {
//             number: { value: 60 },
//             color: { value: "#6366f1" },
//             opacity: { value: 0.3 },
//             size: { value: 2 },
//             move: { enable: true, speed: 0.6 },
//           },
//         }}
//         className="absolute inset-0 -z-10"
//       />

//       <motion.div
//         style={{ opacity, y }}
//         className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
//       >
//         {/* LEFT CONTENT */}
//         <div>
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//             Hi, I’m <span className="text-indigo-400">Hanzala</span> 👋
//           </h1>

//           {/* ✨ TYPING ANIMATION */}
//           <TypeAnimation
//             sequence={[
//               "Frontend Developer",
//               2000,
//               "Next.js Developer",
//               2000,
//               "React & Tailwind Specialist",
//               2000,
//             ]}
//             speed={50}
//             repeat={Infinity}
//             className="block mt-4 text-2xl md:text-3xl font-semibold text-indigo-300"
//           />

//           {/* 🧠 ATS FRIENDLY TEXT */}
//           <p className="mt-6 text-gray-300 text-lg max-w-xl">
//             I build fast, responsive and scalable web applications using
//             <span className="text-white font-medium">
//               {" "}Next.js, React, Tailwind CSS and modern JavaScript
//             </span>.
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
//         </div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           animate={{ y: [0, -15, 0] }}
//           transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//           className="flex justify-center"
//         >
//           <Image
//             src="/picture/Imag3.jpeg"
//             alt="Hanzala Frontend Developer"
//             width={420}
//             height={420}
//             priority
//             className="rounded-2xl shadow-2xl"
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Hero scroll effects
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -140]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* PARTICLES */}
      <Particles
        init={async (engine: any) => await loadFull(engine)}
        options={{
          fullScreen: false,
          particles: {
            number: { value: 60 },
            color: { value: "#6366f1" },
            opacity: { value: 0.3 },
            size: { value: 2 },
            move: { enable: true, speed: 0.6 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 top-8! items-center"
      >
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-6xl  font-bold">
            Hi, I’m <span className="text-indigo-400">Hanzala</span> 👋
          </h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "Next.js Developer",
              2000,
              "React & Tailwind Specialist",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="mt-4 block text-2xl md:text-3xl font-semibold text-indigo-300"
          />

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            I build fast, responsive and scalable web applications using
            <span className="text-white font-medium">
              {" "}Next.js, React, Tailwind CSS & JavaScript
            </span>.
          </p>
        </div>

        {/* IMAGE */}
        {/* <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="flex justify-center"
        >
          <div className="relative w-[320px] h-[320px]">
            <Image
              // src="/picture/Imag3.jpeg"
              src="/unnamed.jpg"
              alt="Hanzala Frontend Developer"
              fill
              className="rounded-2xl shadow-2xl object-cover"
              priority
            />
          </div>

        </motion.div> */}
       <motion.div
  animate={{ y: [0, -18, 0] }}
  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
  className="flex justify-center"
>
  <div className="relative w-[340px] h-[340px]">

   
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      className="absolute inset-0 rounded-full
      bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500
      blur-[1px]"
    />

    
    <div className="absolute inset-[3px] rounded-full bg-black" />

   
    <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
      <Image
        src="/unnamed.jpg"
        alt="Hanzala Khan | Frontend Developer"
        fill
        priority
        className="object-cover"
      />
    </div>

   
    <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(99,102,241,0.65)]" />

  </div>
</motion.div>



      </motion.div>
    </section>
  );
}
