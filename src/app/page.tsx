import NavBar from '@/components/NavBar/NavBar';
import styles from './page.module.css';
import Appresentation from '@/components/Home/Appresentation/Appresentation';
import Categories from '@/components/Home/Categories/Categories';
import Wallets from '@/components/Home/Wallets/Wallets';

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <section className={styles.homeBody}>
        <Appresentation />
        {/* Shape divider */}

        {/* Categories */}
        <Categories />

        {/* Supported Wallets */}
        <Wallets />
      </section>
    </div>
  );
}
