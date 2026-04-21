'use client';

import styles from './Marquee.module.css';

export default function Marquee() {
  const content = (
    <span className={styles.textWrap}>
      🔥 FLASH SALE HARI INI! • Diskon s.d 50% untuk kategori F&amp;B. 
      <a href="https://www.alfamidiku.com/" target="_blank" rel="noopener noreferrer" className={styles.ctaLink}>
        Klik di sini sekarang!
      </a> 
      ✨ DAPATKAN CASHBACK SPESIAL untuk pelanggan Linknet • 
    </span>
  );

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <span className={styles.text}>{content}</span>
        <span className={styles.text}>{content}</span>
        <span className={styles.text}>{content}</span>
      </div>
    </div>
  );
}
