import React from 'react';

const milestones = [
  { title: '1. Talking', desc: 'We talk about your project ideas.' },
  { title: '2. Drawing', desc: 'We draw how the app will look.' },
  { title: '3. Coding', desc: 'We write all the code for the app.' },
  { title: '4. Done', desc: 'We finish and put it online.' }
];

const Milestones: React.FC = () => {
  return (
    <div className="container-custom">
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>How It Works</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
        {milestones.map((m, i) => (
          <div key={i} style={{ background: 'white', padding: '15px', border: '1px solid #ccc', width: '180px' }}>
            <h4 style={{ color: 'blue', marginBottom: '5px' }}>Phase {i+1}</h4>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{m.title}</div>
            <p style={{ fontSize: '12px' }}>{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;