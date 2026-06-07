"use client"

import { useState } from "react";
import styles from "./Work.module.css";
import { workData } from "@/lib/workData";
import WorkItem from "./WorkItem";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export default function Work() {
    const [curr, setCurr] = useState(0);
    const currWork = workData[curr];

    const next = () => {
        setCurr((prev) =>
          prev === Object.keys(workData).length - 1
            ? 0
            : prev + 1
        );
      };

      const prev = () => {
        setCurr((prev) =>
          prev === 0
            ? Object.keys(workData).length - 1
            : prev - 1
        );
      };

    return (
        <section id="work">
            <div className={`content ${styles.workWrapper}`}>
                <div className={styles.workContent}>
                    <WorkItem
                        brand={currWork.brand}
                        description={currWork.description}
                        industry={currWork.industry}
                        image={currWork.image}
                        link={currWork.link}
                    />

                    <div className={styles.workControls}>
                        <button className={styles.workButton} onClick={prev} >
                            <IconChevronLeft />
                        </button>
                        <button  className={styles.workButton}  onClick={next} >
                            <IconChevronRight/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
