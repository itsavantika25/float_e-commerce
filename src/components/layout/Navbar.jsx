import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const cart = useStore((state) => state.cart);
  const toggleCart = useStore((state) => state.toggleCart);
  const toggleAuthModal = useStore((state) => state.toggleAuthModal);
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <motion.a 
        href="/" 
        className={styles.logo}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        FLOAT
      </motion.a>

      <div className={styles.navLinks}>
        {['Collections', 'New Arrivals', 'Archive', 'About'].map((item, i) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className={styles.link}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            {item}
          </motion.a>
        ))}
      </div>

      <div className={styles.actions}>
        <button className={styles.iconBtn}>
          <Search />
        </button>
        <button className={styles.iconBtn} onClick={toggleCart}>
          <ShoppingBag />
          <AnimatePresence>
            {cartItemCount > 0 && (
              <motion.span 
                className={styles.badge}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                key={cartItemCount}
              >
                {cartItemCount}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
        <button className={styles.iconBtn} onClick={toggleAuthModal}>
          <User />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
