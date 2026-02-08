import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.projects, href: `/${locale}/projects` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <footer
      className="border-t border-white/[0.06] bg-neutral-950"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href={`/${locale}`} className="text-xl font-bold text-white">
              {SITE_CONFIG.name}
              <span className="text-primary-400">.</span>
            </Link>
            <p className="mt-3 text-sm text-neutral-500 leading-relaxed max-w-xs">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="text-sm font-semibold text-white mb-4">
              {dict.footer.quickLinks}
            </h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-500 hover:text-primary-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {dict.footer.connect}
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={SITE_CONFIG.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer me"
                className="text-sm text-neutral-500 hover:text-primary-400 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={SITE_CONFIG.links.email}
                rel="me"
                className="text-sm text-neutral-500 hover:text-primary-400 transition-colors"
              >
                Email
              </a>
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer me"
                className="text-sm text-neutral-500 hover:text-primary-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer me"
                className="text-sm text-neutral-500 hover:text-primary-400 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            © {currentYear} {SITE_CONFIG.name}. {dict.footer.rights}
          </p>
          <p className="text-xs text-neutral-600">{dict.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
