"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Dictionary } from "@/i18n/dictionaries";

interface CTAProps {
  dict: Dictionary;
}

export default function CTA({ dict }: CTAProps) {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-950/30 via-neutral-950 to-neutral-950" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {dict.cta.title}{" "}
            <span className="gradient-text">{dict.cta.titleHighlight}</span>
            {"titleEnd" in dict.cta
              ? (dict.cta as Record<string, string>).titleEnd
              : "?"}
          </h2>
          <p className="mt-5 text-lg text-neutral-400 leading-relaxed">
            {dict.cta.description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-600/20"
            >
              <MessageCircle size={18} />
              {dict.cta.whatsapp}
            </a>
            <a
              href={SITE_CONFIG.links.email}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-neutral-300 font-medium hover:bg-white/[0.08] hover:text-white transition-all"
            >
              <Mail size={18} />
              {dict.cta.email}
            </a>
            <a
              href={SITE_CONFIG.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-neutral-300 font-medium hover:bg-white/[0.08] hover:text-white transition-all"
            >
              <Linkedin size={18} />
              {dict.cta.linkedin}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
