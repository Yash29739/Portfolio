import Image from "next/image";
import {Header} from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import About from "./components/main/About";
import Skills from "./components/main/Skills";
import Projects from "./components/main/Projects";
import Certifications from "./components/main/Certifications";
import Contact from "./components/main/Contact";
import { Snowflakes } from "./components/SnowFlakes";

export default function Home() {
  return (
    
    <div className="min-h-screen bg-background animate-theme-transition relative">
      <Snowflakes/>
      <div className="relative z-10">
      <Header/>
        <main>
          <About/>
          <Skills/>
          <Projects/>
          <Certifications/>
          <Contact/>
        </main>
      <Footer/>
      </div>
    </div>
  );
}
