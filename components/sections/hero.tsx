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
      <Container className="relative grid gap-[var(--space-xl)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-end">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[clamp(6rem,18vw,12rem)] left-[clamp(-2rem,-6vw,-4rem)] aspect-square w-[clamp(240px,40vw,420px)] opacity-15"
        >
          <Image
            src="/images/logo.png"
            alt=""
            fill
            sizes="(max-width: 768px) 60vw, 420px"
            className="object-contain"
            priority
          />
        </div>
        <FadeIn className="space-y-[var(--space-md)]">
          <Typography variant="label" className="text-accent/80">
            Swiss Private Equity Firm {"\u00B7"} Est. 2015
          </Typography>
          <Typography
            variant="display"
            className="text-foreground"
            style={{ textWrap: "balance" }}
          >
            Scaling enduring platforms in leisure, real estate, and e-commerce.
          </Typography>
          <Typography
            variant="subheading"
            muted
            className="max-w-[82ch]"
            style={{ textWrap: "balance" }}
          >
            Founded in 2015, BE Capital SA extends the legacy of its founder&apos;s
            three-decade entrepreneurial track record, creating more than CHF
            2&nbsp;billion in net value. We back category-shaping operators where
            lifestyle and living converge, pairing capital with governance and operational
            empathy to build resilient, globally minded businesses.
          </Typography>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild>
              <a href="#contact">Engage our deal team</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#approach">Discover our philosophy</a>
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="relative flex flex-col gap-[var(--space-md)]">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-transparent p-[var(--space-lg)] shadow-[0_50px_120px_rgba(0,0,0,0.4)]">
            <Typography variant="headline" style={{ textWrap: "balance" }}>
              From founder-led growth to evergreen ownership.
            </Typography>
            <Typography
              variant="body"
              muted
              className="mt-6"
              style={{ textWrap: "balance" }}
            >
              Our story began with hospitality concepts, landmark residences, and digital
              commerce ventures built from the ground up. Today that same team deploys
              patient capital with a buy-and-hold mindset: we underwrite beyond fund
              cycles, broaden leadership benches, and compound value through purposeful
              operational sequencing.
            </Typography>
            <div className="mt-[var(--space-lg)] flex flex-wrap items-center gap-[var(--space-md)]">
              <div>
                <Typography variant="label" className="text-accent/80">
                  Value Created
                </Typography>
                <Typography variant="headline">CHF 2.0 Bn+</Typography>
              </div>
              <div className="h-12 w-px bg-white/10" aria-hidden="true" />
              <div>
                <Typography variant="label" className="text-accent/80">
                  Ownership Horizon
                </Typography>
                <Typography variant="headline">12+ years</Typography>
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
                Our Heritage
              </Typography>
              <Typography variant="body" muted style={{ textWrap: "balance" }}>
                Born from the Investis family office, BE Capital evolved into a private
                equity firm focused on lifestyle infrastructure. We now steward platforms
                across resorts, residential communities, and omnichannel commerce,
                partnering with founders to accelerate growth without sacrificing the DNA
                that made them exceptional.
              </Typography>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
