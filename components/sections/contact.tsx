import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <Section id="contact" className="pb-[var(--space-3xl)]">
      <Container className="space-y-[var(--space-lg)]">
        <FadeIn className="max-w-[60ch] space-y-[var(--space-sm)] text-center md:text-left">
          <Typography variant="label" className="text-accent/70">
            Contact
          </Typography>
          <Typography variant="headline">
            Discuss a transaction, co-investment, or succession opportunity.
          </Typography>
          <Typography variant="body" muted>
            Share the context, timing, and stakeholders. A senior member of our investment
            committee will respond within one business day.
          </Typography>
        </FadeIn>
        <FadeIn delay={0.1}>
          <form className="grid gap-6 text-sm md:grid-cols-2" noValidate>
            <label className="flex flex-col gap-2 md:col-span-1">
              <span className="text-muted font-medium tracking-[0.12em]">Full Name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Alex Bonvin"
                className="border-border/60 text-foreground focus:border-foreground bg-transparent px-0 py-3 text-base transition outline-none focus:ring-0 md:border-b"
              />
              <span className="bg-border/50 h-px md:hidden" aria-hidden />
            </label>
            <label className="flex flex-col gap-2 md:col-span-1">
              <span className="text-muted font-medium tracking-[0.12em]">Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@becapital.swiss"
                className="border-border/60 text-foreground focus:border-foreground bg-transparent px-0 py-3 text-base transition outline-none focus:ring-0 md:border-b"
              />
              <span className="bg-border/50 h-px md:hidden" aria-hidden />
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-muted font-medium tracking-[0.12em]">
                Opportunity Details
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder="Outline the opportunity, growth thesis, and parties involved."
                className="border-border/60 text-foreground focus:border-foreground bg-transparent px-0 py-3 text-base transition outline-none focus:ring-0 md:border-b"
              />
              <span className="bg-border/50 h-px md:hidden" aria-hidden />
            </label>
            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
              <label className="text-muted flex items-start gap-3 text-xs">
                <input
                  type="checkbox"
                  className="border-border/70 mt-1 h-4 w-4 rounded border accent-[#B08D57]"
                />
                <span>
                  I consent to the processing of my data in accordance with the BE Capital
                  SA privacy policy.
                </span>
              </label>
              <Button
                type="submit"
                variant="secondary"
                className="self-start px-6 py-3 text-xs tracking-[0.24em] uppercase"
              >
                Submit Request
              </Button>
            </div>
          </form>
        </FadeIn>
      </Container>
    </Section>
  );
}
