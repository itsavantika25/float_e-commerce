import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, CreditCard, Lock } from 'lucide-react';
import { useStore } from '../../store/useStore';
import styles from '../ui/Modal.module.css';

const CheckoutModal = () => {
  const { isCheckoutModalOpen, toggleCheckoutModal, getCartTotal, clearCart } = useStore();
  const [step, setStep] = useState('form'); // 'form' or 'success'
  const total = getCartTotal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      clearCart();
      toggleCheckoutModal();
      setStep('form');
    }, 3000);
  };

  const closeModal = () => {
    if (step === 'form') toggleCheckoutModal();
  };

  return (
    <AnimatePresence>
      {isCheckoutModalOpen && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <motion.div 
            className={styles.modalContent}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {step === 'form' ? (
              <>
                <div className={styles.modalHeader}>
                  <h2 className={styles.title}>Secure Checkout</h2>
                  <button className={styles.closeBtn} onClick={closeModal}><X size={24} /></button>
                </div>
                <form className={styles.formBody} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Email Address</label>
                    <input type="email" required className={styles.input} placeholder="you@example.com" />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Card Information</label>
                    <div style={{ position: 'relative' }}>
                      <input type="text" required className={styles.input} style={{ width: '100%', paddingLeft: '44px' }} placeholder="0000 0000 0000 0000" />
                      <CreditCard size={20} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Expiry</label>
                      <input type="text" required className={styles.input} placeholder="MM/YY" />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>CVC</label>
                      <input type="text" required className={styles.input} placeholder="123" />
                    </div>
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    <Lock size={18} /> Pay ${total.toFixed(2)}
                  </button>
                </form>
              </>
            ) : (
              <motion.div 
                className={styles.successState}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div 
                  className={styles.successIcon}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: 'spring', damping: 15 }}
                >
                  <Check size={48} />
                </motion.div>
                <h2 className={styles.successTitle}>Payment Successful</h2>
                <p style={{ color: 'var(--text-muted)' }}>Thank you for your order. Getting things ready for you.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
