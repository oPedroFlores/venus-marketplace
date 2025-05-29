'use client';
import React from 'react';
import styles from '@/components/NavBar/NavBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !target?.closest(`.${styles.hamburger}`)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link href="/" className={styles.logoDiv}>
        <Image src="/logo/venus.png" alt="logo" width={80} height={80} />
        <div>
          <h2>Venus</h2>
          <p>Marketplace</p>
        </div>
      </Link>

      {/* Botão menu hamburger */}

      <div
        className={`${styles.hamburger} ${
          isMobileMenuOpen ? styles.closeHamburger : ''
        }`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {/* Ícone do hambúrguer */}
        <div className={styles.barTop}></div>
        <div className={styles.barMiddle}></div>
        <div className={styles.barBottom}></div>
      </div>

      {/* Links */}
      <div
        className={`${styles.links} ${
          isMobileMenuOpen ? styles.mobileMenu : ''
        }`}
        ref={menuRef}
      >
        <ul>
          <li>
            <Link href="/" className={styles.activeLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#explore">Explore</Link>
          </li>
          <li>
            <Link href="#collections">Collections</Link>
          </li>
          <li>
            <Link href="#create">Create</Link>
          </li>
          <li>
            <Link href="#learn">Learn</Link>
          </li>
        </ul>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.connect}>
            <span>Connect Wallet</span>
          </button>
          <Link href="/user" className={styles.user}>
            <Image src="/user/user.png" alt="user" width={50} height={50} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
