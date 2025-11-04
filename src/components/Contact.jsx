import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto w-full max-w-6xl px-6 py-20">
      {/* Mesh gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-70">
        <div className="mx-auto h-64 w-full max-w-4xl rounded-[40px] bg-[radial-gradient(400px_120px_at_20%_40%,rgba(34,211,238,0.2),transparent),radial-gradient(400px_120px_at_80%_60%,rgba(168,85,247,0.2),transparent)] blur-2xl" />
      </div>

      <div className="relative z-10 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">Let’s build the future</h2>
          <p className="mt-3 max-w-md text-neutral-700 dark:text-neutral-300">
            Open to internships, research collaborations, and impactful projects in AI, automation, and mechatronic systems.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="mailto:ayush@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-neutral-100 backdrop-blur-md transition hover:bg-white/20 dark:bg-black/20"
            >
              <Mail className="h-4 w-4" /> ayush@example.com
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-neutral-100 backdrop-blur-md transition hover:bg-white/20 dark:bg-black/20"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-neutral-100 backdrop-blur-md transition hover:bg-white/20 dark:bg-black/20"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl dark:bg-black/30"
        >
          <div className="grid gap-4">
            <div>
              <label className="mb-1 block text-sm text-neutral-300">Name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 dark:bg-black/30"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 dark:bg-black/30"
                placeholder="you@domain.com"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300">Message</label>
              <textarea
                rows="4"
                className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 dark:bg-black/30"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-purple-400"
              type="submit"
            >
              Send Message
            </motion.button>
          </div>

          {/* Footer line animation */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </form>
      </div>
    </section>
  );
}
