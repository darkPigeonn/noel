"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { techStack } from "@/data/techStack";
import type { Dictionary } from "@/i18n/dictionaries";

interface TechStackProps {
  dict: Dictionary;
}

export default function TechStack({ dict }: TechStackProps) {
  return (
    <section id="tech" className="py-20 md:py-32">
      <div className="container-custom">
        <SectionHeading
          label={dict.techStack.label}
          title={dict.techStack.title}
          description={dict.techStack.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, catIndex) => (
            <AnimatedSection key={category.category} delay={catIndex * 0.1}>
              <div className="glass-card p-6 md:p-8 h-full">
                <h3 className="text-lg font-semibold text-white mb-5">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((item) => (
                    <span
                      key={item.name}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        item.level === "primary"
                          ? "bg-primary-600/10 text-primary-400 border border-primary-500/20"
                          : "bg-white/[0.04] text-neutral-400 border border-white/[0.06]"
                      }`}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
