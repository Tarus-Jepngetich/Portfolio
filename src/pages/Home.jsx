import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Extras from "../components/Extras";
import Contact from "../components/Contact";
import Certifications from "../components/Certifications";
import ExperiencePractice from"../components/ExperiencePractice";


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

        {/* ExperiencePractice */}
        <ExperiencePractice />

        <div className="max-w-6xl mx-auto px-6">
          <div className="rule my-10" />
        </div>

        {/* Certifications Page */}
        <Certifications />

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

      
    </div>
  );
}
