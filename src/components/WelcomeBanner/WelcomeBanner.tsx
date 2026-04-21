'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import styles from './WelcomeBanner.module.css';

export default function WelcomeBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Tampilkan popup sesaat setelah halaman dimuat untuk memberi efek smooth
    const timer = setTimeout(() => {
      setShow(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button
          className={styles.closeBtn}
          onClick={() => setShow(false)}
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        <Image
          src="/voucher1.png"
          alt="Welcome Promo"
          width={400}
          height={400}
          className={styles.bannerImage}
          priority
        />
      </div>
    </div>
  );
}
