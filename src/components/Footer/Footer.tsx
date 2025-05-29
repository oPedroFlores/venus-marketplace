import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logoLink}>
            <Image src="/logo/venus.png" alt="Venus Marketplace Logo" width={60} height={60} />
            <span>Venus Marketplace</span>
          </Link>
          <p className={styles.missionStatement}>
            Discover, collect, and sell extraordinary NFTs on Venus Marketplace. Your gateway to the digital art revolution.
          </p>
        </div>

        <div className={styles.linksGrid}>
          <div className={styles.linkColumn}>
            <h4>Marketplace</h4>
            <ul>
              <li><Link href="/#explore">Explore</Link></li>
              <li><Link href="/#collections">Collections</Link></li>
              <li><Link href="/#create">Create</Link></li>
              {/* Add more links as actual pages/sections are built */}
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4>My Account</h4>
            <ul>
              <li><Link href="/user">Profile</Link></li> {/* Assuming /user is the profile page */}
              <li><Link href="/#">Connect Wallet</Link></li> {/* Or link to wallet section/modal */}
              <li><Link href="/settings">Settings</Link></li> {/* Placeholder */}
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/#learn">Learn</Link></li>
              <li><Link href="/help">Help Center</Link></li> {/* Placeholder */}
              <li><Link href="/blog">Blog</Link></li> {/* Placeholder */}
            </ul>
          </div>
        </div>

        <div className={styles.socialsSection}>
          <h4>Join Our Community</h4>
          <div className={styles.socialIcons}>
            {/* Replace # with actual links and use SVG icons for real app */}
            <Link href="#" aria-label="Twitter"><span className={styles.socialIcon}>TW</span></Link>
            <Link href="#" aria-label="Instagram"><span className={styles.socialIcon}>IG</span></Link>
            <Link href="#" aria-label="Discord"><span className={styles.socialIcon}>DS</span></Link>
            <Link href="#" aria-label="Telegram"><span className={styles.socialIcon}>TG</span></Link>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; {currentYear} Venus Marketplace. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
