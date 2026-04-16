'use client';

import { Flame, Zap, Target } from 'lucide-react';
import styles from './ComingSoon.module.css';

export default function ComingSoon() {
  return (
    <div className={styles.page}>
      {/* Section 1: Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <span className={styles.badge}>✨ Akan segera hadir</span>
            <h1 className={styles.heroTitle}>
              Your <span className={styles.orange}>1-Stop Deals Hub</span><br />
              untuk promo terbaik & penawaran menarik
            </h1>
            <p className={styles.heroDesc}>
              Temukan berbagai promo spesial, voucher eksklusif, dan penawaran menarik dari berbagai brand dalam satu tempat yang lebih praktis, lebih rapi, dan mudah diakses.
            </p>
            <div className={styles.heroBtns}>
              <a href="#advertiser" className={styles.btnPrimary}>Pasang Iklan Brand Anda</a>
              <a href="#advertiser" className={styles.btnOutline}>Hubungi Sales Agent</a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.iconOrange}`}><Flame size={18} /></div>
              <div>
                <h4>Best Deals</h4>
                <p>Promo terbaik dari berbagai brand dalam satu tempat.</p>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.iconYellow}`}><Zap size={18} /></div>
              <div>
                <h4>Easy Access</h4>
                <p>Akses mudah via web & mobile.</p>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.iconRed}`}><Target size={18} /></div>
              <div>
                <h4>Brand Exposure</h4>
                <p>Tingkatkan visibilitas campaign & promo brand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Advertiser */}
      <section id="advertiser" className={styles.advSection}>
        <div className={styles.advInner}>
          <div className={styles.advLeft}>
            <span className={styles.advLabel}>FOR ADVERTISERS & PARTNERS</span>
            <h2 className={styles.advTitle}>Pasang iklan brand Anda di sini.</h2>
            <p className={styles.advDesc}>
              Tampilkan promo, campaign, atau penawaran spesial brand Anda di deals hub yang dirancang untuk menarik perhatian audience dan memberikan exposure yang lebih maksimal.
            </p>
            <p className={styles.advDesc}>
              Cocok untuk brand yang ingin hadir di ruang promo yang relevan, mudah diakses, dan siap mendukung kebutuhan campaign secara lebih fleksibel.
            </p>
            <div className={styles.pillGrid}>
              <span className={styles.pill}>Banner & promo spotlight</span>
              <span className={styles.pill}>Voucher / offer placement</span>
              <span className={styles.pill}>Campaign exposure</span>
              <span className={styles.pill}>Direct contact to sales</span>
            </div>
          </div>

          <div className={styles.contactCard}>
            <span className={styles.contactLabel}>CONTACT</span>
            <h3 className={styles.contactTitle}>Let&apos;s collaborate</h3>
            <p className={styles.contactDesc}>
              Ingin menampilkan brand atau promo Anda di halaman ini? Hubungi sales agent kami untuk informasi lebih lanjut.
            </p>
            <p className={styles.contactPhone}>0818-XXX-XXX</p>
            <p className={styles.contactAgent}>Sales Agent • Linknet Deals</p>
            <a href="tel:+628180000000" className={styles.contactBtn}>Hubungi Sekarang</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span className={styles.footerLeft}><strong>LINKNET DEALS</strong> — Coming Soon</span>
        <span className={styles.footerRight}>Powered by Linknet</span>
      </footer>
    </div>
  );
}
