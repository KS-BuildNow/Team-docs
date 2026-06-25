import {
  ClipboardCheck,
  GitBranch,
  GitPullRequestArrow,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import "./App.css";

const stages = [
  {
    title: "Issue",
    description: "Every main pull request starts with a tracked issue.",
    status: "Required",
    icon: ClipboardCheck,
  },
  {
    title: "Dev",
    description: "Feature work lands on dev first through normal pushes.",
    status: "Protected",
    icon: GitBranch,
  },
  {
    title: "Review",
    description: "Pull requests carry the issue link and run checks.",
    status: "Checked",
    icon: GitPullRequestArrow,
  },
  {
    title: "Main",
    description: "Main accepts reviewed changes and blocks direct pushes.",
    status: "Locked",
    icon: ShieldCheck,
  },
];

const metrics = [
  ["Frontend", "React"],
  ["Build", "Vite"],
  ["Tests", "Vitest"],
  ["Target", "dev -> main"],
];

function App() {
  return (
    <div className="app-shell">
      <header className="topbar" aria-label="BuildNow navigation">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            <Rocket size={20} />
          </span>
          <span>BuildNow</span>
        </div>
        <nav aria-label="Workflow views">
          <button className="active" type="button">
            <GitBranch size={16} aria-hidden="true" />
            Pipeline
          </button>
          <button type="button">
            <ShieldCheck size={16} aria-hidden="true" />
            Guards
          </button>
        </nav>
      </header>

      <main className="workspace">
        <section>
          <div className="headline">
            <p className="eyebrow">React frontend</p>
            <h1>Ship through dev, prove it with checks, merge into main.</h1>
            <p className="lede">
              The frontend now runs as a React app with a Vite build and Vitest
              coverage for the protected branch workflow.
            </p>
          </div>

          <div className="pipeline" aria-label="Delivery pipeline">
            {stages.map((stage) => {
              const Icon = stage.icon;

              return (
                <article className="stage-card" key={stage.title}>
                  <header>
                    <span className="stage-icon" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <span className="status">{stage.status}</span>
                  </header>
                  <div>
                    <h2>{stage.title}</h2>
                    <p>{stage.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <aside className="side-panel" aria-label="Frontend stack">
          <h2>Current Stack</h2>
          <div className="metric-list">
            {metrics.map(([label, value]) => (
              <div className="metric" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
