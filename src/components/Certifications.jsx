import { useEffect, useRef, useState } from "react";

/* TRAINING / CERTIFICATIONS */
const certifications = [
  {
    title: "CCNA Routing & Switching",
    issuer: "CISCO",
    year: "2020",
    category: "Networking",
    file: "/certificates/C2.pdf",
    desc: "Built a strong foundation in networking concepts, routing, switching, and infrastructure fundamentals.",
  },
  {
    title: "Artificial Intelligence Certificate",
    issuer: "National Research Fund",
    year: "2021",
    category: "AI",
    file: "/certificates/C5.pdf",
    desc: "Learned core AI concepts and applied them in a project exploring intelligent solutions in the taxi transport space.",
  },
  {
    title: "Foundations of UX Design",
    issuer: "Google via Coursera",
    year: "2022",
    category: "Design",
    file: "/certificates/C9.pdf",
    desc: "Gained grounding in user-centered design, accessibility, wireframing, and design thinking.",
  },
  {
    title: "Technical Support Fundamentals",
    issuer: "Google via Coursera",
    year: "2022",
    category: "Tech Support",
    file: "/certificates/C10.pdf",
    desc: "Developed troubleshooting skills, system support knowledge, and user-focused technical problem solving.",
  },
  {
    title: "Digital Skills for Africa: Fundamentals of Digital Marketing",
    issuer: "Google via Coursera",
    year: "2022",
    category: "Digital Marketing",
    file: "/certificates/C1.pdf",
    desc: "Learned digital marketing strategy, analytics, online presence, and growth fundamentals.",
  },
  {
    title: "Computer Packages Certificate",
    issuer: "Kenya Institute of Management",
    year: "2018",
    category: "Microsoft Packages",
    file: "/certificates/C6.pdf",
    desc: "Trained in Microsoft Word, Excel, PowerPoint, and foundational office productivity tools.",
  },
];

/* EDUCATION */
const education = [
  {
    title: "Master’s Degree(Ongoing)",
    place: "University of Southern Queensland",
    year: "2024- To Date",
    desc: "Currently advancing my skills in information technology and systems, with a strong focus on applied, real-world problem solving.",
    tag: "Higher Education",
  },
  {
    title: "Bachelor's Degree - Information Technology",
    place: "Kenyatta University",
    year: "2023",
    desc: "This program set the foundation for my journey in IT, with units that strengthened core technical fundamentals and practical understanding..",
    tag: "University",
  },
  {
    title: "Kenya Certificate of Secondary Education (KCSE)",
    place: "Kenya",
    year: "2017",
    desc: "Completed secondary education, building a strong academic foundation that later supported my transition into tech.",
    tag: "Secondary",
  },
  {
    title: "Kenya Certificate of Primary Education (KCPE)",
    place: "Kenya",
    year: "2013",
    desc: "Early academic milestone that marks the beginning of my formal education journey.",
    tag: "Primary",
  },
];

