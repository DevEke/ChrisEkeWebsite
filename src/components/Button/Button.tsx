

import styles from "./Button.module.css";

type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    className?: string;
    style?: React.CSSProperties;
  };


export default function Button({ label, style, className, ...props }: ButtonProps) {

        return (

                <button
                    className={`${styles.buttonWrapper} ${className}`}
                    style={style}
                    {...props}
                >
                    <span className={styles.buttonLabel}>{label}</span>
                </button>
        )
}
