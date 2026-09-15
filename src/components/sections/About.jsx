import { motion } from "framer-motion";
import Reveal, { RevealStagger, RevealItem } from "../Reveal";
import { bio, skills, profile } from "../../data/content";

export default function About() {
  return (
    <section id="about" className="relative py-28 border-t border-black/6">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16">
        <div>
          <Reveal>
            <p className="font-mono text-xs text-signal mb-3">// about</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl sm:text-4xl text-mist mb-6">
              The short version
            </h2>
          </Reveal>

          {profile.photoUrl && (
            <Reveal delay={0.08}>
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-black/8 mb-6 shadow-glow">
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          )}

          <Reveal delay={0.1}>
            <p className="text-mist-dim leading-relaxed whitespace-pre-line">{bio}</p>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="font-mono text-xs text-signal mb-3">// stack</p>
          </Reveal>
          <RevealStagger className="space-y-5" stagger={0.08}>
            {skills.map((s) => (
              <RevealItem key={s.name}>
                <div className="flex justify-between text-sm mb-2 font-mono">
                  <span className="text-mist">{s.name}</span>
                  <span className="text-mist-faint">{s.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-ink-raised bg-black/4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-signal-dim to-signal"
                  />
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
