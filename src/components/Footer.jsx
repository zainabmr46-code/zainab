import { profile } from "../data/content";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="relative border-t border-black/6 mt-32">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-mist-faint">
          © {new Date().getFullYear()} {profile.name} — built with React, Framer Motion &amp; Three.js
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
