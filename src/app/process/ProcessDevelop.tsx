import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import DecorativeIcon from "@/components/DecorativeIcon/DecorativeIcon";
import { IconCode } from "@tabler/icons-react";
import styles from "./page.module.css";

export default function ProcessDevelop() {
    return (
        <Once className="section">
            <Stagger className={`content ${styles.processGrid}`}>
                <OnceItem className={styles.processDevelop}>
                    <DecorativeIcon Icon={IconCode} />
                    <div>
                        <h2>Develop</h2>
                        <p>With design approved, development brings the project to life. This phase focuses on translating structure and visuals into a performant, reliable system.</p>
                        <p>Attention shifts toward implementation, performance, and long term stability. Every element is built intentionally to support speed, scalability, and maintainability.</p>
                    </div>
                </OnceItem>
                <div className={styles.processContentGrid}>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Clean Implementation</p>
                        <p>Is the code structured clearly and built with long term organization in mind?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Performance Standards</p>
                        <p>Are assets optimized and interactions efficient across devices?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Responsive Accuracy</p>
                        <p>Does the experience remain consistent and functional at every screen size?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Accessibility Considerations</p>
                        <p>Is the interface usable and structured for clarity across diverse user needs?</p>
                    </OnceItem>
                    <OnceItem className={styles.processOutcome}>
                        <h3>Outcome</h3>
                        <p>A fully built website that is stable, performant, and ready for final validation.</p>
                    </OnceItem>
                </div>
            </Stagger>
        </Once>
    )
}
