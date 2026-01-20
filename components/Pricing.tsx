import React from 'react';

const plans = [
  { name: 'Basic Plan', price: '$2,500', desc: 'Good for small projects.' },
  { name: 'Business Plan', price: '$10,000', desc: 'Good for big companies.' },
  { name: 'Monthly Help', price: '$2,000', desc: 'We help you every month.' }
];

const Pricing: React.FC = () => {
  return (
    <div className="container-custom">
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Prices</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {plans.map((plan, i) => (
          <div key={i} style={{ border: '1px solid #ccc', padding: '20px', width: '240px', textAlign: 'center', background: '#f9f9f9' }}>
            <h3 style={{ fontSize: '20px' }}>{plan.name}</h3>
            <div style={{ fontSize: '28px', fontWeight: 'bold', margin: '15px 0' }}>{plan.price}</div>
            <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>{plan.desc}</p>
            <button className="btn" style={{ width: '100%' }}>Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;