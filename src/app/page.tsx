import Navbar from '@/components/Navbar/Navbar';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import Marquee from '@/components/Marquee/Marquee';
import VideoCarousel from '@/components/VideoCarousel/VideoCarousel';
import VoucherGrid from '@/components/VoucherGrid/VoucherGrid';
import FloatingWindow from '@/components/FloatingWindow/FloatingWindow';
import WelcomeBanner from '@/components/WelcomeBanner/WelcomeBanner';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <Marquee />
        <VideoCarousel />
        <VoucherGrid />
      </main>
      <Footer />
      <FloatingWindow />
      <WelcomeBanner />
    </>
  );
}
