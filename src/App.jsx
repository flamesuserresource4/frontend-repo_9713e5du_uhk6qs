import React, { useEffect, useState } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Showcase from './components/Showcase.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // Initialize theme based on system or default to dark
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = localStorage.getItem('theme') ?? (prefersDark ? 'dark' : 'light');
    setDark(initial === 'dark');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-neutral-100">
      {/* Top Nav */}
      <header className="fixed left-0 right-0 top-0 z-50 mx-auto max-w-6xl px-6 py-4">
        <nav className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/60 px-4 py-2 backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/60">
          <a href="#home" className="text-sm font-semibold tracking-wide text-neutral-800 dark:text-neutral-100">
            AYUSH NEMA
          </a>
          <div className="flex items-center gap-3">
            <a href="#about" className="hidden rounded-full px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 sm:block">About</a>
            <a href="#showcase" className="hidden rounded-full px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 sm:block">Work</a>
            <a href="#contact" className="hidden rounded-full px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 sm:block">Contact</a>
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="rounded-full border border-white/20 bg-white/70 px-3 py-1 text-sm font-medium text-neutral-800 shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-neutral-800/70 dark:text-neutral-100 dark:hover:bg-neutral-800"
            >
              {dark ? 'Dark' : 'Light'}
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <Hero />
        <About />
        <Showcase />
        <Contact />
      </main>

      <footer className="border-t border-neutral-200/60 bg-white py-6 text-center text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400">
        © {new Date().getFullYear()} Ayush Nema. All rights reserved.
      </footer>
    </div>
  );
}
