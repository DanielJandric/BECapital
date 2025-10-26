import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";

const values = [
  {
    name: "Entrepreneurial Grit",
    description:
      "Builders first. We immerse ourselves alongside management to navigate ambiguity and unlock the next chapter.",
  },
  {
    name: "Disciplined Patience",
    description:
      "A buy-and-hold mentality that favours durable advantage over short-term optics. We compound thoughtfully.",
  },
  {
    name: "Aligned Ownership",
    description:
      "Material co-investment and governance alignment keep incentives tied to the strategic arc.",
  },
  {
    name: "Experiential Insight",
    description:
      "Decades inside leisure, living, and commerce inform every decision—from concept design to global rollout.",
  },
] as const;

export function ValuesSection() {
  return (
    <Section id="values">
      <Container className="space-y-[var(--space-lg)]">
        <FadeIn className="space-y-[var(--space-sm)] text-center md:text-left">
          <Typography variant="label" className="text-accent/70">
            Values
          </Typography>
          <Typography variant="headline" className="mx-auto max-w-[60ch] md:mx-0">
            Principles that guide how we partner, operate, and grow enduring platforms.
          </Typography>
        </FadeIn>
        <ul className="grid gap-[var(--space-lg)] md:grid-cols-2">
          {values.map((value, index) => (
            <li key={value.name} className="list-none">
              <FadeIn
                delay={index * 0.05}
                className="border-border/60 space-y-3 border-t pt-[var(--space-md)] text-center first:border-t-0 first:pt-0 md:text-left"
              >
                <Typography variant="subheading" className="text-foreground">
                  {value.name}
                </Typography>
                <Typography variant="body" muted style={{ textWrap: "balance" }}>
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
