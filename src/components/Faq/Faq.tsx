'use client';

import { useState } from 'react';
import { Wifi, User, Tv, ChevronDown, MonitorPlay } from 'lucide-react';
import styles from './Faq.module.css';

const faqData = [
  {
    categoryId: 'network',
    categoryName: 'N E T W O R K',
    icon: <Wifi className={styles.categoryIcon} size={24} />,
    items: [
      {
        id: 'q1',
        question: 'Kendala jaringan pada STB (Muncul halaman pengaturan koneksi internet)',
        answer: 'Pilih tombol pengaturan pada halaman, pastikan memiliki koneksi internet yang terhubung. Jika sudah terhubung silahkan pilih tombol coba lagi pada halaman.',
      },
      {
        id: 'q2',
        question: 'Koneksi box terhubung, namun tidak memilik akses internet',
        answer: 'Pastikan untuk mengecek apakah Date & Time sudah ter-set otomatis atau check melalui aplikasi youtube (pastikan jaringan internet stabil)',
      },
    ],
  },
  {
    categoryId: 'account',
    categoryName: 'Account',
    icon: <User className={styles.categoryIcon} size={24} />,
    items: [
      {
        id: 'q3',
        question: 'Bagaimana jika Ter-Unpair secara manual pada menu "setting"?',
        answer: 'Hubungi email support kami di "support.OS@mail.com" (pastikan untuk tidak menekan tombol unpair/logout pada menu "setting")',
      },
    ],
  },
  {
    categoryId: 'livetv',
    categoryName: 'Live Tv',
    icon: <MonitorPlay className={styles.categoryIcon} size={24} />,
    items: [
      {
        id: 'q4',
        question: 'Bagaimana jika Ter-Unpair secara manual pada menu "setting"?',
        answer: 'Hubungi email support kami di "support.OS@mail.com" (pastikan untuk tidak menekan tombol unpair/logout pada menu "setting")',
      },
    ],
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.highlightRed}>ONESTREAM</span> FREQUENTLY ASKED QUESTIONS (FAQ)
          </h2>
          <p className={styles.subtitle}>
            Pusat bantuan Onestream STB. Temukan jawaban untuk kendala yang sering dialami.
          </p>
        </div>

        <div className={styles.faqContainer}>
          {faqData.map((category) => (
            <div key={category.categoryId} className={styles.categoryGroup}>
              <div className={styles.categoryHeader}>
                <div className={styles.iconWrapper}>{category.icon}</div>
                <h3 className={styles.categoryTitle}>{category.categoryName}</h3>
              </div>

              <div className={styles.accordionList}>
                {category.items.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <div
                      key={item.id}
                      className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
                    >
                      <button
                        className={styles.accordionHeader}
                        onClick={() => toggleOpen(item.id)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.question}>{item.question}</span>
                        <div className={styles.chevronWrap}>
                          <ChevronDown
                            size={20}
                            className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`}
                          />
                        </div>
                      </button>
                      <div
                        className={styles.accordionBody}
                        style={{
                          maxHeight: isOpen ? '500px' : '0',
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <div className={styles.answerText}>
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
