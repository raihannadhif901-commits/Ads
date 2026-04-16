'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navbarInner}>
          <div className={styles.logoArea}>
            <Image
              src="/navbar.png"
              alt="Linknet"
              width={120}
              height={40}
              className={styles.logoImg}
              priority
            />
          </div>

          <div className={styles.navLinks}>
            <a href="/#vouchers" className={styles.navLink}>Promo</a>
            <a href="/faq" className={styles.navLink}>FAQ</a>
            <a href="/upgrade" className={styles.navLink}>Upgrade</a>
          </div>

          <div className={styles.navRight}>
            <button
              className={styles.menuToggle}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.mobileNavLinks}>
          <a href="/#vouchers" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Promo</a>
          <a href="/faq" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="/upgrade" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Upgrade</a>
        </div>
      </div>
    </>
  );
}
