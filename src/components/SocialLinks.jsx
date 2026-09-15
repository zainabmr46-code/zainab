import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { socialLinks } from "../data/content";

const icons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  "Twitter/X": Twitter,
  Instagram: Instagram,
  YouTube: Youtube,
};

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((s) => {
        const Icon = icons[s.label] || Github;
        return (
          <motion.a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            whileHover={{ y: -3, color: "#8B7CF6" }}
            className="text-mist-dim hover:text-signal transition-colors"
          >
            <Icon size={19} strokeWidth={1.6} />
          </motion.a>
        );
      })}
    </div>
  );
}
