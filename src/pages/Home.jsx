import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Extras from "../components/Extras";
import Contact from "../components/Contact";
import Cloud from "../assets/Cloud.png";

export default function Home() {
  return (
    <div className="relative text-slate-100 font-sans scroll-smooth">
      {/* Background tint layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#FFE3C7]/70 z-0"></div>

      {/* Cloud image ABOVE the tint but BELOW content */}
      <img
        src={Cloud}
        alt="Cloud background"
        className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-95"
      />

      {/* Foreground content */}
      <div className="relative z-20">
        <Navbar />
        <Hero />
        <About />
        <Extras />
        <Contact />

        <footer className="text-center py-6 text-sm text-slate-300 bg-[#5A3B1E]/80">
          © {new Date().getFullYear()} TARUS MERCY JEPNG'ETICH. Built with 💙 & Passion using React JS & TailwindCSS.
        </footer>
      </div>
    </div>
  );
}
