import { create } from 'zustand';

export const useStore = create((set, get) => ({
  // Cart State
  cart: [],
  isCartOpen: false,
  
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),

  addToCart: (product, quantity = 1) => set((state) => {
    const existingItem = state.cart.find(item => item.id === product.id);
    if (existingItem) {
      return {
        cart: state.cart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      };
    }
    return { cart: [...state.cart, { ...product, quantity }] };
  }),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId)
  })),

  updateQuantity: (productId, quantity) => set((state) => ({
    cart: state.cart.map(item => 
      item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    )
  })),

  clearCart: () => set({ cart: [] }),

  getCartTotal: () => {
    return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  // Auth State
  isAuthModalOpen: false,
  isLoggedIn: false,
  user: null,

  toggleAuthModal: () => set((state) => ({ isAuthModalOpen: !state.isAuthModalOpen })),
  
  login: (userData) => set({ 
    isLoggedIn: true, 
    user: userData,
    isAuthModalOpen: false 
  }),
  
  logout: () => set({ 
    isLoggedIn: false, 
    user: null 
  }),
  
  // Checkout State
  isCheckoutModalOpen: false,
  toggleCheckoutModal: () => set((state) => ({ isCheckoutModalOpen: !state.isCheckoutModalOpen })),
}));
