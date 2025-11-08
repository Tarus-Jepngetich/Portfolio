import Landing_Page from "../assets/Landing_Page.png";

export default function Hero() {
  return (
            
              
         
        <section
          id="hero"
          className="min-h-[80vh] md:min-h-screen flex items-right justify-center px-6 pt-24 pb-16 bg-cover bg-center"
          style={{ backgroundImage: `url(${Landing_Page})` }}
        >
          <div className="max-w-xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brown-300 mb-4">
              Web Developer • UI/UX • Artist
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I’m Tarus 👏— I design & build digital experiences.
            </h1>
            <p className="text-slate-100/90 text-base md:text-lg mb-8">
              I blend clean code, thoughtful interfaces, and visual storytelling
              to create websites and products that feel intuitive and human.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-teal-500 text-slate-950 font-semibold text-sm hover:bg-teal-400 transition"
              >
                View My Web Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 rounded-full border border-teal-400 text-sm text-teal-300 hover:bg-teal-400 hover:text-slate-950 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>


  );
}
