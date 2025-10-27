"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils/cn";

export interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export function FadeIn({ children, className, delay = 0, style, ...props }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center 45%"],
  });

  const easedProgress = useSpring(scrollYProgress, {
    damping: 32,
    stiffness: 160,
    mass: 0.6,
  });

  const translateY = useTransform(easedProgress, [0, 1], [32, 0]);
  const opacity = useTransform(easedProgress, [0, 1], [0, 1]);
  const blur = useTransform(easedProgress, [0, 1], ["blur(18px)", "blur(0px)"]);

  const animatedStyle = prefersReducedMotion
    ? undefined
    : {
        y: translateY,
        opacity,
        filter: blur,
      };

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-[transform,opacity]", className)}
      style={{ ...(!prefersReducedMotion ? animatedStyle : undefined), ...style }}
      initial={prefersReducedMotion ? { opacity: 0, y: 24 } : undefined}
      animate={prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
      transition={
        prefersReducedMotion
          ? { duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
