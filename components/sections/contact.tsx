import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <Section id="contact" tone="elevated">
      <Container className="space-y-[var(--space-lg)]">
        <FadeIn className="max-w-[68ch] space-y-4">
          <Typography variant="label" className="text-accent/80">
            Contact
          </Typography>
          <Typography variant="headline">
            Discuss a transaction, co-investment, or succession opportunity with
            discretion.
          </Typography>
          <Typography variant="body" muted>
            Share transaction context, timing, and stakeholders. A senior member of our
            investment committee will respond within one business day.
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
                className="text-foreground placeholder:text-muted/60 focus:border-accent/60 focus:ring-accent/35 rounded-[18px] border border-white/12 bg-transparent px-5 py-4 text-base focus:ring-2 focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 md:col-span-1">
              <span className="text-muted font-medium tracking-[0.12em]">Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@familyoffice.ch"
                className="text-foreground placeholder:text-muted/60 focus:border-accent/60 focus:ring-accent/35 rounded-[18px] border border-white/12 bg-transparent px-5 py-4 text-base focus:ring-2 focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-muted font-medium tracking-[0.12em]">Objectives</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Outline the opportunity, growth thesis, and parties involved."
                className="text-foreground placeholder:text-muted/60 focus:border-accent/60 focus:ring-accent/35 resize-none rounded-[18px] border border-white/12 bg-transparent px-5 py-4 text-base focus:ring-2 focus:outline-none"
              />
            </label>
            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
              <label className="text-muted flex items-start gap-3 text-xs">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border border-white/20 bg-transparent accent-[#B08D57]"
                />
                <span>
                  I consent to the processing of my data in accordance with the BE Capital
                  SA privacy policy.
                </span>
              </label>
              <Button type="submit" className="md:w-auto">
                Submit request
              </Button>
            </div>
          </form>
        </FadeIn>
      </Container>
    </Section>
  );
}
