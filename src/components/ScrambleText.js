"use client";

import { useCallback, useEffect, useRef } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function ScrambleText({ text, ...props }) {
  const ref = useRef(null);
  const intervalRef = useRef(null);

  const scramble = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let iteration = 0;

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      el.textContent = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iteration) return text[index];
          return LETTERS[Math.floor(Math.random() * LETTERS.length)];
        })
        .join("");

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      iteration += 0.6;
    }, 35);
  }, [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scramble();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
    };
  }, [scramble]);

  return (
    <span ref={ref} aria-label={text} onMouseEnter={scramble} {...props}>
      {text}
    </span>
  );
}
