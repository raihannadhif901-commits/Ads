'use client';

import { useRef, useState } from 'react';
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const startScroll = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startPos.current = e.pageX - scrollRef.current.offsetLeft;
    startScroll.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startPos.current;
    scrollRef.current.scrollLeft = startScroll.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startPos.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    startScroll.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = x - startPos.current;
    scrollRef.current.scrollLeft = startScroll.current - walk;
  };

  // Gabungkan array 2x agar di desktop yang layarnya lebar card tetap bisa di-drag panjang
  const loopedAnnouncements = [...announcements, ...announcements];

  return (
    <div className={styles.marqueeWrapper}>
      <div 
        className={styles.track}
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {loopedAnnouncements.map((item, i) => (
          <div key={`${item.id}-${i}`} className={styles.card}>
            <span className={styles.textWrap}>{item.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
