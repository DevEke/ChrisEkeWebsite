"use client";
import { scrollToSection } from "@/hooks/useScrollToSection";
import Image from "next/image";
import styles from "./Hero.module.css";
import chris_hero from "../../../../public/hero_img.png"
import Button from "@/components/Button/Button";




export default function Hero() {

    return (
        <section id="hero">
            <div className={`content ${styles.heroWrapper}`}>
                <div className={`glass ${styles.heroContent}`}>
                    <h1 className="h1">I design & build websites, logos and brand identities.</h1>
                    <p className="p1">Design, development, and SEO for small businesses and individuals across DFW. Fast, accessible, and built to rank.</p>
                   <Button
                    className={styles.heroButton}
                    label="See my Work"
                    onClick={() => scrollToSection("work")}
                   />
                   <Image className={styles.heroImage} src={chris_hero} alt="chris-hero" />
                </div>
            </div>
        </section>
    )
}
