// src/journal/components/HeaderCard.jsx
export default function HeaderCard() {
  return (
    <section className="bg-slate-900 rounded-2xl shadow-xl border border-slate-700 p-6 space-y-4 mb-6">
      <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 text-center">
        Design Gallery
      </p>
      <h1 className="text-2xl sm:text-3xl font-semibold text-center text-slate-50">
        Tarus&apos;s Creative Gallery
      </h1>
      <p className="text-sm text-slate-300 text-center max-w-2xl mx-auto">
        A curated home for my <span className="font-medium">graphic design</span>,{" "}
        <span className="font-medium">UI/UX</span>, and <span className="font-medium">art</span>.
        Everything in one place, instead of scattered across apps.
      </p>
      <div className="flex flex-wrap justify-center gap-2 text-[11px]">
        <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-200">Graphic Design</span>
        <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-200">UI/UX</span>
        <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-200">Illustration &amp; Art</span>
      </div>
    </section>
  );
}
