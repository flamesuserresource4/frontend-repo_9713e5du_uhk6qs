import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">About</h2>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">Who I am & how I work</span>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-neutral-700 dark:text-neutral-300">
              I craft futuristic web experiences blending clean engineering with cinematic visuals. My focus is on
              performance, accessibility, and delightful interaction—turning ambitious ideas into polished products.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                '3D/product sites with real-time interaction',
                'Design systems and component libraries',
                'Responsive, accessible, fast by default',
                'Animations that serve UX, not distract',
              ].map((item) => (
                <li key={item} className="rounded-xl border border-neutral-200/60 bg-white p-4 text-sm text-neutral-800 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-violet-200/60 bg-violet-50 p-4 text-violet-900 dark:border-violet-900/40 dark:bg-violet-900/20 dark:text-violet-200">
              <p className="text-sm">Currently available for select collaborations and freelance projects.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">Tech Stack</p>
              <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">React, Three.js/Spline, Tailwind, FastAPI, MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
