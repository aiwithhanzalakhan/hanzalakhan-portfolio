// "use client";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="relative py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden"
//     >
//       {/* Soft Background Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_60%)]"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.08),transparent_60%)]"></div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
//             Let&apos;s Build Something Together
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             I’d love to hear about your project ideas, collaborations, or any opportunity
//             where I can bring value with modern web development.
//           </p>
//         </motion.div>

//         {/* Contact Section */}
//         <div className="grid md:grid-cols-2 gap-14">
//           {/* Left Info Card */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl p-10 flex flex-col justify-between"
//           >
//             <div>
//               <h3 className="text-3xl font-semibold text-gray-800 mb-6">
//                 Get in Touch
//               </h3>
//               <p className="text-gray-600 leading-relaxed mb-8">
//                 Feel free to contact me via email or phone — or connect on social
//                 media. I usually reply within a few hours.
//               </p>

//               <div className="space-y-6">
//                 <div className="flex items-center gap-4">
//                   <Mail className="text-blue-600 w-6 h-6" />
//                   <a
//                     href="mailto:youremail@example.com"
//                     className="text-gray-800 font-medium hover:text-blue-600 transition"
//                   >
//                     hanzalakhan6226@gmail.com
//                   </a>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <Phone className="text-blue-600 w-6 h-6" />
//                   <a
//                     href="tel:+1234567890"
//                     className="text-gray-800 font-medium hover:text-blue-600 transition"
//                   >
//                     032-03066496
//                   </a>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <MapPin className="text-blue-600 w-6 h-6" />
//                   <span className="text-gray-800 font-medium">
//                     Karachi,Pakistan
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-5 mt-10">
//               <a
//                 href="https://github.com/"
//                 target="_blank"
//                 className="p-3 bg-blue-50 hover:bg-blue-100 rounded-full transition"
//               >
//                 <Github className="w-6 h-6 text-gray-800" />
//               </a>
//               <a
//                 href="https://github.com/aiwithhanzalakhan"
//                 target="_blank"
//                 className="p-3 bg-blue-50 hover:bg-blue-100 rounded-full transition"
//               >
//                 <Linkedin className="w-6 h-6 text-blue-700" />
//               </a>
//             </div>
//           </motion.div>

//           {/* Right Form */}
//           <motion.form
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-10"
//           >
//             <div className="grid gap-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Your Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="5"
//                   placeholder="Tell me more about your project..."
//                   className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 ></textarea>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.97 }}
//                 type="submit"
//                 className="flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-700 transition-all"
//               >
//                 <Send className="w-5 h-5" />
//                 Send Message
//               </motion.button>
//             </div>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
"use client";

import { FC, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import TypedJS from "typed.js";

interface ContactProps {}

const TypedText: FC<{ strings: string[] }> = ({ strings }) => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new TypedJS(el.current, {
      strings,
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      contentType: "html"
    });

    return () => typed.destroy();
  }, [strings]);

  return <span ref={el} />;
};

const Contact: FC<ContactProps> = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white"
    >
      {/* Particles Background */}
      <Particles
        id="particles-contact"
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
            move: { enable: true, speed: 1.2, outModes: "bounce" },
            number: { value: 50 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading with Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <TypedText
              strings={[
                "Let's Build Something Together",
                '<span class="text-indigo-500">Frontend / Next.js / React Specialist</span>',
              ]}
            />
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            I’m eager to collaborate on projects, solve real-world problems, and
            deliver modern, responsive, and high-performing web applications
            that create impact.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-14">
          {/* Left Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Reach out via email, phone, or connect on social media. I typically respond promptly to inquiries and collaboration requests.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-indigo-500 w-6 h-6" />
                  <a
                    href="mailto:hanzalakhan6226@gmail.com"
                    className="font-medium hover:text-indigo-500 transition"
                  >
                    hanzalakhan6226@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-indigo-500 w-6 h-6" />
                  <a
                    href="tel:+923203066496"
                    className="font-medium hover:text-indigo-500 transition"
                  >
                    032-03066496
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-indigo-500 w-6 h-6" />
                  <span className="font-medium">Karachi, Pakistan</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-10">
              <a
                href="https://github.com/"
                target="_blank"
                className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://github.com/aiwithhanzalakhan"
                target="_blank"
                className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition"
              >
                <Linkedin className="w-6 h-6 text-indigo-700" />
              </a>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10"
          >
            <div className="grid gap-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me more about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="flex items-center justify-center gap-2 bg-indigo-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-indigo-900 transition-all"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
