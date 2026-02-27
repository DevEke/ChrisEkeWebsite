import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import Button from "../../components/Button/Button";
import styles from "../page.module.css";
import { IconSparklesFilled, IconLayout2Filled } from "@tabler/icons-react";
import { Tilt } from "@/components/motion/Tilt";


export default function HomeHero() {

    return (
        <Once id="homeHero" as="section" className="section">
            <Stagger className="content">
                <Tilt>
                    <OnceItem>
                        <h1>
                            Precision in design.<br/>
                            Performance in execution.<br/>
                            For those who know the difference.
                        </h1>
                    </OnceItem>
                    <OnceItem>
                        <p className="subheading">Conversion focused, SEO optimized websites built from the ground up. Structured for speed, scalability, and measurable impact.</p>
                    </OnceItem>
                    <OnceItem className={styles.heroButtons}>
                        <Button
                            label="See The Work"
                            Icon={IconLayout2Filled}
                            buttonType="secondary"
                            route="/work"
                            link
                        />
                        <Button
                            label="Start A Project"
                            Icon={IconSparklesFilled}
                            buttonType="primary"
                            route="/contact"
                            link
                        />
                    </OnceItem>
                </Tilt>
            </Stagger>
        </Once>
    )
}
