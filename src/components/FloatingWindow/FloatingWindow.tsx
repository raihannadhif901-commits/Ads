'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import styles from './FloatingWindow.module.css';

export default function FloatingWindow() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={styles.floating}>
      <button
        className={styles.closeBtn}
        onClick={() => setVisible(false)}
        aria-label="Close"
      >
        <X size={14} />
      </button>
      <div className={styles.content}>
        <video
          src="/video1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={styles.image}
        />
        <div className={styles.overlay}>
          <p className={styles.promoLabel}>To Promote Your Business</p>
          <p className={styles.promoWith}>WITH</p>
          <span className={styles.promoCta}>Linknet Deals</span>
        </div>
      </div>
    </div>
  );
}
