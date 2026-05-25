import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import styles from "./Process.module.css";

export default function Process() {
    return (
        <Once id="process" className="section alternate-background">
            <div className={`content ${styles.processWrapper}`}>
                <div className={styles.processContent}>
                    <div className="sectionLabel">Process</div>
                    <h2 className="h2">How It Works</h2>
                    <p className="p2">Simple process, clear expectations, no surprises.</p>
                </div>
                <Stagger className={styles.processGrid}>
                    <OnceItem className={styles.processFlex}>
                        <div className={styles.processNumber}>01</div>
                        <div className={styles.processFlexContent}>
                            <h3 className="h3">We Talk</h3>
                            <p className="p2">Free 20-minute call. You tell me about your business and what you need. I ask the right questions and we figure out together if it&apos;s a good fit.</p>
                        </div>
                    </OnceItem>
                    <OnceItem className={styles.processFlex}>
                        <div className={styles.processNumber}>02</div>
                        <div className={styles.processFlexContent}>
                            <h3 className="h3">You Get a Clear Proposal</h3>
                            <p className="p2">A project scope with a flat rate and a timeline. Everything laid out before we start — you know exactly what you&apos;re getting and what it costs.</p>
                        </div>
                    </OnceItem>
                    <OnceItem className={styles.processFlex}>
                        <div className={styles.processNumber}>03</div>
                        <div className={styles.processFlexContent}>
                            <h3 className="h3">We Build It Together</h3>
                            <p className="p2">Design and development with you in the loop at every stage. You review, give feedback, and approve before anything is finalized. Your input shapes the outcome.</p>
                        </div>
                    </OnceItem>
                    <OnceItem className={styles.processFlex}>
                        <div className={styles.processNumber}>04</div>
                        <div className={styles.processFlexContent}>
                            <h3 className="h3">You Launch with Everything You Need</h3>
                            <p className="p2">We launch when you&apos;re ready. You get all files, credentials, and a walkthrough so you feel confident going forward. Ongoing support available if you want it.</p>
                        </div>
                    </OnceItem>
                </Stagger>
            </div>
        </Once>
    )
}
