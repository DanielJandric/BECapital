import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-black/45 backdrop-blur-xl">
      <Container className="flex flex-col gap-6 py-[clamp(2rem,6vw,3.5rem)] md:flex-row md:items-center md:justify-between">
        <Typography variant="label" className="text-muted">
          {"\u00A9 "}
          {year} BE Capital SA. All rights reserved.
        </Typography>
        <div className="text-muted flex flex-wrap gap-6 text-xs">
          <span>Switzerland</span>
          <span>Regulated Family Office</span>
          <a
            href="#"
            className="hover:text-foreground transition-colors"
            aria-label="View legal notice"
          >
            Legal Notice
          </a>
          <a
            href="#"
            className="hover:text-foreground transition-colors"
            aria-label="View privacy policy"
          >
            Privacy
          </a>
        </div>
      </Container>
    </footer>
  );
}
