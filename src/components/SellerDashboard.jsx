import React from 'react';
import { useAppContext } from '../context/AppContext';

const SellerDashboard = () => {
    const { products, userRole } = useAppContext();

    if (userRole === 'buyer') return null;

    const sellerProducts = products.filter(p => p.sellerId === 'seller1' || p.sellerId === 'currentUser');
    const totalValue = sellerProducts.reduce((sum, p) => sum + p.price, 0);

    return (
        <div style={{ padding: '1rem' }}>
            <div className="glass-card animate-fade" style={{
                padding: '1.5rem',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                color: 'white',
                borderRadius: 'var(--radius-lg)'
            }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Seller Insights</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <p style={{ opacity: 0.8, fontSize: '0.75rem' }}>Total Listings</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{sellerProducts.length}</p>
                    </div>
                    <div>
                        <p style={{ opacity: 0.8, fontSize: '0.75rem' }}>Inventory Value</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>${totalValue}</p>
                    </div>
                    <div>
                        <p style={{ opacity: 0.8, fontSize: '0.75rem' }}>Views (7d)</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>1.2k</p>
                    </div>
                    <div>
                        <p style={{ opacity: 0.8, fontSize: '0.75rem' }}>Sales (7d)</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>24</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDashboard;
