"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.header}>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/wedevstudio.svg"
            alt="WeDevStudio Logo"
            className={styles.logo}
            width={150}
            height={30}
            priority
          />
        </a>
      </div>
      <button className={styles.menuToggle} onClick={toggleMobileMenu}>
        ☰
      </button>
      <nav className={`${styles.menu} ${isMobileMenuOpen ? styles.menuOpen : ''}`}>
        <Link href="/" className={styles.menuItem}>
          Inicio
        </Link>
        <Link href="/avisos" className={styles.menuItem}>
          Avisos
        </Link>
        <Link href="/noticias" className={styles.menuItem}>
          Noticias
        </Link>
        <Link href="/nosotros" className={styles.menuItem}>
          Nosotros
        </Link>
        <a href="/contact" className={`${styles.menuItem} ${styles.contactCta}`}>
          Contacto
        </a>
      </nav>
      <div className={`${styles.overlay} ${isMobileMenuOpen ? styles.show : ''}`} onClick={toggleMobileMenu}></div>
    </div>
  );
}