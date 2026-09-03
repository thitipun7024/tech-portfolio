import PageHero from "@/components/PageHero";

const projects = [
  {
    no: "01",
    title: "Procurement Workflow Platform",
    type: "Enterprise Web Application",
    desc: "End-to-end PR approval workflow with role-based approvals, finance/procurement steps, audit trail and enterprise identity integration.",
    stack: ["NEXT.JS", "FASTAPI", "SQL SERVER", "KEYCLOAK", "MINIO"],
    accent: "PR / FLOW",
  },
  {
    no: "02",
    title: "NCB Report Automation",
    type: "High-throughput Worker",
    desc: "Concurrent .NET worker for RDLC rendering, encryption, object storage, tokenized links and resilient batch processing.",
    stack: [".NET 8", "SQL SERVER", "MINIO", "RDLC", "HTTP"],
    accent: "30× / PIPE",
  },
  {
    no: "03",
    title: "Asset Inventory System",
    type: "Responsive Web App",
    desc: "Modern asset inventory experience with branch/HQ context, searchable inventory, scanning flows and tablet-first responsive UI.",
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "NEXTAUTH"],
    accent: "ASSET / UI",
  },
  {
    no: "04",
    title: "Infrastructure & Network Ops",
    type: "Platform Engineering",
    desc: "Production troubleshooting and platform work across Kubernetes, Prometheus, VPN, MikroTik, Linux and multi-environment application services.",
    stack: ["K8S", "PROMETHEUS", "MIKROTIK", "LINUX", "WIREGUARD"],
    accent: "OPS / 99.9",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container subpage">
      <PageHero
        eyebrow="SELECTED WORK / 02"
        title="Projects built for"
        accent="real operations."
        description="A selection of systems that combine product thinking, enterprise workflows, backend engineering and infrastructure reliability."
      />

      <section className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.no}>
            <div className="project-meta"><span>{project.no}</span><em>{project.type}</em></div>
            <div className="project-main">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
            <div className="project-visual">
              <div className="project-orb"><span>{project.accent}</span></div>
              <span className="project-arrow">↗</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
