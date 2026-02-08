import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { i18n, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/constants";
import { getPersonJsonLd, getWebSiteJsonLd } from "@/lib/jsonLd";
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
  const keywords =
    SITE_CONFIG.keywords[params.locale as keyof typeof SITE_CONFIG.keywords] ||
    SITE_CONFIG.keywords.en;

  return {
    title: {
      default: dict.metadata.title,
      template: `%s — ${SITE_CONFIG.name}`,
    },
    description: dict.metadata.description,
    keywords,
    authors: [{ name: SITE_CONFIG.fullName, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.fullName,
    publisher: SITE_CONFIG.fullName,
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
      alternateLocale: params.locale === "id" ? "en_US" : "id_ID",
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
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: [SITE_CONFIG.ogImage],
      creator: "@noel_dev",
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
    verification: {
      // Add your Google Search Console verification code here
      // google: "your-google-verification-code",
    },
    other: {
      "theme-color": "#0c93e7",
      "color-scheme": "dark",
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
  const personJsonLd = getPersonJsonLd(locale);
  const webSiteJsonLd = getWebSiteJsonLd(locale);

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0c93e7" />
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteJsonLd),
          }}
        />
        <Navbar locale={locale} dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
