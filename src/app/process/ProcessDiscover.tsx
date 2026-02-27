import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import DecorativeIcon from "@/components/DecorativeIcon/DecorativeIcon";
import { IconBulb } from "@tabler/icons-react";
import styles from "./page.module.css";

export default function ProcessDiscover() {
    return (
        <Once className="section">
            <Stagger className={`content ${styles.processGrid}`}>
                <OnceItem className={styles.processDiscover}>
                    <DecorativeIcon Icon={IconBulb} />
                    <div>
                        <h2>Discover</h2>
                        <p>This phase establishes clarity before any execution begins. We align on objectives, audience expectations, and the technical realities that shape the project.</p>
                        <p>Through focused discussion and evaluation, we define what success looks like and identify the constraints that will inform every decision moving forward.</p>
                    </div>
                </OnceItem>
                <div className={styles.processContentGrid}>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Business Objectives</p>
                        <p>What should the website accomplish, and what action should it drive?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Audience Definition</p>
                        <p>Who is the site built for, and what expectations should shape the experience?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Competitive Context</p>
                        <p>How does the surrounding landscape influence positioning and structure?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Technical Requirements</p>
                        <p>What constraints, integrations, or performance standards must guide development?</p>
                    </OnceItem>
                    <OnceItem>
                        <h3>Outcome</h3>
                        <p>A clear strategic foundation that informs every decision that follows.</p>
                    </OnceItem>
                </div>
            </Stagger>
        </Once>
    )
}
