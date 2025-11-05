import React from 'react';

const projects = [
  {
    title: 'Holographic Dashboard',
    desc: 'A real-time analytics interface with cinematic motion and neon accents.',
    tags: ['React', 'Tailwind', 'Motion'],
  },
  {
    title: 'Interactive Product Launch',
    desc: '3D product experience with scroll-driven storytelling and highlights.',
    tags: ['Spline', 'Three.js', 'UX'],
  },
  {
    title: 'AI Assistant Overlay',
    desc: 'Conversational overlay with keyboard nav, command palette, and memory.',
    tags: ['FastAPI', 'RAG', 'UI'],
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative w-full bg-neutral-50 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">Showcase</h2>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">Selected work</span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/10 blur-2xl" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-violet-300/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-700 dark:border-violet-900/40 dark:bg-violet-900/30 dark:text-violet-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
