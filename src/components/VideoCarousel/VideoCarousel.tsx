'use client';

import { useRef, useState } from 'react';
import styles from './VideoCarousel.module.css';

const VIDEO_COUNT = 5;

export default function VideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [activeCta, setActiveCta] = useState<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleVideoClick = (index: number) => {
    if (isDragging) return;
    setActiveCta(activeCta === index ? null : index);
  };

  return (
    <section id="videos" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>VIDEOS</h2>

        <div
          className={styles.carousel}
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {Array.from({ length: VIDEO_COUNT }).map((_, i) => (
            <div 
              key={i} 
              className={styles.videoCard}
              onClick={() => handleVideoClick(i)}
            >
              <video
                className={styles.video}
                src="/video1.mp4"
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                onMouseLeave={(e) => {
                  const vid = e.target as HTMLVideoElement;
                  vid.pause();
                  vid.currentTime = 0;
                }}
              />
              
              {activeCta === i && (
                <div className={styles.ctaOverlay}>
                  <div className={styles.ctaContent} onClick={(e) => e.stopPropagation()}>
                    <h3 className={styles.ctaTitle}>Promo Spesial!</h3>
                    <p className={styles.ctaDesc}>Jangan lewatkan penawaran menarik hari ini.</p>
                    <a href="https://www.alfamidiku.com/" target="_blank" rel="noopener noreferrer" className={styles.ctaLinkBtn}>
                      Klik di sini
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
