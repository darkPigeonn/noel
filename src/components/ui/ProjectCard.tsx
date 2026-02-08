"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, FolderOpen } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  image?: string;
  index: number;
  labels?: {
    challenge: string;
    solution: string;
    impact: string;
  };
}

export default function ProjectCard({
  title,
  category,
  problem,
  solution,
  impact,
  technologies,
  image,
  index,
  labels,
}: ProjectCardProps) {
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
      className="glass-card-hover overflow-hidden group"
    >
      {/* Project Image */}
      <div className="relative w-full h-48 md:h-56 bg-neutral-900 overflow-hidden">
        {/*
          📸 GANTI SCREENSHOT PROYEK DI SINI
          Letakkan gambar di: public/images/projects/[nama-proyek].jpg
          Ukuran yang disarankan: 800x450px (16:9) atau 800x500px
        */}
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary-950/50 to-neutral-900">
            <FolderOpen
              size={40}
              className="text-primary-600/30 mb-2"
              strokeWidth={1}
            />
            <span className="text-xs text-neutral-600">Screenshot</span>
          </div>
        )}
        {/* Category badge on image */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-neutral-950/70 backdrop-blur-sm text-primary-400 text-xs font-medium border border-white/[0.06]">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            {title}
          </h3>
          <div className="p-2 rounded-lg bg-white/[0.03] group-hover:bg-primary-600/20 transition-colors shrink-0 ml-3">
            <ArrowUpRight
              size={18}
              className="text-neutral-500 group-hover:text-primary-400 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-4 text-sm leading-relaxed">
          <div>
            <span className="text-red-400/80 font-medium text-xs uppercase tracking-wider">
              {labels?.challenge ?? "Challenge"}
            </span>
            <p className="text-neutral-400 mt-1">{problem}</p>
          </div>
          <div>
            <span className="text-primary-400/80 font-medium text-xs uppercase tracking-wider">
              {labels?.solution ?? "Solution"}
            </span>
            <p className="text-neutral-300 mt-1">{solution}</p>
          </div>
          <div>
            <span className="text-emerald-400/80 font-medium text-xs uppercase tracking-wider">
              {labels?.impact ?? "Impact"}
            </span>
            <p className="text-emerald-300/80 mt-1 font-medium">{impact}</p>
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
      </div>
    </motion.div>
  );
}
