import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";

const pillars = [
  {
    title: "Entrepreneur DNA",
    detail:
      "Direct access to founders who have scaled, listed, and exited lifestyle businesses. We operate as partners in the arena, not capital on the sidelines.",
  },
  {
    title: "Operational Depth",
    detail:
      "Operating partners orchestrate experience design, proptech, and omnichannel growth. Every mandate receives a bespoke value-creation sprint.",
  },
  {
    title: "Capital with Permanence",
    detail:
      "A balance sheet structure that favours buy-and-hold. We recycle only when strategic arcs mature, protecting long-term compounding.",
  },
] as const;

export function ApproachSection() {
  return (
    <Section id="approach" className="rounded-[40px] bg-white/65">
      <Container className="space-y-[var(--space-xl)] py-[clamp(2.6rem,6vw,4rem)]">
        <FadeIn className="space-y-[var(--space-sm)]">
          <Typography variant="label" className="text-accent/70">
            Approach
          </Typography>
          <Typography variant="headline" className="max-w-[64ch]">
            Entrepreneurial instinct guided by disciplined, long-term stewardship.
          </Typography>
          <Typography variant="body" muted className="max-w-[70ch]">
            We embed capital allocation, governance, and operations within a single
            continuum. Decisions remain swift, data-rich, and anchored in decades of
            founder experience.
          </Typography>
        </FadeIn>
        <ol className="space-y-[var(--space-lg)]">
          {pillars.map((pillar, index) => (
            <FadeIn
              key={pillar.title}
              delay={index * 0.06}
              className="border-border/70 flex flex-col gap-4 border-t pt-[var(--space-lg)] first:border-t-0 first:pt-0 md:flex-row md:gap-[var(--space-md)]"
            >
              <span className="text-muted text-sm font-semibold tracking-[0.32em] md:w-40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="space-y-3">
                <Typography variant="subheading" className="text-foreground">
                  {pillar.title}
                </Typography>
                <Typography variant="body" muted style={{ textWrap: "balance" }}>
                  {pillar.detail}
                </Typography>
              </div>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
