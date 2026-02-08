"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { techStack } from "@/data/techStack";
import CTA from "@/components/sections/CTA";
import type { Dictionary } from "@/i18n/dictionaries";

const serviceIcons = [
  "Globe",
  "Building2",
  "LayoutDashboard",
  "Calculator",
  "Users",
  "Smartphone",
  "Zap",
] as const;

import {
  Globe,
  Building2,
  LayoutDashboard,
  Calculator,
  Users,
  Smartphone,
  Zap,
} from "lucide-react";

const iconMap = {
  Globe,
  Building2,
  LayoutDashboard,
  Calculator,
  Users,
  Smartphone,
  Zap,
};

export default function ServicesContent({ dict }: { dict: Dictionary }) {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-16"
          >
            <span className="inline-block text-primary-400 text-sm font-medium tracking-wider uppercase mb-3">
              {dict.services.label}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {dict.services.title}
            </h1>
            <p className="mt-4 text-neutral-400 text-lg leading-relaxed">
              {dict.services.description}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dict.services.items.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={iconMap[serviceIcons[index]]}
                title={service.title}
                problem={service.problem}
                solution={service.solution}
                benefit={service.benefit}
                technologies={service.technologies}
                index={index}
              />
            ))}
          </div>

          {/* Process Section */}
          <AnimatedSection className="mt-20 md:mt-32">
            <div className="text-center mb-12">
              <span className="inline-block text-primary-400 text-sm font-medium tracking-wider uppercase mb-3">
                {dict.services.processLabel}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {dict.services.processTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {dict.services.processSteps.map((item, index) => (
                <AnimatedSection key={item.step} delay={index * 0.1}>
                  <div className="glass-card p-6 text-center h-full">
                    <span className="text-3xl font-bold text-primary-600/30">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-3 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Tech Stack */}
          <AnimatedSection className="mt-20 md:mt-32">
            <div className="text-center mb-12">
              <span className="inline-block text-primary-400 text-sm font-medium tracking-wider uppercase mb-3">
                {dict.services.techLabel}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {dict.services.techTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((category, catIndex) => (
                <AnimatedSection key={category.category} delay={catIndex * 0.1}>
                  <div className="glass-card p-6 h-full">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item.name}
                          className={`px-3 py-1.5 rounded-lg text-sm ${
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
          </AnimatedSection>
        </div>
      </section>

      <CTA dict={dict} />
    </>
  );
}

