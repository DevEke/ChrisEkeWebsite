import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import { Tilt } from "@/components/motion/Tilt";
import FAQs from "./FAQs";
import styles from "./page.module.css";

export default function ContactFAQ() {
    return (
        <Once className="section">
            <Stagger className={`content ${styles.contactFormGrid}`}>
                <OnceItem>
                    <h2>Frequently Asked Questions</h2>
                </OnceItem>
                <Tilt>
                    <OnceItem>
                        <FAQs />
                    </OnceItem>
                </Tilt>
            </Stagger>
        </Once>
    )
}
