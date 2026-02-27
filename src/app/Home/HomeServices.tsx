import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import Button from "../../components/Button/Button";
import DecorativeIcon from "../../components/DecorativeIcon/DecorativeIcon";
import { IconAppWindow, IconTemplateFilled, IconSeo, IconTransform } from "@tabler/icons-react";
import { Tilt } from "@/components/motion/Tilt";
import styles from "./services.module.css";

export default function HomeServices() {
    return (
        <Once id="homeServices" as="section" className="section">
            <Stagger className={`content ${styles.servicesGrid}`}>
                <OnceItem>
                    <h2>Core Services</h2>
                    <p>A structured approach<br/> to modern web development.</p>
                    <Button
                        label="See All Services"
                        Icon={IconTemplateFilled}
                        buttonType="secondary"
                        style={{marginTop: "48px"}}
                        route="/services"
                        link
                    />
                </OnceItem>
                <div className={styles.servicesContentGrid}>
                    <Tilt>
                        <OnceItem className={styles.servicesGridItem}>
                            <DecorativeIcon Icon={IconAppWindow} />
                            <div>
                                <h3>Custom Website Design</h3>
                                <p>Up to nine custom pages designed with clarity, structure, and responsiveness across all devices.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                    <Tilt>
                        <OnceItem className={styles.servicesGridItem}>
                            <DecorativeIcon Icon={IconTransform} />
                            <div>
                                <h3>Conversion Focused Development</h3>
                                <p>Built from the ground up with a focus on intentional user flow and performance driven architecture.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                    <Tilt>
                        <OnceItem className={styles.servicesGridItem}>
                            <DecorativeIcon Icon={IconSeo} />
                            <div>
                                <h3>SEO and Performance Optimization</h3>
                                <p>Semantic structure, optimized assets, and search ready foundations implemented from day one.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                </div>
            </Stagger>
        </Once>
    )
}
