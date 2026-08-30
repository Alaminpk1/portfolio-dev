import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="sec" id="skills">
      <p className="mono accent shead m0">03 · $ npx skills --list</p>
      <h2 className="h2">Stack</h2>
      <div className="grid grid3" style={{ marginTop: 40 }}>
        {skills.map((skill) => (
          <div key={skill.group} className="card reveal" style={{ padding: 22 }}>
            <h3 className="mono skgroup m0">{skill.group}</h3>
            <p className="dim fs14 m0" style={{ marginTop: 10, lineHeight: 1.8 }}>
              {skill.items}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
