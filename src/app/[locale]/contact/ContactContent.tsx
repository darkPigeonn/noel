"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Linkedin,
  Github,
  Clock,
  Globe,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE_CONFIG } from "@/lib/constants";
import type { Dictionary } from "@/i18n/dictionaries";

export default function ContactContent({ dict }: { dict: Dictionary }) {
  const contactMethods = [
    {
      icon: MessageCircle,
      label: dict.contact.whatsapp,
      description: dict.contact.whatsappDesc,
      value: dict.contact.whatsappAction,
      href: SITE_CONFIG.links.whatsapp,
      color: "bg-emerald-600 hover:bg-emerald-500",
      external: true,
    },
    {
      icon: Mail,
      label: dict.contact.emailLabel,
      description: dict.contact.emailDesc,
      value: "nrio2864@gmail.com",
      href: SITE_CONFIG.links.email,
      color: "bg-primary-600 hover:bg-primary-500",
      external: false,
    },
    {
      icon: Linkedin,
      label: dict.contact.linkedinLabel,
      description: dict.contact.linkedinDesc,
      value: dict.contact.linkedinAction,
      href: SITE_CONFIG.links.linkedin,
      color: "bg-blue-600 hover:bg-blue-500",
      external: true,
    },
    {
      icon: Github,
      label: dict.contact.githubLabel,
      description: dict.contact.githubDesc,
      value: dict.contact.githubAction,
      href: SITE_CONFIG.links.github,
      color: "bg-neutral-700 hover:bg-neutral-600",
      external: true,
    },
  ];

  return (
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
            {dict.contact.label}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {dict.contact.title}{" "}
            <span className="gradient-text">{dict.contact.titleHighlight}</span>
          </h1>
          <p className="mt-4 text-neutral-400 text-lg leading-relaxed">
            {dict.contact.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Methods */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <h2 className="text-xl font-semibold text-white mb-6">
                {dict.contact.reachOut}
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <AnimatedSection key={method.label} delay={index * 0.1}>
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="glass-card-hover p-6 flex flex-col h-full group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${method.color} flex items-center justify-center text-white mb-4 transition-colors`}
                    >
                      <method.icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {method.label}
                    </h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      {method.description}
                    </p>
                    <span className="mt-auto pt-4 text-sm text-primary-400 font-medium group-hover:text-primary-300 transition-colors">
                      {method.value} →
                    </span>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            {/* Availability */}
            <AnimatedSection delay={0.4} className="mt-8">
              <div className="glass-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <h3 className="text-lg font-semibold text-white">
                    {dict.contact.available}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3 text-neutral-400">
                    <Clock size={16} className="text-neutral-600 shrink-0" />
                    <span>{dict.contact.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-400">
                    <Globe size={16} className="text-neutral-600 shrink-0" />
                    <span>{dict.contact.remote}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="text-lg font-semibold text-white mb-5">
                  {dict.contact.idealTitle}
                </h3>
                <div className="space-y-3.5">
                  {dict.contact.idealClients.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-neutral-400"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-primary-500 mt-0.5 shrink-0"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="mt-6">
              <div className="glass-card p-6 md:p-8">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {dict.contact.nextTitle}
                </h3>
                <ol className="space-y-3 text-sm text-neutral-400">
                  {dict.contact.nextSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary-500 font-bold shrink-0">
                        {idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

