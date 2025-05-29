import React from 'react';
import styles from './CollectionsSection.module.css';
import Divisor from './Divisor';
import CategoriesJson from '@/app/json/categories.json';
import CategoryCard from './CategoryCard';

export interface Category {
  name: string;
  collection: string;
  desc: string;
}

const CollectionsSection = () => {
  const categories: Category[] = CategoriesJson as Category[];
  return (
    <section id="collections" className={styles.categoriesSection}>
      <Divisor />

      <div className={styles.categories}>
        <div className={styles.lightPinkBubble}></div>
        <span>Explore our curated NFT collections</span>
        <h2>Featured Collections</h2>

        {/* Mapear as categorias */}
        <div className={styles.categoriesCardsWrapper}>
          {categories.map((category, index) => (
            <CategoryCard
              key={`categoryCard-${category.name}`}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsSection;
