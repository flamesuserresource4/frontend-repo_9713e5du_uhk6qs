import { motion } from 'framer-motion';
import { Cpu, Bot, CircuitBoard, Cloud } from 'lucide-react';

const skills = [
  { icon: Cpu, label: 'Embedded & Sensors' },
  { icon: CircuitBoard, label: 'Hardware Integration' },
  { icon: Bot, label: 'Agents & Automation' },
  { icon: Cpu, label: 'AI/ML (LSTM, GenAI)' },
  { icon: Cloud, label: 'Cloud & Deployments' },
];

export default function About() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 p-1 backdrop-blur-md">
            <div className="h-full w-full rounded-[22px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.15),rgba(192,132,252,0.15),rgba(34,211,238,0.15))]" />
            {/* Subtle gear easter egg */}
            <div className="pointer-events-none absolute -left-6 -top-6 h-20 w-20 animate-spin-slow rounded-full border border-cyan-400/30" />
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 animate-spin-slow rounded-full border border-purple-400/30" />
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">About</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            I’m Ayush, a Mechatronics engineering student (Batch 2026) drawn to the frontier where physical systems meet intelligent software. My curiosity led me from embedded systems to agentic frameworks, generative models, and network observability — building decision platforms and workflow automation that feel alive.
          </p>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            I explore agent-driven automation, LSTM-based forecasting, and full‑stack systems that connect sensors to cloud to AI. I love turning complex systems into elegant, reliable products.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-neutral-100 backdrop-blur-md dark:bg-black/20"
              >
                <Icon className="h-4 w-4 text-cyan-300" />
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 14s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
