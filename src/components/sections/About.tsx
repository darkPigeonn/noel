"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { Code2, Lightbulb, RefreshCcw, Shield, User } from "lucide-react";
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
            <div className="glass-card p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* About Photo */}
                <div className="shrink-0 mx-auto md:mx-0">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-white/[0.08] bg-neutral-900">
                    {/*
                      📸 FOTO ABOUT / PROFESIONAL
                      Letakkan foto di: public/images/profile/about.jpg
                      Ukuran yang disarankan: 400x400px
                    */}
                    <Image
                      src="/images/profile/about.jpg"
                      alt="Noel"
                      fill
                      className="object-cover"
                      sizes="192px"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    {/* Placeholder fallback */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-950 to-neutral-900">
                      <User
                        size={48}
                        className="text-primary-600/30"
                        strokeWidth={1}
                      />
                    </div>
                  </div>
                </div>

                {/* About Text */}
                <div className="space-y-5 text-neutral-300 leading-relaxed">
                  {dict.about.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
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
