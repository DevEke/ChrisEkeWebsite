import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import { ContactForm } from "./ContactForm";
import { Tilt } from "@/components/motion/Tilt";
import styles from "./page.module.css";

export default function ContactHero() {
    return (
        <Once className="section">
            <Stagger className={`content ${styles.contactFormGrid}`}>
                <OnceItem>
                    <h1>Start a<br/>Project</h1>
                    <p className="subheading">Tell me about your project and I will follow up with next steps.</p>
                </OnceItem>
                <Tilt>
                    <OnceItem>
                        <ContactForm />
                    </OnceItem>
                </Tilt>
            </Stagger>
        </Once>
    )
}
