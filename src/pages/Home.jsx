import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Extras from "../components/Extras";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)] print-soft">
      <Navbar />

      {/* Main newspaper stack */}
      <main className="pt-28 md:pt-32 pb-16">
        {/* Front Page */}
        <Hero />

        {/* Page rule */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="rule my-10" />
        </div>

        {/* About Page */}
        <About />

        <div className="max-w-6xl mx-auto px-6">
          <div className="rule my-10" />
        </div>

        {/* Extras Page */}
        <Extras />

        <div className="max-w-6xl mx-auto px-6">
          <div className="rule my-10" />
        </div>

        {/* Contact Page */}
        <Contact />
      </main>

      <footer className="border-t border-[var(--rule)] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-xs md:text-sm text-[var(--ink-soft)] font-serif">
          © {new Date().getFullYear()} TARUS MERCY JEPNG'ETICH. Built with 💙 & Passion using React JS & TailwindCSS.
        </div>
      </footer>
    </div>
  );
}
