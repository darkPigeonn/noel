"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface NavbarProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.projects, href: `/${locale}/projects` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  const otherLocale = locale === "en" ? "id" : "en";
  const otherLocaleLabel = locale === "en" ? "Indonesia" : "English";

  // Get current path without locale prefix
  const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
  const switchUrl = `/${otherLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsLangOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === `/${locale}`;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-950/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="text-xl font-bold text-white hover:text-primary-400 transition-colors"
        >
          {SITE_CONFIG.name}
          <span className="text-primary-400">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-primary-400 bg-primary-600/10"
                  : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="relative ml-2">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/[0.04] transition-colors"
              aria-label="Switch language"
            >
              <Languages size={16} />
              <span className="uppercase">{locale}</span>
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 bg-neutral-900 border border-white/[0.08] rounded-lg overflow-hidden shadow-xl min-w-[140px]"
                >
                  <Link
                    href={switchUrl}
                    onClick={() => {
                      document.cookie = `NEXT_LOCALE=${otherLocale};path=/;max-age=31536000`;
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-300 hover:bg-white/[0.06] hover:text-white transition-colors"
                  >
                    <span>{otherLocaleLabel}</span>
                    <span className="text-xs text-neutral-600 uppercase ml-auto">
                      {otherLocale}
                    </span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href={`/${locale}/contact`}
            className="ml-3 px-5 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-500 transition-colors"
          >
            {dict.nav.workWithMe}
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Lang Switcher */}
          <Link
            href={switchUrl}
            onClick={() => {
              document.cookie = `NEXT_LOCALE=${otherLocale};path=/;max-age=31536000`;
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-neutral-400 hover:text-white bg-white/[0.04] border border-white/[0.06] transition-colors"
          >
            <Languages size={14} />
            <span className="uppercase">{otherLocale}</span>
          </Link>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary-400 bg-primary-600/10"
                      : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/contact`}
                className="mt-2 px-5 py-3 rounded-lg bg-primary-600 text-white text-sm font-medium text-center hover:bg-primary-500 transition-colors"
              >
                {dict.nav.workWithMe}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
