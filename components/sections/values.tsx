"use client";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";
import { useLocaleContent } from "@/components/context/locale-context";

export function ValuesSection() {
  const { dictionary } = useLocaleContent();
  const values = dictionary.values;

  return (
    <Section id="values">
      <Container className="space-y-[var(--space-lg)]">
        <FadeIn className="space-y-[var(--space-sm)] text-center md:text-left">
          <Typography variant="label" className="text-accent/70">
            {values.label}
          </Typography>
          <Typography variant="headline" className="mx-auto max-w-[60ch] md:mx-0">
            {values.title}
          </Typography>
        </FadeIn>
        <ul className="grid gap-[var(--space-lg)] md:grid-cols-2">
          {values.items.map((value, index) => (
            <li key={value.name} className="list-none">
              <FadeIn
                delay={index * 0.05}
                className="border-border/60 space-y-3 border-t pt-[var(--space-md)] text-center first:border-t-0 first:pt-0 md:text-left"
              >
                <Typography variant="subheading" className="text-foreground">
                  {value.name}
                </Typography>
                <Typography variant="body" muted style={{ textWrap: "balance" }}>
                  {value.description}
                </Typography>
              </FadeIn>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
