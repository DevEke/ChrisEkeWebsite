import styles from "./Node.module.css";

type NodeProps = {
    label: string;
    className: string;
}

export default function Node({ className, label }:NodeProps) {
    return (
        <div className={`${className} ${styles.nodeContainer}`}>
            <span className={styles.nodeLabel}>{ label }</span>
        </div>
    )
}
