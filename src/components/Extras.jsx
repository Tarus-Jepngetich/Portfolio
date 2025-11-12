import L6 from "../assets/L6.png";
import M1 from "../assets/M1.jpeg";  // make sure the file name & extension match exactly
import M2 from "../assets/M2.jpeg";
import M3 from "../assets/M3.jpeg";

const extras = [
  {
    img: M3,
    link:
      "https://medium.com/@mercytarus644/goodbye-sdlc-hello-ai-dlc-the-new-era-of-building-software-2415b8302973",
    alt: "AI-DLC article cover",
  },
  {
    img: M2,
    link:
      "https://medium.com/@mercytarus644/typography-the-key-to-effective-design-and-clear-communication-3bbedc1c295a",
    alt: "Typography article cover",
  },
  {
    img: M1,
    link:
      "https://medium.com/@mercytarus644/resolve-your-mess-a-letter-to-a-version-of-myself-that-gave-up-too-soon-3001144acf81",
    alt: "Resolve Your Mess article cover",
  },
];

// optional tiny fallback if any image fails to load (transparent PNG data URI)
const FALLBACK =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAklEQVR4AewaftIAAAQMSURBVO3BQY4CMQwEwVb//0oYQ1Fh5JY1l8G8Iu8+AAAAAAAAgN8F3gAAAPCw5QwAAAAAAABwT4cBAAAAAAAA4J8BAAAAAAAA4J8BAAAAAAAA4J8BAP0dY0m6o1mUAAAAAElFTkSuQmCC";

export default function Extras() {
  return (
    <section
      id="extras"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Decorative art (left top) */}
      <div className="hidden md:block absolute left-0 top-10">
        <img src={L6} alt="" className="w-48 float-slow" />
      </div>
      {/* Mirrored decorative art (right bottom) */}
      <div className="hidden md:block absolute right-0 bottom-10">
        <img src={L6} alt="" className="w-48 float-slow scale-x-[-1]" />
      </div>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 text-slate-900">
        <p className="text-xs uppercase tracking-[0.3em] text-[#5A3B1E] mb-3">
          Explore my playground thoughts & life journal
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Personal Blog</h2>
        <p className="text-slate-800 text-sm md:text-base">
          A glimpse into my creative mind — writings, visuals, and experiments
          that shape my art, code, and design thinking.
        </p>
      </div>

      {/* Fanned images */}
      <div className="relative flex justify-center items-center w-full max-w-5xl h-[420px] group">
        {extras.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className={`absolute w-72 md:w-80 transition-all duration-700 cursor-pointer transform
              ${index === 0 ? "z-30 group-hover:-translate-x-72 group-hover:-rotate-3" : ""}
              ${index === 1 ? "z-20 translate-y-4 group-hover:translate-y-0" : ""}
              ${index === 2 ? "z-10 translate-y-8 group-hover:translate-x-72 group-hover:rotate-3" : ""}
            `}
          >
            <img
              src={item.img}
              alt={item.alt}
              onError={(e) => {
                e.currentTarget.src = FALLBACK;
                e.currentTarget.classList.add("border", "border-slate-300", "bg-white");
              }}
              className="w-full h-full object-cover rounded-2xl shadow-lg border border-[#e6bfa0] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
