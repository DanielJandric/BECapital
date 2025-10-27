"use client";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";
import { useLocaleContent } from "@/components/context/locale-context";

export function ApproachSection() {
  const { dictionary } = useLocaleContent();
  const approach = dictionary.approach;

  return (
    <Section id="approach" className="rounded-[40px] bg-white/70">
      <Container className="space-y-[var(--space-xl)] py-[clamp(2.4rem,6vw,4rem)]">
        <FadeIn className="space-y-[var(--space-sm)] text-center md:text-left">
          <Typography variant="label" className="text-accent/70">
            {approach.label}
          </Typography>
          <Typography variant="headline" className="mx-auto max-w-[62ch] md:mx-0">
            {approach.title}
          </Typography>
          <Typography variant="body" muted className="mx-auto max-w-[68ch] md:mx-0">
            {approach.description}
          </Typography>
        </FadeIn>
        <ol className="space-y-[var(--space-lg)]">
          {approach.pillars.map((pillar, index) => (
            <FadeIn
              key={pillar.title}
              delay={index * 0.06}
              className="border-border/60 flex flex-col gap-4 border-t pt-[var(--space-lg)] text-center first:border-t-0 first:pt-0 md:flex-row md:items-start md:gap-[var(--space-md)] md:text-left"
            >
              <span className="text-muted text-sm font-semibold tracking-[0.32em] md:w-32">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mx-auto max-w-[66ch] space-y-3 md:mx-0">
                <Typography variant="subheading" className="text-foreground">
                  {pillar.title}
                </Typography>
                <Typography variant="body" muted style={{ textWrap: "balance" }}>
                  {pillar.detail}
                </Typography>
              </div>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
