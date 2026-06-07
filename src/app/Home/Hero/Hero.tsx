"use client";
import { scrollToSection } from "@/hooks/useScrollToSection";
import styles from "./Hero.module.css";
import Button from "@/components/Button/Button";




export default function Hero() {

    return (
        <section id="hero">
            <div className={`content ${styles.heroWrapper}`}>
                <div className={`glass ${styles.heroContent}`}>
                    <div className="img-placeholder"></div>
                    <h1 className="h1">Digital experiences built with intention.</h1>
                    <p className="p1">I design and develop fast, accessible websites for businesses, brands, and individuals ready to sharpen their online presence.</p>
                   <Button
                    className={styles.heroButton}
                    label="Explore"
                    onClick={() => scrollToSection("work")}
                   />
                </div>
            </div>
        </section>
    )
}
