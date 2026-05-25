"use client";

import { motion, type Transition, type Variants } from "framer-motion";
import React from "react";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  amount?: "some" | "all" | number;
  margin?: string;
  once?: boolean;
  delayChildren?: number;
};

const containerVariants: Variants = {
  initial: {},
  animate: {},
};

export function Stagger({
    children,
    className,
    stagger = 0.3,
    delayChildren = 0.2 ,
    amount = 0.3,
    margin = "0px 0px -10% 0px",
    once = true,
  }: StaggerProps) {
  const transition: Transition = {
    staggerChildren: stagger,
    delayChildren,
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount, margin }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

type OnceItemProps<T extends React.ElementType = "div"> = {
  children: React.ReactNode;
  className?: string;
  as?: T;
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 60, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const itemTransition: Transition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration: 0.6,
};

export function OnceItem({ children, className, as }: OnceItemProps) {
  return (
    <motion.div className={className} variants={itemVariants} transition={itemTransition}>
      {children}
    </motion.div>
  );
}
