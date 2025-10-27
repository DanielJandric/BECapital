import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/page-layout";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ApproachSection } from "@/components/sections/approach";
import { ValuesSection } from "@/components/sections/values";
import { isLocale } from "@/lib/i18n/dictionaries";

type LocalePageProps = {
  params: Promise<{ lang: string }>;
};

export default async function LocaleHome({ params }: LocalePageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <PageLayout>
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <ValuesSection />
    </PageLayout>
  );
}
