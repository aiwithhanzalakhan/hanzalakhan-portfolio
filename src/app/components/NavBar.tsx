// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/#about" },
//   { name: "Projects", href: "/#projects" },
//   { name: "Skills", href: "/#skills" },
//   { name: "Contact", href: "/#contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-black/40 backdrop-blur-xl shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

//         {/* LOGO */}
//         <Link
//           href="/"
//           className="text-2xl font-bold tracking-wide text-indigo-400"
//         >
//           Hanzala.dev
//         </Link>

//         {/* DESKTOP MENU */}
//         <ul className="hidden md:flex items-center gap-8 font-medium">
//           {navLinks.map((link, i) => (
//             <motion.li
//               key={link.name}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               className="relative group"
//             >
//               <Link
//                 href={link.href}
//                 className="text-gray-200 hover:text-indigo-400 transition-colors"
//               >
//                 {link.name}
//               </Link>

//               {/* underline */}
//               <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
//             </motion.li>
//           ))}
//         </ul>

//         {/* MOBILE BUTTON */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white"
//         >
//           {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-black/70 backdrop-blur-xl"
//           >
//             <ul className="flex flex-col items-center gap-6 py-8 text-gray-200 font-medium">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className="text-lg hover:text-indigo-400 transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }
"use client";

import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // GLOBAL scroll
  const { scrollY } = useScroll();

  // Navbar background appears after scroll
  const background = useTransform(
    scrollY,
    [0, 120],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.55)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 120],
    ["blur(0px)", "blur(16px)"]
  );

  return (
    <motion.nav
      style={{ background, backdropFilter: backdropBlur }}
      className="fixed top-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-indigo-400">
          Hanzala.dev
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                href={link.href}
                className="text-gray-200 hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </Link>
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </li>
          ))}
        </ul>

        {/* MOBILE */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/70 backdrop-blur-xl"
          >
            <ul className="flex flex-col items-center gap-6 py-8 text-gray-200">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg hover:text-indigo-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
