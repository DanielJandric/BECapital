import { PageLayout } from "@/components/layout/page-layout";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ApproachSection } from "@/components/sections/approach";
import { ValuesSection } from "@/components/sections/values";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <ValuesSection />
    </PageLayout>
  );
}
