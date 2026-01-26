import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { playPageFlip } from "../utils/sfx";

export default function PageShell({
  children,
  nextPath,
  prevPath,
  pageLabel = "Page",
}) {
  const navigate = useNavigate();
  const [flipping, setFlipping] = useState(false);

  const flipTo = (path) => {
    if (!path || flipping) return;

    // ✅ Play sound on page change
    playPageFlip(0.22);

    setFlipping(true);
    const go = () => navigate(path);

    // ✅ Smooth transition (your existing approach)
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        go();
      });
      setTimeout(() => setFlipping(false), 900);
      return;
    }

    // Fallback
    setTimeout(() => {
      go();
      setFlipping(false);
    }, 300);
  };

  return (
    <div className="bg-[var(--paper)] min-h-screen print-soft px-6 pt-28 pb-16">
      <div className="page-stage max-w-6xl mx-auto">
        <div className="page-sheet" style={{ viewTransitionName: "gazette-page" }}>
          {children}

          {/* Flip corner (NEXT) */}
          <button
            type="button"
            className="page-corner-btn"
            onClick={() => flipTo(nextPath)}
            aria-label="Flip to next page"
          />

          {/* Previous page button */}
          {prevPath && (
            <button
              type="button"
              onClick={() => flipTo(prevPath)}
              className="absolute left-4 top-4 px-3 py-1 text-[11px] uppercase tracking-[0.22em]
                         border border-[var(--rule)] bg-white text-[var(--ink)] hover:bg-[var(--mint)]/40 transition"
              aria-label="Go to previous page"
            >
              ← Back
            </button>
          )}

          {/* Page label */}
          <div className="absolute right-4 top-4 text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)]">
            {pageLabel}
          </div>
        </div>
      </div>
    </div>
  );
}
