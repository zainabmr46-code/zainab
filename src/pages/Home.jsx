import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import StatusWidget from "../components/sections/StatusWidget";
import CTABanner from "../components/sections/CTABanner";
import Reveal, { RevealStagger, RevealItem } from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { projects, codingProfiles } from "../data/content";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <StatusWidget />

      <section className="relative py-28 border-t border-black/6">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <Reveal>
                <p className="font-mono text-xs text-signal mb-3">// selected work</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-3xl sm:text-4xl text-mist">Featured projects</h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link
                to="/projects"
                className="hidden sm:inline-block font-mono text-sm text-mist-dim hover:text-signal transition-colors"
              >
                view all →
              </Link>
            </Reveal>
          </div>
          <RevealStagger className="grid sm:grid-cols-2 gap-6">
            {featured.map((p) => (
              <RevealItem key={p.id}>
                <ProjectCard project={p} />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <CTABanner />

      <section className="relative py-28 border-t border-black/6">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="font-mono text-xs text-signal mb-3">// coding profiles</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl sm:text-4xl text-mist mb-10">
              Where I keep score
            </h2>
          </Reveal>
          <RevealStagger className="grid sm:grid-cols-3 gap-6">
            {codingProfiles.map((c) => (
              <RevealItem key={c.platform}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-black/8 bg-ink-soft p-6 hover:border-signal/40 transition-colors"
                >
                  <p className="font-display text-lg text-mist mb-1">{c.platform}</p>
                  <p className="font-mono text-xs text-mist-faint mb-4">{c.handle}</p>
                  <p className="font-mono text-sm text-signal-dim">{c.stat}</p>
                </a>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
    </>
  );
}
