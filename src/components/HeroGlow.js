"use client";

import { useEffect, useRef } from "react";

export default function HeroGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.closest(".hero");
    if (!el || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = null;

    function handleMove(event) {
      const rect = section.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
      });
    }

    section.addEventListener("pointermove", handleMove);
    return () => {
      section.removeEventListener("pointermove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className="glow" aria-hidden="true" />;
}
