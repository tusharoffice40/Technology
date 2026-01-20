import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleAlert = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your message! We will email you back.");
    setName('');
    setEmail('');
    setMsg('');
  };

  return (
    <div className="container-custom">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Message Us</h2>
      <div style={{ maxWidth: '500px', margin: '0 auto', background: 'white', padding: '20px', border: '1px solid #ccc' }}>
        <form onSubmit={handleAlert}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px' }}>Your Name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc' }} 
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px' }}>Your Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc' }} 
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px' }}>Message:</label>
            <textarea 
              value={msg} 
              onChange={(e) => setMsg(e.target.value)} 
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc' }} 
              rows={4}
              required
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
            Send Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;