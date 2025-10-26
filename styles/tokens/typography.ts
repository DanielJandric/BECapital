export const typography = {
  display: {
    fontSize: "clamp(2.75rem, 4.2vw + 1rem, 4.75rem)",
    lineHeight: 1.08,
    letterSpacing: "-0.035em",
    fontWeight: 500,
  },
  headline: {
    fontSize: "clamp(1.9rem, 2.6vw + 0.6rem, 3.1rem)",
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
    fontWeight: 500,
  },
  subheading: {
    fontSize: "clamp(1.4rem, 1.9vw + 0.3rem, 2.05rem)",
    lineHeight: 1.28,
    letterSpacing: "-0.01em",
    fontWeight: 400,
  },
  body: {
    fontSize: "clamp(1rem, 0.6vw + 0.85rem, 1.1rem)",
    lineHeight: 1.7,
    letterSpacing: "0",
    fontWeight: 300,
  },
  label: {
    fontSize: "0.9rem",
    letterSpacing: "0.14em",
    lineHeight: 1.4,
    fontWeight: 500,
    textTransform: "uppercase",
  },
  caption: {
    fontSize: "0.82rem",
    lineHeight: 1.5,
    letterSpacing: "0.08em",
    fontWeight: 400,
  },
} as const;

export type TypographyVariant = keyof typeof typography;
