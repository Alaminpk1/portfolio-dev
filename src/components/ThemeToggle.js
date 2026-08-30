"use client";

import { site } from "@/data/portfolio";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const isLight = root.classList.toggle("light");
    try {
      localStorage.setItem(site.themeKey, isLight ? "light" : "dark");
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      className="mono pointer tbtn"
      aria-label="Switch theme"
      onClick={toggle}
    >
      <span className="tbtn-dark">--light</span>
      <span className="tbtn-light">--dark</span>
    </button>
  );
}
