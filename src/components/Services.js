import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section className="sec" id="services">
      <p className="mono accent shead m0">04 · $ cat services.txt</p>
      <h2 className="h2">Services</h2>
      <div className="grid grid3" style={{ marginTop: 40 }}>
        {services.map((service) => (
          <article key={service.id} className="card col reveal" style={{ gap: 12, padding: 24 }}>
            <p className="mono accent fs13 m0">{service.id}</p>
            <h3 className="m0 fs18 fw6 head" style={{ fontSize: 18 }}>
              {service.title}
            </h3>
            <p className="dim fs14 m0" style={{ lineHeight: 1.7 }}>
              {service.description}
            </p>
            <ul
              className="fx wrap gap8 m0"
              style={{ marginTop: "auto", padding: 0, listStyle: "none" }}
            >
              {service.tags.map((tag) => (
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
