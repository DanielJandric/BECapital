"use client";

import { type ComponentPropsWithoutRef, type ElementType, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";
import {
  typography as typographyTokens,
  type TypographyVariant,
} from "@/styles/tokens/typography";

type VariantDefaults = {
  [K in TypographyVariant]: ElementType;
};

const defaultTags: VariantDefaults = {
  display: "h1",
  headline: "h2",
  subheading: "h3",
  body: "p",
  label: "span",
  caption: "p",
};

type TypographyProps<T extends ElementType> = {
  as?: T;
  variant?: TypographyVariant;
  muted?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "ref">;

export const Typography = forwardRef(
  <T extends ElementType = "p">(
    {
      as,
      variant = "body",
      muted = false,
      className,
      style,
      ...props
    }: TypographyProps<T>,
    ref: ComponentPropsWithoutRef<T>["ref"],
  ) => {
    const Component = (as ?? defaultTags[variant]) as ElementType;
    const tokenStyles = typographyTokens[variant];

    return (
      <Component
        ref={ref}
        style={{ ...tokenStyles, ...style }}
        className={cn(
          muted ? "text-muted" : "text-foreground",
          { "tracking-[0.14em]": variant === "label" },
          className,
        )}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";
