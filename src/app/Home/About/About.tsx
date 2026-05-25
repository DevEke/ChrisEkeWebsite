"use client"

import { Once } from "@/components/motion/Once";
import { scrollToSection } from "@/hooks/useScrollToSection";
import { IconTableFilled } from "@tabler/icons-react";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import Button from "@/components/Button/Button";
import styles from "./About.module.css";

export default function About() {
    return (
        <Once id="about">
            <div className={`content ${styles.aboutWrapper}`}>
                <div className={styles.aboutContents}>
                    <h2 className="h2">Hi, I&apos;m Chris Eke</h2>
                    <p className="p1">Im web designer and developer based in Dallas. I work with small businesses and individuals across DFW who need a well-built website and a straightforward process to get there. no contractors, no back and forth through someone who wasnt in the original conversation.</p>
                    <p className="p1">Good work takes focus. I keep my client list small on purpose so every project gets the attention it deserves.</p>
                    <Button
                        className={styles.aboutButton}
                        label="Contact Me"
                        onClick={() => scrollToSection("contact")}
                    />
                </div>
            </div>
        </Once>
    )
}
