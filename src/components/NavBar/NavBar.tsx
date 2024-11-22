import React from 'react';
import styles from '@/components/NavBar/NavBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link href="/" className={styles.logoDiv}>
        <Image src="/logo/v2.png" alt="logo" width={100} height={100} />
        <div>
          <h2>Venus</h2>
          <p>Marketplace</p>
        </div>
      </Link>
      {/* Links */}
      <div className={styles.links}>
        <Link href="#" className={styles.activeLink}>
          Home
        </Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
        <Link href="#">Help</Link>
      </div>

      {/* Actions */}

      <div className={styles.actions}>
        <button className={styles.connect}>
          <span>Connect Wallet</span>
        </button>
        <Link href="/user" className={styles.user}>
          <Image src="/user/user.png" alt="user" width={50} height={50} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
