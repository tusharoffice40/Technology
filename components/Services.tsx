import React from 'react';

const services = [
  { title: 'Software Help', description: 'We write software code for your computer needs.' },
  { title: 'Cloud Stuff', description: 'We help you with cloud storage and servers.' },
  { title: 'Security', description: 'We keep your website safe from bad people.' },
  { title: 'Data Analysis', description: 'We look at your data and tell you what it means.' },
  { title: 'Mobile Apps', description: 'We build apps for iPhones and Androids.' },
  { title: 'Modernizing', description: 'We take your old systems and make them new.' }
];

const Services: React.FC = () => {
  return (
    <div className="container-custom">
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Things We Do</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
        {services.map((service, idx) => (
          <div key={idx} className="card">
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{service.title}</h3>
            <p style={{ fontSize: '14px', color: '#666' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;