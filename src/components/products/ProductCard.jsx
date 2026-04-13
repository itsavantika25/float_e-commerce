import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useStore } from '../../store/useStore';
import styles from './Products.module.css';

const ProductCard = ({ product, index }) => {
  const addToCart = useStore(state => state.addToCart);

  const handleAdd = () => {
    addToCart(product);
  };

  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      onClick={handleAdd}
    >
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <button className={styles.wishlistBtn} onClick={(e) => { e.stopPropagation(); /* mock wishlist */ }}>
          <Heart size={16} />
        </button>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardRow}>
          <h3 className={styles.productName}>{product.name}</h3>
          <span className={styles.productPrice}>${product.price}</span>
        </div>
        <p className={styles.productDesc}>{product.category}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
