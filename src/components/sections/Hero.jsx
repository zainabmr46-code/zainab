import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import ParticleField from "../ParticleField";
import Scene3D from "../Scene3D";
import StatCounter from "../StatCounter";
import { profile, heroStats } from "../../data/content";
import useReducedMotion from "../../hooks/useReducedMotion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid-fade">
      <ParticleField />

      <div className="mx-auto max-w-6xl px-6 w-full pt-28 pb-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <motion.div
          variants={reduced ? undefined : container}
          initial={reduced ? undefined : "hidden"}
          animate={reduced ? undefined : "show"}
        >
          <motion.p
            variants={reduced ? undefined : item}
            className="font-mono text-sm text-signal mb-5 flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            {profile.status}
          </motion.p>

          <motion.h1
            variants={reduced ? undefined : item}
            className="font-display text-5xl sm:text-6xl leading-[1.05] tracking-tight text-mist"
          >
           Hi, I'm <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={reduced ? undefined : item}
            className="mt-4 font-display text-xl sm:text-2xl text-signal-dim"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={reduced ? undefined : item}
            className="mt-6 text-mist-dim text-lg leading-relaxed max-w-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={reduced ? undefined : item} className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-full bg-signal text-white font-medium hover:shadow-glow transition-shadow"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full border border-black/10 text-mist hover:border-signal hover:text-signal transition-colors"
            >
              Hire Me
            </Link>
            <a
              href={profile.resumeUrl}
              download
              className="px-6 py-3 rounded-full text-mist-dim hover:text-mist transition-colors font-mono text-sm self-center"
            >
              ↓ Resume
            </a>
          </motion.div>

          <motion.div
            variants={reduced ? undefined : item}
            className="mt-16 flex flex-wrap gap-x-12 gap-y-6"
          >
            {heroStats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </motion.div>
        </motion.div>

        {profile.photoUrl && (
          <motion.div
            initial={reduced ? undefined : { opacity: 0, scale: 0.9 }}
            animate={reduced ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm aspect-square"
          >
            <div className="absolute inset-0">
              <Scene3D />
            </div>
            <div
              aria-hidden
              className="absolute inset-6 rounded-full blur-2xl opacity-40"
              style={{
                background:
                  "radial-gradient(circle, rgba(109,94,240,0.5), rgba(255,111,94,0.25) 60%, transparent 75%)",
              }}
            />
            <div className="absolute inset-10 rounded-full overflow-hidden border-4 border-white shadow-glow">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        aria-hidden
        animate={reduced ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist-faint"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
