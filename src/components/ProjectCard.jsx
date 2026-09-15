import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden border border-black/8 bg-ink-soft hover:border-signal/40 hover:shadow-glow transition-[border-color,box-shadow] duration-300"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl text-mist mb-2">{project.title}</h3>
        <p className="text-mist-dim text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2.5 py-1 rounded-full bg-black/4 text-mist-dim"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-5 font-mono text-sm">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-signal-dim hover:text-signal transition-colors"
          >
            <ExternalLink size={15} /> Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-mist-dim hover:text-mist transition-colors"
          >
            <Github size={15} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
