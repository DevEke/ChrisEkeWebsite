import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import styles from "./Contact.module.css";
import { ContactForm } from "./ContactForm";

export default function Contact() {
    return (
        <Once id="contact" >
            <Stagger className={`content ${styles.contactWrapper}`}>
                <div className={styles.contactContent}>
                <OnceItem>
                    <h2 className="h2">Let&apos;s Work Together</h2>
                    <p className="p1">Tell me about your project and let&apos;s see what we can build. Send a message or book a free 20-minute call. I typically respond within one business day.</p>
                </OnceItem>
                <OnceItem className={styles.formKey}>
                    <div className={styles.contactFormPos}>
                        <ContactForm />
                    </div>
                </OnceItem>
                </div>
            </Stagger>
        </Once>
    )
}
