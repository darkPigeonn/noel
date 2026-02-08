import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/constants";
import { getServicesJsonLd, getBreadcrumbJsonLd } from "@/lib/jsonLd";
import ServicesContent from "./ServicesContent";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.metadata.servicesTitle,
    description: dict.metadata.servicesDescription,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${params.locale}/services`,
      languages: {
        en: `${SITE_CONFIG.url}/en/services`,
        id: `${SITE_CONFIG.url}/id/services`,
      },
    },
    openGraph: {
      title: `${dict.metadata.servicesTitle} — ${SITE_CONFIG.name}`,
      description: dict.metadata.servicesDescription,
      url: `${SITE_CONFIG.url}/${params.locale}/services`,
      type: "website",
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  const services = dict.services.items.map((item) => ({
    title: item.title,
    description: item.solution,
  }));
  const servicesJsonLd = getServicesJsonLd(params.locale, services);

  const breadcrumbJsonLd = getBreadcrumbJsonLd(params.locale, [
    {
      name: params.locale === "id" ? "Beranda" : "Home",
      href: `/${params.locale}`,
    },
    {
      name: params.locale === "id" ? "Layanan" : "Services",
      href: `/${params.locale}/services`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <ServicesContent dict={dict} />
    </>
  );
}
