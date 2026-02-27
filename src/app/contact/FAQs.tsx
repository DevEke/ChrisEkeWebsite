"use client"

import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import FAQ from "./FAQ";
import { FAQsData } from "@/lib/ContactFormSchema";
import styles from "./page.module.css";

export default function FAQs() {
    const [ active, setActive ] = useState<number | null>(1);
    return (
        <LayoutGroup id="faq">
            <div className={styles.faqsWrapper}>
                {
                    FAQsData.map((x) => (
                        <motion.div key={x.id} layout>
                            <FAQ
                                id={x.id}
                                question={x.question}
                                answer={x.answer}
                                isOpen={active === x.id}
                                onToggle={(id) => setActive((cur) => (cur === id ? null : id))}
                            />
                        </motion.div>
                    ))
                }
            </div>
        </LayoutGroup>
    )
}
