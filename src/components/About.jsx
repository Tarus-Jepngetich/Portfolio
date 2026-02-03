import Leaf from "../assets/Leaf.png";
import L2 from "../assets/L2.png";

export default function About() {
  return (
    <div className="relative bg-white border border-[var(--rule)] shadow-[0_18px_50px_rgba(0,0,0,0.10)] overflow-hidden">
      {/* Decorative PNGs (inside this page only) */}
      <div className="hidden md:block absolute left-8 top-8 pointer-events-none opacity-90">
        <img src={L2} alt="Decorative art" className="w-32 float-slow" />
      </div>
      <div className="hidden md:block absolute right-8 bottom-8 pointer-events-none opacity-90">
        <img
          src={Leaf}
          alt="Decorative art"
          className="w-32 float-slow-alt scale-x-[-1]"
        />
      </div>

      {/* Page header strip */}
      <div className="px-6 py-3 border-b border-[var(--rule)] flex flex-wrap items-center justify-between gap-2">
        <span className="text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)]">
          Profile
        </span>

        {/* Pastel stamps */}
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 text-[11px] uppercase tracking-[0.22em] border border-[var(--rule)] bg-[var(--mint)]/60 text-[var(--ink)]">
            Web Dev
          </span>
          <span className="px-3 py-1 text-[11px] uppercase tracking-[0.22em] border border-[var(--rule)] bg-[var(--peach)]/60 text-[var(--ink)]">
            UI/UX + Art
          </span>
        </div>

        <span className="text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)]">
          The Tarus Gazette
        </span>
      </div>

      {/* Content */}
      <div className="p-6 md:p-10">
        <h2 className="font-serif text-[var(--ink)] text-4xl md:text-5xl leading-tight mb-4 text-center">
          About Me 👋🏾
        </h2>

        <p className="font-serif text-center text-[var(--ink-soft)] max-w-2xl mx-auto mb-10">
          I’m a multi-passionate builder at heart — majoring in web development, deeply curious about UI/UX and data analysis, 
          and an art hobbyist who loves turning ideas into visuals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="border border-[var(--rule)] p-5">
              <h3 className="font-serif text-xl text-[var(--ink)] mb-2">
                Quick Facts
              </h3>
              <div className="rule my-3" />
              <ul className="font-serif text-sm text-[var(--ink-soft)] space-y-2">
                <li>
                  <span className="font-semibold text-[var(--ink)]">Name:</span>{" "}
                  Tarus Mercy Jepng’etich
                </li>
                <li>
                  <span className="font-semibold text-[var(--ink)]">Focus:</span>{" "}
                  MERN • Design • UI Systems
                </li>
                <li>
                  <span className="font-semibold text-[var(--ink)]">Style:</span>{" "}
                  Minimal, warm, editorial
                </li>
                <li>
                  <span className="font-semibold text-[var(--ink)]">Also:</span>{" "}
                  Writing, illustration, visual journals
                </li>
              </ul>
            </div>

            <div className="mt-6 border-l-4 border-[var(--mint)] pl-4">
              <p className="font-serif italic text-[var(--ink)]">
                “I love turning messy ideas into simple, grounded experiences.”
              </p>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="columns-1 md:columns-2 gap-10 font-serif text-[var(--ink)] leading-relaxed">
              <p className="mb-4">
                I’m Tarus — a web developer who finds beauty in structure, 
                simplicity, and creativity. I enjoy building
                interfaces that feel clear and calm, but also human.
              </p>

              <p className="mb-4">
                My work blends clean code with expressive visuals. Whether I’m
                designing a user flow, prototyping in Figma, or building a React
                component, I care deeply about hierarchy, spacing, and the
                emotional tone of a product.
              </p>

              <p className="mb-4">
                Outside of tech, I sketch and illustrate — and I write small
                reflections in my journal. Those “writting's” keep my work warm and
                intentional.
              </p>

              <p className="mb-4">
                This portfolio is built like a newspaper on purpose: I want it
                to feel editorial, timeless, and crafted — the same way I aim to
                craft the experiences I design.
              </p>
            </div>

            <div className="mt-8">
              <div className="rule" />
              <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)]">
                <span>Filed Under: Profile</span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
