import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const ProductForm = () => {
    const { addProduct, userRole } = useAppContext();
    const [formData, setFormData] = useState({ name: '', price: '', category: 'Electronics', image: '' });
    const [isOpen, setIsOpen] = useState(false);

    if (userRole === 'buyer') return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ ...formData, price: Number(formData.price) });
        setFormData({ name: '', price: '', category: 'Electronics', image: '' });
        setIsOpen(false);
    };

    return (
        <div style={{ padding: '1rem' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="btn-primary"
                style={{ width: '100%', marginBottom: '1rem' }}
            >
                {isOpen ? 'Close Form' : '+ List New Item'}
            </button>

            {isOpen && (
                <form onSubmit={handleSubmit} className="glass-card animate-fade" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Product Details</h3>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Product Name</label>
                        <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', marginTop: '0.25rem' }}
                            placeholder="e.g. Vintage Camera"
                        />
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Price ($)</label>
                            <input
                                required
                                type="number"
                                value={formData.price}
                                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', marginTop: '0.25rem' }}
                                placeholder="0.00"
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Category</label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', marginTop: '0.25rem' }}
                            >
                                <option>Electronics</option>
                                <option>Fashion</option>
                                <option>Home</option>
                                <option>Sports</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Image URL (Optional)</label>
                        <input
                            type="text"
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', marginTop: '0.25rem' }}
                            placeholder="https://images.unsplash.com/..."
                        />
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: '100%' }}>Post Listing</button>
                </form>
            )}
        </div>
    );
};

export default ProductForm;
