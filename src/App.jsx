import { useRef, useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

export default function App() {
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [darkMode]);

  const scrollTo = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-[#0b0e17] dark:text-white">
      <Hero
        onScrollToWork={() => scrollTo(workRef)}
        onScrollToContact={() => scrollTo(contactRef)}
        darkMode={darkMode}
        toggleDark={() => setDarkMode((v) => !v)}
      />

      <About />

      <div ref={workRef}>
        <Showcase />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <footer className="mx-auto w-full max-w-6xl px-6 pb-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="mt-4 flex flex-col items-center justify-between gap-3 text-sm text-neutral-400 sm:flex-row">
          <span>© {new Date().getFullYear()} Ayush Nema</span>
          <span className="opacity-80">Built with curiosity — Mechatronics × AI</span>
        </div>
      </footer>
    </div>
  );
}
