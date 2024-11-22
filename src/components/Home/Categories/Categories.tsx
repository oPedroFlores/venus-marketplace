import React from 'react';
import styles from './Categories.module.css';
import Divisor from './Divisor';
import CategoriesJson from '@/app/json/categories.json';
import CategoryCard from './CategoryCard';

export interface Category {
  name: string;
  collection: string;
  desc: string;
}

const Categories = () => {
  const categories: Category[] = CategoriesJson as Category[];
  return (
    <div className={styles.categoriesSection}>
      <Divisor />

      <div className={styles.categories}>
        <div className={styles.lightPinkBubble}></div>
        <span>Explore the greatest NFTs collections</span>
        <h2>Top NFT Categories</h2>

        {/* Mapear as categorias */}
        <div className={styles.categoriesCardsWrapper}>
          {categories.map((category) => (
            <CategoryCard
              key={`categoryCard-${category.name}`}
              category={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
