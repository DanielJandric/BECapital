import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";

const pillars = [
  {
    title: "Curated Opportunity Flow",
    detail:
      "We originate and evaluate private market opportunities through a proprietary network, declining far more than we pursue to maintain selectivity.",
  },
  {
    title: "Integrated Risk Governance",
    detail:
      "Cross-disciplinary committees oversee liquidity, jurisdictional, and reputational risk with scenario analysis and stress testing.",
  },
  {
    title: "Compounding Through Continuity",
    detail:
      "Active ownership, board participation, and structured value-creation plans ensure each asset compounds over a generational horizon.",
  },
] as const;

export function ApproachSection() {
  return (
    <Section id="approach" tone="surface" className="rounded-[40px]">
      <Container className="space-y-[var(--space-xl)]">
        <FadeIn className="space-y-4">
          <Typography variant="label" className="text-accent/80">
            Approach
          </Typography>
          <Typography variant="headline" className="max-w-[68ch]">
            A measured methodology that balances entrepreneurial instinct with
            institutional rigor.
          </Typography>
          <Typography variant="body" muted className="max-w-[70ch]">
            We embed governance, risk oversight, and capital allocation into a single
            continuum, ensuring decisions are swift yet safeguarded.
          </Typography>
        </FadeIn>
        <div className="grid gap-[var(--space-lg)] md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 0.05}>
              <div className="space-y-3 rounded-[24px] border border-white/10 bg-black/40 p-[var(--space-md)] shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                <Typography variant="subheading" className="text-foreground">
                  {pillar.title}
                </Typography>
                <Typography variant="body" muted>
                  {pillar.detail}
                </Typography>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
