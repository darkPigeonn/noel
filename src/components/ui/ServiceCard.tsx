"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
  benefit: string;
  technologies: string[];
  index: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  problem,
  solution,
  benefit,
  technologies,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="glass-card-hover p-6 md:p-8 group"
    >
      <div className="flex items-start gap-4 mb-5">
        <div className="p-3 rounded-xl bg-primary-600/10 text-primary-400 group-hover:bg-primary-600/20 transition-colors shrink-0">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold text-white pt-2">{title}</h3>
      </div>

      <div className="space-y-4 text-sm leading-relaxed">
        <div>
          <span className="text-red-400/80 font-medium text-xs uppercase tracking-wider">
            Problem
          </span>
          <p className="text-neutral-400 mt-1">{problem}</p>
        </div>
        <div>
          <span className="text-primary-400/80 font-medium text-xs uppercase tracking-wider">
            Solution
          </span>
          <p className="text-neutral-300 mt-1">{solution}</p>
        </div>
        <div>
          <span className="text-emerald-400/80 font-medium text-xs uppercase tracking-wider">
            Result
          </span>
          <p className="text-neutral-300 mt-1">{benefit}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] text-neutral-400 border border-white/[0.06]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

