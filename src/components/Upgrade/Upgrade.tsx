'use client';

import { Sparkles, ArrowRight } from 'lucide-react';
import styles from './Upgrade.module.css';

export default function Upgrade() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.glowOrb} />

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.badge}>
            <Sparkles size={14} /> Upgrade
          </div>
          <h1 className={styles.title}>
            Segera Hadir — <span className={styles.gradient}>Promo & Deals Eksklusif!</span>
          </h1>
          <p className={styles.subtitle}>
            Kami sedang menyiapkan penawaran spesial yang tidak akan Anda temukan di tempat lain. Paket upgrade premium dengan cashback lebih besar, akses early-bird ke flash sale, dan voucher eksklusif dari brand ternama — semuanya segera hadir untuk Anda.
          </p>
          <p className={styles.subtitleSecondary}>
            Sambil menunggu, jangan lewatkan promo-promo menarik yang sudah tersedia sekarang!
          </p>

          <a href="/#vouchers" className={styles.ctaBtn}>
            Lihat Promo Saat Ini <ArrowRight size={18} />
          </a>
        </div>
      </main>
    </div>
  );
}
