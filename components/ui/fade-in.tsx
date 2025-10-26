"use client";

import { useRef } from "react";
import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import { fadeInUp } from "@/lib/animations/variants";
import { cn } from "@/lib/utils/cn";

export interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export function FadeIn({ children, className, delay = 0, ...props }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.2,
    once: true,
    margin: "0px 0px -10% 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp(delay)}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
