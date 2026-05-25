"use client";
import { IconCirclePlus, IconCircleMinus } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQ.module.css";

type FAQProps = {
    id: number;
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: (id: number | null) => void;
}

export default function FAQItem({ id, question, answer, onToggle, isOpen }: FAQProps) {

    return (
        <div
            className={styles.faqContainer}
            onClick={() => onToggle(id)}
            aria-expanded={isOpen}
            aria-controls={`faq-panel-${id}`}
            id={`faq-trigger-${id}`}
        >
            <div className={`${styles.faqNumber} ${isOpen ? styles.faqNumberOpen : styles.faqNumberClosed}`}>0{id}</div>
            <div className={`${isOpen && styles.fixPad} ${styles.faqsContent} ${id === 4 && styles.noBorder}`}>
                <div className={styles.faqHeader}>
                    <span className="h3">{question}</span>
                    <span aria-hidden="true" className={styles.faqIcon}>
                        <IconCircleMinus stroke={1} className={`${styles.icon} ${isOpen && styles.iconActive}`} size={24} />
                        <IconCirclePlus  stroke={1} className={`${styles.icon} ${isOpen && styles.iconInactive}`} size={24} />
                    </span>
                </div>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            key={`faq-panel-${id}`}
                            id={`faq-panel-${id}`}
                            role="region"
                            aria-labelledby={`faq-trigger-${id}`}
                            className={styles.faqBody}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ overflow: "hidden" }}
                        >
                            <p className="p2">{answer}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
