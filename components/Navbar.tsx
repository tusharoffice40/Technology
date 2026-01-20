import React from 'react';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{ backgroundColor: '#333', color: 'white', padding: '15px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>TechSoft Website</div>
        <div style={{ display: 'flex', gap: '15px' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;