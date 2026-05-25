import Image from "next/image";
import styles from "./Work.module.css";
import Button from "@/components/Button/Button";
import { WorkProps } from "@/lib/workData";
import Link from "next/link";


export default function WorkItem({ title, body, image, link }: WorkProps) {
    return (
        <div>
            <Link href={link} target="_blank">
            <Image src={image} alt="" className={styles.workImage} />
            </Link>
            <h3 className="h3">{title}</h3>
            <p className="p1">{body}</p>
        </div>
    )
}
