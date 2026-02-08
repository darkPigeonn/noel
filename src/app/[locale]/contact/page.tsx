import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/constants";
import { getContactJsonLd, getBreadcrumbJsonLd } from "@/lib/jsonLd";
import ContactContent from "./ContactContent";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.metadata.contactTitle,
    description: dict.metadata.contactDescription,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${params.locale}/contact`,
      languages: {
        en: `${SITE_CONFIG.url}/en/contact`,
        id: `${SITE_CONFIG.url}/id/contact`,
      },
    },
    openGraph: {
      title: `${dict.metadata.contactTitle} — ${SITE_CONFIG.name}`,
      description: dict.metadata.contactDescription,
      url: `${SITE_CONFIG.url}/${params.locale}/contact`,
      type: "website",
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  const contactJsonLd = getContactJsonLd(params.locale);
  const breadcrumbJsonLd = getBreadcrumbJsonLd(params.locale, [
    {
      name: params.locale === "id" ? "Beranda" : "Home",
      href: `/${params.locale}`,
    },
    {
      name: params.locale === "id" ? "Kontak" : "Contact",
      href: `/${params.locale}/contact`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <ContactContent dict={dict} />
    </>
  );
}
