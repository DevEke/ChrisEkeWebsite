import { Once } from "@/components/motion/Once";
import FAQs from "./FAQs";
import styles from "./FAQ.module.css";

export default function FAQ() {
    return (
        <Once id="faqs" className="section">
            <div className={`content ${styles.faqWrapper}`}>
                <div className={styles.faqContent}>
                    <div className="sectionLabel">FAQ</div>
                    <h2 className="h2">Common Questions</h2>
                    <p className="p2">Straight answers to the things people usually want to know before reaching out.</p>
                </div>
                <FAQs />
            </div>
        </Once>
    )
}
