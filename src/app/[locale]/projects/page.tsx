import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
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
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  return <ProjectsContent dict={dict} />;
}

