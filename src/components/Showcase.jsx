import { motion } from 'framer-motion';
import { Code, Award, Github, Server, Globe, Cpu } from 'lucide-react';

const experiences = [
  {
    title: 'Industrial Trainee',
    org: 'West Central Railway (WCR), Jabalpur',
    time: 'Traineeship',
    points: [
      'Hands-on with instrumentation and control workflows',
      'Exposure to networked systems & observability',
    ],
  },
  {
    title: 'Smart India Hackathon – Internal Winner',
    org: 'Raahi – Smart Women Safety System',
    time: 'Hackathon',
    points: [
      'Rapid prototyping of IoT + AI enabled safety stack',
      'Systems design, telemetry, and alert pipelines',
    ],
  },
  {
    title: 'Workflow Automation (Real-Estate)',
    org: 'n8n powered',
    time: 'Automation',
    points: [
      'Lead routing, enrichment, and follow-up bots',
      'Dashboards and notification orchestration',
    ],
  },
];

const projects = [
  {
    title: 'Cryptocurrency Price Predictor',
    subtitle: 'LSTM + Visualization',
    description:
      'Time-series pipeline forecasting short-term price movements using LSTM with interactive visual analytics.',
    tech: ['Python', 'TensorFlow', 'Pandas', 'Plotly'],
    metric: 'MAE ↓ ~2.3%',
  },
  {
    title: 'Agentic Network Ops Assistant',
    subtitle: 'Operational Copilot',
    description:
      'Conversational agent for log parsing, anomaly detection, and remediation runbooks for networks.',
    tech: ['FastAPI', 'Python', 'LLM', 'Vector Search'],
    metric: 'Resolution time ↓ 35%',
  },
  {
    title: 'Raahi – Safety System',
    subtitle: 'IoT + Alerts',
    description:
      'End-to-end prototype: device telemetry, geofencing, and alerting with secure data flows.',
    tech: ['n8n', 'Node', 'Cloud Functions'],
    metric: 'Internal round winner',
  },
];

function Card({ children }) {
  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl dark:bg-black/20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10" />
        <div className="absolute -inset-20 rotate-12 bg-[radial-gradient(180px_60px_at_0%_0%,rgba(34,211,238,0.35),transparent_70%)]" />
      </div>
      {children}
    </motion.div>
  );
}

export default function Showcase() {
  return (
    <section id="work" className="relative mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">Experience & Projects</h2>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-neutral-100 backdrop-blur-md transition hover:bg-white/20 dark:bg-black/20"
        >
          <Github className="h-4 w-4" /> View GitHub
        </a>
      </div>

      {/* Experience timeline */}
      <div className="relative mb-12 grid gap-4 md:grid-cols-3">
        {experiences.map((exp) => (
          <Card key={exp.title}>
            <div className="flex items-start gap-3">
              <Server className="mt-1 h-5 w-5 text-cyan-300" />
              <div>
                <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                <p className="text-sm text-neutral-300">{exp.org} • {exp.time}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-neutral-300">{p.subtitle}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-cyan-300">
                <Globe className="h-4 w-4" />
                <span>{p.metric}</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-neutral-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2 py-0.5 text-xs text-cyan-200 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="pointer-events-none mt-4 flex items-center gap-3 text-[10px] uppercase tracking-wider text-neutral-400">
              <Code className="h-3 w-3" /> Problem → Approach → Engineering → AI → Results
            </div>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {['SIH Internal Winner', 'Top IoT Prototype', 'Community Contributor'].map((a) => (
          <Card key={a}>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-purple-300" />
              <span className="text-sm text-neutral-200">{a}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Subtle mech icon easter eggs */}
      <div className="pointer-events-none absolute right-8 top-8 hidden h-10 w-10 rotate-12 rounded-lg border border-cyan-400/30 md:block" />
      <div className="pointer-events-none absolute bottom-8 left-8 hidden h-8 w-8 -rotate-6 rounded-lg border border-purple-400/30 md:block" />
    </section>
  );
}
