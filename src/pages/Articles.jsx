import { ArrowUpRight } from "lucide-react";
import Reveal, { RevealStagger, RevealItem } from "../components/Reveal";
import { articles } from "../data/content";

export default function Articles() {
  return (
    <section className="pt-36 pb-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="font-mono text-xs text-signal mb-3">// writing</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl sm:text-5xl text-mist mb-6">
            Featured articles
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-mist-dim max-w-xl mb-14">
            Notes on front-end engineering, motion design, and whatever I'm stuck on
            this month. Cross-posted from Dev.to, Hashnode, and Medium.
          </p>
        </Reveal>

        <RevealStagger className="divide-y divide-black/6 border-t border-b border-black/6">
          {articles.map((a) => (
            <RevealItem key={a.title}>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-6 py-7"
              >
                <div>
                  <p className="font-mono text-xs text-mist-faint mb-2">
                    {a.source} · {new Date(a.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </p>
                  <h2 className="font-display text-xl sm:text-2xl text-mist group-hover:text-signal transition-colors mb-2">
                    {a.title}
                  </h2>
                  <p className="text-mist-dim text-sm leading-relaxed max-w-2xl">{a.excerpt}</p>
                </div>
                <ArrowUpRight
                  className="shrink-0 text-mist-faint group-hover:text-signal transition-colors mt-1"
                  size={20}
                />
              </a>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
