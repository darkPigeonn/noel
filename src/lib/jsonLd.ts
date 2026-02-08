import { SITE_CONFIG } from "./constants";
import type { Locale } from "@/i18n/config";

/**
 * Person schema — tells Google who you are
 */
export function getPersonJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.fullName,
    url: `${SITE_CONFIG.url}/${locale}`,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.profileImage}`,
    jobTitle:
      locale === "id"
        ? "Pengembang Full-Stack Web & Mobile"
        : "Full-Stack Web & Mobile Developer",
    description:
      locale === "id"
        ? "Pengembang Full-Stack dengan 5+ tahun pengalaman membangun sistem web & mobile yang scalable untuk menyederhanakan operasional organisasi."
        : "Full-Stack Developer with 5+ years of experience building scalable web & mobile systems that simplify operations and grow organizations.",
    email: "nrio2864@gmail.com",
    telephone: "+6285735071598",
    sameAs: [
      SITE_CONFIG.links.linkedin,
      SITE_CONFIG.links.github,
      SITE_CONFIG.links.whatsapp,
    ],
    knowsAbout: [
      "Web Development",
      "Mobile Development",
      "ERP Systems",
      "CMS Development",
      "Financial Systems",
      "HR & Payroll Systems",
      "Next.js",
      "Nuxt.js",
      "Vue.js",
      "React",
      "Node.js",
      "Flutter",
      "PostgreSQL",
      "Firebase",
      "TypeScript",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };
}

/**
 * WebSite schema — helps Google understand your site structure
 */
export function getWebSiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: `${SITE_CONFIG.url}/${locale}`,
    description: SITE_CONFIG.description,
    inLanguage: locale === "id" ? "id-ID" : "en-US",
    author: {
      "@type": "Person",
      name: SITE_CONFIG.fullName,
    },
  };
}

/**
 * Service schema — for /services page, helps Google show services in results
 */
export function getServicesJsonLd(
  locale: Locale,
  services: { title: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name:
      locale === "id"
        ? "Layanan Pengembangan Web & Mobile"
        : "Web & Mobile Development Services",
    description:
      locale === "id"
        ? "Layanan pengembangan sistem custom termasuk ERP, CMS, sistem keuangan, HR, aplikasi mobile, dan otomasi."
        : "Custom system development services including ERP, CMS, financial systems, HR, mobile apps, and automation.",
    url: `${SITE_CONFIG.url}/${locale}/services`,
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Person",
          name: SITE_CONFIG.fullName,
          url: `${SITE_CONFIG.url}/${locale}`,
        },
      },
    })),
  };
}

/**
 * Projects/Portfolio schema — for /projects page
 */
export function getProjectsJsonLd(
  locale: Locale,
  projects: { title: string; description: string; technologies: string[] }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "id" ? "Portofolio Proyek" : "Project Portfolio",
    description:
      locale === "id"
        ? "Studi kasus proyek web & mobile yang telah dibangun oleh Noel Rio."
        : "Case studies of web & mobile projects built by Noel Rio.",
    url: `${SITE_CONFIG.url}/${locale}/projects`,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        creator: {
          "@type": "Person",
          name: SITE_CONFIG.fullName,
        },
        keywords: project.technologies.join(", "),
      },
    })),
  };
}

/**
 * ContactPage schema — for /contact page
 */
export function getContactJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: locale === "id" ? "Hubungi Noel Rio" : "Contact Noel Rio",
    description:
      locale === "id"
        ? "Hubungi Noel Rio untuk proyek pengembangan web & mobile. Tersedia untuk kerja remote dan proyek freelance."
        : "Get in touch with Noel Rio for web & mobile development projects. Available for remote work and freelance projects.",
    url: `${SITE_CONFIG.url}/${locale}/contact`,
    mainEntity: {
      "@type": "Person",
      name: SITE_CONFIG.fullName,
      email: "nrio2864@gmail.com",
      telephone: "+6285735071598",
      url: `${SITE_CONFIG.url}/${locale}`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "nrio2864@gmail.com",
        telephone: "+6285735071598",
        availableLanguage: ["English", "Indonesian"],
      },
    },
  };
}

/**
 * BreadcrumbList schema — helps Google show breadcrumbs in search
 */
export function getBreadcrumbJsonLd(
  locale: Locale,
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.href}`,
    })),
  };
}

