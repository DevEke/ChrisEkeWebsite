import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import DecorativeIcon from "@/components/DecorativeIcon/DecorativeIcon";
import { IconRocket } from "@tabler/icons-react";
import styles from "./page.module.css";

export default function ProcessDeploy() {
    return (
        <Once className="section">
            <Stagger className={`content ${styles.processGrid}`}>
                <OnceItem className={styles.processDeploy}>
                    <DecorativeIcon Icon={IconRocket} />
                    <div>
                        <h2>Deploy</h2>
                        <p>With development complete, the project moves into final validation and release. This phase ensures the experience performs as intended before it reaches a live audience.</p>
                        <p>Launch is not a moment of chance. It is a controlled transition from preparation to visibility.</p>
                    </div>
                </OnceItem>
                <div className={styles.processContentGrid}>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Final Review</p>
                        <p>Are layout, content, and interactions aligned with the original objectives?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Performance Validation</p>
                        <p>Does the site meet speed and structural standards across environments?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Pre-Launch Testing</p>
                        <p>Are forms, links, and responsive behaviors functioning consistently?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Deployment</p>
                        <p>Is the release executed cleanly with minimal disruption?</p>
                    </OnceItem>
                    <OnceItem className={styles.processOutcome}>
                        <h3>Outcome</h3>
                        <p>A confident launch built on preparation, clarity, and discipline.</p>
                    </OnceItem>
                </div>
            </Stagger>
        </Once>
    )
}
