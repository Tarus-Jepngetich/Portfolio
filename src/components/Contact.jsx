import Flower from "../assets/Flower.png";

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--paper)] print-soft px-6 py-16">
      {/* Newspaper page frame */}
      <div className="relative max-w-6xl mx-auto bg-white border border-[var(--rule)] shadow-[0_18px_50px_rgba(0,0,0,0.10)] overflow-hidden">
        {/* Decorative art (inside page, mid-left & mid-right) */}
        <div className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-90">
          <img src={Flower} alt="Decorative art" className="w-36 float-slow" />
        </div>
        <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-90">
          <img
            src={Flower}
            alt="Decorative art mirrored"
            className="w-36 float-slow-alt scale-x-[-1]"
          />
        </div>

        {/* Page header strip */}
        <div className="px-6 py-3 border-b border-[var(--rule)] flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)]">
            Contact Desk
          </span>

          {/* Pastel stamps */}
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-[11px] uppercase tracking-[0.22em] border border-[var(--rule)] bg-[var(--mint)]/60 text-[var(--ink)]">
              Collaborate
            </span>
            <span className="px-3 py-1 text-[11px] uppercase tracking-[0.22em] border border-[var(--rule)] bg-[var(--peach)]/60 text-[var(--ink)]">
              Say Hello
            </span>
          </div>

          <span className="text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)]">
            The Tarus Gazette
          </span>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10">
          <h2 className="font-serif text-[var(--ink)] text-4xl md:text-5xl leading-tight mb-4 text-center">
            Get in Touch 💌
          </h2>

          <p className="font-serif text-center text-[var(--ink-soft)] max-w-3xl mx-auto mb-10">
            Let’s collaborate, connect, or just share ideas — I’d love to hear from you.
          </p>

          {/* Newspaper-style layout: sidebar + form */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left column: contact details (like classifieds) */}
            <aside className="md:col-span-4">
              <div className="border border-[var(--rule)] p-5">
                <h3 className="font-serif text-xl text-[var(--ink)] mb-2">
                  Details
                </h3>
                <div className="rule my-3" />

                <ul className="font-serif text-sm text-[var(--ink-soft)] space-y-3">
                  <li>
                    <span className="uppercase tracking-[0.18em] text-[11px] text-[var(--ink-soft)]">
                      Email
                    </span>
                    <div className="text-[var(--ink)] font-semibold">
                      yourname@email.com
                    </div>
                  </li>

                  <li>
                    <span className="uppercase tracking-[0.18em] text-[11px] text-[var(--ink-soft)]">
                      Location
                    </span>
                    <div className="text-[var(--ink)] font-semibold">
                      Brisbane • Australia
                    </div>
                  </li>

                  <li>
                    <span className="uppercase tracking-[0.18em] text-[11px] text-[var(--ink-soft)]">
                      Links
                    </span>
                    <div className="flex flex-col gap-1">
                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-[var(--mint)] underline-offset-4 hover:opacity-80"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-[var(--peach)] underline-offset-4 hover:opacity-80"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Small pull quote */}
              <div className="mt-6 border-l-4 border-[var(--peach)] pl-4">
                <p className="font-serif italic text-[var(--ink)]">
                  “Open to internships, freelance work, and meaningful collaborations.”
                </p>
              </div>
            </aside>

            {/* Right column: form */}
            <div className="md:col-span-8">
              <form className="border border-[var(--rule)] p-6 md:p-8 bg-[var(--paper)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                      Your Name
                    </span>
                    <input
                      type="text"
                      placeholder="Tarus Gazette Reader"
                      className="px-4 py-3 border border-[var(--rule)] bg-white text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--mint)]"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                      Your Email
                    </span>
                    <input
                      type="email"
                      placeholder="reader@email.com"
                      className="px-4 py-3 border border-[var(--rule)] bg-white text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--mint)]"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 mt-4">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Message
                  </span>
                  <textarea
                    rows="5"
                    placeholder="Write your message here..."
                    className="px-4 py-3 border border-[var(--rule)] bg-white text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--peach)]"
                  />
                </label>

                <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
                  <span className="text-xs text-[var(--ink-soft)] font-serif">
                    Response time: usually within 24–48 hours.
                  </span>

                  <button
                    type="submit"
                    className="px-6 py-3 border border-[var(--ink)] bg-[var(--ink)] text-white text-sm font-semibold hover:opacity-90 transition"
                  >
                    Send Message ✉️
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom rule + page number */}
          <div className="mt-10">
            <div className="rule" />
            <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)]">
              <span>Filed Under: Contact</span>
              <span>Page 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
