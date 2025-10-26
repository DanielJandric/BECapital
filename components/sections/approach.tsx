import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";

const pillars = [
  {
    title: "Entrepreneur DNA",
    detail:
      "We approach every mandate as builders. Our partners gain direct access to founders who have scaled, listed, and exited businesses across lifestyle sectors.",
  },
  {
    title: "Operational Depth",
    detail:
      "Dedicated operating partners map growth roadmaps, deploy playbooks for guest experience, proptech, and digital marketing, and chair value-creation sprints.",
  },
  {
    title: "Capital with Permanence",
    detail:
      "Our balance sheet structure allows us to buy, hold, and selectively recycle rather than follow fund cycles. We release capital only when strategic arcs mature.",
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
            A measured methodology that combines entrepreneurial instinct with disciplined
            institutional execution.
          </Typography>
          <Typography variant="body" muted className="max-w-[70ch]">
            We embed governance, risk oversight, and capital allocation into a single
            continuum. Decisions remain swift, data-rich, and protected by experienced
            stewardship.
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
