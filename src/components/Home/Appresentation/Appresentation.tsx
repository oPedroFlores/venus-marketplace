'use client';
import React from 'react';
import styles from '@/components/Home/Appresentation/Appresentation.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
const Appresentation: React.FC = () => {
  const animeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const animeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const animeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className={styles.appresentation}>
      {/* Left Side */}
      <div className={styles.leftSide}>
        <motion.h2
          transition={{ duration: 0.5 }}
          variants={animeLeft}
          initial="hidden"
          animate="visible"
        >
          Unleash Your Creativity and Own Unique Digital Assets on Venus
        </motion.h2>
        <motion.p
          transition={{ duration: 0.5 }}
          variants={animeLeft}
          initial="hidden"
          animate="visible"
        >
          Welcome to Venus Marketplace, a visionary platform where creators and
          collectors come together to explore, mint, and trade extraordinary
          NFTs. Built with cutting-edge technology, this fictional marketplace
          celebrates the future of ownership in the digital world
        </motion.p>
        <motion.div
          transition={{ duration: 0.5 }}
          variants={animeUp}
          initial="hidden"
          animate="visible"
        >
          <button className={styles.explore}>Explore</button>
          <button className={styles.create}>Create</button>
        </motion.div>
      </div>
      {/* Right Side */}
      <motion.div
        className={styles.rightSide}
        transition={{ duration: 0.5 }}
        variants={animeRight}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/illustrations/main.svg"
          alt="main"
          width={500}
          height={500}
        />
      </motion.div>
    </section>
  );
};

export default Appresentation;
