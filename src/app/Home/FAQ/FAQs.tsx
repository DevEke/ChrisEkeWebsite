"use client"
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import { useState } from "react";
import FAQItem from "./FAQIttem";
import { FAQsData } from "@/lib/FAQData";
import styles from "./FAQ.module.css";

export default function FAQs() {
    const [ active, setActive ] = useState<number | null>(1);
    return (
        <Stagger className={styles.faqsWrapper}>
            {
                FAQsData.map((x) => (
                    <OnceItem key={x.id}>
                        <FAQItem
                            id={x.id}
                            question={x.question}
                            answer={x.answer}
                            isOpen={active === x.id}
                            onToggle={(id) => setActive((cur) => (cur === id ? null : id))}
                        />
                    </OnceItem>
                ))
            }
        </Stagger>
    )
}
