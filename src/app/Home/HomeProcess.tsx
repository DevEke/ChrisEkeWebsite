import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import Button from "../../components/Button/Button";
import DecorativeIcon from "../../components/DecorativeIcon/DecorativeIcon";
import { IconSitemapFilled, IconBrush, IconBulb, IconCode, IconRocket, IconRuler } from "@tabler/icons-react";
import { Tilt } from "@/components/motion/Tilt";
import styles from "./process.module.css";

export default function HomeProcess() {
    return (
        <Once as="section" className="section">
            <Stagger className={`content ${styles.processGrid}`}>
                <OnceItem className={styles.processHeading}>
                    <h2>Execution Framework</h2>
                    <p>A structured approach from initial strategy to final launch.</p>
                </OnceItem>
                <Tilt>
                    <div className={styles.processContentGridDesktop}>
                        <div className={styles.processContentGridTop}>
                            <OnceItem className={styles.processGridItem}>
                                <DecorativeIcon Icon={IconBulb} className={styles.topLine} />
                                <div>
                                    <h3>Discover</h3>
                                    <p>Understanding goals, audience, and requirements.</p>
                                </div>
                            </OnceItem>
                            <OnceItem className={styles.processGridItem}>
                                <DecorativeIcon Icon={IconBrush} className={styles.topLine} />
                                <div>
                                    <h3>Design</h3>
                                    <p>Crafting a clear, conversion focused interface.</p>
                                </div>
                            </OnceItem>
                            <OnceItem className={styles.processGridItem}>
                                <DecorativeIcon Icon={IconRocket} className={styles.topLine} />
                                <div>
                                    <h3>Deploy</h3>
                                    <p>Testing, deployment, and final optimization.</p>
                                </div>
                            </OnceItem>
                        </div>
                    <div className={styles.processGridLine}></div>
                        <div className={styles.processContentGridBottom}>
                            <OnceItem className={styles.processGridItem}>
                                <DecorativeIcon Icon={IconRuler} className={styles.bottomLine} />
                                <div>
                                    <h3>Define</h3>
                                    <p>Defining structure, user flow, and priorities.</p>
                                </div>
                            </OnceItem>
                            <OnceItem className={styles.processGridItem}>
                                <DecorativeIcon Icon={IconCode} className={styles.bottomLine} />
                                <div>
                                    <h3>Develop</h3>
                                    <p>Building with performance and scalability in mind.</p>
                                </div>
                            </OnceItem>
                        </div>
                    </div>
                    <div className={styles.processContentGridMobile}>
                        <OnceItem className={styles.processGridItem}>
                            <DecorativeIcon Icon={IconBulb} />
                            <div>
                                <h3>Discover</h3>
                                <p>Understanding goals, audience, and requirements.</p>
                            </div>
                        </OnceItem>
                        <OnceItem className={styles.processGridItem}>
                            <DecorativeIcon Icon={IconRuler} />
                            <div>
                                <h3>Define</h3>
                                <p>Defining structure, user flow, and priorities.</p>
                            </div>
                        </OnceItem>
                        <OnceItem className={styles.processGridItem}>
                            <DecorativeIcon Icon={IconBrush} />
                            <div>
                                <h3>Design</h3>
                                <p>Crafting a clear, conversion focused interface.</p>
                            </div>
                        </OnceItem>
                        <OnceItem className={styles.processGridItem}>
                            <DecorativeIcon Icon={IconCode} />
                            <div>
                                <h3>Develop</h3>
                                <p>Building with performance and scalability in mind.</p>
                            </div>
                        </OnceItem>
                        <OnceItem className={styles.processGridItem}>
                            <DecorativeIcon Icon={IconRocket} />
                            <div>
                                <h3>Deploy</h3>
                                <p>Testing, deployment, and final optimization.</p>
                            </div>
                        </OnceItem>
                    </div>
                </Tilt>
                <OnceItem>
                    <Button
                        label="View Full Process"
                        Icon={IconSitemapFilled}
                        buttonType="secondary"
                        className={styles.processButton}
                        route="/process"
                        link
                    />
                </OnceItem>
            </Stagger>
        </Once>
    )
}
