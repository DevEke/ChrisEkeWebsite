import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import DecorativeIcon from "@/components/DecorativeIcon/DecorativeIcon";
import { IconBulb, IconRuler, IconRocket, IconCode, IconBrush } from "@tabler/icons-react";
import { Tilt } from "@/components/motion/Tilt";
import styles from "./process.module.css"

export default function ServicesProcess() {
    return (
        <Once as="section" className="section">
            <Stagger className={`content ${styles.processGrid}`}>
                <OnceItem className={styles.processHeading}>
                    <h2>Execution Framework</h2>
                    <p>A clear and structured path from strategy to launch.</p>
                </OnceItem>
                <Tilt>
                    <div className={styles.processContentGrid}>
                        <OnceItem className={styles.processGridItem}>
                            <DecorativeIcon Icon={IconBulb} className={styles.rightLine}  />
                            <div>
                                <h3>Discover</h3>
                                <p>Understanding goals and requirements.</p>
                            </div>
                        </OnceItem>
                        <OnceItem className={styles.processGridItem}>
                            <DecorativeIcon Icon={IconRuler} className={styles.rightLine}  />
                            <div>
                                <h3>Define</h3>
                                <p>Defining structure and priorities.</p>
                            </div>
                        </OnceItem>
                        <OnceItem className={styles.processGridItem}>
                            <DecorativeIcon Icon={IconBrush} className={styles.rightLine}  />
                            <div>
                                <h3>Design</h3>
                                <p>Crafting a focused interface.</p>
                            </div>
                        </OnceItem>
                        <OnceItem className={styles.processGridItem}>
                            <DecorativeIcon Icon={IconCode} className={styles.rightLine}  />
                            <div>
                                <h3>Develop</h3>
                                <p>Building with performance in mind.</p>
                            </div>
                        </OnceItem>
                        <OnceItem className={styles.processGridItem}>
                            <DecorativeIcon Icon={IconRocket}/>
                            <div>
                                <h3>Deploy</h3>
                                <p>Testing, refinement, and deployment.</p>
                            </div>
                        </OnceItem>
                    </div>
                </Tilt>
            </Stagger>
        </Once>
    )
}
