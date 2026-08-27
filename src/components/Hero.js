import { site, status } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="sec hero">
      <div className="glow" />
      <div className="grid herogrid posrel">
        <div>
          <p className="mono accent fs13 m0">$ whoami</p>
          <h1 className="hero-h">
            {site.fullName}
            <span className="cursor" style={{ marginLeft: 8 }} aria-hidden="true" />
          </h1>
          <p className="mono dim fs15 m0" style={{ marginTop: 14 }}>
            {site.tagline}
          </p>
          <p className="fs16 mt16" style={{ lineHeight: 1.7, maxWidth: 520 }}>
            {site.bio}{" "}
            <a href={site.bioLinks[0].href} target="_blank" rel="noopener noreferrer">
              {site.bioLinks[0].label}
            </a>{" "}
            in Austria, and shipping{" "}
            <a href={site.bioLinks[1].href} target="_blank" rel="noopener noreferrer">
              {site.bioLinks[1].label}
            </a>
            {site.bioSuffix}
          </p>
          <div className="fx ac gap12 wrap" style={{ marginTop: 28 }}>
            <a className="btn btnsolid mono" href="#contact">
              hire me →
            </a>
            <a className="btn mono" href="#projects">
              view work
            </a>
          </div>
          <div className="fx ac gap16" style={{ marginTop: 26 }}>
            <a
              className="footlink mono"
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <span className="faint">/</span>
            <a
              className="footlink mono"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <span className="faint">/</span>
            <a className="footlink mono" href={`mailto:${site.email}`}>
              email
            </a>
          </div>
        </div>

        <div className="term">
          <div className="termbar fx ac gap8">
            <span className="tdotr" />
            <span className="tdoty" />
            <span className="tdotg" />
            <span className="mono faint fs12" style={{ marginLeft: 8 }}>
              status --now
            </span>
          </div>
          <div className="termbody mono">
            <div>
              <span className="accent">➜</span> <span className="dim">role:</span> {status.role}
            </div>
            <div>
              <span className="accent">➜</span> <span className="dim">at:</span> {status.at}
            </div>
            <div>
              <span className="accent">➜</span> <span className="dim">exp:</span> {status.exp}
            </div>
            <div>
              <span className="accent">➜</span> <span className="dim">serving:</span>{" "}
              {status.serving}
            </div>
            <div>
              <span className="accent">➜</span> <span className="dim">building:</span>{" "}
              {status.building}
            </div>
            <div>
              <span className="accent">➜</span> <span className="dim">status:</span>{" "}
              <span className="accent">{status.availability}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
