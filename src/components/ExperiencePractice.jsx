export default function ExperiencePractice() {
  return (
    <section className=" page-sheet p-8 md:p-14"  style={{ background: "#ffffff" }}>
       
      {/* Masthead */}
      <div className=" text-center mb-14">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)]">
          Tarus Gazette • Field Report
        </p>
        <h2 className="font-serif text-4xl md:text-5xl mb-3">
          Experience & Practice
        </h2>
        <p className="font-serif text-[var(--ink-soft)] max-w-3xl mx-auto">
          Where all learning moved into real-world responsibility.
        </p>
      </div>

      {/* Timeline / Year Gutter */}
      <div className="max-w-5xl  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-10">
          {/* LEFT GUTTER */}
<aside className="hidden md:block">
  <div className="sticky top-24">
    <div className="rounded-xl border border-[var(--rule)] bg-[var(--paper)] p-5 shadow-sm">
      <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--ink-soft)]">
        Filed Under
      </p>

      <div className="rule my-3" />

      <div className="space-y-4 text-sm text-[var(--ink-soft)] font-serif">
        <div>
          <p className="uppercase text-[10px] tracking-[0.22em] mb-1">
            Languages
          </p>
          <ul className="space-y-1">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div>
          <p className="uppercase text-[10px] tracking-[0.22em] mb-1">
            Frameworks & Libraries
          </p>
          <ul className="space-y-1">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Material UI</li>
            <li>Pandas</li>
            <li>NumPy</li>
          </ul>
        </div>

        <div>
          <p className="uppercase text-[10px] tracking-[0.22em] mb-1">
            Design & Creative
          </p>
          <ul className="space-y-1">
            <li>Figma</li>
            <li>Adobe Creative Suite</li>
            <li>Procreate</li>
          </ul>
        </div>

        <div>
          <p className="uppercase text-[10px] tracking-[0.22em] mb-1">
            Data & AI
          </p>
          <ul className="space-y-1">
            <li>TensorFlow</li>
            <li>Jupyter Notebook</li>
          </ul>
        </div>

        <div>
          <p className="uppercase text-[10px] tracking-[0.22em] mb-1">
            Tools & Workflow
          </p>
          <ul className="space-y-1">
            <li>Git (Version Control)</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>

        <div>
          <p className="uppercase text-[10px] tracking-[0.22em] mb-1">
            Systems & Networking
          </p>
          <ul className="space-y-1">
            <li>MongoDB</li>
            <li>Networking Fundamentals</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</aside>


          {/* RIGHT CONTENT */}
          <div className="space-y-10">
            {/* 2023–2024 */}
            <article className="rounded-xl border border-[var(--rule)] bg-[var(--mint)]/18 p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    2023 – 2024 • Startup Role
                  </p>
                  <h3 className="font-serif text-2xl mt-1">
                    IT Support & Digital Media Lead
                  </h3>
                  <p className="text-sm text-[var(--ink-soft)]">
                    Educational Hub Zone
                  </p>
                </div>

                <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)] self-start border border-[var(--rule)] px-3 py-1 rounded-full bg-white/40">
                  Primary IT Role
                </span>
              </div>

              <div className="rule my-5" />

              <p className="text-sm leading-relaxed mb-4">
                I worked as the primary IT and digital media lead at a startup agency, supporting
                both internal technical infrastructure and the company’s public-facing digital presence.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Set up and managed computer systems and internal IT infrastructure</li>
                <li>Acted as the main IT support point, handling troubleshooting and system maintenance</li>
                <li>Managed the company’s social media accounts and created content</li>
                <li>Designed banners, posters, and marketing materials</li>
                <li>Created and delivered the company logo and brand visuals</li>
              </ul>

              <p className="text-sm mt-5 italic text-[var(--ink-soft)]">
                Milestone: owned both the technical setup and the brand’s digital presence end-to-end.
              </p>
            </article>
            {/* 2022 */}
            <article className="rounded-xl border border-[var(--rule)] bg-[var(--peach)]/18 p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    2022 • 3-Month Internship
                  </p>
                  <h3 className="font-serif text-2xl mt-1">
                    IT Support & Graphic Design Intern
                  </h3>
                  <p className="text-sm text-[var(--ink-soft)]">
                    Kenyatta University Teaching, Referral & Research Hospital (KUTRRH)
                  </p>
                </div>

                <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)] self-start border border-[var(--rule)] px-3 py-1 rounded-full bg-white/40">
                  Field Placement
                </span>
              </div>

              <div className="rule my-5" />

              <p className="text-sm leading-relaxed mb-4">
                I completed a supervised internship within the IT Support and Graphic Design
                department, contributing to both technical operations and institutional design
                needs in a healthcare environment.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Supported IT operations and technical troubleshooting within departmental systems</li>
                <li>Worked alongside the Graphic Design department on official institutional materials</li>
                <li>
                  Designed and produced official ID cards used during the <strong>2022 East Africa Cancer Health Conference</strong> hosted at KUTRRH
                </li>
                <li>All work was reviewed, supervised, and formally approved before deployment</li>
              </ul>

              <p className="text-sm mt-5 italic text-[var(--ink-soft)]">
                Milestone: delivered approved, production-ready ID cards for an official healthcare conference.
              </p>
            </article>

            
          </div>
        </div>
      </div>

      {/* Editorial Footer */}
      <div className="mt-16 pt-8 border-t border-[var(--rule)] text-center">
        <p className="font-serif text-lg">
          “Practice is where knowledge learns to stand on its own.”
        </p>
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--ink-soft)] mt-2">
          Editor’s Note
        </p>
      </div>
    </section>
  );
}
