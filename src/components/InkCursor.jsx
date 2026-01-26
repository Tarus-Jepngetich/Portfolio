import { useEffect, useRef } from "react";

export default function InkCursor() {
  const dotRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    // ✅ Only run when the device truly has a mouse-like pointer
    const finePointer = window.matchMedia?.("(pointer: fine)").matches;
    const canHover = window.matchMedia?.("(hover: hover)").matches;

    if (!finePointer || !canHover) return;

    const dot = dotRef.current;
    const trail = trailRef.current;
    if (!dot || !trail) return;

    let mouseX = 0;
    let mouseY = 0;

    let dotX = 0;
    let dotY = 0;

    let trailX = 0;
    let trailY = 0;

    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;

      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;

      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    const onLeave = () => {
      dot.style.opacity = "0";
      trail.style.opacity = "0";
    };
    const onEnter = () => {
      dot.style.opacity = "1";
      trail.style.opacity = "1";
    };

    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    // ✅ Hover effect (works globally)
    const onOver = (e) => {
      const t = e.target;
      if (t?.closest?.("a, button")) document.body.classList.add("ink-hover");
    };
    const onOut = (e) => {
      const t = e.target;
      if (t?.closest?.("a, button")) document.body.classList.remove("ink-hover");
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("ink-hover");
    };
  }, []);

  return (
    <>
      <div ref={trailRef} className="ink-trail" aria-hidden="true" />
      <div ref={dotRef} className="ink-dot" aria-hidden="true" />
    </>
  );
}
