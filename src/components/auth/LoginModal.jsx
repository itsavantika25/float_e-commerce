import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useStore } from '../../store/useStore';
import styles from '../ui/Modal.module.css';

const LoginModal = () => {
  const { isAuthModalOpen, toggleAuthModal, login, isLoggedIn, user, logout } = useStore();
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login({ name: email.split('@')[0], email });
  };

  return (
    <AnimatePresence>
      {isAuthModalOpen && (
        <div className={styles.modalBackdrop} onClick={toggleAuthModal}>
          <motion.div 
            className={styles.modalContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={toggleAuthModal}><X size={20} strokeWidth={1} /></button>
            
            <div className={styles.tabs}>
              <button className={`${styles.tab} ${styles.active}`}>LOGIN</button>
              <button className={styles.tab}>SIGN UP</button>
            </div>

            {isLoggedIn ? (
              <div style={{ textAlign: 'center' }}>
                <h2 className={styles.title}>Welcome back, {user.name}</h2>
                <p className={styles.subtitle}>{user.email}</p>
                <button className="primary-btn" onClick={logout} style={{ width: '100%' }}>Sign Out</button>
              </div>
            ) : (
              <form onSubmit={handleLogin}>
                <h2 className={styles.title}>Welcome Back</h2>
                <p className={styles.subtitle}>Enter your credentials to access your archive.</p>

                <div className={styles.inputGroup}>
                  <div className={styles.label}>Email Address</div>
                  <input 
                    type="email" 
                    required 
                    className="line-input" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <div className={styles.label}>
                    <span>Password</span>
                    <span className={styles.forgot}>Forgot?</span>
                  </div>
                  <input type="password" required className="line-input" placeholder="••••••••" />
                </div>
                
                <button type="submit" className="primary-btn" style={{ width: '100%' }}>
                  SIGN IN
                </button>

                <div className={styles.divider}>OR CONTINUE WITH</div>

                <div className={styles.socialRow}>
                  <button type="button" className={styles.socialBtn}>Google</button>
                  <button type="button" className={styles.socialBtn}>Github</button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
