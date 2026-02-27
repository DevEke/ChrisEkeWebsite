
import { Icon } from "@tabler/icons-react";
import styles from "./Button.module.css";
import Link from "next/link";

type ButtonProps = {
    label: string;
    Icon?: Icon;
    buttonType: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    style?: React.CSSProperties;
    className?: string;
    action?: () => void;
    link?: boolean;
    route?: string;
}


export default function Button({label, Icon, style, action, type, buttonType, className, link, route}: ButtonProps) {

    if (link && route) {
        return (
            <div className={styles.buttonWrapper}>
                <Link
                    href={route}
                    className={`${className} ${styles.button} ${buttonType === 'secondary' ? styles.buttonSecondary : styles.buttonPrimary}`}
                    style={style}
                >
                    <span>{label}</span>
                    {Icon && <Icon size={15} /> }
                </Link>
            </div>
        )
    }
    return (
        <div className={styles.buttonWrapper}>
            <button
                onClick={action}
                type={type}
                className={`${className} ${styles.button} ${buttonType === 'secondary' ? styles.buttonSecondary : styles.buttonPrimary}`}
                style={style}
            >
                <span>{label}</span>
                {Icon && <Icon size={15} /> }
            </button>
        </div>
    )
}
