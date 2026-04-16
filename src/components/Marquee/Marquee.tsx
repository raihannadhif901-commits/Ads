'use client';

import styles from './Marquee.module.css';

export default function Marquee() {
  const text =
    '🔥 FLASH SALE HARI INI!  •  Diskon s.d 50% untuk kategori F&B dan Apps. Promo terbatas, amankan e-voucher Anda sekarang!  ✨  DAPATKAN CASHBACK SPESIAL untuk pelanggan Linknet  •  ';

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
}
