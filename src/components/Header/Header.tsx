"use client"

import Link from "next/link";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { IconMenu3, IconX, IconMessageCircleFilled, IconCircleFilled } from "@tabler/icons-react";
import { useScrollLock } from "@/hooks/useScrollLock";


export default function Header() {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);

    function onNavClick() {
        setOpen(false);
    }

    useScrollLock(open);

    useEffect(() => {
        function onResize() {
          if (window.innerWidth > 768) setOpen(false);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        if (open) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    return (
        <>
        <header className={`${styles.navWrapper} content`} role="banner">
            <div className="site-logo logo-sm dark-logo"></div>
            <nav className={styles.navContainer} aria-label="Primary">
                <Link href="#about" className={styles.navLink}>About</Link>
                <Link href="#services" className={styles.navLink}>Services</Link>
                <Link href="#process" className={styles.navLink}>Process</Link>
                <Link href="#skills" className={styles.navLink}>Skills</Link>
                <Link href="#work" className={styles.navLink}>Work</Link>
                <Link href="#faqs" className={styles.navLink}>FAQ</Link>
            </nav>
            <Button
                Icon={IconMessageCircleFilled}
                label="Start a Project"
                buttonType="primary"
                link={true}
                route="#contact"
                className={styles.headerButton}
            />
            {/* Mobile Button */}
            <button
                type="button"
                className={styles.mobileMenuButton}
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((v) => !v)}
            >
                { open ? <IconX aria-hidden size={30} stroke={1.5} /> : <IconMenu3 size={30} stroke={1.5} aria-hidden /> }
            </button>

        </header>
        {/* Mobile Menu Panel */}
            <>
                <button
                    type="button"
                    className={` ${styles.overlay} ${open ? styles.overlayOpen : ""}`}
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    style={{ pointerEvents: open ? "auto" : "none"}}
                />
                <nav
                    id="mobile-menu"
                    className={`${styles.navMobile} ${open ? styles.navMobileOpen : ""}`}
                    aria-label="Mobile Primary"
                    style={{ pointerEvents: open ? "auto" : "none" }}
                >
                    <div className={`container ${styles.mobileInner}`}>
                        <div className="sectionLabel">Menu</div>
                        <Link href="#about" onClick={onNavClick} className={styles.mobileNavLink}>About</Link>
                        <Link href="#services" onClick={onNavClick} className={styles.mobileNavLink}>Services</Link>
                        <Link href="#process" onClick={onNavClick} className={styles.mobileNavLink}>Process</Link>
                        <Link href="#skills" onClick={onNavClick} className={styles.mobileNavLink}>Skills</Link>
                        <Link href="#work" onClick={onNavClick} className={styles.mobileNavLink}>Work</Link>
                        <Link href="#faqs" onClick={onNavClick} className={styles.mobileNavLink}>FAQ</Link>
                    </div>
                </nav>
            </>
        </>
    )
}
