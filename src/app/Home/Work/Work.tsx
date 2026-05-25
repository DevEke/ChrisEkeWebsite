"use client"

import { useState } from "react";
import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import styles from "./Work.module.css";
import Button from "@/components/Button/Button";
import { workData } from "@/lib/workData";
import WorkItem from "./WorkItem";

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
        <Once id="work" className="section ">
            <div className={`content ${styles.workWrapper}`}>
                <div className={styles.workContent}>
                    <WorkItem
                        title={currWork.title}
                        body={currWork.body}
                        image={currWork.image}
                        link={currWork.link}
                    />

                    <div className={styles.workControls}>
                        <Button
                            className={styles.prevButton}
                            label="Previous"
                            onClick={prev}
                        />
                        <Button
                            className={styles.nextButton}
                            label="Next"
                            onClick={next}
                        />
                    </div>
                </div>
            </div>
        </Once>
    )
}
