import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import DecorativeIcon from "@/components/DecorativeIcon/DecorativeIcon";
import { IconBrush } from "@tabler/icons-react";
import styles from "./page.module.css";

export default function ProcessDesign() {
    return (
        <Once className="section">
            <Stagger className={`content ${styles.processGrid}`}>
                <OnceItem className={styles.processDesign}>
                    <DecorativeIcon Icon={IconBrush} />
                    <div>
                        <h2>Design</h2>
                        <p>With structure defined, design brings clarity into form. This phase translates strategy into a focused visual system that supports both usability and meaning.</p>
                        <p>Design is not decoration. It is alignment between layout, messaging, and interaction. Every decision supports comprehension, hierarchy, and intent.</p>
                    </div>
                </OnceItem>
                <div className={styles.processContentGrid}>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Visual Identity Alignment</p>
                        <p>How should typography, spacing, and visual tone reflect the brand’s positioning?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Interface Clarity</p>
                        <p>Does the layout guide attention naturally and remove friction?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Messaging Refinement</p>
                        <p>Are headlines and content structured to communicate clearly and drive action?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Responsive Experience</p>
                        <p>How does the design adapt across devices without losing structure or clarity?</p>
                    </OnceItem>
                    <OnceItem>
                        <h3>Outcome</h3>
                        <p>A cohesive interface that communicates clearly and supports measurable engagement.</p>
                    </OnceItem>
                </div>
            </Stagger>
        </Once>
    )
}
