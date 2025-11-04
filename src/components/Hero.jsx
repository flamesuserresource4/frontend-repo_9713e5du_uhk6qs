import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero({ onScrollToWork, onScrollToContact, darkMode, toggleDark }) {
  const [isLowPower, setIsLowPower] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsLowPower(media.matches);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] w-full overflow-hidden bg-[radial-gradient(1000px_600px_at_10%_10%,rgba(56,189,248,0.15),transparent),radial-gradient(900px_500px_at_90%_20%,rgba(168,85,247,0.12),transparent)] dark:bg-[radial-gradient(1000px_600px_at_10%_10%,rgba(56,189,248,0.15),transparent),radial-gradient(900px_500px_at_90%_20%,rgba(168,85,247,0.18),transparent)]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        {!isLowPower ? (
          <Spline
            scene="https://prod.spline.design/ltqg6Vv4z8D7QkJh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className="h-full w-full" />
        )}
      </div>

      {/* Glow gradients (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      {/* Top bar */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-white/10 backdrop-blur-md ring-1 ring-white/20 dark:bg-black/20" />
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Ayush Nema</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-neutral-100 backdrop-blur-md transition hover:bg-white/20 dark:bg-black/20"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
          <button
            onClick={onScrollToContact}
            className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-purple-400"
          >
            Let’s Connect
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[70svh] w-full max-w-6xl flex-col items-start justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-md dark:bg-black/20"
        >
          <Sparkles className="h-4 w-4 text-cyan-400" />
          Mechatronics x AI — Batch 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-4 text-4xl font-semibold leading-tight text-neutral-900 dark:text-white sm:text-6xl md:text-7xl"
        >
          Ayush Nema
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Engineering Intelligent Systems
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-base text-neutral-700 dark:text-neutral-300 sm:text-lg"
        >
          Focused on agentic automation, generative models, network operations, and emerging tech. Building where hardware meets neural intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={onScrollToWork}
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur-md transition hover:bg-cyan-500/20"
          >
            Know My Work
            <Rocket className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={onScrollToContact}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-purple-400"
          >
            Let’s Connect
          </button>
        </motion.div>
      </div>

      {/* Idle particle lines (data streams) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 overflow-hidden">
        <div className="animate-[float_6s_ease-in-out_infinite] mx-auto h-px w-[90%] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="animate-[float_7s_ease-in-out_infinite] mx-auto mt-6 h-px w-[70%] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        <div className="animate-[float_8s_ease-in-out_infinite] mx-auto mt-6 h-px w-[80%] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>

      <style>{`
        @keyframes float { 0%,100%{ transform: translateY(0)} 50%{ transform: translateY(-6px)} }
      `}</style>
    </section>
  );
}
