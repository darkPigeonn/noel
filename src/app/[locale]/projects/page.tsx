import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/constants";
import { getProjectsJsonLd, getBreadcrumbJsonLd } from "@/lib/jsonLd";
import ProjectsContent from "./ProjectsContent";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.metadata.projectsTitle,
    description: dict.metadata.projectsDescription,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${params.locale}/projects`,
      languages: {
        en: `${SITE_CONFIG.url}/en/projects`,
        id: `${SITE_CONFIG.url}/id/projects`,
      },
    },
    openGraph: {
      title: `${dict.metadata.projectsTitle} — ${SITE_CONFIG.name}`,
      description: dict.metadata.projectsDescription,
      url: `${SITE_CONFIG.url}/${params.locale}/projects`,
      type: "website",
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  const projects = dict.projects.items.map((item) => ({
    title: item.title,
    description: item.solution,
    technologies: item.technologies,
  }));
  const projectsJsonLd = getProjectsJsonLd(params.locale, projects);

  const breadcrumbJsonLd = getBreadcrumbJsonLd(params.locale, [
    {
      name: params.locale === "id" ? "Beranda" : "Home",
      href: `/${params.locale}`,
    },
    {
      name: params.locale === "id" ? "Proyek" : "Projects",
      href: `/${params.locale}/projects`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <ProjectsContent dict={dict} />
    </>
  );
}
