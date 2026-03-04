import React from 'react';
import { useAppContext } from '../context/AppContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useAppContext();

    return (
        <button
            onClick={toggleTheme}
            style={{
                background: 'var(--glass)',
                border: '1px solid var(--glass-border)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                boxShadow: 'var(--shadow-sm)'
            }}
            title="Toggle Dark Mode"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;
