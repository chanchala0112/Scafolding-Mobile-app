import React from 'react';
import { useAppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
    const { userRole, deleteProduct, updateProduct, addToCart, cart } = useAppContext();

    const handlePriceBump = () => {
        updateProduct(product.id, { price: product.price + 10 });
    };

    const isInCart = cart.find(item => item.id === product.id);

    return (
        <div className="glass-card animate-fade" style={{ overflow: 'hidden', margin: '1rem', transition: 'transform 0.2s', border: '1px solid var(--glass-border)', background: 'var(--glass)' }}>
            <div style={{ height: '180px', background: 'var(--bg-subtle)', position: 'relative' }}>
                <img
                    src={product.image || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80'}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.5)', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', backdropFilter: 'blur(4px)' }}>
                    {product.category}
                </div>
            </div>
            <div style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>{product.name}</h3>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Sold by {product.sellerId === 'currentUser' ? 'You' : 'Elite Seller'}</p>
                    </div>
                    <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1.25rem' }}>${product.price}</p>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {userRole === 'buyer' && (
                        <button
                            onClick={() => addToCart(product)}
                            className="btn-primary"
                            style={{ flex: 1, background: isInCart ? '#10b981' : 'var(--primary)' }}
                            disabled={isInCart}
                        >
                            {isInCart ? '✓ Added to Cart' : 'Add to Cart 🛒'}
                        </button>
                    )}
                    {(userRole === 'seller' || userRole === 'admin') && (
                        <>
                            <button
                                onClick={handlePriceBump}
                                style={{ flex: 1, background: 'var(--bg-subtle)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-sm)', padding: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)' }}
                            >
                                +$10
                            </button>
                            <button
                                onClick={() => deleteProduct(product.id)}
                                style={{ flex: 1, background: 'rgba(244, 63, 94, 0.1)', color: 'var(--accent)', border: '1px solid rgba(244, 63, 94, 0.2)', borderRadius: 'var(--radius-sm)', padding: '0.5rem', fontSize: '0.875rem' }}
                            >
                                Delete
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};


export default ProductCard;
