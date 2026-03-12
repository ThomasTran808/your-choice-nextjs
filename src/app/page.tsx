import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import TBNavbar from '@/components/TBNavbar';
import Hero from '@/components/Hero';
import CrispySection from '@/components/CrispySection';
import PromoBanner from '@/components/PromoBanner';
import RewardsSection from '@/components/RewardsSection';
import TBFooter from '@/components/TBFooter';

const Home = () => (
  <main>
    <TBNavbar />
    <Hero />
    <CrispySection />
    <PromoBanner />
    <RewardsSection />
    <TBFooter />
  </main>
);

export default Home;