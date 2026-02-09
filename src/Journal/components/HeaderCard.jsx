// src/journal/components/HeaderCard.jsx
export default function HeaderCard() {
  return (
    <section className="bg-slate-900 rounded-2xl shadow-xl border border-slate-700 p-6 space-y-4 mb-6">
      <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 text-center">
        Gallery
      </p>

      <h1 className="text-2xl sm:text-3xl font-semibold text-center text-slate-50">
        Tarus&apos;s Creative Gallery
      </h1>

      <p className="text-sm text-slate-300 text-center max-w-2xl mx-auto leading-relaxed">
        A curated archive of my work, thinking & hobbies — spanning{" "}
        <span className="font-medium">software development</span>,{" "}
        <span className="font-medium">data analysis</span>,{" "}
        <span className="font-medium">UI/UX</span>,{" "}
        <span className="font-medium">graphic design</span>, and{" "}
        <span className="font-medium">art</span>.  
        This space brings everything together, instead of leaving it scattered
        across tools and platforms.
      </p>

      <div className="flex flex-wrap justify-center gap-2 text-[11px]">
        <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-200">
          Software Development
        </span>
        <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-200">
          Data Analysis
        </span>
        <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-200">
          UI/UX
        </span>
        <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-200">
          Graphic Design
        </span>
        <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-200">
          Illustration &amp; Art
        </span>
      </div>
    </section>
  );
}
