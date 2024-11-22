import React from 'react';
import { Category } from '@/components/Home/Categories/Categories';
import styles from '@/components/Home/Categories/Categories.module.css';
import Image from 'next/image';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <article className={styles.categoryCard}>
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
    </article>
  );
};

export default CategoryCard;
