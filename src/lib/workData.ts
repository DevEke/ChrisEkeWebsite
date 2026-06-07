import { StaticImageData } from "next/image";

export type WorkProps = {
    brand: string;
    description: string;
    industry: string;
    link: string;
}

export const workData: Record<string, WorkProps> = {
    0: {
        brand: "Bustl",
        description: "",
        industry: "",
        link: ""
    },
    1: {
        brand: "Mezzo",
        description: "",
        industry: "",
        link: ""
    }
}
