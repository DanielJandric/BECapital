"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { useLocaleContent } from "@/components/context/locale-context";

export function Footer() {
  const year = new Date().getFullYear();
  const { dictionary } = useLocaleContent();
  const footer = dictionary.footer;
  const note = footer.note.replace("{year}", String(year));

  return (
    <footer className="border-t border-border/60 bg-white/80">
      <Container className="flex flex-col gap-6 py-[clamp(1.8rem,5vw,3rem)] text-center md:flex-row md:items-center md:justify-between md:text-left">
        <Typography variant="label" className="text-muted">
          {note}
        </Typography>
        <div className="flex flex-col gap-4 text-xs text-muted md:flex-row md:items-center md:gap-6">
          <div className="flex justify-center gap-4 md:justify-start">
            {footer.attributes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="flex justify-center gap-4 md:justify-start">
            {footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground"
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
