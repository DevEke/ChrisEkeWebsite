import styles from "./Services.module.css";
import Image, { StaticImageData } from "next/image";

type ItemProps = {
    id: string;
    image: StaticImageData;
    title: string;
    description: string;
}

export default function ServiceItem({ id, image, title, description }: ItemProps) {
    return (
        <article className={styles.serviceItemWrapper}>
            <Image  className={styles.serviceItemImage} src={image} alt={`${title}-image`}/>
            <div className={styles.serviceItemFlex}>
                <h3 className="h3">{title}</h3>
                <p className="p1">{description}</p>
            </div>
        </article>
    )
}
