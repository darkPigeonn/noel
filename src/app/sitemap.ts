import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { i18n } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/projects", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.8 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of i18n.locales) {
      const alternateLanguages: Record<string, string> = {};
      for (const altLocale of i18n.locales) {
        alternateLanguages[altLocale] =
          `${SITE_CONFIG.url}/${altLocale}${route.path}`;
      }
      // Add x-default pointing to English
      alternateLanguages["x-default"] =
        `${SITE_CONFIG.url}/en${route.path}`;

      entries.push({
        url: `${SITE_CONFIG.url}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: alternateLanguages,
        },
      });
    }
  }

  return entries;
}
