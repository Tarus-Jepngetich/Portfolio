import { useEffect, useRef, useState } from "react";

const certifications = [
  {
    title: "Google UX Design Certificate",
    issuer: "Google",
    year: "2024",
    category: "UI/UX",
    file: "/certificates/google-ux.pdf",
    desc: "Human-centered design, usability testing, and design systems.",
  },
  {
    title: "Frontend Development with React",
    issuer: "Meta",
    year: "2024",
    category: "Web Development",
    file: "/certificates/react-meta.pdf",
    desc: "Modern React, hooks, component architecture, and performance.",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2025",
    category: "Programming",
    file: "/certificates/js-dsa.pdf",
    desc: "Core problem-solving, DSA patterns, and algorithmic thinking.",
  },
  {
    title: "AI Foundations",
    issuer: "IBM",
    year: "2025",
    category: "AI",
    file: "/certificates/ai-foundations.pdf",
    desc: "Machine learning basics, ethics, and applied AI concepts.",
  },
];

export default function Certifications() {
  const nodesRef = useRef([]);
  const wrapRef = useRef(null);
  const [activeCert, setActiveCert] = useState(null);

  /* Reveal animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("active-node");
        }),
      { threshold: 0.4 }
    );

    nodesRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Scroll-following glowing path */
  useEffect(() => {
    const path = document.getElementById("subway-path");
    const wrap = wrapRef.current;
    if (!path || !wrap) return;

    const length = path.getTotalLength();
    const dash = 14; // small ink start

    path.style.strokeDasharray = `${dash} ${length}`;
    path.style.strokeDashoffset = `${length}`;

    const clamp = (n) => Math.max(0, Math.min(1, n));

    const onScroll = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;

      const total = rect.height + vh;
      const passed = vh - rect.top;
      const progress = clamp(passed / total);

      path.style.strokeDashoffset = `${length - length * progress}`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="subway-wrap relative bg-white border border-[var(--rule)] shadow-[0_18px_50px_rgba(0,0,0,0.10)] overflow-hidden p-8 md:p-14"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="font-serif text-4xl md:text-5xl mb-3">
          Certifications Journey
        </h2>
        <p className="font-serif text-[var(--ink-soft)] max-w-2xl mx-auto">
          A learning path mapped like a subway — winding through curiosity,
          discipline, and growth.
        </p>
      </div>

      {/* SVG Subway Path */}
      <svg
        className="subway-svg"
        viewBox="0 0 300 1600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          id="subway-path"
          d="M150 0
             C80 150, 220 300, 150 450
             C80 600, 220 750, 150 900
             C80 1050, 220 1200, 150 1350
             C80 1500, 220 1650, 150 1800"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--mint)" />
            <stop offset="100%" stopColor="var(--peach)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Grid */}
      <div className="subway-track">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {certifications.map((cert, i) => (
            <div
              key={i}
              ref={(el) => (nodesRef.current[i] = el)}
              className="mini-card"
            >
              <div className="mini-dot" />

              <h3 className="font-serif text-[15px] leading-tight mb-1">
                {cert.title}
              </h3>

              <p className="text-xs text-[var(--ink-soft)] mb-1">
                {cert.issuer} • {cert.year}
              </p>

              <p className="text-xs line-clamp-2 mb-2">{cert.desc}</p>

              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                <span>{cert.category}</span>
                <button
                  type="button"
                  onClick={() => setActiveCert(cert)}
                  className="underline decoration-[var(--mint)] underline-offset-4 hover:opacity-80 transition"
                >
                  View ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onMouseDown={(e) => e.target === e.currentTarget && setActiveCert(null)}
        >
          <div className="relative bg-white w-full max-w-5xl h-[86vh] shadow-[0_25px_80px_rgba(0,0,0,0.35)] border border-[var(--rule)] overflow-hidden">
            <div className="px-5 py-3 border-b border-[var(--rule)] flex items-center justify-between">
              <div className="text-sm font-serif text-[var(--ink)]">
                {activeCert.title}
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="px-3 py-1 border border-[var(--rule)] text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--mint)]/40 transition"
              >
                Close ✕
              </button>
            </div>

            <iframe
              src={activeCert.file}
              title="Certificate Preview"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
