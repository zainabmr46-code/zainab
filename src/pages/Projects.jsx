import { useMemo, useState } from "react";
import Reveal, { RevealStagger, RevealItem } from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/content";

export default function Projects() {
  const allTags = useMemo(() => {
    const s = new Set();
    projects.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return ["All", ...Array.from(s)];
  }, []);

  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <section className="pt-36 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs text-signal mb-3">// projects</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl sm:text-5xl text-mist mb-6">
            Things I've built
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-mist-dim max-w-xl mb-10">
            A mix of client work and personal experiments — filter by stack to find
            what's relevant to you.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-2 mb-12">
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-colors ${
                  active === t
                    ? "bg-signal text-ink border-signal"
                    : "border-black/10 text-mist-dim hover:border-signal/50 hover:text-mist"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        <RevealStagger className="grid sm:grid-cols-2 gap-6" key={active}>
          {filtered.map((p) => (
            <RevealItem key={p.id}>
              <ProjectCard project={p} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
