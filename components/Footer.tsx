import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '30px 20px', textAlign: 'center' }}>
      <div className="container-custom">
        <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>TechSoft</div>
        <p style={{ fontSize: '12px', color: '#ccc', marginBottom: '15px' }}>We are a technology company. Thanks for visiting our website.</p>
        <div style={{ fontSize: '12px' }}>
          <a href="#" style={{ color: 'white', margin: '0 10px' }}>Home</a>
          <a href="#" style={{ color: 'white', margin: '0 10px' }}>Privacy</a>
          <a href="#" style={{ color: 'white', margin: '0 10px' }}>Terms</a>
        </div>
        <hr style={{ margin: '20px 0', borderColor: '#444' }} />
        <p style={{ fontSize: '10px' }}>&copy; 2024 TechSoft Infrastructure. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;