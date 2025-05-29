import NavBar from '@/components/NavBar/NavBar';
import styles from './page.module.css';
import Appresentation from '@/components/Home/Appresentation/Appresentation';
import Wallets from '@/components/Home/Wallets/Wallets';
import ExploreSection from '@/components/Home/ExploreSection';
import CollectionsSection from '@/components/Home/Collections/CollectionsSection';
import CreateSection from '@/components/Home/CreateSection';
import LearnSection from '@/components/Home/LearnSection';
import HowItWorksSection from '@/components/Home/HowItWorksSection';
import FeaturedArtistsSection from '@/components/Home/FeaturedArtistsSection';

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <section className={styles.homeBody}>
        <Appresentation />
        {/* Shape divider */}

        {/* Supported Wallets */}
        <Wallets />

        {/* Newly Added Sections */}
        <ExploreSection />
        <CollectionsSection />
        <CreateSection />
        <LearnSection />
        <HowItWorksSection />
        <FeaturedArtistsSection />
      </section>
    </div>
  );
}
