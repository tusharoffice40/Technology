import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container-custom">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" 
            alt="Team Working" 
            style={{ width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2>About Us</h2>
          <p style={{ fontSize: '14px', marginBottom: '15px' }}>
            TechSoft is a company that likes technology. We have been doing this for over 10 years now. Our team is very good at coding.
          </p>
          <p style={{ fontSize: '14px', marginBottom: '15px' }}>
            We work with small startups and also big companies. We want to make sure your software works perfectly every time.
          </p>
          <div style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc' }}>
            <p style={{ fontWeight: 'bold', fontSize: '12px' }}>OUR MISSION:</p>
            <p style={{ fontSize: '13px' }}>To build great digital stuff for everyone.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;