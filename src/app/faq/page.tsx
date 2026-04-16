import Navbar from '@/components/Navbar/Navbar';
import Faq from '@/components/Faq/Faq';
import Footer from '@/components/Footer/Footer';

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '80vh' }}>
        <Faq />
      </main>
      <Footer />
    </>
  );
}
