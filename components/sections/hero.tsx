"use client";

import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";
import { useLocaleContent } from "@/components/context/locale-context";

const blurDataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2P8/5+hHgAGgwJIqZPknwAAAABJRU5ErkJggg==";

export function HeroSection() {
  const { dictionary } = useLocaleContent();
  const hero = dictionary.hero;

  return (
    <Section id="hero" className="pt-[var(--space-2xl)] md:pt-[var(--space-3xl)]">
      <Container className="relative flex flex-col gap-[var(--space-xl)] md:gap-[var(--space-2xl)]">
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-start">
          <div
            className="relative aspect-square w-[clamp(180px,55vw,360px)]"
            style={{ opacity: hero.logoOpacity }}
          >
            <Image
              src="/images/logo.png"
              alt=""
              fill
              sizes="(max-width: 768px) 60vw, 360px"
              className="object-contain"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              priority
            />
          </div>
        </div>
        <FadeIn className="relative mx-auto max-w-[min(760px,92vw)] space-y-[var(--space-md)] text-center md:mx-0 md:text-left">
          <Typography variant="label" className="text-accent/70">
            {hero.badge}
          </Typography>
          <Typography
            variant="display"
            className="text-foreground"
            style={{ textWrap: "balance" }}
          >
            {hero.title}
          </Typography>
          <Typography
            variant="subheading"
            muted
            className="mx-auto max-w-[72ch] md:mx-0"
            style={{ textWrap: "balance" }}
          >
            {hero.description}
          </Typography>
          <div className="text-foreground/70 flex flex-wrap items-center justify-center gap-3 text-[0.74rem] font-semibold uppercase tracking-[0.3em] md:justify-start">
            <a
              href={hero.primaryCta.href}
              className="flex items-center gap-1 transition-colors hover:text-foreground"
            >
              {hero.primaryCta.label}
              <span aria-hidden>{"\u2192"}</span>
            </a>
          </div>
          <div className="text-muted/75 flex flex-col items-center gap-2 text-sm md:flex-row md:flex-wrap md:justify-start md:gap-4 md:text-left">
            {hero.highlights.map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-2">
                {item}
                {index < hero.highlights.length - 1 ? (
                  <span aria-hidden className="hidden text-muted/50 md:inline">
                    {"\u00b7"}
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div className="relative aspect-[7/8] w-full md:aspect-[5/3]">
            <Image
              src="/images/hero-lifestyle.png"
              alt={hero.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="h-full w-full object-cover"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              priority
            />
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

