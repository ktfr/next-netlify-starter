import Link from "next/link";
import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <a href="https://www.netlify.com" target="_blank" rel="noopener">
          <img src="/hello-kitty.svg" alt="Logo" className={styles.logo} />
        </a>

        <nav>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </div>
        </nav>
      </header>
    </>
  )
}

