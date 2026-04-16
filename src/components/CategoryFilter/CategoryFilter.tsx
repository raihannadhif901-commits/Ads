'use client';

import Image from 'next/image';
import { categories } from '@/data/vouchers';
import styles from './CategoryFilter.module.css';

const iconMap: Record<string, string> = {
  grid: '/icons/cat-all.png',
  utensils: '/icons/cat-fnb.png',
  clock: '/icons/cat-activity.png',
  smartphone: '/icons/cat-apps.png',
  sparkles: '/icons/cat-beauty.png',
  briefcase: '/icons/cat-experience.png',
  gamepad: '/icons/cat-game.png',
  activity: '/icons/cat-health.png',
  dollar: '/icons/cat-invest.png',
};

interface Props {
  active: string;
  onChange: (cat: string) => void;
}

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className={styles.filterSection}>
      <div className={styles.filterRow}>
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`${styles.filterBtn} ${active === cat.name ? styles.active : ''}`}
            onClick={() => onChange(cat.name)}
          >
            <span className={styles.icon}>
              <Image
                src={iconMap[cat.icon]}
                alt={cat.name}
                width={40}
                height={40}
                className={styles.iconImg}
              />
            </span>
            <span className={styles.label}>{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
