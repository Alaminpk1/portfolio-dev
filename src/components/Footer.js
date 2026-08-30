import { site } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="fx ac jb wrap gap8"
      style={{ padding: "24px 0 40px", borderTop: "1px solid var(--seline)" }}
    >
      <span className="mono faint fs12">
        © {year} {site.fullName} — built with caffeine and Next.js
      </span>
      <div className="fx gap16">
        <a
          className="footlink mono"
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a
          className="footlink mono"
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        <a
          className="footlink mono"
          href={site.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          x
        </a>
      </div>
    </footer>
  );
}
