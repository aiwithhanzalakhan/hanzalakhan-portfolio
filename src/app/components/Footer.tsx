"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";

const Footer: FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white pt-20 pb-10">
      {/* Particles Background */}
      <Particles
        id="footer-particles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          background: { color: "transparent" },
          particles: {
            color: { value: "#4f46e5" },
            links: { enable: true, distance: 120, color: "#6366f1", opacity: 0.2, width: 1 },
            collisions: { enable: true },
            move: { enable: true, speed: 1, outModes: "bounce" },
            number: { value: 40 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-12 border-b border-white/20 pb-12"
        >
          {/* Logo / Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">
              Hanzala{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                Khan
              </span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Building modern web experiences using Next.js, React, and Tailwind.
              Passionate about creating fast, interactive, and recruiter-friendly UIs.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Explore</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-indigo-400 transition">About</a></li>
                <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
                <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="mailto:hanzalakhan6226@gmail.com" className="hover:text-indigo-400 transition">Email</a></li>
                <li><a href="https://linkedin.com/" target="_blank" className="hover:text-indigo-400 transition">LinkedIn</a></li>
                <li><a href="https://github.com/" target="_blank" className="hover:text-indigo-400 transition">GitHub</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Follow</h4>
              <div className="flex gap-4">
                <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/" target="_blank" className="p-2 bg-white/10 hover:bg-indigo-400 rounded-full transition">
                  <Github className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com/" target="_blank" className="p-2 bg-white/10 hover:bg-indigo-400 rounded-full transition">
                  <Linkedin className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="mailto:hanzalakhan6226@gmail.com" className="p-2 bg-white/10 hover:bg-indigo-400 rounded-full transition">
                  <Mail className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="https://twitter.com/" target="_blank" className="p-2 bg-white/10 hover:bg-indigo-400 rounded-full transition">
                  <Twitter className="w-5 h-5 text-white" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center mt-10 text-gray-300 text-sm"
        >
          <p>© {new Date().getFullYear()} Hanzala Khan. All rights reserved.</p>

          <motion.button
            whileHover={{ y: -4 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 md:mt-0 flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
