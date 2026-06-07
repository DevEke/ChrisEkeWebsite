import Image from "next/image";
import styles from "./Work.module.css";
import { WorkProps } from "@/lib/workData";
import Link from "next/link";


export default function WorkItem({ brand, industry, description, link }: WorkProps) {
    return (
        <div>
            {/* <Link href={link} target="_blank">
            <Image src={image} alt="" className={styles.workImage} />
            </Link> */}
            <h3 className="h3">{brand}</h3>
            <p className="p1">{description}</p>
        </div>
    )
}
