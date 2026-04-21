'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './Marquee.module.css';

const announcements = [
  {
    id: 1,
    content: (
      <>
        🔥 FLASH SALE HARI INI! • Diskon s.d 50% untuk kategori F&amp;B. 
        <a href="https://www.alfamidiku.com/" target="_blank" rel="noopener noreferrer" className={styles.ctaLink}>
          Klik di sini sekarang!
        </a> 
      </>
    )
  },
  {
    id: 2,
    content: (
      <>
        ✨ DAPATKAN CASHBACK SPESIAL • Khusus untuk seluruh pelanggan setia Linknet.
      </>
    )
  },
  {
    id: 3,
    content: (
      <>
        🎁 VOUCHER GAMING DISKON 10% • Amankan e-voucher game Anda hari ini.
      </>
    )
  }
];

export default function Marquee() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const deltaXRef = useRef(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const SLIDE_COUNT = announcements.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDE_COUNT);
  }, [SLIDE_COUNT]);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(next, 4000);
  }, [next]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [startAutoPlay]);

  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    startXRef.current = clientX;
    deltaXRef.current = 0;
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDragging) return;
    deltaXRef.current = clientX - startXRef.current;
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 50;
    if (deltaXRef.current < -threshold) {
      setCurrent((prev) => Math.min(prev + 1, SLIDE_COUNT - 1));
    } else if (deltaXRef.current > threshold) {
      setCurrent((prev) => Math.max(prev - 1, 0));
    }
    startAutoPlay();
  };

  return (
    <div className={styles.marqueeWrapper}>
      <div 
        className={styles.carouselContainer}
        onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
        onTouchEnd={handlePointerUp}
        onMouseDown={(e) => handlePointerDown(e.clientX)}
        onMouseMove={(e) => {
          if (isDragging) e.preventDefault();
          handlePointerMove(e.clientX);
        }}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
      >
        <div 
          className={styles.track}
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: isDragging ? 'none' : 'transform 500ms ease',
          }}
        >
          {announcements.map((item) => (
            <div key={item.id} className={styles.slide}>
              <div className={styles.card}>
                <span className={styles.textWrap}>{item.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
