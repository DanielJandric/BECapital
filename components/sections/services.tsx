import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";

const services = [
  {
    title: "Wealth Management",
    description:
      "Bespoke portfolio construction aligned to long-term objectives, balancing preservation with calibrated growth.",
  },
  {
    title: "Estate Planning",
    description:
      "Multi-jurisdictional structuring that safeguards legacy and ensures seamless intergenerational transitions.",
  },
  {
    title: "Tax Advisory",
    description:
      "Strategic tax intelligence across Swiss and international frameworks to optimize outcomes without compromising compliance.",
  },
  {
    title: "Philanthropic Planning",
    description:
      "Purpose-led giving strategies that reflect family values, leveraging governance frameworks and measurable impact.",
  },
] as const;

export function ServicesSection() {
  return (
    <Section id="services">
      <Container className="space-y-[var(--space-lg)]">
        <FadeIn className="grid gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.1fr)] md:items-end md:gap-[var(--space-xl)]">
          <div className="space-y-4 md:space-y-[var(--space-sm)]">
            <Typography variant="label" className="text-accent/80">
              Capabilities
            </Typography>
            <Typography variant="headline" className="max-w-[68ch]">
              Holistic stewardship anchored in discretion and disciplined risk management.
            </Typography>
          </div>
          <Typography variant="body" muted className="max-w-[70ch]">
            Each mandate is tailored to family dynamics, governance, and desired impact.
            Our team orchestrates specialists while remaining your single point of
            accountability.
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
