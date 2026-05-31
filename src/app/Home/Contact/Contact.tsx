import Image from "next/image";
import chris_form from "../../../../public/CE - BodyRight 1.png";
import styles from "./Contact.module.css";
import { ContactForm } from "./ContactForm";

export default function Contact() {
    return (
        <section id="contact" >
            <div className={`content ${styles.contactWrapper}`}>
                <div className={styles.contactContent}>
                    <h2 className="h2">Let&apos;s Work Together</h2>
                    <p className="p1">Tell me about your project and let&apos;s see what we can build. Send a message or book a free 20-minute call. I typically respond within one business day.</p>
                    <ContactForm />
                    <Image className={styles.contactImage} src={chris_form} alt="chris-form" />
                </div>
            </div>
        </section>
    )
}
