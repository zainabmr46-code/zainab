import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import Reveal from "../components/Reveal";
import { profile } from "../data/content";

export default function Resume() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <section className="pt-36 pb-28 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-xs text-signal mb-3">// resume</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl sm:text-5xl text-mist mb-6">
            One PDF, everything you need
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-mist-dim max-w-xl mx-auto mb-10">
            Experience, stack, and a couple of links. Download it directly or preview
            it first.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-signal text-ink font-medium hover:shadow-glow transition-shadow"
            >
              <Download size={18} /> Download resume
            </a>
            <button
              onClick={() => setPreviewOpen(true)}
              className="px-7 py-3 rounded-full border border-black/10 text-mist hover:border-signal hover:text-signal transition-colors"
            >
              Preview first
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 font-mono text-xs text-mist-faint">
            Replace <code className="text-mist-dim">/public/resume.pdf</code> with your
            own file — the link above points there already.
          </p>
        </Reveal>
      </div>

      <AnimatePresence>
        {previewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setPreviewOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl h-[80vh] bg-ink-soft rounded-2xl border border-black/8 overflow-hidden"
            >
              <button
                onClick={() => setPreviewOpen(false)}
                aria-label="Close preview"
                className="absolute top-4 right-4 z-10 text-mist-dim hover:text-mist"
              >
                <X size={22} />
              </button>
              <iframe
                src={profile.resumeUrl}
                title="Resume preview"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
