"use client";

import React from "react";
import { motion, type Transition, type Variants } from "framer-motion";

type OnceProps<T extends React.ElementType = "div"> = {
  children: React.ReactNode;
  className?: string;
  as?: T;
  amount?: "some" | "all" | number;
  margin?: string;
  once?: boolean;
  delay?: number;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const onceVariants: Variants = {
  initial: { opacity: 0, y: 90, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const baseTransition: Transition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration: 0.6,
};

export function Once<T extends React.ElementType = "div">({
  children,
  className,
  as,
  delay = 0,
  amount = 0.3,
  margin = "0px 0px -10% 0px",
  once = true,
  ...rest
}: OnceProps<T>) {
  return (
    <motion.div
      as={as as React.ElementType}
      className={className}
      variants={onceVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount, margin }}
      transition={{ ...baseTransition, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
