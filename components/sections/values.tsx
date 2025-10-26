import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";

const values = [
  {
    name: "Discretion",
    description:
      "We operate with understated confidence, prioritising confidentiality at every touchpoint.",
  },
  {
    name: "Excellence",
    description:
      "Meticulous execution, relentless refinement, and teams composed of proven specialists.",
  },
  {
    name: "Continuity",
    description:
      "Stewardship that looks beyond decades, ensuring smooth succession and enduring governance.",
  },
  {
    name: "Trust",
    description:
      "Transparent alignment with families and partners, reinforced by co-investment and accountability.",
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
          <Typography variant="headline" className="max-w-2xl">
            Principles that define every mandate we undertake.
          </Typography>
          <Typography variant="body" muted className="max-w-2xl">
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
