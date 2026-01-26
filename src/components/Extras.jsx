import L6 from "../assets/L6.png";
import M1 from "../assets/M1.jpeg";
import M2 from "../assets/M2.jpeg";
import M3 from "../assets/M3.jpeg";

const extras = [
  {
    img: M3,
    link: "https://medium.com/@mercytarus644/goodbye-sdlc-hello-ai-dlc-the-new-era-of-building-software-2415b8302973",
    alt: "AI-DLC article cover",
  },
  {
    img: M2,
    link: "https://medium.com/@mercytarus644/typography-the-key-to-effective-design-and-clear-communication-3bbedc1c295a",
    alt: "Typography article cover",
  },
  {
    img: M1,
    link: "https://medium.com/@mercytarus644/resolve-your-mess-a-letter-to-a-version-of-myself-that-gave-up-too-soon-3001144acf81",
    alt: "Resolve Your Mess article cover",
  },
];

// optional tiny fallback if any image fails to load (transparent PNG data URI)
const FALLBACK =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAklEQVR4AewaftIAAAQMSURBVO3BQY4CMQwEwVb//0oYQ1Fh5JY1l8G8Iu8+AAAAAAAAgN8F3gAAAPCw5QwAAAAAAABwT4cBAAAAAAAA4J8BAAAAAAAA4J8BAAAAAAAA4J8BAP0dY0m6o1mUAAAAAElFTkSuQmCC";

export default function Extras() {
  return (
    <section id="extras" className="bg-[var(--paper)] print-soft px-6 py-16">
      {/* Newspaper page frame */}
      <div className="relative max-w-6xl mx-auto bg-white border border-[var(--rule)] shadow-[0_18px_50px_rgba(0,0,0,0.10)] overflow-hidden">
       

        {/* Page header strip */}
        <div className="px-6 py-3 border-b border-[var(--rule)] flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)]">
            Opinion & Notes
          </span>

          {/* Pastel stamps */}
          <div className="flex items-center gap-2">
            <a
  href="https://medium.com/@mercytarus644"
  target="_blank"
  rel="noreferrer"
  className="px-3 py-1 text-[11px] uppercase tracking-[0.22em] border border-[var(--rule)] bg-[var(--mint)]/60 text-[var(--ink)] hover:opacity-80 transition"
  aria-label="Visit my Medium profile"
>
  Follow on Medium↗
</a>

            <span className="px-3 py-1 text-[11px] uppercase tracking-[0.22em] border border-[var(--rule)] bg-[var(--peach)]/60 text-[var(--ink)]">
              Writing
            </span>
          </div>

          <span className="text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)]">
            The Tarus Gazette
          </span>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10">
          <h2 className="font-serif text-[var(--ink)] text-4xl md:text-5xl leading-tight mb-4 text-center">
            Extras that define me
          </h2>

          <p className="font-serif text-center text-[var(--ink-soft)] max-w-3xl mx-auto mb-10">
            Explore my playground thoughts and life experiment journal — essays on design,
            tech, and the human side of building.
          </p>
          


          {/* Fanned article covers */}
          <div className="relative flex justify-center items-center w-full h-[420px] group">
            {extras.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`absolute w-72 md:w-80 transition-all duration-700 cursor-pointer transform
                  ${
                    index === 0
                      ? "z-30 group-hover:-translate-x-96 group-hover:-rotate-3"
                      : ""
                  }
                  ${
                    index === 1
                      ? "z-20 translate-y-4 group-hover:translate-y-0"
                      : ""
                  }
                  ${
                    index === 2
                      ? "z-10 translate-y-8 group-hover:translate-x-96 group-hover:rotate-3"
                      : ""
                  }
                `}
                aria-label="Open Medium article"
              >
                {/* Image frame like a newspaper photo */}
                <div className="border border-[var(--rule)] bg-[var(--paper)] p-2 shadow-[0_14px_32px_rgba(0,0,0,0.14)]">
                  <img
                    src={item.img}
                    alt={item.alt}
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK;
                      e.currentTarget.classList.add(
                        "border",
                        "border-[var(--rule)]",
                        "bg-white"
                      );
                    }}
                    className="w-full h-[360px] object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Caption strip */}
                <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)] text-center">
                  Read article ↗
                </div>
              </a>
            ))}
          </div>

          {/* Bottom rule + page number */}
          <div className="mt-10">
            <div className="rule" />
            <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)]">
              <span>Filed Under: Extras</span>
              <span>Page 3</span>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
