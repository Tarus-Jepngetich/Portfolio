
import L1 from "../assets/L1.png";

export default function WebProjects() {
  return (
          
        <section
          id="projects"
  className="relative min-h-screen flex items-center justify-center"
  
>
  <div className="hidden md:block absolute right-0 top-0">
  <img
    src={L1}
    alt="Decorative art"
    className="w-55 float-slow"
  />
</div> 
 <div className="hidden md:block absolute left-0 top-0">
  <img
    src={L1}
    alt="Decorative art"
    className="w-55 float-slow scale-x-[-1]"
  />
</div> 

  <div className="max-w-5xl mx-auto px-6 text-center text-slate-900">
    <h2 className="text-3xl md:text-4xl font-bold mb-8">
      Web Development Projects
    </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example project card */}
              <article className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 shadow-lg backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-1">Coffee Ordering App ☕</h3>
                <p className="text-xs uppercase tracking-wide text-teal-300 mb-3">
                  React • Tailwind
                </p>
                <p className="text-sm text-slate-200 mb-4">
                  A playful coffee ordering experience with a cart flow, clean UI,
                  and responsive layout.
                </p>
                <div className="flex gap-4 text-sm justify-center">
                  <a href="#" className="text-teal-300 hover:underline">
                    Live Demo →
                  </a>
                  <a href="#" className="text-slate-300 hover:underline">
                    View Code ↗
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

  );
}
