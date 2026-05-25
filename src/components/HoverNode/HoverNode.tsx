"use client"

import { useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import type { Icon } from "@tabler/icons-react";
import styles from "./HoverNode.module.css";

type HoverNodeProps = {
    icon: Icon;
    label: string;
    description: string;
}

const subscribe = () => () => {};

export default function HoverNode({ icon: Icon, label, description }: HoverNodeProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [pos, setPos] = useState({ top: 0, left: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const mounted = useSyncExternalStore(subscribe, () => true, () => false);

    const handleMouseEnter = () => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setPos({
                top: rect.bottom + 12,
                left: rect.left + rect.width / 2,
            });
        }
        setIsHovered(true);
    };

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
            className={styles.hoverNodeContainer}
        >
            <Icon size={18} stroke={2} className={styles.hoverNodeIcon} />
            <span className={styles.hoverNodeLabel}>{label}</span>

            {mounted && createPortal(
                <div
                    className={`${styles.hoverNodeDescription} ${isHovered ? styles.nodeActive : styles.nodeInactive}`}
                    style={{ top: pos.top, left: pos.left }}
                >
                    <p>{description}</p>
                </div>,
                document.body
            )}
        </div>
    );
}
