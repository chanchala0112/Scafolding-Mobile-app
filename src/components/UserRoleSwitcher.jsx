import ThemeToggle from './ThemeToggle';

const UserRoleSwitcher = () => {
    const { userRole, setUserRole } = useAppContext();

    const roles = ['buyer', 'seller', 'admin'];

    return (
        <div style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'var(--glass)',
            backdropFilter: 'blur(10px)',
            padding: '0.75rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--glass-border)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ThemeToggle />
                <div>
                    <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.2rem' }}>Krn</span>
                    <span style={{ fontWeight: 400, color: 'var(--text-main)' }}>Market</span>
                </div>
            </div>
            <div style={{ display: 'flex', background: 'var(--bg-subtle)', padding: '4px', borderRadius: '24px', gap: '4px' }}>
                {roles.map(role => (
                    <button
                        key={role}
                        onClick={() => setUserRole(role)}
                        style={{
                            padding: '6px 12px',
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            textTransform: 'capitalize',
                            background: userRole === role ? 'var(--primary)' : 'transparent',
                            color: userRole === role ? 'white' : 'var(--text-muted)',
                            boxShadow: userRole === role ? 'var(--shadow-md)' : 'none'
                        }}
                    >
                        {role}
                    </button>
                ))}
            </div>
        </div>
    );
};


export default UserRoleSwitcher;
