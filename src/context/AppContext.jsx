import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('buyer'); // 'buyer', 'seller', 'admin'
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [products, setProducts] = useState([
    { id: 1, name: 'Premium Wireless Headphones', price: 299, category: 'Electronics', sellerId: 'seller1', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
    { id: 2, name: 'Minimalist Wall Clock', price: 45, category: 'Home', sellerId: 'seller2', image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&q=80' },
    { id: 3, name: 'Leather Travel Bag', price: 120, category: 'Fashion', sellerId: 'seller1', image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&q=80' },
    { id: 4, name: 'Smart Watch Pro', price: 199, category: 'Electronics', sellerId: 'seller3', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
    { id: 5, name: 'Coffee Brewing Kit', price: 85, category: 'Home', sellerId: 'seller2', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80' },
  ]);

  const [cart, setCart] = useState([]);

  // Theme Logic
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  // CRUD
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now(), sellerId: 'currentUser' }]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
    setCart(cart.filter(item => item.id !== id));
  };

  // Cart Logic
  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) return;
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <AppContext.Provider value={{
      userRole, setUserRole,
      theme, toggleTheme,
      searchQuery, setSearchQuery,
      selectedCategory, setSelectedCategory,
      products, addProduct, updateProduct, deleteProduct,
      cart, addToCart, removeFromCart, clearCart
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

