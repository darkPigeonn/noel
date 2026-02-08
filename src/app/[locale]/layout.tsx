import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { i18n, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);

  return {
    title: {
      default: dict.metadata.title,
      template: `%s — ${SITE_CONFIG.name}`,
    },
    description: dict.metadata.description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: `${SITE_CONFIG.url}/${params.locale}`,
      languages: {
        en: `${SITE_CONFIG.url}/en`,
        id: `${SITE_CONFIG.url}/id`,
      },
    },
    openGraph: {
      type: "website",
      locale: params.locale === "id" ? "id_ID" : "en_US",
      url: `${SITE_CONFIG.url}/${params.locale}`,
      title: dict.metadata.title,
      description: dict.metadata.description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: dict.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: [SITE_CONFIG.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;

  if (!i18n.locales.includes(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="antialiased">
        <Navbar locale={locale} dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}

