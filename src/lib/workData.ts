import { StaticImageData } from "next/image";
import wrk1 from "./../../public/image 2.png"
import wrk2 from "./../../public/image 4.png"

export type WorkProps = {
    title: string;
    body: string;
    image: StaticImageData
    link: string;
}

export const workData: Record<string, WorkProps> = {
    0: {
        title: "Fade House - Barbershop website",
        body: "For Fade House, I created a full visual and digital presence from concept to launch. Deliverables included brand identity, logo design, UI/UX design, and front-end website development. The final product is a fully responsive experience designed to showcase services, strengthen brand recognition, and create a consistent experience across desktop, tablet, and mobile.",
        image: wrk1,
        link: "https://fade-house-weld.vercel.app/"
    },
    1: {
        title: "Alicia Carter Realty - Realtor Guidance website",
        body: "Designed and developed a complete digital identity for Alicia Carter Realty, including brand direction, logo design, and a fully custom responsive website. The experience was crafted to establish trust, elevate the brand’s professional presence, and clearly communicate real estate services through a polished, intuitive interface optimized for desktop, tablet, and mobile.",
        image: wrk2,
        link: "https://alicia-carter-realty.vercel.app/"
    }
}
