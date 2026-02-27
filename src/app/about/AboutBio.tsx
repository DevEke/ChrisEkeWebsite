import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import { Tilt } from "@/components/motion/Tilt";
import styles from "./bio.module.css";

export default function AboutBio() {
    return (
        <Once className="section">
            <Tilt>
                <Stagger className={styles.bioGrid}>
                        <OnceItem>
                            <div className={styles.bioImage}></div>
                        </OnceItem>
                        <div className={styles.bioContent}>
                            <OnceItem>
                                <h2>I Build Websites<br /> With Intention</h2>
                            </OnceItem>
                            <OnceItem>
                                <p>What began as an interest in design developed into a disciplined approach grounded in structure, clarity, and long term thinking. I care about how things are built, not just how they appear.</p>
                            </OnceItem>
                            <OnceItem>
                                <p className={styles.bioSpacer}>Over time, I recognized that many businesses treat their website as decoration. I see it as infrastructure. It should be purposeful, reliable, and aligned with growth.</p>
                            </OnceItem>
                            <OnceItem>
                                <p className={`bold ${styles.bioSpacer}`}>The goal is simple. Build it properly the first time.</p>
                            </OnceItem>
                        </div>
                </Stagger>
            </Tilt>
        </Once>
    )
}
