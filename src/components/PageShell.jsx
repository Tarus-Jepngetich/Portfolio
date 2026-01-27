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

    playPageFlip(0.22);
    setFlipping(true);

    const go = () => navigate(path);

    if (document.startViewTransition) {
      document.startViewTransition(() => go());
      // keep this aligned with your exit/enter timings
      setTimeout(() => setFlipping(false), 420);
      return;
    }

    setTimeout(() => {
      go();
      setFlipping(false);
    }, 260);
  };

  return (
    <div className="bg-[var(--paper)] min-h-screen print-soft px-6 pt-28 pb-16">
      <div className="page-stage max-w-6xl mx-auto">
        <div
          className={`page-sheet relative ${flipping ? "is-flipping" : ""}`}
          style={{ viewTransitionName: "gazette-page" }}
        >
          {children}

          {/* Fold corner hotspot (NEXT) */}
          {nextPath && (
            <button
              type="button"
              className="page-fold"
              onClick={() => flipTo(nextPath)}
              aria-label="Flip to next page"
            >
              <span className="sr-only">Next</span>
            </button>
          )}

          

          
        </div>
      </div>
    </div>
  );
}
