import React from 'react';

const Features: React.FC = () => {
  const items = [
    { title: 'Very Fast', desc: 'Everything loads quickly.' },
    { title: 'Safe', desc: 'We use encryption for safety.' },
    { title: 'Good Tools', desc: 'We use the latest coding tools.' },
    { title: 'Scaling', desc: 'Your app can grow with more users.' },
    { title: 'AI Stuff', desc: 'We can add smart AI to your project.' },
    { title: 'Stats', desc: 'You get to see your data charts.' },
  ];

  return (
    <div className="container-custom">
      <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Our Best Features</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {items.map((item, i) => (
          <div key={i}>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.title}</h4>
            <p style={{ fontSize: '13px', color: '#555' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;