import { site } from "@/data/portfolio";
import ScrambleText from "./ScrambleText";

export default function Contact() {
  return (
    <section
      className="sec"
      id="contact"
      style={{ borderBottom: "none", textAlign: "center", padding: "110px 0" }}
    >
      <p className="mono accent shead m0">06 · $ ./contact.sh</p>
      <h2 className="h2" style={{ fontSize: 44 }}>
        <ScrambleText text="Let's build something." />
      </h2>
      <p
        className="dim fs16"
        style={{ maxWidth: 480, margin: "18px auto 0", lineHeight: 1.7 }}
      >
        Open to senior/staff full-time roles and select freelance projects. Usually
        reply within 24 hours.
      </p>
      <div className="fx ac jc gap12 wrap" style={{ marginTop: 32 }}>
        <a className="btn btnsolid mono" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <a
          className="btn mono"
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          whatsapp
        </a>
      </div>
    </section>
  );
}
