import Image from "next/image";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils/cn";

const blurDataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2P8/5+hHgAGgwJIqZPknwAAAABJRU5ErkJggg==";

const services = [
  {
    title: "Leisure & Hospitality Platforms",
    description:
      "We acquire and scale destination concepts that blend hospitality, wellness, and curated experiences, elevating them into defensible lifestyle ecosystems.",
    image: {
      src: "/images/services-leisure.png",
      alt: "Luxury alpine resort terrace at sunset",
    },
  },
  {
    title: "Living & Real Assets",
    description:
      "From urban residences to alpine retreats, we reposition real estate with data-informed capital programs that unlock new revenue layers and long-term resilience.",
    image: {
      src: "/images/services-living.png",
      alt: "Minimalist penthouse living room with Swiss lake view",
    },
  },
  {
    title: "Digital Commerce & Experiences",
    description:
      "We back omnichannel brands and infrastructure that connect physical venues with digital journeys, compounding engagement across markets and modalities.",
    image: {
      src: "/images/services-digital.png",
      alt: "Premium workspace with digital analytics display",
    },
  },
  {
    title: "Buy & Hold Stewardship",
    description:
      "Our evergreen capital structure supports 12+ year ownership horizons, embedding operational talent, governance, and succession planning to sustain momentum.",
    image: {
      src: "/images/hero-lifestyle.png",
      alt: "Executive meeting overlooking Swiss mountains",
    },
  },
] as const;

export function ServicesSection() {
  return (
    <Section id="services">
      <Container className="space-y-[var(--space-xl)]">
        <FadeIn className="space-y-[var(--space-sm)]">
          <Typography variant="label" className="text-accent/70">
            Investment Themes
          </Typography>
          <Typography variant="headline" className="max-w-[66ch]">
            Focused mandates where experiential living, property, and digital commerce
            intersect.
          </Typography>
          <Typography variant="body" muted className="max-w-[70ch]">
            We pursue control and reference minority positions across Europe, scaling
            platforms through disciplined roll-ups, organic growth engines, and precise
            capital programs.
          </Typography>
        </FadeIn>
        <div className="space-y-[var(--space-xl)]">
          {services.map((service, index) => (
            <FadeIn
              key={service.title}
              delay={index * 0.06}
              className={cn(
                "flex flex-col gap-[var(--space-md)] rounded-[32px] bg-white/70 p-[clamp(1.8rem,4vw,2.8rem)] shadow-[0_12px_32px_rgba(17,17,17,0.05)] backdrop-blur",
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row",
                "md:items-center md:gap-[var(--space-xl)]",
              )}
            >
              <div className="space-y-3 md:w-1/2">
                <Typography variant="subheading" className="text-foreground">
                  {service.title}
                </Typography>
                <Typography variant="body" muted style={{ textWrap: "balance" }}>
                  {service.description}
                </Typography>
              </div>
              <div className="border-border/60 relative aspect-[3/2] w-full overflow-hidden rounded-[26px] border bg-white md:w-1/2">
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
