"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Direction the content travels in from. "none" only fades. */
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  as?: "div" | "li" | "article";
};

const distance = 24;

function getVariants(direction: RevealProps["direction"], reduced: boolean): Variants {
  if (reduced) {
    return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  }

  const offset =
    direction === "left"
      ? { x: -distance }
      : direction === "right"
      ? { x: distance }
      : direction === "none"
      ? {}
      : { y: distance };

  return {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  };
}

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={getVariants(direction, Boolean(reduced))}
      transition={{ duration: reduced ? 0.01 : duration, delay: reduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
