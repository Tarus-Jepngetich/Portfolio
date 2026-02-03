import { useEffect, useRef, useState } from "react";

/* TRAINING / CERTIFICATIONS */
const certifications = [
  {
    title: "Computer Packages Certificate",
    issuer: "Kenya Institute of Management",
    year: "2018",
    category: "Microsoft Packages",
    file: "/certificates/C6.pdf",
    desc: "Trained in Microsoft Word, Excel, PowerPoint, and foundational office productivity tools.",
  },
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
];

/* EDUCATION */
const education = [
  {
    title: "Master’s Degree (Ongoing)",
    place: "University of Southern Queensland",
    year: "2024 – To Date",
    desc: "Currently advancing my skills in information technology and systems, with a strong focus on applied, real-world problem solving.",
    tag: "Higher Education",
  },
  {
    title: "Bachelor's Degree – Information Technology",
    place: "Kenyatta University",
    year: "2023",
    desc: "This program set the foundation for my journey in IT, with units that strengthened core technical fundamentals and practical understanding.",
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
    desc: "Pitched an AI-driven idea to drive lipstick sales through personalization and customer insights.",
    tag: "Innovation",
  },
  {
    title: "AI Project (Taxi Transport Use Case)",
    org: "National Research Fund",
    year: "2021",
    file: "/certificates/C5.pdf",
    desc: "Applied AI concepts in a project exploring smarter taxi transport solutions.",
    tag: "Project",
  },
];

export default function Certifications() {
  const wrapRef = useRef(null);
  const nodesRef = useRef([]);
  const [activeCert, setActiveCert] = useState(null);

  /* Reveal animation (needed because .mini-card starts with opacity:0 in your CSS) */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("active-node");
        }),
      { threshold: 0.18 }
    );

    nodesRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ✅ Hide Navbar when modal is open */
  useEffect(() => {
    if (activeCert) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");

    return () => document.body.classList.remove("modal-open");
  }, [activeCert]);

  return (
    <div
      ref={wrapRef}
      className="subway-wrap relative bg-white border border-[var(--rule)] shadow-[0_18px_50px_rgba(0,0,0,0.10)] overflow-hidden p-8 md:p-14"
    >
      {/* Masthead */}
      <div className="text-center mb-14">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)]">
          Tarus Gazette • Learning Edition
        </p>
        <h2 className="font-serif text-4xl md:text-5xl mb-3">
          The Learning Years
        </h2>
        <p className="font-serif text-[var(--ink-soft)] max-w-3xl mx-auto">
          Let me take you through where my tech journey began — from my first steps into
          technology to where I am today.
        </p>
      </div>

      {/* ONE-PAGE SPREAD */}
      <div className="subway-track relative z-10">
        {/* ROW 1 — Education + Honors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Campus Bulletin */}
          <section>
            <h3 className="font-serif text-2xl">Campus Bulletin</h3>
            <div className="rule my-3" />
            <div className="space-y-4">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  ref={(el) => (nodesRef.current[idx] = el)}
                  className="rounded-xl border border-[var(--rule)] bg-[var(--peach)]/20 p-5 shadow-sm"
                >
                  <div className="flex justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-[15px]">{item.title}</h4>
                      <p className="text-xs text-[var(--ink-soft)]">
                        {item.place} • {item.year}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Byline & Honors */}
          <section>
            <h3 className="font-serif text-2xl">Byline & Honors</h3>
            <div className="rule my-3" />
            <div className="space-y-4">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  ref={(el) => (nodesRef.current[education.length + idx] = el)}
                  className="rounded-xl border border-[var(--rule)] bg-[var(--mint)]/18 p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-[15px]">{h.title}</h4>
                      <p className="text-xs text-[var(--ink-soft)]">
                        {h.org} • {h.year}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                      {h.tag}
                    </span>
                  </div>

                  <p className="text-xs mt-2">{h.desc}</p>

                  <div className="mt-3 text-right">
                    <button
                      type="button"
                      onClick={() => setActiveCert(h)}
                      className="text-[10px] uppercase tracking-[0.22em] underline decoration-[var(--mint)] underline-offset-4 hover:opacity-80 transition"
                    >
                      View ↗
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ROW 2 — Training Ledger Heading */}
        <div className="mt-16 text-center">
          <h3 className="font-serif text-3xl md:text-4xl">Training Ledger</h3>
          <div className="rule my-4" />
          <p className="text-sm text-[var(--ink-soft)] font-serif max-w-2xl mx-auto">
            Certifications and short programs that sharpened my toolkit.
          </p>
        </div>

        {/* ROW 3 — Training Ledger Items */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              ref={(el) =>
                (nodesRef.current[education.length + highlights.length + i] = el)
              }
              className="mini-card mini-card--tall"
            >
              <div className="mini-dot" />

              <h4 className="font-serif text-[15px] mb-1">{cert.title}</h4>
              <p className="text-xs text-[var(--ink-soft)] mb-2">
                {cert.issuer} • {cert.year}
              </p>
              <p className="text-xs mb-3">{cert.desc}</p>

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
