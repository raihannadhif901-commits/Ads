'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import styles from './HeroBanner.module.css';

const SLIDE_COUNT = 4;

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const deltaXRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDE_COUNT);
  }, []);

  // Auto-slide
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(next, 5000);
  }, [next]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [startAutoPlay]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    deltaXRef.current = 0;
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    deltaXRef.current = e.touches[0].clientX - startXRef.current;
  };

  const handleTouchEnd = () => {
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

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    deltaXRef.current = 0;
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    deltaXRef.current = e.clientX - startXRef.current;
  };

  const handleMouseUp = () => {
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
    <section className={styles.hero} id="hero">
      <div className="container">
        <div
          className={styles.carousel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            ref={trackRef}
            className={styles.track}
            style={{
              transform: `translateX(-${current * 100}%)`,
              cursor: isDragging ? 'grabbing' : 'grab',
            }}
          >
            {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
              <div key={i} className={styles.slide}>
                <Image
                  src="/voucher1.png"
                  alt={`Promo banner ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.slideImage}
                  priority={i === 0}
                  loading="eager"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          <div className={styles.dots}>
            {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.active : ''}`}
                onClick={() => { setCurrent(i); startAutoPlay(); }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
