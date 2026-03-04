import React from 'react';
import { useAppContext } from '../context/AppContext';

const SearchBar = () => {
    const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useAppContext();

    const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports'];

    return (
        <div style={{ padding: '0 1rem 1rem 1rem' }}>
            <div style={{ position: 'relative', marginBottom: '1rem' }}>
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--glass-border)',
                        background: 'var(--glass)',
                        color: 'var(--text-main)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                    }}
                />
            </div>
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        style={{
                            whiteSpace: 'nowrap',
                            padding: '6px 16px',
                            borderRadius: '20px',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            background: selectedCategory === cat ? 'var(--primary)' : 'var(--glass)',
                            color: selectedCategory === cat ? 'white' : 'var(--text-muted)',
                            border: '1px solid var(--glass-border)',
                            transition: 'all 0.2s'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
