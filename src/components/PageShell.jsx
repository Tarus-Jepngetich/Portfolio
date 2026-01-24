import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  setFlipping(true);
  const go = () => navigate(path);

  if (document.startViewTransition) {
    document.startViewTransition(() => {
      go();
    });
    setTimeout(() => setFlipping(false), 1400);
    return;
  }

  setTimeout(() => {
    go();
    setFlipping(false);
  }, 1400);
};

  return (
    <div className="bg-[var(--paper)] min-h-screen print-soft px-6 pt-28 pb-16">
      {/* Stage gives perspective */}
      <div className="page-stage max-w-6xl mx-auto">
        {/* The page surface that animates between routes */}
        <div
          className="page-sheet"
          style={{ viewTransitionName: "gazette-page" }}
        >
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
