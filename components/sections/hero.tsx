import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const blurDataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2P8/5+hHgAGgwJIqZPknwAAAABJRU5ErkJggg==";

const stats = [
  { label: "Value Created", figure: "CHF 2.0 Bn+" },
  { label: "Core Sectors", figure: "Leisure · Living · Commerce" },
  { label: "Ownership Horizon", figure: "12+ Years" },
] as const;

export function HeroSection() {
  return (
    <Section id="hero" className="pt-[var(--space-3xl)]">
      <Container className="relative flex flex-col gap-[var(--space-2xl)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[clamp(7rem,18vw,11rem)] left-[clamp(-2rem,-4vw,-1rem)] aspect-square w-[clamp(220px,38vw,360px)] opacity-10"
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
        <FadeIn className="max-w-[min(780px,92vw)] space-y-[var(--space-md)]">
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
            className="max-w-[78ch]"
            style={{ textWrap: "balance" }}
          >
            BE Capital SA partners with visionary founders redefining leisure, real
            estate, and digital commerce. Our founder-led heritage, responsible for more
            than CHF 2 billion in value creation, lets us invest decisively, support
            operational excellence, and compound outcomes over decades.
          </Typography>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button asChild className="px-7 py-3 text-xs md:text-sm">
              <a href="#contact">Schedule a private briefing</a>
            </Button>
            <Button asChild variant="ghost" className="px-7 py-3 text-xs md:text-sm">
              <a href="#approach">Our investment philosophy</a>
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="border-border/70 grid gap-6 rounded-[28px] border bg-white/80 p-[clamp(1.8rem,4vw,2.4rem)] shadow-[0_18px_50px_rgba(17,17,17,0.06)] backdrop-blur-sm md:grid-cols-3 md:gap-0">
            {stats.map((item) => (
              <div
                key={item.label}
                className="border-border/70 md:border-r-border/70 flex flex-col gap-2 border-b pb-6 last:border-b-0 last:pb-0 md:border-r md:border-b-0 md:px-[var(--space-md)] md:pb-0 md:last:border-r-0"
              >
                <Typography variant="label" className="text-muted">
                  {item.label}
                </Typography>
                <Typography
                  variant="headline"
                  className="text-foreground"
                  style={{ textWrap: "balance" }}
                >
                  {item.figure}
                </Typography>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn
          delay={0.12}
          className="border-border/60 overflow-hidden rounded-[32px] border shadow-[0_25px_60px_rgba(17,17,17,0.08)]"
        >
          <Image
            src="/images/hero-lifestyle.png"
            alt="Founders discussion in a Swiss alpine setting"
            width={1600}
            height={960}
            className="h-full w-full object-cover"
            placeholder="blur"
            blurDataURL={blurDataUrl}
            priority
          />
        </FadeIn>
      </Container>
    </Section>
  );
}
