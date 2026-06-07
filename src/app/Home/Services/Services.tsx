
import Image from "next/image";
import ServiceItem from "@/app/Home/Services/ServiceItem";
import styles from "./Services.module.css";
import { servicesData } from "@/lib/servicesData";


export default function Services() {
    return (
        <section id="services">
            <div className={`content ${styles.servicesWrapper}`}>
                <div className={styles.servicesContent}>
                    <h2 className="h2">Designed With Purpose.<br/> Built With Care.</h2>
                    <p className="p1">Your online presence should feel intentional in how it looks, works, and gets found. I build clean, reliable digital foundations through design, development, SEO, and branding.</p>
                    <div className={styles.servicesGrid}>
                        {
                          Object.keys(servicesData).map((item, x) => {
                                return (
                                    <ServiceItem
                                        key={x}
                                        id={servicesData[item].toString()}
                                        image={servicesData[item].image}
                                        title={servicesData[item].title}
                                        description={servicesData[item].body}
                                    />
                                )
                            })
                        }

                </div>
                </div>
            </div>
        </section>
    )
}
