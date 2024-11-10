"use client";
import Link from 'next/link';
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "../css.modules/header.module.css"

export default function Navbar() {
  const [Open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      
      {/* Logo Section */}
      <Link href="/">
        <div className={styles.logoContainer}>
          <h1 className={styles.logoText}>SSA</h1>
        </div>
      </Link>

      {/* Centered Navigation for larger screens */}
      <nav className={`${styles.navCenter} md:flex`}>
        <ul className={styles.navLinks}>
          <li><Link href="/about" className={styles.navLink}>About</Link></li>
          <li><Link href="/portfolio" className={styles.navLink}>Projects</Link></li>
          <li><Link href="/contact" className={styles.navLink}>Contact Us</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu Button aligned to the right */}
      <div className={`${styles.mobileMenuButtonContainer} md:hidden`}>
        <button className={styles.mobileMenuButton} onClick={() => setOpen(!Open)} aria-label="Toggle Menu">
          {Open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {Open && (
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavLinks}>
            <li><Link href="/portfolio" className={styles.mobileNavLink}>Projects</Link></li>
            <li><Link href="/about" className={styles.mobileNavLink}>About</Link></li>
            <li><Link href="/contact" className={styles.mobileNavLink}>Contact Us</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
