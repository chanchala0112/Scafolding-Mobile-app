import React from 'react';
import { useAppContext } from '../context/AppContext';

const CartView = ({ isOpen, onClose }) => {
    const { cart, removeFromCart, clearCart } = useAppContext();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if (!isOpen) return null;

    return (
        <div className="animate-fade" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end'
        }}>
            <div className="glass-card" style={{
                width: '100%',
                maxWidth: '500px',
                maxHeight: '80vh',
                background: 'var(--bg-card)',
                borderTopLeftRadius: 'var(--radius-lg)',
                borderTopRightRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                overflowY: 'auto',
                position: 'relative'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Your Cart</h2>
                    <button onClick={onClose} style={{ fontSize: '1.5rem', background: 'none' }}>✕</button>
                </div>

                {cart.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
                        <p>Your cart is empty.</p>
                    </div>
                ) : (
                    <>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {cart.map(item => (
                                <div key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }} />
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontSize: '1rem' }}>{item.name}</h4>
                                        <p style={{ color: 'var(--primary)', fontWeight: 600 }}>${item.price}</p>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} style={{ color: 'var(--accent)', background: 'none' }}>Remove</button>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '2rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                                <span>Total</span>
                                <span>${total}</span>
                            </div>
                            <button
                                className="btn-primary"
                                style={{ width: '100%', padding: '1rem' }}
                                onClick={() => { alert('Proceeding to Checkout!'); clearCart(); onClose(); }}
                            >
                                Checkout Now
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartView;
