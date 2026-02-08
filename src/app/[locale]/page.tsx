import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getBreadcrumbJsonLd } from "@/lib/jsonLd";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WorkStyle from "@/components/sections/WorkStyle";
import CTA from "@/components/sections/CTA";

export default async function Home({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const breadcrumbJsonLd = getBreadcrumbJsonLd(params.locale, [
    {
      name: params.locale === "id" ? "Beranda" : "Home",
      href: `/${params.locale}`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <Hero dict={dict} locale={params.locale} />
      <About dict={dict} />
      <Services dict={dict} />
      <TechStack dict={dict} />
      <FeaturedProjects dict={dict} locale={params.locale} />
      <WorkStyle dict={dict} />
      <CTA dict={dict} />
    </>
  );
}
