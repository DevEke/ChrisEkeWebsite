import { Once } from "@/components/motion/Once";
import Image from "next/image";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import ServiceItem from "@/app/Home/Services/ServiceItem";
import styles from "./Services.module.css";
import { servicesData } from "@/lib/servicesData";


export default function Services() {
    return (
        <Once id="services">
            <div className={`content ${styles.servicesWrapper}`}>
                <div className={styles.servicesContent}>
                    <h2 className="h2">Here is what I offer.</h2>
                    <p className="p1">Thoughtful design. Modern development. Strategic execution. I build websites, apps, and digital experiences that balance aesthetics with performance.</p>
                    <Stagger className={styles.servicesGrid}>
                        {
                            [0,1,2,3,4,5].map((item, x) => {
                                if (item === 2) {
                                    return <Image className={styles.serviceKey} src={servicesData[item].image} alt="comp" key={x} />
                                }

                                return (
                                    <OnceItem className={styles.serviceKey} key={x}>
                                        <ServiceItem
                                            id="01"
                                            image={servicesData[item].image}
                                            title={servicesData[item].title}
                                            description={servicesData[item].body}
                                        />
                                    </OnceItem>
                                )
                            })
                        }

                </Stagger>
                </div>
            </div>
        </Once>
    )
}
