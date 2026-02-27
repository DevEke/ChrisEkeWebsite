"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";
import styles from "./page.module.css";

type FAQProps = {
    id: number;
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: (id: number | null) => void;
}

export default function FAQ({ id, question, answer, onToggle, isOpen}: FAQProps) {

    return (
        <div
            className={styles.faqContainer}
            onClick={() => onToggle(id)}
            aria-expanded={isOpen}
            aria-controls={`faq-panel-${id}`}
            id={`faq-trigger-${id}`}
        >
            <div className={styles.faqHeader}>
                <span className={styles.faqQuestion}>{question}</span>
                <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "tween", duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.faqIcon}
                >
                    <IconChevronDown size={18} />
                </motion.span>
            </div>
            <AnimatePresence initial={false}>
                {
                    isOpen && (
                        <motion.div
                            key="panel"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: {
                                    height: "auto",
                                    transition: {
                                        duration: 0.3,
                                        ease: [0.22, 1, 0.36, 1],
                                        when: "beforeChildren",
                                    },
                                },
                                closed: {
                                    height: 0,
                                    transition: {
                                        duration: 0.25,
                                        ease: [0.22, 1, 0.36, 1],
                                        when: "afterChildren",
                                    },
                                },
                            }}
                            id={`faq-panel-${id}`}
                            role="region"
                            aria-labelledby={`faq-trigger-${id}`}
                            style={{ overflow: "hidden" }}
                            className={styles.faqBody}
                        >
                            <motion.p
                                variants={{
                                    open: { opacity: 1, y: 0 },
                                    closed: { opacity: 0, y: 12 },
                                }}
                                transition={{
                                    duration: 0.25,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className={styles.faqAnswer}
                            >{answer}</motion.p>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}
