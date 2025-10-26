import type { Variants, Transition } from "framer-motion";

const transition: Transition = {
  duration: 0.32,
  ease: [0.17, 0.67, 0.3, 1],
};

export const staggerChildren = (stagger = 0.05): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: Math.min(stagger, 0.12),
      delayChildren: 0.08,
    },
  },
});

export const fadeInUp = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...transition,
      delay,
    },
  },
});

export const fadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ...transition,
      delay,
    },
  },
});

export const scaleOnHover = {
  whileHover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: [0.2, 0.6, 0.2, 1],
    },
  },
} as const;
