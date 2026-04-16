export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  gradient: string;
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'Cara Redeem Voucher',
    description: 'Tutorial lengkap cara menggunakan voucher di Linknet Deals',
    thumbnail: '',
    duration: '3:45',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: '2',
    title: 'Top 5 Voucher Terlaris',
    description: 'Voucher paling populer bulan ini yang wajib kamu punya',
    thumbnail: '',
    duration: '5:12',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: '3',
    title: 'Promo Spesial Ramadan',
    description: 'Kumpulan promo spesial yang bisa kamu dapatkan selama Ramadan',
    thumbnail: '',
    duration: '4:30',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: '4',
    title: 'Tips Belanja Hemat',
    description: 'Strategi jitu supaya belanja online makin hemat dengan voucher',
    thumbnail: '',
    duration: '6:15',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    id: '5',
    title: 'Review Game Voucher',
    description: 'Review dan perbandingan voucher game terbaik di platform kami',
    thumbnail: '',
    duration: '7:20',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
];
