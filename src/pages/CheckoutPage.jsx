import React from 'react';
import { CreditCard, Lock } from 'lucide-react';
import { useStore } from '../store/useStore';
import styles from './Checkout.module.css';

const CheckoutPage = () => {
  const { cart, getCartTotal } = useStore();
  const subtotal = getCartTotal();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Checkout</h1>
      <p className={styles.subtitle}>Review your selection and complete your journey</p>

      <div className={styles.splitView}>
        <div className={styles.formSide}>

          <div className={styles.stepSection}>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>Contact Information</h2>
              <span className={styles.stepNumber}>Step 01 / 03</span>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email Address</label>
              <input type="email" className="line-input" placeholder="alex@ethereal.com" />
            </div>
          </div>

          <div className={styles.stepSection}>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>Shipping Destination</h2>
              <span className={styles.stepNumber}>Step 02 / 03</span>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>First Name</label>
                <input type="text" className="line-input" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Last Name</label>
                <input type="text" className="line-input" />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Street Address</label>
              <input type="text" className="line-input" />
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>City</label>
                <input type="text" className="line-input" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Postal Code</label>
                <input type="text" className="line-input" />
              </div>
            </div>
          </div>

          <div className={styles.stepSection}>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>Payment Method</h2>
              <span className={styles.stepNumber}>Step 03 / 03</span>
            </div>
            <div className={styles.paymentBox}>
              <div className={styles.paymentHeader}>
                <CreditCard size={24} color="var(--text-muted)" />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 500 }}>Credit or Debit Card</div>
                  <div style={{ fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '1px', marginTop: '4px' }}>ENCRYPTED & SECURE</div>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Card Number</label>
                <input type="text" className="line-input" placeholder="•••• •••• •••• ••••" style={{ letterSpacing: '4px' }} />
              </div>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Expiry Date</label>
                  <input type="text" className="line-input" placeholder="MM/YY" />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>CVC</label>
                  <input type="password" className="line-input" placeholder="•••" style={{ letterSpacing: '4px' }} />
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.summarySide}>
          <h3 className={styles.summaryTitle}>Order Summary</h3>
          
          <div style={{ marginBottom: '40px' }}>
            {cart.map(item => (
              <div key={item.id} className={styles.summaryItem}>
                <img src={item.image} alt={item.name} className={styles.itemImg} />
                <div className={styles.itemDetails}>
                  <div>
                    <div className={styles.itemName}>{item.name}</div>
                    <div className={styles.itemMeta}>Size: {item.size || 'Universal'} / {item.quantity}x</div>
                  </div>
                  <div className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.totals}>
            <div className={styles.totalRow}>
              <span>Subtotal</span>
              <span style={{ color: 'var(--text-main)' }}>${subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.totalRow}>
              <span>Shipping</span>
              <span style={{ color: 'var(--text-main)' }}>COMPLIMENTARY</span>
            </div>
            <div className={styles.totalFinal}>
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>

          <button className={`primary-btn ${styles.checkoutBtn}`}>Complete Purchase</button>
          
          <div className={styles.secureIcon}>
            <Lock size={12} /> Secure Encrypted Transaction
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
