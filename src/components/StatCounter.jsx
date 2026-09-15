import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";

export default function StatCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const duration = 1100;
    const startTime = performance.now();

    let frame;
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduced]);

  return (
    <div ref={ref} className="text-left">
      <p className="font-display text-3xl sm:text-4xl text-mist tabular-nums">
        {count}
        {suffix}
      </p>
      <p className="font-mono text-xs text-mist-faint mt-1">{label}</p>
    </div>
  );
}
