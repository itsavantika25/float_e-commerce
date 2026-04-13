import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import styles from './Cart.module.css';

const CartDrawer = () => {
  const { isCartOpen, closeCart, cart, getCartTotal } = useStore();
  const total = getCartTotal();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.div
            className={styles.drawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className={styles.header}>
              <div>
                <h2 className={styles.title}>Cart</h2>
                <div className={styles.subtitle}>FLOAT ESSENTIALS</div>
              </div>
              <button className={styles.closeBtn} onClick={closeCart}>
                <X size={20} strokeWidth={1} />
              </button>
            </div>

            <div className={styles.itemsContainer}>
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    className={styles.cartItem}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <img src={item.image} alt={item.name} className={styles.itemImage} />
                    <div className={styles.itemDetails}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemMeta}>Size: {item.size || 'Universal'} / Qty: {item.quantity}</span>
                      <span className={styles.itemPrice}>${item.price}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className={styles.footer}>
              <div className={styles.totalRow}>
                <span>Subtotal</span>
                <span className={styles.totalAmount}>${total.toFixed(2)}</span>
              </div>
              <button 
                className={`primary-btn ${styles.checkoutBtn}`} 
                onClick={handleCheckout}
                disabled={cart.length === 0}
              >
                Checkout Now
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
