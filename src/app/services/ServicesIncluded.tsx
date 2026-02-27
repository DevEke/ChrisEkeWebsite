import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import DecorativeIcon from "@/components/DecorativeIcon/DecorativeIcon";
import { IconAppWindow, IconTransform, IconSeo, IconAdjustmentsHorizontal, IconAccessible, IconCloudUpload } from "@tabler/icons-react";
import { Tilt } from "@/components/motion/Tilt";
import styles from "./included.module.css";

export default function ServicesIncluded() {
    return (
        <Once id="servicesIncluded" as="section" className="section">
            <Stagger className={`content ${styles.includedGrid}`}>
                <OnceItem>
                    <h2>What’s<br/> Included</h2>
                </OnceItem>
                <div className={styles.includedContentGrid}>
                    <Tilt>
                        <OnceItem className={styles.includedGridItem}>
                            <DecorativeIcon Icon={IconAppWindow} />
                            <div>
                                <h3>Custom<br/> Page Design</h3>
                                <p>Up to nine custom designed pages built with clarity, hierarchy, and responsive structure across all devices.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                    <Tilt>
                        <OnceItem className={styles.includedGridItem}>
                            <DecorativeIcon Icon={IconTransform} />
                            <div>
                                <h3>Conversion<br/> Focused Structure</h3>
                                <p>Intentional layout and user flow designed to support clear action and measurable engagement.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                    <Tilt>
                        <OnceItem className={styles.includedGridItem}>
                            <DecorativeIcon Icon={IconSeo} />
                            <div>
                                <h3>Search Ready<br/> Architecture</h3>
                                <p>Semantic structure, clean markup, and foundational SEO implementation from the start.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                    <Tilt>
                        <OnceItem className={styles.includedGridItem}>
                            <DecorativeIcon Icon={IconAdjustmentsHorizontal} />
                            <div>
                                <h3>Performance<br/> Optimization</h3>
                                <p>Efficient asset handling, optimized media, and speed conscious development practices.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                    <Tilt>
                        <OnceItem className={styles.includedGridItem}>
                            <DecorativeIcon Icon={IconAccessible} />
                            <div>
                                <h3>Accessibility<br/> Standards</h3>
                                <p>Structured markup and usability considerations designed to support clarity across devices and diverse user needs.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                    <Tilt>
                        <OnceItem className={styles.includedGridItem}>
                            <DecorativeIcon Icon={IconCloudUpload} />
                            <div>
                                <h3>Deployment<br/> and Launch</h3>
                                <p>Testing, refinement, and guided deployment to ensure a clean and confident release.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                </div>
            </Stagger>
        </Once>
    )
}
