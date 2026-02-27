"use client";

import { AnimatePresence, motion, type Transition, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

type PageTransitionProps = {
  children: React.ReactNode;
  className?: string;
  mode?: "wait" | "sync";
};

const pageVariants: Variants = {
  initial: { opacity: 0, filter: "blur(6px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(6px)" },
};

const pageTransition: Transition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration: 0.35,
};

export function PageTransition({ children, className, mode = "wait" }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode={mode} initial>
      <motion.div
        key={pathname}
        className={className}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