/* LEADERSHIP / INNOVATION / RECOGNITION */
const highlights = [
  {
    title: "Web Development Team Lead — Certificate of Appreciation",
    org: "Google Developer Student Club (Kenyatta University)",
    year: "2021–2022",
    file: "/certificates/C3.pdf",
    desc: "Recognized for leading a web development team, supporting collaboration, mentoring peers, and delivering student-led projects.",
    tag: "Leadership",
  },
  {
    title: "L’Oréal Brandstorm — Finalist (Ranked #4)",
    org: "L’Oréal Brandstorm Competition",
    year: "2022",
     file: "/certificates/C4.pdf",
    desc: "Pitched an AI-driven idea to drive lipstick sales through personalization and customer insights. Our team placed 4th in the finals.",
    tag: "Innovation",
  },
  {
    title: "AI Project (Taxi Transport Use Case)",
    org: "National Research Fund",
    year: "2021",
     file: "/certificates/C5.pdf",
    desc: "Applied AI concepts in a project exploring smarter taxi transport solutions and decision-making.",
    tag: "Project",
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
      { threshold: 0.35 }
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
    const dash = 14;

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
      {/* Masthead */}
      <div className="text-center mb-12">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)]">
          Tarus Gazette • Learning Edition
        </p>
        <h2 className="font-serif text-4xl md:text-5xl mb-3">The Learning Years</h2>
        <p className="font-serif text-[var(--ink-soft)] max-w-3xl mx-auto">
          Let me take you through where my tech journey began — from my first steps into
          technology to where I am today, shaped by continuous training, hands-on learning,
          and formal qualifications.
        </p>
      </div>

      {/* SVG Subway Path (behind content) */}
      <svg
        className="subway-svg pointer-events-none"
        viewBox="0 0 300 1800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          id="subway-path"
          d="M150 0
             C80 160, 220 320, 150 480
             C80 640, 220 800, 150 960
             C80 1120, 220 1280, 150 1440
             C80 1600, 220 1760, 150 1920"
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

      {/* ONE-PAGE SPREAD */}
      <div className="subway-track relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* LEFT — Education + Training */}
          <section>
            <div className="mb-4">
              <h3 className="font-serif text-2xl">Campus Bulletin</h3>
              <div className="rule my-3" />
              <p className="text-sm text-[var(--ink-soft)] font-serif">
                Formal education and the milestones that built my foundation.
              </p>
            </div>

            {/* Education cards */}
            <div className="space-y-4 mb-10">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  ref={(el) => (nodesRef.current[certifications.length + highlights.length + idx] = el)}
                  className="rounded-xl border border-[var(--rule)] bg-[var(--peach)]/20 p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-[15px] leading-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[var(--ink-soft)]">
                        {item.place} • {item.year}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs mt-2 text-[var(--ink)]/90">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <h3 className="font-serif text-2xl">Training Ledger</h3>
              <div className="rule my-3" />
              <p className="text-sm text-[var(--ink-soft)] font-serif">
                Certifications and short programs that sharpened my toolkit.
              </p>
            </div>

            {/* Training cards (keep your aesthetic via mini-card, but taller + full text) */}
            <div className="grid grid-cols-1 gap-5">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  ref={(el) => (nodesRef.current[i] = el)}
                  className="mini-card mini-card--tall"
                >
                  <div className="mini-dot" />

                  <div className="mini-body">
                    <h3 className="font-serif text-[15px] leading-tight mb-1">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-[var(--ink-soft)] mb-2">
                      {cert.issuer} • {cert.year}
                    </p>

                    {/* FULL TEXT (no line clamp) */}
                    <p className="text-xs mb-2">{cert.desc}</p>
                  </div>

                  <div className="mini-footer flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
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
          </section>

          {/* RIGHT — Leadership / Innovation / Recognition */}
          <section>
            <div className="mb-4">
              <h3 className="font-serif text-2xl">Byline & Honors</h3>
              <div className="rule my-3" />
              <p className="text-sm text-[var(--ink-soft)] font-serif">
                Where learning met real-world impact — leadership, innovation, and recognition.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((h, idx) => {
                const nodeIndex = certifications.length + idx;
                return (
                  <div
                    key={idx}
                    ref={(el) => (nodesRef.current[nodeIndex] = el)}
                    className="rounded-xl border border-[var(--rule)] bg-[var(--mint)]/18 p-5 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-serif text-[15px] leading-tight mb-1">
                          {h.title}
                        </h4>
                        <p className="text-xs text-[var(--ink-soft)]">
                          {h.org} • {h.year}
                        </p>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                        {h.tag}
                      </span>
                    </div>

                    <p className="text-xs mt-2 text-[var(--ink)]/90">{h.desc}</p>

                    <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
  <span>{h.tag}</span>

  <button
    type="button"
    className="underline decoration-[var(--mint)] underline-offset-4 hover:opacity-80 transition"
    onClick={() => {
      /* optional: later link to case study / modal / section */
    }}
  >
    View ↗
  </button>
</div>

                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Editor’s Note — Footer (ALL THE WAY BOTTOM) */}
      <div className="mt-16 pt-8 border-t border-[var(--rule)]">
        <div className="max-w-3xl mx-auto text-center bg-[var(--peach)]/18 p-6 rounded-xl border border-[var(--rule)] shadow-sm">
          <p className="font-serif text-lg leading-snug">
            “Education gave me structure. Leadership and innovation gave it meaning.”
          </p>
          <div className="rule my-4" />
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--ink-soft)]">
            Editor’s Note
          </p>
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
              <div className="text-sm font-serif text-[var(--ink)]">{activeCert.title}</div>
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
