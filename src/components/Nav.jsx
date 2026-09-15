import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "../data/content";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/articles", label: "Articles" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between backdrop-blur-md bg-ink/70 border-b border-black/6">
        <NavLink
          to="/"
          className="font-display text-lg tracking-tight text-mist hover:text-signal transition-colors"
          onClick={() => setOpen(false)}
        >
          {profile.name.split(" ")[0]}
          <span className="text-signal">.</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-signal" : "text-mist-dim hover:text-mist"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-mist"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-ink/95 border-b border-black/6"
          >
            <div className="flex flex-col gap-1 px-6 py-4 font-mono text-sm">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-2 transition-colors ${
                      isActive ? "text-signal" : "text-mist-dim hover:text-mist"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
