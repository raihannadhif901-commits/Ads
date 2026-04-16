'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, Barcode } from 'lucide-react';
import { Voucher } from '@/data/vouchers';
import styles from './VoucherDetailModal.module.css';

interface Props {
  voucher: Voucher | null;
  onClose: () => void;
}

export default function VoucherDetailModal({ voucher, onClose }: Props) {
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [isRedeeming, setIsRedeeming] = useState(false);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (voucher) {
      setIsRedeemed(false);
      setIsRedeeming(false);
    }
  }, [voucher]);

  if (!voucher) return null;

  const handleRedeem = () => {
    setIsRedeeming(true);
    // Simulate API call/loading
    setTimeout(() => {
      setIsRedeeming(false);
      setIsRedeemed(true);
    }, 800);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        <button className={styles.closeBtn} onClick={onClose} aria-label="Tutup">
          <X size={20} />
        </button>

        <div className={styles.headerImageWrap}>
          <Image
            src={voucher.image}
            alt={voucher.title}
            fill
            className={styles.headerImage}
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>

        <div className={styles.content}>
          <div className={styles.brandBadge}>{voucher.brand}</div>
          <h3 className={styles.title}>{voucher.title}</h3>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Masa Berlaku</h4>
            <p className={styles.sectionText}>Hingga 31 Des 2026</p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Syarat & Ketentuan</h4>
            {voucher.brand === 'TIKTOK' ? (
              <ul className={styles.list}>
                <li>Voucher ini divalidasi senilai IDR 20.000 untuk TikTok Coins.</li>
                <li>Tukarkan di gerai resmi atau minimarket yang bekerjasama.</li>
                <li>Scan barcode saat di kasih untuk proses top-up.</li>
                <li>Tidak dapat diuangkan kembali.</li>
              </ul>
            ) : (
              <ul className={styles.list}>
                <li>Voucher berhak ditukar dengan 1 tiket nonton reguler 2D.</li>
                <li>Berlaku di seluruh outlet Cinepolis wilayah Indonesia.</li>
                <li>Tidak dapat digabungkan dengan promo lainnya.</li>
                <li>Voucher yang sudah diredeem tidak bisa dibatalkan atau direfund.</li>
              </ul>
            )}
          </div>

          <div className={styles.actionWrap}>
            {!isRedeemed ? (
              <button
                className={`${styles.redeemBtn} ${isRedeeming ? styles.loading : ''}`}
                onClick={handleRedeem}
                disabled={isRedeeming}
              >
                {isRedeeming ? <div className={styles.spinner} /> : 'Redeem Voucher'}
              </button>
            ) : (
              <div className={styles.codeContainer}>
                <div className={styles.successIcon}>
                  <CheckCircle2 size={24} />
                </div>
                <p className={styles.codeLabel}>{voucher.brand === 'TIKTOK' ? 'Scan Barcode Anda:' : 'Kode Unik Anda:'}</p>
                <div className={`${styles.codeBox} ${voucher.brand === 'TIKTOK' ? styles.barcodeBox : ''}`}>
                  {voucher.brand === 'TIKTOK' ? (
                    <div className={styles.barcodeWrapper}>
                      <Barcode size={80} strokeWidth={1} className={styles.barcodeIcon} />
                      <span className={styles.barcodeText}>7492 8391 1024</span>
                    </div>
                  ) : (
                    <span className={styles.code}>CP-LNK-88291X</span>
                  )}
                </div>
                <p className={styles.codeHelper}>
                  {voucher.brand === 'TIKTOK' 
                    ? 'Tunjukkan barcode ini kepada kasir minimarket terdekat Anda untuk melakukan top-up.' 
                    : 'Tunjukkan kode ini kepada kasir saat bertransaksi.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
