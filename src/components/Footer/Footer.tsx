import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footerWrapper}>
            <div className={`content ${styles.footerContents}`}>
                <div className="site-logo logo-md light-logo"></div>
                <p className={styles.footerCopyright}><span>©</span> 2026 chriseke.com</p>
            </div>
        </footer>
    )
}
