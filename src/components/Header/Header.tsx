"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { IconMenu3, IconX } from "@tabler/icons-react";
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
        <header className={`wrapper ${styles.navWrapper}`} role="banner">
            <nav className={`content ${styles.navContainer}`} aria-label="Primary">
                <ul className={styles.navLinks}>
                    <li><Link href="/" className={`${styles.navLink} ${pathname === "/" && styles.activeLink}`}><span>Home</span></Link></li>
                    <li><Link href="/services" className={`${styles.navLink} ${pathname === "/services" && styles.activeLink}`}><span>Services</span></Link></li>
                    <li><Link href="/work" className={`${styles.navLink} ${pathname === "/work" && styles.activeLink}`}><span>Work</span></Link></li>
                    <li><Link href="/process" className={`${styles.navLink} ${pathname === "/process" && styles.activeLink}`}><span>Process</span></Link></li>
                    <li><Link href="/about" className={`${styles.navLink} ${pathname === "/about" && styles.activeLink}`}><span>About</span></Link></li>
                    <li><Link href="/contact" className={`${styles.navLink} ${pathname === "/contact" && styles.activeLink}`}><span>Contact</span></Link></li>
                </ul>
            </nav>
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
                    <ul className={`container ${styles.mobileInner}`}>
                        <li><Link onClick={onNavClick} href="/" className={`${styles.navLink} ${pathname === "/" && styles.activeLink}`}><span>Home</span></Link></li>
                        <li><Link onClick={onNavClick} href="/services" className={`${styles.navLink} ${pathname === "/services" && styles.activeLink}`}><span>Services</span></Link></li>
                        <li><Link onClick={onNavClick} href="/work" className={`${styles.navLink} ${pathname === "/work" && styles.activeLink}`}><span>Work</span></Link></li>
                        <li><Link onClick={onNavClick} href="/process" className={`${styles.navLink} ${pathname === "/process" && styles.activeLink}`}><span>Process</span></Link></li>
                        <li><Link onClick={onNavClick} href="/about" className={`${styles.navLink} ${pathname === "/about" && styles.activeLink}`}><span>About</span></Link></li>
                        <li><Link onClick={onNavClick} href="/contact" className={`${styles.navLink} ${pathname === "/contact" && styles.activeLink}`}><span>Contact</span></Link></li>
                    </ul>
                </nav>
            </>
        </>
    )
}
