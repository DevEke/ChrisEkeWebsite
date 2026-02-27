import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import DecorativeIcon from "@/components/DecorativeIcon/DecorativeIcon";
import { IconRuler } from "@tabler/icons-react";
import styles from "./page.module.css";

export default function ProcessDefine() {
    return (
        <Once as="section" className="section">
            <Stagger className={`content ${styles.processGrid}`}>
                <OnceItem className={styles.processDefine}>
                    <DecorativeIcon Icon={IconRuler} />
                    <div>
                        <h2>Define</h2>
                        <p>With strategic clarity established, this phase translates insight into structure. We determine how information should be organized and how users will move through the experience.</p>
                        <p>This is where direction becomes framework. Decisions made here shape layout, hierarchy, and performance priorities before visual design begins.</p>
                    </div>
                </OnceItem>
                <div className={styles.processContentGrid}>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Information Architecture</p>
                        <p>How should content be structured to create clarity and flow?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>User Pathways</p>
                        <p>What journey should guide users toward meaningful action?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Content Hierarchy</p>
                        <p>Which messages carry priority, and how should they be presented?</p>
                    </OnceItem>
                    <OnceItem>
                        <p className={styles.processSmallHeader}>Performance Direction</p>
                        <p>What structural decisions support speed and long term scalability?</p>
                    </OnceItem>
                    <OnceItem>
                        <h3>Outcome</h3>
                        <p>A defined framework that guides design and development with purpose.</p>
                    </OnceItem>
                </div>
            </Stagger>
        </Once>
    )
}
