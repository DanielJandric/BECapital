import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";

const values = [
  {
    name: "Entrepreneurial Grit",
    description:
      "We are builders at heart, comfortable navigating ambiguity and unlocking opportunity alongside founders and management teams.",
  },
  {
    name: "Disciplined Patience",
    description:
      "Our buy-and-hold mentality favours durable advantage over short-term optics. We compound value thoughtfully and release only when the thesis is complete.",
  },
  {
    name: "Aligned Ownership",
    description:
      "We co-invest materially, seat aligned governance, and ensure leadership incentives remain tied to the strategic arc.",
  },
  {
    name: "Experiential Insight",
    description:
      "Deep sector immersion across leisure, living, and digital commerce informs every decision, from concept curation to international rollout.",
  },
] as const;

export function ValuesSection() {
  return (
    <Section id="values">
      <Container className="space-y-[var(--space-lg)]">
        <FadeIn className="space-y-4">
          <Typography variant="label" className="text-accent/80">
            Values
          </Typography>
          <Typography variant="headline" className="max-w-[68ch]">
            Principles that guide how we partner, operate, and grow enduring platforms.
          </Typography>
          <Typography variant="body" muted className="max-w-[70ch]">
            Our culture is built on Swiss excellence - precise, composed, and grounded in
            genuine partnership.
          </Typography>
        </FadeIn>
        <ul className="grid gap-[var(--space-md)] md:grid-cols-2">
          {values.map((value, index) => (
            <li key={value.name} className="list-none">
              <FadeIn
                delay={index * 0.05}
                className="rounded-[24px] border border-white/10 bg-black/45 p-[var(--space-md)] backdrop-blur-xl"
              >
                <Typography variant="subheading" className="text-foreground">
                  {value.name}
                </Typography>
                <Typography variant="body" muted className="mt-3">
                  {value.description}
                </Typography>
              </FadeIn>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
