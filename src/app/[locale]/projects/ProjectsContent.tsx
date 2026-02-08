"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import CTA from "@/components/sections/CTA";
import type { Dictionary } from "@/i18n/dictionaries";

export default function ProjectsContent({ dict }: { dict: Dictionary }) {
  const projects = dict.projects.items;
  const categories = [
    dict.projects.filterAll,
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const [activeCategory, setActiveCategory] = useState(
    dict.projects.filterAll
  );

  const filtered =
    activeCategory === dict.projects.filterAll
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <span className="inline-block text-primary-400 text-sm font-medium tracking-wider uppercase mb-3">
              {dict.projects.label}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {dict.projects.pageTitle}
            </h1>
            <p className="mt-4 text-neutral-400 text-lg leading-relaxed">
              {dict.projects.pageDescription}
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary-600 text-white"
                    : "bg-white/[0.04] border border-white/[0.06] text-neutral-400 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                problem={project.problem}
                solution={project.solution}
                impact={project.impact}
                technologies={project.technologies}
                image={project.image}
                index={index}
                labels={{
                  challenge: dict.projects.challengeLabel,
                  solution: dict.projects.solutionLabel,
                  impact: dict.projects.impactLabel,
                }}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500">{dict.projects.noProjects}</p>
            </div>
          )}
        </div>
      </section>

      <CTA dict={dict} />
    </>
  );
}

