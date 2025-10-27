"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  amount?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  amount = 0.35,
  style,
  ...props
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(ref, {
    once: true,
    amount,
    margin: "0px 0px -10% 0px",
  });

  const springTransition = {
    duration: 0.6,
    ease: [0.22, 0.61, 0.36, 1],
    delay,
  } as const;

  const variants = {
    hidden: {
      opacity: 0,
      y: 36,
      scale: 0.985,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: springTransition,
    },
  } as const;

  const reducedMotionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: springTransition,
    },
  } as const;

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-[transform,opacity]", className)}
      style={style}
      variants={prefersReducedMotion ? reducedMotionVariants : variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      {...props}
    >
      {children}
    </motion.div>
  );
}
