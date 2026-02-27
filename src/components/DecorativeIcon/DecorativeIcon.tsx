import { Icon } from "@tabler/icons-react";
import styles from "./DecorativeIcon.module.css"

type DecorativeIconProps = {
    Icon: Icon;
    style?: React.CSSProperties;
    className?: string;
}

export default function DecorativeIcon({Icon, style, className}: DecorativeIconProps) {
    return (
        <div style={style} className={`${className} ${styles.decorativeIcon}`}>
            <Icon size={24} />
        </div>
    )
}
