'use client';
import React from 'react';
import { Category } from '@/components/Home/Categories/Categories';
import styles from '@/components/Home/Categories/Categories.module.css';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);
  return (
    <motion.article
      ref={ref}
      className={`${styles.categoryCard}`}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Image
        src={`/collections/${category.collection}/1.png`}
        alt={category.name}
        width={2048}
        height={2048}
      />
      <div className={styles.categoryCardBottom}>
        <h2>{category.name}</h2>
        <p>{category.desc}</p>
        <div></div>
      </div>
    </motion.article>
  );
};

export default CategoryCard;
