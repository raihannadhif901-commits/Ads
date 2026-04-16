import Navbar from '@/components/Navbar/Navbar';
import Upgrade from '@/components/Upgrade/Upgrade';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Upgrade | Linknet Deals',
  description: 'Tingkatkan pengalaman voucher Anda ke level premium dengan akses tak terbatas.',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '80vh' }}>
        <Upgrade />
      </main>
      <Footer />
    </>
  );
}
