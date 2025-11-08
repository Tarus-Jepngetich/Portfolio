import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WebProjects from "./components/WebProjects";
import UIDesigns from "./components/UIDesigns";
import ArtGallery from "./components/ArtGallery";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="text-slate-100 font-sans scroll-smooth  bg-[#FFE3C7] ">
      <Navbar />
      <Hero />
      <WebProjects />
      <UIDesigns />
      <ArtGallery />
      <About />
      <Contact />

      <footer className="text-center py-6 text-sm text-slate-300 bg-[#5A3B1E]/80">
        © {new Date().getFullYear()} TARUS MERCY JEPNG'ETICH. Built with 💙 & Passion using React JS & TailwindCSS.
      </footer>
    </div>
  );
}
