import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const blurDataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2P8/5+hHgAGgwJIqZPknwAAAABJRU5ErkJggg==";

export function HeroSection() {
  return (
    <Section id="hero" className="pt-[var(--space-3xl)]">
      <Container className="grid gap-[var(--space-xl)] md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <FadeIn className="space-y-[var(--space-md)]">
          <Typography variant="label" className="text-accent/80">
            Swiss Family Office \u00B7 Est. 2015
          </Typography>
          <Typography variant="display" className="max-w-[74ch]">
            Preserving and growing generational wealth with quiet conviction.
          </Typography>
          <Typography variant="subheading" muted className="max-w-[72ch]">
            BE Capital SA partners with families and founders to steward capital over
            generations, blending disciplined allocation with Swiss precision and
            discretion.
          </Typography>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild>
              <a href="#contact">Engage our advisors</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#approach">Discover our approach</a>
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="relative flex flex-col gap-[var(--space-md)]">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-transparent p-[var(--space-lg)] shadow-[0_50px_120px_rgba(0,0,0,0.4)]">
            <Typography variant="headline" className="max-w-sm">
              A discreet partner for families seeking clarity amid complexity.
            </Typography>
            <Typography variant="body" muted className="mt-6 max-w-lg">
              Our advisory lens is shaped by decades of ownership, patient capital, and
              the conviction that measured risk-taking underpins enduring prosperity.
            </Typography>
            <div className="mt-[var(--space-lg)] flex flex-wrap items-center gap-[var(--space-md)]">
              <div>
                <Typography variant="label" className="text-accent/80">
                  AuM (CHF)
                </Typography>
                <Typography variant="headline">2.4 Bn+</Typography>
              </div>
              <div className="h-12 w-px bg-white/10" aria-hidden="true" />
              <div>
                <Typography variant="label" className="text-accent/80">
                  Investment Horizon
                </Typography>
                <Typography variant="headline">30+ years</Typography>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <Image
              src="/images/logo.png"
              alt="BE Capital monogram"
              width={54}
              height={54}
              className="h-12 w-12 rounded-full border border-white/20 bg-black/60 object-cover"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              priority
            />
            <div className="space-y-1">
              <Typography variant="label" className="text-foreground/80">
                Our Legacy
              </Typography>
              <Typography variant="body" muted>
                Born from the Investis heritage, we combine entrepreneurial rigor with
                institutional discipline.
              </Typography>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
