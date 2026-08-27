import ThemeToggle from "./ThemeToggle";
import { navLinks, site } from "@/data/portfolio";

export default function Nav() {
  return (
    <header className="nav">
      <div className="navin fx ac jb">
        <a href="#top" className="mono fs14 fw7 accent brand" aria-label="Back to top">
          {site.name}
          <span className="dim">@</span>dev<span className="faint">:~$</span>
        </a>
        <nav className="fx ac gap24" aria-label="Main navigation">
          <div className="fx ac gap24 navlinks mono">
            {navLinks.map((link) => (
              <a key={link.href} className="navlink" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
