"use client";

import { useCallback, useEffect, useRef } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Hold off until the heading has cleared the bottom edge by this much, so the
// scramble plays where the reader is looking instead of off the fold.
const REVEAL_OFFSET_PX = 140;

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
          if (!/[a-z]/i.test(char)) return char;
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
      { threshold: 0.6, rootMargin: `0px 0px -${REVEAL_OFFSET_PX}px 0px` },
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
