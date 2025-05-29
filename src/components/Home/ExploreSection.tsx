import React from 'react';
import styles from './HomeSections.module.css'; // We'll create this generic style file too

const ExploreSection = () => {
  return (
    <section id="explore" className={styles.section}>
      <h2>Explore NFTs</h2>
      <p>Discover and browse through a wide variety of NFTs available on our marketplace.</p>
      {/* Placeholder for NFT grid, filters, search bar */}
    </section>
  );
};

export default ExploreSection;
