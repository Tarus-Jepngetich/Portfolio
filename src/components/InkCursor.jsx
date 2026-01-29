import { useEffect, useRef } from "react";

export default function InkCursor() {
  const dotRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const trail = trailRef.current;

    if (!dot || !trail) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      tx += (x - tx) * 0.18;
      ty += (y - ty) * 0.18;

      dot.style.transform = `translate3d(${x - 5}px, ${y - 5}px, 0)`;
      trail.style.transform = `translate3d(${tx - 14}px, ${ty - 14}px, 0)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={trailRef} className="ink-trail" />
      <div ref={dotRef} className="ink-dot" />
    </>
  );
}

