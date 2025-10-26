import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";

const blurDataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2P8/5+hHgAGgwJIqZPknwAAAABJRU5ErkJggg==";

export function HeroSection() {
  return (
    <Section id="hero" className="pt-[var(--space-2xl)] md:pt-[var(--space-3xl)]">
      <Container className="relative flex flex-col gap-[var(--space-xl)] md:gap-[var(--space-2xl)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[clamp(7rem,18vw,11rem)] left-[clamp(-2rem,-4vw,-1rem)] hidden aspect-square w-[clamp(220px,38vw,360px)] opacity-10 md:block"
        >
          <Image
            src="/images/logo.png"
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, 360px"
            className="object-contain"
            placeholder="blur"
            blurDataURL={blurDataUrl}
            priority
          />
        </div>
        <FadeIn className="mx-auto max-w-[min(760px,92vw)] space-y-[var(--space-md)] text-center md:mx-0 md:text-left">
          <Typography variant="label" className="text-accent/70">
            Swiss Private Equity Firm · Est. 2015
          </Typography>
          <Typography
            variant="display"
            className="text-foreground"
            style={{ textWrap: "balance" }}
          >
            Building enduring lifestyle platforms with the precision of Swiss
            entrepreneurship.
          </Typography>
          <Typography
            variant="subheading"
            muted
            className="max-w-[72ch]"
            style={{ textWrap: "balance" }}
          >
            BE Capital SA partners with visionary founders redefining leisure, real
            estate, and digital commerce. Our founder-led heritage—responsible for more
            than CHF 2&nbsp;billion in value creation—lets us invest decisively, support
            operational excellence, and compound outcomes over decades.
          </Typography>
          <div className="text-foreground/70 flex flex-wrap items-center justify-center gap-3 text-[0.74rem] font-semibold tracking-[0.3em] uppercase md:justify-start">
            <a
              href="#contact"
              className="hover:text-foreground flex items-center gap-1 transition-colors"
            >
              Schedule a briefing
              <span aria-hidden>→</span>
            </a>
            <span aria-hidden className="bg-border/70 hidden h-[1px] w-6 md:inline" />
            <a
              href="#approach"
              className="hover:text-foreground flex items-center gap-1 transition-colors"
            >
              Investment philosophy
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="text-muted/75 flex flex-col items-center gap-2 text-sm md:flex-row md:flex-wrap md:justify-start md:gap-4 md:text-left">
            <span>CHF 2.0 Bn+ value created</span>
            <span aria-hidden className="text-muted/50 hidden md:inline">
              ·
            </span>
            <span>Leisure · Living · Commerce</span>
            <span aria-hidden className="text-muted/50 hidden md:inline">
              ·
            </span>
            <span>Buy &amp; hold horizon of 12+ years</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div className="overflow-hidden rounded-[28px] bg-white md:rounded-[36px]">
            <div className="relative aspect-[7/8] w-full overflow-hidden md:aspect-[5/3]">
              <Image
                src="/images/hero-lifestyle.png"
                alt="Founders discussion in a Swiss alpine setting"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="h-full w-full object-cover"
                placeholder="blur"
                blurDataURL={blurDataUrl}
                priority
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
