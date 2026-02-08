import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { i18n } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/projects", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of i18n.locales) {
    for (const route of routes) {
      entries.push({
        url: `${SITE_CONFIG.url}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "/contact" ? "yearly" : "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
