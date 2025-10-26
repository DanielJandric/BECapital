"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-base font-medium text-foreground/95 shadow-[0px_20px_45px_rgba(176,141,87,0.18)] hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent/45",
  secondary:
    "bg-surface text-foreground/90 border border-border hover:border-accent/60 hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent/45",
  ghost:
    "bg-transparent text-foreground/80 border border-transparent hover:border-accent/50 hover:bg-foreground/5 focus-visible:ring-2 focus-visible:ring-accent/45",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild = false, variant = "primary", className, disabled, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm tracking-[0.18em] uppercase transition-transform duration-200 ease-out hover:scale-[1.02] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 md:px-7 md:py-3.5",
          variantClasses[variant],
          className,
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";
