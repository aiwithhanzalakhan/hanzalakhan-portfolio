import Image from "next/image";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Projects/>
    <Skill/>
    <Contact/>
    <Footer/>
    </>
  );
}
