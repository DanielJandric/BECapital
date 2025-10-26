import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type SectionTone = "transparent" | "surface" | "elevated";

const toneClasses: Record<SectionTone, string> = {
  transparent: "",
  surface:
    "before:absolute before:inset-[1.5px] before:-z-10 before:rounded-[32px] before:bg-white/4 before:backdrop-blur-md before:content-['']",
  elevated:
    "rounded-[32px] border border-white/8 bg-white/[0.03] shadow-[0_40px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl",
};

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
}

export function Section({
  className,
  tone = "transparent",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative isolate py-[var(--space-section-mobile)] md:py-[var(--space-section-desktop)]",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
