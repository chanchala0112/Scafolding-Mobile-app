import React from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import UserRoleSwitcher from './components/UserRoleSwitcher';
import ProductForm from './components/ProductForm';
import ProductCard from './components/ProductCard';

import React, { useState } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import UserRoleSwitcher from './components/UserRoleSwitcher';
import ProductForm from './components/ProductForm';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import CartView from './components/CartView';
import SellerDashboard from './components/SellerDashboard';

const MainApp = () => {
  const { products, userRole, searchQuery, selectedCategory, cart } = useAppContext();
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filter Logic
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ paddingBottom: 'var(--bottom-nav-height)' }}>
      <UserRoleSwitcher />

      <header style={{
        padding: '1.5rem 1rem',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        color: 'white',
        margin: '1rem 0.5rem',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)'
      }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.25rem' }}>KrnMarket</h1>
        <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>The premium marketplace for explorers.</p>
        <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 10px #4ade80' }}></div>
            <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{userRole.toUpperCase()} MODE</span>
          </div>
          {userRole === 'buyer' && (
            <button
              onClick={() => setIsCartOpen(true)}
              style={{ background: 'white', color: 'var(--primary)', padding: '6px 14px', borderRadius: '20px', fontWeight: 700, fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              🛒 Cart ({cart.length})
            </button>
          )}
        </div>
      </header>

      <SellerDashboard />

      <SearchBar />

      <ProductForm />

      <div style={{ padding: '0 0.5rem' }}>
        <h2 style={{ padding: '0 0.5rem 1rem 0.5rem', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
          {searchQuery ? `Results for "${searchQuery}"` : 'Recommended for You'}
        </h2>

        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔦</div>
            <p>No products found matching your criteria.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <CartView isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Bottom Nav Mockup */}
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '500px',
        height: 'var(--bottom-nav-height)',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid var(--glass-border)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0 1rem',
        zIndex: 100
      }}>
        <div style={{ textAlign: 'center', color: 'var(--primary)' }}>
          <div style={{ fontSize: '1.2rem' }}>🏠</div>
          <div style={{ fontSize: '0.65rem', fontWeight: 600 }}>Home</div>
        </div>
        <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          <div style={{ fontSize: '1.2rem' }}>🔍</div>
          <div style={{ fontSize: '0.65rem' }}>Search</div>
        </div>
        <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          <div style={{ fontSize: '1.2rem' }}>📦</div>
          <div style={{ fontSize: '0.65rem' }}>Store</div>
        </div>
        <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          <div style={{ fontSize: '1.2rem' }}>👤</div>
          <div style={{ fontSize: '0.65rem' }}>Account</div>
        </div>
      </nav>
    </div>
  );
};


function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}

export default App;
