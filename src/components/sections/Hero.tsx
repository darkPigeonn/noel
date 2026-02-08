"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface HeroProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Hero({ dict, locale }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-950/40 via-neutral-950 to-neutral-950" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-custom relative z-10 py-32 md:py-40">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {dict.hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              {dict.hero.headline}{" "}
              <span className="gradient-text">
                {dict.hero.headlineHighlight}
              </span>{" "}
              {dict.hero.headlineEnd}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl"
            >
              {dict.hero.subheadline}
            </motion.p>

            {/* Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {dict.hero.specializations.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-neutral-400 text-sm"
                >
                  {spec}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-500 transition-all hover:shadow-lg hover:shadow-primary-600/20"
              >
                {dict.hero.ctaPrimary}
                <ArrowRight size={18} />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-neutral-300 font-medium hover:bg-white/[0.08] hover:text-white transition-all"
              >
                {dict.hero.ctaSecondary}
              </Link>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary-500/20 via-primary-600/10 to-transparent blur-sm" />
              {/* Photo container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/[0.08] bg-neutral-900">
                {/*
                  📸 GANTI FOTO PROFIL KAMU DI SINI
                  Letakkan foto kamu di: public/images/profile/photo.jpg
                  Ukuran yang disarankan: 400x400px atau lebih besar (persegi)
                */}
                <Image
                  src="/images/profile/me.png"
                  alt="Noel - Full-Stack Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-primary-500 border-4 border-neutral-950" />
              <div className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-emerald-400 border-4 border-neutral-950" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-neutral-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
