import { useCallback, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import useReducedMotion from "../hooks/useReducedMotion";
import useIsMobile from "../hooks/useIsMobile";

export default function ParticleField() {
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      particles: {
        number: {
          value: isMobile ? 30 : 70,
          density: { enable: true, area: 900 },
        },
        color: { value: ["#6D5EF0", "#8B7CF6", "#FF6F5E"] },
        opacity: { value: { min: 0.25, max: 0.6 } },
        size: { value: { min: 1, max: 2.4 } },
        links: {
          enable: true,
          distance: 120,
          color: "#6D5EF0",
          opacity: 0.14,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: true,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: !isMobile, mode: "grab" },
          resize: true,
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.35 } },
        },
      },
      detectRetina: true,
    }),
    [isMobile]
  );

  // Skip the animated field entirely for reduced-motion users;
  // show a faint static gradient instead.
  if (reduced) {
    return (
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(109,94,240,0.12), transparent 60%), radial-gradient(circle at 80% 60%, rgba(255,111,94,0.08), transparent 55%)",
        }}
      />
    );
  }

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={options}
    />
  );
}
