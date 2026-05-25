"use client";

import { useState, useEffect } from "react";
import { Once } from "@/components/motion/Once";
import { scrollToSection } from "@/hooks/useScrollToSection";
import Image from "next/image";
import { IconMessageCircleFilled, IconVersionsFilled } from "@tabler/icons-react";
import styles from "./Hero.module.css";
import hero_image from "../../../../public/hero_img.png"
import logo_image from "../../../../public/CE - Logo (1).png"
import Button from "@/components/Button/Button";




export default function Hero() {
    const words = ["barbershop", "engaging", "real estate", "restaurant", "scalable", "modern", "trucking", "legal", "all kinds of"]
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setFade(true);
              }, 300);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <Once id="hero">
            <div className={`content ${styles.heroWrapper}`}>
                <div className={`glass ${styles.heroContent}`}>
                    <h1 className="h1">I will design & build <span className={fade ? "fade-in" : "fade-out"}>{words[index]}</span>{" "}websites & apps for your business.</h1>
                    <p className="p1">Design, development, and SEO for small businesses and individuals across DFW. Fast, accessible, and built to rank.</p>
                   <Button
                    className={styles.heroButton}
                    label="See my Work"
                    onClick={() => scrollToSection("work")}
                   />
                </div>
            </div>
        </Once>
    )
}
