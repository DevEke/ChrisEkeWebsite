import { StaticImageData } from "next/image";
import seo from "./../../public/graphic-performance.png"
import dev from "./../../public/graphic-dev.png"
import db from "./../../public/graphic-db.png"
import logo from "./../../public/graphic-design.png"
import ai from "./../../public/graphic-ai.png"
import comp from "./../../public/CE - Computer 1.png"

type ServiceProps = {
    title: string;
    body: string;
    image: StaticImageData
}

export const servicesData: Record<string, ServiceProps> = {
    0: {
        title: "Website Design & Development",
        body: "Custom websites designed and built to fit your goals and brand. Clean layouts, smooth interactions, and modern functionality without the feel of a generic template.",
        image: dev
    },
    1: {
        title: "SEO Optimization & Performance",
        body: "Built with search and speed in mind. On-page SEO, technical structure, performance tuning, and clean code that help your site rank and run better.",
        image: seo
    },
    2: {
        title: "",
        body: "",
        image: comp
    },
    3: {
        title: "Database & WebSocket Support",
        body: "Reliable backend systems for apps that need speed and live updates. From databases and real-time data flows to functionality that keeps your experience responsive.",
        image: db
    },
    4: {
        title: "Logo & Brand Identity",
        body: "Memorable visual systems that give your business personality. Logos, typography, colors, and branding designed to feel clear, cohesive, and recognizable.",
        image: logo
    },
    5: {
        title: "AI Prompting & Image Generation",
        body: "Custom AI visuals built from clear creative direction and smart prompting. Concept art, brand visuals, mockups, and imagery tailored to your ideas.",
        image: ai
    }
}
