import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import Button from "../../components/Button/Button";
import HomeWorkPreview from "./HomeWorkPreview";
import { IconLayout2Filled } from "@tabler/icons-react";
import { Tilt } from "@/components/motion/Tilt";
import styles from "./work.module.css";

export default function HomeWork() {
    return (
        <Once id="homeWork" as="section" className="section">
            <Stagger className={`content ${styles.workGrid}`}>
                <OnceItem>
                    <h2>Selected Work</h2>
                    <p>Recent builds focused on performance, structure, and measurable results.</p>
                    <Button
                        label="See The Work"
                        Icon={IconLayout2Filled}
                        buttonType="secondary"
                        style={{marginTop: "48px"}}
                        route="/work"
                        link
                    />
                </OnceItem>
                <Tilt>
                    <OnceItem>
                        <HomeWorkPreview />
                    </OnceItem>
                </Tilt>
            </Stagger>
        </Once>
    )
}
