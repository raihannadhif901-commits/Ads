export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  accentEmoji: string;
  ctaText: string;
  badge: string;
}

export const banners: Banner[] = [
  {
    id: '1',
    title: 'Mega Sale Voucher',
    subtitle: 'Diskon hingga 50%',
    description: 'Dapatkan voucher terbaik dari brand favoritmu. Promo terbatas hanya di Linknet Deals!',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    accentEmoji: '🎉',
    ctaText: 'Explore Now',
    badge: 'HOT DEAL',
  },
  {
    id: '2',
    title: 'Gaming Festival',
    subtitle: 'Top-up & Voucher Game',
    description: 'Steam, PUBG Mobile, dan game lainnya dengan diskon spesial untuk pelanggan Linknet.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    accentEmoji: '🎮',
    ctaText: 'Grab Deals',
    badge: 'LIMITED',
  },
  {
    id: '3',
    title: 'Food & Beverage',
    subtitle: 'Treats untuk harimu',
    description: 'Starbucks, McDonald\'s, Pizza Hut dan restoran favorit lainnya. Yuk, makan hemat!',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    accentEmoji: '☕',
    ctaText: 'Order Now',
    badge: 'NEW',
  },
  {
    id: '4',
    title: 'Travel Deals',
    subtitle: 'Liburan hemat mulai dari sini',
    description: 'Diskon hotel, transportasi, dan tiket wisata. Wujudkan liburan impianmu bersama Linknet.',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    accentEmoji: '✈️',
    ctaText: 'Book Now',
    badge: 'EXCLUSIVE',
  },
];
