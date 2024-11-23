import React from 'react';
import styles from './Wallets.module.css';
import { WalletCard } from './WalletCard';
const Wallets = () => {
  const wallets = ['Metamask', 'Magic Eden', 'Phantom', 'XVerse'];
  return (
    <section className={styles.walletsSection}>
      <div className={styles.gradiantSeparator}></div>
      <div className={styles.lightPinkBubble}></div>
      <h2>Supported Wallets</h2>
      <div className={styles.walletsContainer}>
        {wallets.map((wallet, index) => (
          <WalletCard key={`wallet-${index}`} wallet={wallet} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Wallets;
