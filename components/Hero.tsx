import React from 'react';

const Hero: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Welcome to TechSoft Technology</h1>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '30px' }}>
          We provide technology and software solutions for businesses. We do cloud, coding, and security to help you grow.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <a href="#contact" className="btn">Contact Us Today</a>
          <a href="#services" style={{ padding: '10px 20px', border: '1px solid #ccc', textDecoration: 'none', color: '#333' }}>Our Services</a>
        </div>

        <div style={{ marginTop: '30px' }}>
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500" 
            alt="Office Work" 
            style={{ width: '100%', maxWidth: '400px', borderRadius: '5px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;