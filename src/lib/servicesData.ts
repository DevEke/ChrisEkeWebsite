import { StaticImageData } from "next/image";
import seo from "./../../public/icon-seo.png";
import website from "./../../public/icon-web.png";
import brand from "./../../public/icon-brand.png";


type ServiceProps = {
    title: string;
    body: string;
    image: StaticImageData
}

export const servicesData: Record<string, ServiceProps> = {
    0: {
        title: "Launch Your Website",
        body: "Responsive, custom-built websites designed for performance, accessibility, and a clean user experience.",
        image: website
    },
    1: {
        title: "Scale Your Presence",
        body: "SEO, site optimization, and digital improvements that help your brand become easier to find and harder to ignore.",
        image: seo
    },
    2: {
        title: "Establish Your Brand",
        body: "Logos, visual identity systems, and brand foundations built to make your business feel clear, credible, and recognizable.",
        image: brand
    }
}
