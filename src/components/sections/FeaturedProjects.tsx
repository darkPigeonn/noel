"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface FeaturedProjectsProps {
  dict: Dictionary;
  locale: Locale;
}

export default function FeaturedProjects({
  dict,
  locale,
}: FeaturedProjectsProps) {
  const featured = dict.projects.items.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 md:py-32 bg-white/[0.01]">
      <div className="container-custom">
        <SectionHeading
          label={dict.projects.label}
          title={dict.projects.title}
          description={dict.projects.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, index) => (
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

        <AnimatedSection className="mt-12 text-center">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-neutral-300 font-medium hover:bg-white/[0.08] hover:text-white transition-all"
          >
            {dict.projects.viewAll}
            <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
