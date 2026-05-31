
import Image from "next/image";
import ServiceItem from "@/app/Home/Services/ServiceItem";
import styles from "./Services.module.css";
import { servicesData } from "@/lib/servicesData";


export default function Services() {
    return (
        <section id="services">
            <div className={`content ${styles.servicesWrapper}`}>
                <div className={styles.servicesContent}>
                    <h2 className="h2">Here is what I offer</h2>
                    <p className="p1">Thoughtful design. Modern development. Strategic execution. I build websites, apps, and digital experiences that balance aesthetics with performance.</p>
                    <div className={styles.servicesGrid}>
                        {
                            [0,1,2,3,4,5].map((item, x) => {
                                if (item === 2) {
                                    // return <Image key={x} src={servicesData[item].image} alt="comp" />
                                    return null

                                }

                                return (
                                    <ServiceItem
                                        key={x}
                                        id="01"
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
