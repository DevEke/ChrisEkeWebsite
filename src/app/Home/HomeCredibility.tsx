import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import DecorativeIcon from "../../components/DecorativeIcon/DecorativeIcon";
import styles from "./credibility.module.css";
import { IconBolt, IconSearch, IconGauge } from "@tabler/icons-react";
import { Tilt } from "@/components/motion/Tilt";

export default function HomeCredibility() {
    return (
        <Once id="homeCredibility" as="section" className="section">
            <Stagger className={`content ${styles.credibilityGrid}`}>
                <OnceItem className={styles.credibilityHeading}>
                    <h2>
                        Built on<br/>
                        Standards
                    </h2>
                </OnceItem>
                <div className={styles.credibilityContentGrid}>
                    <Tilt>
                        <OnceItem className={styles.credibilityGridItem}>
                            <DecorativeIcon Icon={IconBolt} />
                            <div className={styles.credibilityGridItemContent}>
                                <h3>Performance First Architecture</h3>
                                <p>Speed and structure are considered before aesthetics.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                    <Tilt>
                        <OnceItem className={styles.credibilityGridItem}>
                            <DecorativeIcon Icon={IconSearch} />
                            <div className={styles.credibilityGridItemContent}>
                                <h3>Search Ready Foundations</h3>
                                <p>Built with semantic structure and long term visibility in mind.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                    <Tilt>
                        <OnceItem className={styles.credibilityGridItem}>
                            <DecorativeIcon Icon={IconGauge} />
                            <div className={styles.credibilityGridItemContent}>
                                <h3>Built for Measurable Impact</h3>
                                <p>Every decision serves clarity, usability, and business objectives.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                </div>
            </Stagger>
        </Once>
    )
}
