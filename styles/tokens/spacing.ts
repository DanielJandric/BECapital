const PHI = 1.6180339887;
const BASE = 10;

const golden = (multiplier: number) =>
  Number((BASE * Math.pow(PHI, multiplier)).toFixed(2));

export const spacing = {
  "3xs": `${Number((BASE / PHI ** 2).toFixed(2))}px`,
  "2xs": `${Number((BASE / PHI).toFixed(2))}px`,
  xs: `${BASE}px`,
  sm: `${golden(1)}px`,
  md: `${golden(2)}px`,
  lg: `${golden(3)}px`,
  xl: `${golden(4)}px`,
  "2xl": `${golden(5)}px`,
  "3xl": `${golden(6)}px`,
} as const;

export type SpacingToken = keyof typeof spacing;

export const sectionPadding = {
  mobile: `clamp(${spacing.md}, 8vw, ${spacing.lg})`,
  desktop: `clamp(${spacing.lg}, 12vw, ${spacing["3xl"]})`,
} as const;
