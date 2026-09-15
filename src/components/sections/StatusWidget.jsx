import Reveal from "../Reveal";
import { profile } from "../../data/content";

export default function StatusWidget() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-2xl border border-black/8 bg-ink-soft px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-signal/10 border border-signal/30 px-3 py-1 font-mono text-xs text-signal-dim shrink-0">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal" />
              </span>
              live status
            </span>
            <p className="text-mist-dim font-mono text-sm">{profile.currentlyLine}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
