import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../../components/Navbar";


import FrontPage from "./FrontPage";
import AboutPage from "./AboutPage";
import ExtrasPage from "./ExtrasPage";
import ContactPage from "./ContactPage";

import { FlipProvider } from "./FlipContext";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

export default function GazetteShell() {
  const isMobile = useIsMobile(768);

  const bookRef = useRef(null);
  const flipRef = useRef(null);

  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = 4;

  // If flip init fails, we fall back to a normal render (not blank)
  const [flipReady, setFlipReady] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("is-flipbook", !isMobile);
    return () => document.body.classList.remove("is-flipbook");
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    if (!bookRef.current) return;
    if (flipRef.current) return;

    let cancelled = false;

    (async () => {
      try {
        // Dynamic import avoids hard-crash if module resolution fails
        const mod = await import("page-flip");
        const PageFlip = mod.PageFlip;

        const el = bookRef.current;

        flipRef.current = new PageFlip(el, {
          width: el.clientWidth || window.innerWidth,
          height: el.clientHeight || window.innerHeight,
          size: "stretch",
          usePortrait: true,
          showCover: false,
          mobileScrollSupport: false,
          maxShadowOpacity: 0.15,
          showPageCorners: false,
        });

        flipRef.current.loadFromHTML(el.querySelectorAll(".gazette-page"));

        flipRef.current.on("flip", (e) => {
          const idx = typeof e?.data === "number" ? e.data : 0;
          setPageIndex(idx);
        });

        const onResize = () => flipRef.current?.update();
        window.addEventListener("resize", onResize);

        if (!cancelled) setFlipReady(true);

        return () => {
          window.removeEventListener("resize", onResize);
        };
      } catch (err) {
        console.error("PageFlip init failed:", err);
        // Fall back to non-flip render so the site is not blank
        setFlipReady(false);
      }
    })();

    return () => {
      cancelled = true;
      flipRef.current?.destroy?.();
      flipRef.current = null;
    };
  }, [isMobile]);

  const flipApi = useMemo(() => {
    if (isMobile || !flipReady) return null;

    return {
      mode: "flip",
      pageIndex,
      totalPages,
      next: () => flipRef.current?.flipNext(),
      prev: () => flipRef.current?.flipPrev(),
      goTo: (idx) => {
        if (!flipRef.current) return;
        const clamped = Math.max(0, Math.min(totalPages - 1, idx));
        flipRef.current.flip(clamped);
      },
    };
  }, [isMobile, flipReady, pageIndex]);

  // Mobile scroll (always works)
  if (isMobile) {
    return (
      <>
        <Navbar />
        <main className="gazette-scroll">
          <section id="front" className="gazette-section"><FrontPage /></section>
          <section id="about" className="gazette-section"><AboutPage /></section>
          <section id="extras" className="gazette-section"><ExtrasPage /></section>
          <section id="contact" className="gazette-section"><ContactPage /></section>
        </main>
      </>
    );
  }

  // Desktop: if flipReady is false, still show content (no blank screen)
  if (!flipReady) {
    return (
      <>
        <Navbar />
        <main className="gazette-scroll">
          <section className="gazette-section"><FrontPage /></section>
          <section className="gazette-section"><AboutPage /></section>
          <section className="gazette-section"><ExtrasPage /></section>
          <section className="gazette-section"><ContactPage /></section>
        </main>
      </>
    );
  }

  return (
    <FlipProvider value={flipApi}>
      <Navbar />
      <div ref={bookRef} className="gazette-flipbook">
        <div className="gazette-page"><FrontPage /></div>
        <div className="gazette-page"><AboutPage /></div>
        <div className="gazette-page"><ExtrasPage /></div>
        <div className="gazette-page"><ContactPage /></div>
      </div>
    </FlipProvider>
  );
}
