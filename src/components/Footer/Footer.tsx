import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Image
              src="/navbar.png"
              alt="Linknet"
              width={120}
              height={40}
              className={styles.logoImg}
            />
          </div>
          <p className={styles.footerDesc}>
            Temukan berbagai E-Voucher menarik dengan penawaran
            terbaik setiap harinya.
          </p>

          <div className={styles.followSection}>
            <p className={styles.followLabel}>Ikuti Kami</p>
            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/linknetmedia/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            Copyright © 1996 - 2026 PT. Link Net Tbk. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
