"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { Code2, Lightbulb, RefreshCcw, Shield } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

const traitIcons = [Lightbulb, Code2, RefreshCcw, Shield];

interface AboutProps {
  dict: Dictionary;
}

export default function About({ dict }: AboutProps) {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container-custom">
        <SectionHeading
          label={dict.about.label}
          title={dict.about.title}
          align="center"
        />

        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="glass-card overflow-hidden">
              {/* Full-width Photo — original aspect ratio */}
              <div className="relative w-full bg-neutral-900">
                <Image
                  src="/images/profile/me.png"
                  alt="Noel"
                  width={896}
                  height={896}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>

              {/* About Text */}
              <div className="p-8 md:p-10 space-y-5 text-neutral-300 leading-relaxed">
                {dict.about.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Traits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.about.traits.map((trait, index) => {
            const Icon = traitIcons[index];
            return (
              <AnimatedSection key={trait.title} delay={index * 0.1}>
                <div className="glass-card-hover p-6 md:p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-primary-600/10 text-primary-400 shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {trait.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {trait.description}
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
