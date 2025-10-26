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
        <FadeIn className="grid gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.1fr)] md:items-end md:gap-[var(--space-xl)]">
          <div className="space-y-4 md:space-y-[var(--space-sm)]">
            <Typography variant="label" className="text-accent/80">
              Investment Themes
            </Typography>
            <Typography variant="headline" className="max-w-[68ch]">
              A focused mandate where experiential living, property, and digital commerce
              intersect.
            </Typography>
          </div>
          <Typography variant="body" muted className="max-w-[70ch]">
            We pursue control positions and significant minorities in platforms ready to
            scale across Europe. Our team orchestrates acquisition roll-ups, organic
            growth, and capital programs while remaining the single point of
            accountability alongside founders and leadership teams.
          </Typography>
        </FadeIn>
        <div className="grid gap-[var(--space-md)] md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05}>
              <article className="group hover:border-accent/60 relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.04] p-[var(--space-lg)] backdrop-blur-xl transition-transform duration-200 ease-out hover:-translate-y-1 hover:bg-white/[0.06]">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="from-accent/12 absolute inset-0 bg-gradient-to-br via-transparent to-transparent" />
                </div>
                <Typography variant="subheading">{service.title}</Typography>
                <Typography variant="body" muted className="mt-4">
                  {service.description}
                </Typography>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
