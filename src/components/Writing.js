import { writing } from "@/data/portfolio";

export default function Writing() {
  if (writing.length === 0) return null;

  return (
    <section className="sec" id="writing">
      <p className="mono accent shead m0">05 · $ tail -n 2 writing/</p>
      <h2 className="h2">Writing</h2>
      <div className="col gap12" style={{ marginTop: 32 }}>
        {writing.map((post) => (
          <a
            key={post.title}
            className="card plink fx ac jb gap16 wrap reveal"
            style={{ padding: "18px 22px" }}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fx ac gap16">
              <span className="mono faint fs12">{post.year}</span>
              <span className="fw6 head fs15" style={{ lineHeight: 1.5 }}>
                {post.title}
              </span>
            </span>
            <span className="mono accent fs12 nowrap">{post.source}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
