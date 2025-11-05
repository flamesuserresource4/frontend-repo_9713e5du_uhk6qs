import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-white py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">Contact</h2>
        <p className="mx-auto mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
          Have a project in mind or want to collaborate? Let’s build something remarkable.
        </p>
        <div className="mt-8 inline-flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="mailto:hello@ayushnema.dev?subject=Let's%20work%20together"
            className="rounded-full bg-violet-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:scale-[1.02] hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300"
          >
            Email Me
          </a>
          <a
            href="#home"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-semibold text-neutral-900 backdrop-blur transition hover:scale-[1.02] hover:bg-white/10 dark:text-white"
          >
            Back to Top
          </a>
        </div>
      </div>
    </section>
  );
}
