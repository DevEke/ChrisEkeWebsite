import { StaticImageData } from "next/image";
import wrk1 from "./../../public/image 2.png"
import wrk2 from "./../../public/image 4.png"

export type WorkProps = {
    brand: string;
    description: string;
    industry: string;
    image: StaticImageData
    link: string;
}

export const workData: Record<string, WorkProps> = {
    0: {
        brand: "Fade House",
        description: "Fade House is a fictional Dallas-based barbershop. I designed a full visual and digital presence from concept to launch to create a fully responsive experience to strengthen brand recognition and create a consistent online presence.",
        industry: "barbershop",
        image: wrk1,
        link: "https://fade-house-weld.vercel.app/"
    },
    1: {
        brand: "Alicia Carter Realty",
        description: "Alicia Carter Realty was a complete digital identity redesign from the ground up. The new experience was crafted to establish trust, elevate the brand’s professional presence, and clearly communicate real estate services.",
        industry: "realty",
        image: wrk2,
        link: "https://alicia-carter-realty.vercel.app/"
    }
}
