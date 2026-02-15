import { useRef } from "react";

export default function ArtCarousel({ items = [] }) {
  const trackRef = useRef(null);

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector("[data-card]");
    const step = card ? card.getBoundingClientRect().width + 16 : 320;

    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <div className="pt-4 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
          Gallery
        </p>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="px-3 py-1 rounded-lg border border-slate-800 bg-slate-950/40 text-[11px] text-slate-200 hover:bg-slate-950/60 transition"
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="px-3 py-1 rounded-lg border border-slate-800 bg-slate-950/40 text-[11px] text-slate-200 hover:bg-slate-950/60 transition"
          >
            Next →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
        style={{ scrollbarWidth: "thin" }}
      >
        {items.map((it) => (
          <article
            key={it.id}
            data-card
            className="snap-start shrink-0 w-[260px] sm:w-[300px] rounded-xl border border-slate-800 bg-slate-950/40 overflow-hidden"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
  src={it.src}
  alt={it.alt}
  className="w-full h-full object-contain bg-slate-950"
  loading="lazy"
/>

            </div>

            <div className="p-3">
              <h4 className="text-sm font-semibold text-slate-50 leading-tight">
                {it.title}
              </h4>
              <p className="mt-1 text-[11px] text-slate-400">
                {it.year}
                {it.medium ? ` • ${it.medium}` : ""}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
