import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import DecorativeIcon from "@/components/DecorativeIcon/DecorativeIcon";
import { IconRefresh, IconStack2, IconHourglassHigh } from "@tabler/icons-react";
import { Tilt } from "@/components/motion/Tilt";
import styles from "./ideal.module.css";

export default function ServicesIdeal() {
    return (
        <Once as="section" className="section">
            <Stagger className={`content ${styles.idealGrid}`}>
                <OnceItem>
                    <h2>
                        Built With<br/>
                        The Right Intent
                    </h2>
                </OnceItem>
                <div className="flexColumn" style={{gap: "48px"}}>
                    <Tilt>
                        <OnceItem className={styles.idealGridItem}>
                            <DecorativeIcon Icon={IconRefresh} />
                            <div>
                                <h3>Performance As A Standard</h3>
                                <p>For teams who view their website as infrastructure, where speed, clarity, and reliability directly support business growth.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                    <Tilt>
                        <OnceItem className={styles.idealGridItem}>
                            <DecorativeIcon Icon={IconStack2} />
                            <div>
                                <h3>Structure Over Shortcuts</h3>
                                <p>For professionals who prioritize thoughtful planning and disciplined execution over quick solutions.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                    <Tilt>
                        <OnceItem className={styles.idealGridItem}>
                            <DecorativeIcon Icon={IconHourglassHigh} />
                            <div>
                                <h3>Long Term Perspective</h3>
                                <p>For businesses building with sustainability in mind, focused on foundations that will support them well beyond launch.</p>
                            </div>
                        </OnceItem>
                    </Tilt>
                </div>
            </Stagger>
        </Once>
    )
}
