import { PageLayout } from "@/components/layout/page-layout";
import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <PageLayout>
      <section className="py-[var(--space-section-mobile)] md:py-[var(--space-section-desktop)]">
        <Container className="space-y-6">
          <div className="h-4 w-32 animate-pulse rounded-full bg-white/10" />
          <div className="h-12 w-3/4 animate-pulse rounded-full bg-white/10" />
          <div className="h-4 w-1/2 animate-pulse rounded-full bg-white/10" />
        </Container>
      </section>
      <section className="py-[var(--space-section-mobile)] md:py-[var(--space-section-desktop)]">
        <Container className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-40 animate-pulse rounded-[24px] border border-white/10 bg-white/5"
            />
          ))}
        </Container>
      </section>
    </PageLayout>
  );
}
