import PageHero from "@/components/PageHero";

const skills = [
  ["Frontend", "Next.js · React · TypeScript · Tailwind · Flutter"],
  ["Backend", "NestJS · FastAPI · Django · Node.js"],
  ["Data", "SQL Server · PostgreSQL · MongoDB · MariaDB · MinIO"],
  ["Platform", "Docker · Kubernetes · Proxmox · Linux · CI/CD"],
  ["Network", "MikroTik · VPN · Routing · Monitoring"],
  ["Automation", "Python · API Integration · Airflow"],
];

export default function AboutPage() {
  return (
    <div className="container subpage">
      <PageHero
        eyebrow="PROFILE / 01"
        title="Engineer across the"
        accent="entire stack."
        description="I work where application engineering meets infrastructure: building polished user experiences while understanding what happens all the way down to databases, servers and networks."
      />

      <section className="about-grid">
        <article className="about-story glass-panel">
          <span className="card-index">ABOUT.MD</span>
          <h2>More than writing code.</h2>
          <p>I enjoy solving problems end-to-end: shaping architecture, designing UI, writing APIs, tuning databases, deploying workloads and troubleshooting production environments.</p>
          <p>That range helps me make practical trade-offs. I can speak with product teams about user experience, with backend teams about data flows, and with infrastructure teams about reliability and deployment.</p>
          <div className="signature">SAK/DEV <span>⌁</span></div>
        </article>

        <article className="radar-card glass-panel">
          <div className="radar">
            <div className="radar-ring r1"/><div className="radar-ring r2"/><div className="radar-ring r3"/>
            <div className="radar-line vertical"/><div className="radar-line horizontal"/>
            <div className="radar-sweep"/>
            <i className="dot d1"/><i className="dot d2"/><i className="dot d3"/>
            <strong>UX \ UI</strong>
          </div>
        </article>
      </section>

      <section className="skill-grid">
        {skills.map(([title, body], index) => (
          <article className="skill-card" key={title}>
            <span>0{index + 1}</span>
            <div><h3>{title}</h3><p>{body}</p></div>
          </article>
        ))}
      </section>

      <section className="philosophy glass-panel">
        <div><span className="card-index">ENGINEERING PRINCIPLE</span><h2>Simple interfaces.<br/>Strong systems underneath.</h2></div>
        <blockquote>“Good technology should feel effortless to the user, even when the engineering behind it is anything but simple.”</blockquote>
      </section>
    </div>
  );
}
