'use client';
import React from 'react';
import styles from './Wallets.module.css';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

interface WalletCardProps {
  wallet: string;
  index: number;
}
export const WalletCard: React.FC<WalletCardProps> = ({ wallet, index }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const animeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  React.useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      className={styles.walletCard}
      whileHover={{ scale: 1.1 }}
      variants={animeIn}
      initial="hidden"
      animate={mainControls}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
        duration: 0.5,
      }}
    >
      <div className={styles.cardBG}></div>
      <div className={styles.cardBlob}> </div>
      <div className={styles.cardImageWrapper}>
        <Image
          src={`/wallets/${wallet.toLocaleLowerCase().replace(' ', '')}.png`}
          alt={wallet}
          width={1024}
          height={1024}
          className={styles.cardImage}
        />
        <div className={styles.cardImageBackground}></div>
      </div>
      <h2>{wallet}</h2>
    </motion.div>
  );
};
