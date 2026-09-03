import { experience } from "@/data/portfolio";
import ScrambleText from "./ScrambleText";

export default function Experience() {
  return (
    <section className="sec" id="experience">
      <p className="mono accent shead m0">01 · $ cat experience.log</p>
      <h2 className="h2">
        <ScrambleText text="Experience" />
      </h2>
      <div className="col gap24" style={{ marginTop: 40 }}>
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.period}`}
            className="tline reveal"
            style={{ paddingBottom: 8 }}
          >
            <span
              className={job.active ? "tdot" : "tdot tdotdim"}
              aria-hidden="true"
            />
            <div className="fx ac jb wrap gap8">
              <h3 className="role m0">{job.title}</h3>
              <span className="mono dim fs12">{job.period}</span>
            </div>
            <p className="mono accent fs13 m0" style={{ marginTop: 4 }}>
              {job.company}{" "}
              <span className="faint">· {job.location}</span>
            </p>
            <p className="dim fs14 mt8" style={{ lineHeight: 1.7, maxWidth: 720 }}>
              {job.description}
            </p>
            <ul
              className="fx wrap gap8 mt8 m0"
              style={{ padding: 0, listStyle: "none" }}
            >
              {job.tags.map((tag) => (
                <li key={tag} className="chip mono">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
