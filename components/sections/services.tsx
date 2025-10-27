"use client";

import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils/cn";
import { useLocaleContent } from "@/components/context/locale-context";

const blurDataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2P8/5+hHgAGgwJIqZPknwAAAABJRU5ErkJggg==";

export function ServicesSection() {
  const { dictionary } = useLocaleContent();
  const services = dictionary.services;

  return (
    <Section id="services">
      <Container className="space-y-[var(--space-xl)]">
        <FadeIn className="space-y-[var(--space-sm)]">
          <Typography variant="label" className="text-accent/70">
            {services.label}
          </Typography>
          <Typography variant="headline" className="max-w-[66ch]">
            {services.title}
          </Typography>
          <Typography variant="body" muted className="max-w-[70ch]">
            {services.description}
          </Typography>
        </FadeIn>
        <div className="space-y-[var(--space-xl)]">
          {services.items.map((service, index) => (
            <FadeIn
              key={service.title}
              delay={index * 0.06}
              className={cn(
                "flex flex-col gap-[var(--space-lg)] md:flex-row md:items-center",
                index % 2 === 1 ? "md:flex-row-reverse" : undefined
              )}
            >
              <div className="space-y-3 text-center md:w-1/2 md:text-left">
                <Typography variant="subheading" className="text-foreground">
                  {service.title}
                </Typography>
                <Typography variant="body" muted style={{ textWrap: "balance" }}>
                  {service.description}
                </Typography>
              </div>
              <div className="relative aspect-[3/2] w-full md:w-1/2">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
