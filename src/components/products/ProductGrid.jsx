import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import { products, getCategories } from '../../data/products';
import styles from './Products.module.css';

const ProductGrid = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All apparel');

  const categories = getCategories();

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All apparel' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <section id="collections" className={styles.section}>
      <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>Collections</h2>
          <p className={styles.subtitle}>An exploration of tactile silhouettes and ethereal textures. Designed for movement, crafted for longevity.</p>
        </div>
        <button className={styles.viewAllBtn}>View All</button>
      </div>

      <div className={styles.filterBar}>
        <Search size={14} color="var(--text-muted)" />
        <input 
          type="text" 
          placeholder="Search collection..." 
          className={styles.searchInput}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <div className={styles.filterGroup}>
          <span>Category:</span>
          <select 
            className={styles.select}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <motion.div layout className={styles.grid}>
        <AnimatePresence>
          {filteredProducts.map((product, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={product.id}
            >
              <ProductCard product={product} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProductGrid;
