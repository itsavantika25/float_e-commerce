import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HeroScene from './components/3d/HeroScene';
import ProductGrid from './components/products/ProductGrid';
import CartDrawer from './components/cart/CartDrawer';
import CheckoutPage from './pages/CheckoutPage';
import LoginModal from './components/auth/LoginModal';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <HeroScene />
    <ProductGrid />
  </>
);

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
      <CartDrawer />
      <LoginModal />
    </>
  );
}

export default App;
