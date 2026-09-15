import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";

// Each route gets its own distinct transition personality.
const variantsByPath = {
  "/": {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  "/projects": {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -60 },
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  "/articles": {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  "/resume": {
    initial: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    animate: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
    exit: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
    transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
  },
  "/contact": {
    initial: { opacity: 0, clipPath: "circle(0% at 50% 0%)" },
    animate: { opacity: 1, clipPath: "circle(150% at 50% 0%)" },
    exit: { opacity: 0, clipPath: "circle(0% at 50% 0%)" },
    transition: { duration: 0.55, ease: [0.65, 0, 0.35, 1] },
  },
};

export default function PageShell({ path, children }) {
  const reduced = useReducedMotion();
  const v = variantsByPath[path] || variantsByPath["/"];

  if (reduced) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={v.initial}
      animate={v.animate}
      exit={v.exit}
      transition={v.transition}
    >
      {children}
    </motion.div>
  );
}
