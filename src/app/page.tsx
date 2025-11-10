import Image from "next/image";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Project";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Projects/>
    </>
  );
}
