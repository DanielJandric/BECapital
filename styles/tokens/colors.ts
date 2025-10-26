export const colors = {
  background: "#0A0A0A",
  surface: "#111112",
  overlay: "rgba(250, 250, 249, 0.06)",
  elevated: "#141414",
  foreground: "#FAFAF9",
  muted: "#9C9C93",
  accent: "#B08D57",
  accentSoft: "#C8AC77",
  accentMuted: "rgba(176, 141, 87, 0.22)",
  border: "rgba(250, 250, 249, 0.08)",
  success: "#4CAF86",
  danger: "#C86557",
} as const;

export type ColorToken = keyof typeof colors;
