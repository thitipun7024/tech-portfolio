import Link from "next/link";

const stats = [
  ["12+", "Production systems"],
  ["08", "Core technologies"],
  ["99.9%", "Reliability mindset"],
];

const stack = [
  "NEXT.JS",
  "TYPESCRIPT",
  "FIGMA",
  "NEST.JS",
  "FLUTTER",
  "KUBERNETES",
  "SQL SERVER",
  "MIKROTIK",
];

export default function HomePage() {
  return (
    <div className="container home-page">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow reveal">
            <span /> SYSTEM ONLINE · THIHIPUN PORTFOLIO{" "}
          </div>
          <p className="hero-kicker reveal delay-1">
            UX \ UI DESIGNER / FRONTEND DEVELOPER / INFRASTRUCTURE
          </p>
          <h1 className="reveal delay-1">
            I TURN <span className="outline-text">IDEAS</span>
            <br />
            INTO <span className="gradient-text">INTERACTIVE</span>
            <br />
            <span className="gradient-text glitch" data-text="EXPERIENCES">
              EXPERIENCES
            </span>
          </h1>
          <p className="hero-description reveal delay-2">
            Senior developer crafting production web apps, mobile experiences,
            APIs, infrastructure and automation — from idea to reliable
            deployment.
          </p>
          <div className="hero-actions reveal delay-2" style={{ marginTop: "2px" }}>
            <Link href="/projects" className="btn primary">
              Explore projects <span>↗</span>
            </Link>
            <Link href="/contact" className="btn ghost">
              Start a conversation
            </Link>
          </div>
        </div>

        <div className="hero-visual reveal delay-2">
          <div className="orbital-card">
            <div className="orbit orbit-a">
              <i />
            </div>
            <div className="orbit orbit-b">
              <i />
            </div>
            <div className="core">
              <div className="core-ring" />
              <span>UX / UI</span>
              <strong>FRONTEND</strong>
              <small>DEVELOPER</small>
            </div>
            <div className="hud-label top">NODE_01 / ACTIVE</div>
            <div className="hud-label bottom">BUILD · SHIP · SCALE</div>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        {stats.map(([number, label], index) => (
          <article
            className="stat-card reveal"
            style={{ animationDelay: `${0.35 + index * 0.1}s` }}
            key={label}
          >
            <strong>{number}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="marquee-wrap">
        <div className="marquee">
          {[...stack, ...stack].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i>✦</i>
            </span>
          ))}
        </div>
      </section>

      <section className="home-feature-grid">
        <article className="feature-card large">
          <span className="card-index">01 / ENGINEERING</span>
          <h2>
            Ideas become{" "}
            <span className="gradient-text">production systems.</span>
          </h2>
          <p>
            I connect frontend, backend, data, cloud and networking so the whole
            product works — not just the screen.
          </p>
          <Link href="/about" className="text-link">
            See how I work →
          </Link>
        </article>
        <article className="feature-card terminal-card">
          <div className="terminal-head">
            <span />
            <span />
            <span />
            <em>portfolio.sh</em>
          </div>
          <pre>
            <code>{`$ whoami\n> frontend-developer\n> ux/ui designer\n\n$ focus --current\n> web / mobile / api\n\n$ status\n> ready_to_build_`}</code>
          </pre>
        </article>
      </section>
    </div>
  );
}
