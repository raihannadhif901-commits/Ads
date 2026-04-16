'use client';

import Image from 'next/image';
import { Voucher } from '@/data/vouchers';
import styles from './VoucherCard.module.css';

interface Props {
  voucher: Voucher;
  index: number;
  onClick?: () => void;
}

export default function VoucherCard({ voucher, index, onClick }: Props) {
  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${index * 60}ms` }}
      onClick={onClick}
    >
      <div className={styles.imageWrap}>
        {voucher.discountPercent && (
          <span className={styles.badge}>{voucher.discountPercent}</span>
        )}
        <Image
          src={voucher.image}
          alt={voucher.title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.brand}>{voucher.brand}</span>
        <h3 className={styles.title}>{voucher.title}</h3>
        <div className={styles.pricing}>
          <span className={styles.originalPrice}>{voucher.originalPrice}</span>
          <span className={styles.salePrice}>{voucher.salePrice}</span>
        </div>
      </div>
    </div>
  );
}
