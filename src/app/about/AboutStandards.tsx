import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import DecorativeIcon from "@/components/DecorativeIcon/DecorativeIcon";
import { IconDiamond, IconListCheck, IconInfinity, IconTargetArrow } from "@tabler/icons-react";
import { Tilt } from "@/components/motion/Tilt";
import styles from "./standards.module.css";

export default function AboutStandards() {
    return (
        <Once className="section">
            <Stagger className={styles.standardsGrid}>
                <OnceItem>
                    <h2>Standards<br/> I Build By</h2>
                </OnceItem>
                <div className={styles.standardsContentGrid}>
                    <Tilt>
                        <OnceItem className={styles.standardsGridItem}>
                            <DecorativeIcon Icon={IconDiamond} />
                            <div>
                                <h3>Clarity</h3>
                                <p>Every project begins with alignment, and clear objectives shape every decision</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                    <Tilt>
                        <OnceItem className={styles.standardsGridItem}>
                            <DecorativeIcon Icon={IconListCheck} />
                            <div>
                                <h3>Discipline</h3>
                                <p>Execution is deliberate. Structure and performance are not left to chance.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                    <Tilt>
                        <OnceItem className={styles.standardsGridItem}>
                            <DecorativeIcon Icon={IconInfinity} />
                            <div>
                                <h3>Longevity</h3>
                                <p>Build decisions are made with sustainability in mind, not short term fixes.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                    <Tilt>
                        <OnceItem className={styles.standardsGridItem}>
                            <DecorativeIcon Icon={IconTargetArrow} />
                            <div>
                                <h3>Intent</h3>
                                <p>Nothing is added without purpose. Every element should serve the whole.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                </div>
            </Stagger>
        </Once>
    )
}
