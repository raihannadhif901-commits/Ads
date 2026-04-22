'use client';

import { useState } from 'react';
import { vouchers, Voucher } from '@/data/vouchers';
import VoucherCard from '@/components/VoucherCard/VoucherCard';
import CategoryFilter from '@/components/CategoryFilter/CategoryFilter';
import VoucherDetailModal from '@/components/VoucherDetailModal/VoucherDetailModal';
import styles from './VoucherGrid.module.css';

export default function VoucherGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null);

  const filtered =
    activeCategory === 'All'
      ? vouchers
      : vouchers.filter((v) => v.category === activeCategory);

  const bannerVouchers = filtered.filter((v) => v.isBanner);
  const cardVouchers = filtered.filter((v) => !v.isBanner);

  const displayed = showAll ? cardVouchers : cardVouchers.slice(0, 4);

  return (
    <section id="vouchers" className="section">
      <div className="container">
        {/* Voucher pill tag */}
        <div className={styles.pillWrap}>
          <span className={styles.pill}>Voucher</span>
        </div>

        <CategoryFilter active={activeCategory} onChange={(cat) => { setActiveCategory(cat); setShowAll(false); }} />

        {bannerVouchers.length > 0 && (
          <div className={styles.bannerWrap}>
            {bannerVouchers.map((voucher) => (
              <a
                key={voucher.id}
                href={voucher.bannerLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bannerCard}
              >
                <img
                  src={voucher.image}
                  alt={voucher.title}
                  className={styles.bannerImage}
                />
              </a>
            ))}
          </div>
        )}

        <h2 className={styles.sectionTitle}>VOUCHERS</h2>

        <div className={styles.grid} key={activeCategory}>
          {displayed.length > 0 ? (
            displayed.map((voucher, i) => (
              <VoucherCard
                key={voucher.id}
                voucher={voucher}
                index={i}
                onClick={voucher.brand === 'CINEPOLIS' || voucher.brand === 'TIKTOK' ? () => setSelectedVoucher(voucher) : undefined}
              />
            ))
          ) : (
            <div className={styles.empty}>
              <p className={styles.emptyText}>
                Belum ada voucher untuk kategori ini
              </p>
            </div>
          )}
        </div>

        {filtered.length > 4 && !showAll && (
          <div className={styles.moreWrap}>
            <button
              className={styles.moreBtn}
              onClick={() => setShowAll(true)}
            >
              Lihat Lebih Banyak Voucher
            </button>
          </div>
        )}
      </div>

      <VoucherDetailModal
        voucher={selectedVoucher}
        onClose={() => setSelectedVoucher(null)}
      />
    </section>
  );
}
