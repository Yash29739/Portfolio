import Image from "next/image";
import {Header} from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { ThemeProvider } from "./components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light">
    <div className="min-h-screen bg-background animate-theme-transition">
      <Header/>
        <main>
          <Main/>
        </main>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}
