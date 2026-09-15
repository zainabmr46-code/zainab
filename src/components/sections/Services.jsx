import { Code2, Server, MonitorSmartphone } from "lucide-react";
import Reveal, { RevealStagger, RevealItem } from "../Reveal";
import { services } from "../../data/content";

const icons = { Code2, Server, MonitorSmartphone };

export default function Services() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs text-signal mb-3">// what I do</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl sm:text-4xl text-mist mb-12">
            Where I can help
          </h2>
        </Reveal>

        <RevealStagger className="grid sm:grid-cols-3 gap-6" stagger={0.1}>
          {services.map((s) => {
            const Icon = icons[s.icon] || Code2;
            return (
              <RevealItem key={s.title}>
                <div className="h-full rounded-2xl border border-black/8 bg-ink-soft p-7 shadow-card hover:border-signal/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-signal/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-signal" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-lg text-mist mb-2">{s.title}</h3>
                  <p className="text-mist-dim text-sm leading-relaxed">{s.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
