import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={`${styles.header} container`}>
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
      <nav className={styles.menu}>
        <Link href="/">
          Inicio
        </Link>
        <Link href="/avisos">
          Avisos
        </Link>
        <Link href="/noticias">
          Noticias
        </Link>
        <Link href="/nosotros">
          Nosotros
        </Link>
        <a href="/contact" className={styles.contactCta}>
          Contacto
        </a>
      </nav>
    </div>
  );
}
