import React from 'react';
import styles from '@/components/Home/Appresentation/Appresentation.module.css';
import Image from 'next/image';
const Appresentation = () => {
  return (
    <section className={styles.appresentation}>
      <div className={styles.glowDivider}></div>
      {/* Left Side */}
      <div className={styles.leftSide}>
        <h2>Unleash Your Creativity and Own Unique Digital Assets on Venus</h2>
        <p>
          Welcome to Venus Marketplace, a visionary platform where creators and
          collectors come together to explore, mint, and trade extraordinary
          NFTs. Built with cutting-edge technology, this fictional marketplace
          celebrates the future of ownership in the digital world
        </p>
        <div>
          <button className={styles.explore}>Explore</button>
          <button className={styles.create}>Create</button>
        </div>
      </div>
      {/* Right Side */}
      <div className={styles.rightSide}>
        <Image
          src="/illustrations/main.svg"
          alt="main"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Appresentation;
