import PageHero from "@/components/PageHero";

const timeline = [
  ["NOW", "Senior Software / Systems Engineer", "Full-stack products, mobile apps, APIs, databases, infrastructure, networks and production troubleshooting."],
  ["2025", "Platform & Automation", "Built automation-heavy services, report pipelines, integrations, monitoring flows and deployment patterns for internal systems."],
  ["2024", "Enterprise Application Engineering", "Expanded backend and frontend ownership across workflow systems, identity, storage and data-driven applications."],
  ["EARLIER", "Infrastructure Foundation", "Hands-on experience with Linux, networking, virtualization, VPN, databases and enterprise operations."],
];

const levels = [
  ["Web & UI Engineering", 94],
  ["Backend / API Design", 92],
  ["Database Engineering", 88],
  ["Cloud / Infrastructure", 86],
  ["Network Engineering", 82],
  ["Automation & Integration", 90],
];

export default function ExperiencePage() {
  return (
    <div className="container subpage">
      <PageHero
        eyebrow="EXPERIENCE / 03"
        title="From interface to"
        accent="infrastructure."
        description="My experience is intentionally broad. I like owning the technical path from user interaction to production runtime and operational reliability."
      />

      <section className="experience-layout">
        <div className="timeline">
          {timeline.map(([year, title, desc], index) => (
            <article className="timeline-item" key={year}>
              <div className="timeline-node"><i/><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="timeline-content"><em>{year}</em><h3>{title}</h3><p>{desc}</p></div>
            </article>
          ))}
        </div>

        <aside className="capability-panel glass-panel">
          <span className="card-index">CAPABILITY MATRIX</span>
          <h2>Technical coverage</h2>
          <div className="meters">
            {levels.map(([label, value]) => (
              <div className="meter" key={label as string}>
                <div><span>{label}</span><em>{value}%</em></div>
                <div className="meter-track"><i style={{ width: `${value}%` }} /></div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="principles-grid">
        <article><span>01</span><h3>Own the outcome</h3><p>Think beyond tickets and code toward the reliability of the final system.</p></article>
        <article><span>02</span><h3>Design for operations</h3><p>Logs, observability, rollback and deployment are part of product quality.</p></article>
        <article><span>03</span><h3>Keep learning</h3><p>Technology changes fast. Fundamentals and curiosity scale better than hype.</p></article>
      </section>
    </div>
  );
}
