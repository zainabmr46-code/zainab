import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function CTABanner() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-black/8 px-8 py-16 text-center">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(139,124,246,0.25), transparent 55%), radial-gradient(circle at 75% 80%, rgba(255,122,69,0.18), transparent 55%)",
              }}
            />
            <h2 className="font-display text-3xl sm:text-4xl text-mist mb-4">
              Have a project in mind?
            </h2>
            <p className="text-mist-dim max-w-xl mx-auto mb-8">
              I'm currently taking on a small number of freelance builds and open to
              full-time conversations. Let's talk about what you're making.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} className="inline-block">
              <Link
                to="/contact"
                className="px-7 py-3 rounded-full bg-signal text-ink font-medium hover:shadow-glow transition-shadow inline-block"
              >
                Start a conversation
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
