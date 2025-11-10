import L6 from "../assets/L6.png";

export default function Extras() {
  const extras = [
    {
       img: "/src/assets/M3.jpeg",
      link: "https://medium.com/@mercytarus644/goodbye-sdlc-hello-ai-dlc-the-new-era-of-building-software-2415b8302973",
    },
    {
      img: "/src/assets/M2.jpeg",
      link: "https://medium.com/@mercytarus644/typography-the-key-to-effective-design-and-clear-communication-3bbedc1c295a",
    },
    {
     
      img: "/src/assets/M1.jpeg",
      link: "https://medium.com/@mercytarus644/resolve-your-mess-a-letter-to-a-version-of-myself-that-gave-up-too-soon-3001144acf81",
    },
  ];

  return (
    <section
      id="extras"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Decorative art image on top left */}
<div className="hidden md:block absolute left-0 top-10">
  <img
    src={L6}
    alt="Decorative art"
    className="w-50 float-slow"
  />
</div>
{/* Mirrored decorative art on bottom right */}
<div className="hidden md:block absolute right-0 bottom-10">
  <img
    src={L6}
    alt="Decorative art mirrored"
    className="w-50 float-slow scale-x-[-1]"
  />
</div>
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 text-slate-900">
        <p className="text-xs uppercase tracking-[0.3em] text-[#5A3B1E] mb-3">
          
          Explore my playground thoughts & life journal
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Personal Blog
        </h2>
        <p className="text-slate-800 text-sm md:text-base">
          A glimpse into my creative mind — writings, visuals, and experiments
          that shape my art, code, and design thinking.
        </p>
      </div>

      {/* Fanning image layout */}
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
              alt="Extra visual"
              className="w-full h-full object-cover rounded-2xl shadow-lg border border-[#e6bfa0] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
