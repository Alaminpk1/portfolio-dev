import Image from "next/image";
import { moreProjects, projects } from "@/data/portfolio";

function ProjectImage({ project }) {
  return (
    <Image
      src={project.image}
      alt={project.imageAlt}
      width={828}
      height={465}
      className="shot"
      sizes="(max-width: 760px) calc(100vw - 120px), 450px"
    />
  );
}

export default function Projects() {
  return (
    <section className="sec" id="projects">
      <p className="mono accent shead m0">02 · $ ls projects/</p>
      <h2 className="h2">Selected work</h2>
      <div className="grid grid2" style={{ marginTop: 40 }}>
        {projects.map((project) => (
          <article key={project.name} className="card col" style={{ gap: 14 }}>
            <ProjectImage project={project} />
            <div className="fx ac jb">
              <span className="mono accent fs13">{project.category}</span>
              <a
                className="mono footlink fs12"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.urlLabel} ↗
              </a>
            </div>
            <h3 className="m0 fs20 fw6">
              <span className="role">{project.name}</span>
            </h3>
            <p className="dim fs14 m0" style={{ lineHeight: 1.7 }}>
              {project.description}
            </p>
            <div className="fx gap24 mt8">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="metric">{metric.value}</div>
                  <div className="mono faint fs12">{metric.label}</div>
                </div>
              ))}
            </div>
            <ul
              className="fx wrap gap8 m0"
              style={{ marginTop: "auto", padding: 0, listStyle: "none" }}
            >
              {project.tags.map((tag) => (
                <li key={tag} className="chip mono">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="col gap12" style={{ marginTop: 20 }}>
        <p className="mono faint fs12 m0">$ ls projects/ --all</p>
        {moreProjects.map((project) => (
          <a
            key={project.name}
            className="card plink fx ac jb gap16 wrap"
            style={{ padding: "16px 22px" }}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fx ac gap16">
              <span className="mono faint fs12">{project.year}</span>
              <span className="fw6 head fs15">{project.name}</span>
            </span>
            <span className="fx ac gap16">
              <span className="mono dim fs12">{project.stack}</span>
              <span className="accent" aria-hidden="true">
                ↗
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
