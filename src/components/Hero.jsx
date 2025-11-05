import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(168,85,247,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300/80">Portfolio — Ayush Nema</p>
        <h1 className="mt-3 bg-gradient-to-r from-white via-violet-100 to-violet-300 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl md:text-7xl">
          Futuristic Interfaces, Real-World Impact
        </h1>
        <p className="mt-5 max-w-2xl text-base text-violet-100/90 sm:text-lg">
          Building immersive, high-performance web experiences with a sleek, holographic aesthetic.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#showcase"
            className="rounded-full bg-violet-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:scale-[1.02] hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-semibold text-white backdrop-blur transition hover:scale-[1.02] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
