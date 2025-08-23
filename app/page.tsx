import Image from "next/image";
import {Header} from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import About from "./components/main/About";
import Skills from "./components/main/Skills";
import Projects from "./components/main/Projects";
import Certifications from "./components/main/Certifications";
import Contact from "./components/main/Contact";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light">
    <div className="min-h-screen bg-background animate-theme-transition">
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
    </ThemeProvider>
  );
}
