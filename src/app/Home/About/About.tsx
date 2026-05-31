"use client"

import { scrollToSection } from "@/hooks/useScrollToSection";
import Button from "@/components/Button/Button";
import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about">
            <div className={`content ${styles.aboutWrapper}`}>
                <div className={styles.aboutContent}>
                    <h2 className="h2">Chris Eke</h2>
                    <p className="p1">I build and design websites, logos, and brand identities. My clients need well-built websites and meaningful identities to communicate their brands effectivley. </p>
                    <p className="p1">"If it looks great, it should work better."</p>
                    <Button
                        className={styles.aboutButton}
                        label="Contact Me"
                        onClick={() => scrollToSection("contact")}
                    />
                </div>
            </div>
        </section>
    )
}
