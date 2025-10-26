import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";

const services = [
  {
    title: "Leisure & Hospitality Platforms",
    description:
      "We acquire and scale destination concepts that blend hospitality, wellness, and curated experiences, elevating them into defensible lifestyle ecosystems.",
  },
  {
    title: "Living & Real Assets",
    description:
      "From urban residences to alpine retreats, we reposition real estate with data-informed capital programs that unlock new revenue layers and long-term resilience.",
  },
  {
    title: "Digital Commerce & Experiences",
    description:
      "We back omnichannel brands and infrastructure that connect physical venues with digital journeys, compounding engagement across markets and modalities.",
  },
  {
    title: "Buy & Hold Stewardship",
    description:
      "Our evergreen capital structure supports 12+ year ownership horizons, embedding operational talent, governance, and succession planning to sustain momentum.",
  },
] as const;

export function ServicesSection() {
  return (
    <Section id="services">
      <Container className="space-y-[var(--space-lg)]">
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
        <div className="divide-border border-border/70 divide-y overflow-hidden rounded-[28px] border bg-white/70 shadow-[0_12px_36px_rgba(17,17,17,0.05)] backdrop-blur-sm">
          {services.map((service, index) => (
            <FadeIn
              key={service.title}
              delay={index * 0.06}
              className="group grid gap-3 px-[clamp(1.6rem,4vw,2.4rem)] py-[clamp(1.8rem,4vw,2.4rem)] transition hover:bg-white/90 md:grid-cols-[0.42fr_1fr]"
            >
              <Typography variant="subheading" className="text-foreground">
                {service.title}
              </Typography>
              <Typography variant="body" muted style={{ textWrap: "balance" }}>
                {service.description}
              </Typography>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
