"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  MessageSquare,
  GitBranch,
  Repeat,
  HeartHandshake,
} from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

const stepIcons = [MessageSquare, GitBranch, Repeat, HeartHandshake];

interface WorkStyleProps {
  dict: Dictionary;
}

export default function WorkStyle({ dict }: WorkStyleProps) {
  return (
    <section id="work-style" className="py-20 md:py-32">
      <div className="container-custom">
        <SectionHeading
          label={dict.workStyle.label}
          title={dict.workStyle.title}
          description={dict.workStyle.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.workStyle.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <AnimatedSection key={step.title} delay={index * 0.1}>
                <div className="glass-card-hover p-6 md:p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-600/10 text-primary-400 shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-primary-500/60">
                          0{index + 1}
                        </span>
                        <h3 className="text-lg font-semibold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
