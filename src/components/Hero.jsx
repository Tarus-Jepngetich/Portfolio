import { Link } from "react-router-dom";
import Landing_Page from "../assets/Landing_Page.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-white border border-[var(--rule)] shadow-[0_18px_50px_rgba(0,0,0,0.10)] overflow-hidden "
    >
      {/* Newspaper page frame */}
      <div className="bg-white border border-[var(--rule)] w-full max-w-6xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] relative overflow-hidden min-h-[70vh] pb-20">

        {/* Top rule + date strip */}
        <div className="px-6 py-3 border-b border-[var(--rule)] flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--ink-soft)]">
          <span className="uppercase tracking-[0.22em]">The Tarus Gazette</span>
          <span className="px-2 py-1 rounded-full bg-[var(--mint)]/60 border border-[var(--rule)]">
            Portfolio Edition
          </span>
          <span className="uppercase tracking-[0.22em]">Brisbane • Nairobi</span>
        </div>

        {/* Main front page layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
          {/* Left: lead story */}
          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--ink-soft)] mb-3">
              MERN Developer • UI/UX • Artist
            </p>

            <h1 className="font-serif text-[var(--ink)] text-4xl md:text-5xl leading-tight mb-4">
              Hi, I’m Tarus — I design & build digital experiences.
            </h1>

            <p className="font-serif text-[var(--ink-soft)] text-base md:text-lg mb-6">
              I blend clean code, thoughtful interfaces, and visual storytelling to create websites
              and products that feel intuitive and human.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
  href="https://github.com/Tarus-Jepngetich"
  target="_blank"
  rel="noreferrer"
  className="px-6 py-3 rounded-none border border-[var(--ink)] bg-[var(--ink)] text-white text-sm font-semibold hover:opacity-90 transition"
>
  View GitHub
</a>
   <a
  href="https://github.com/Tarus-Jepngetich"
  target="_blank"
  rel="noreferrer"
  className="px-6 py-3 rounded-none border border-[var(--ink)] text-sm font-semibold text-[var(--ink)] hover:bg-[var(--peach)]/60 transition"
>
  View Resume
</a>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-none border border-[var(--ink)] text-sm font-semibold text-[var(--ink)] hover:bg-[var(--peach)]/60 transition"
              >
                Download Resume
              </a>
            </div>

           {/* Pull quote */}
<div className="mt-8 border-l-4 border-[var(--mint)] pl-4">
  <p className="font-serif italic text-[var(--ink)]">
    “I love turning messy ideas into simple, grounded experiences.”
  </p>
</div>

{/* Now & Next — stays inside the left column */}
<div className="mt-6 border-t border-[var(--rule)] pt-5">
  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--ink-soft)] mb-3">
    Now & Next
  </p></div>

  <div className="space-y-3">
    <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
      <span className="font-medium text-[var(--ink)]">Currently:</span> Polishing my DSA,
      writing articles as I learn, and deep-diving into{" "}
      <span className="italic">MongoDB</span> & <span className="italic">Node.js</span>.
    </p>

    <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
      <span className="font-medium text-[var(--ink)]">Eventually:</span> Pivoting toward{" "}
      <span className="italic">data analysis</span> — purely out of curiosity and love for
      patterns.
    </p>
  </div>
</div>



          {/* Right: image “front page photo” */}
          <div className="md:col-span-5">
           <div className="overflow-hidden">

              <img
                src={Landing_Page}
                alt="Tarus Gazette front image"
                className="w-full h-[280px] md:h-[420px] object-cover"
              />
            </div>

            <div className="mt-3 text-xs text-[var(--ink-soft)] font-serif">
              <span className="uppercase tracking-[0.2em]">Front Photo:</span>{" "}
              Portfolio cover illustration
            </div>

            {/* A small pastel “stamp” */}
            <div className="mt-4 inline-block px-3 py-2 border border-[var(--rule)] bg-[var(--peach)]/60 text-xs uppercase tracking-[0.2em] text-[var(--ink)]">
              Editor’s Note
            </div>
            <p className="mt-2 text-sm text-[var(--ink-soft)] font-serif">
              Explore sections — projects in GitHub, case studies,ui/ux, art, through the portfolio section.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
}
