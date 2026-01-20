import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Milestones from './components/Milestones';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="about" style={{ backgroundColor: '#f4f4f4' }}>
          <About />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="process" style={{ backgroundColor: '#e9e9e9' }}>
          <Milestones />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="contact" style={{ backgroundColor: '#f0f0f0' }}>
          <Contact />
        </section>
      </main>

      <Footer />
      <AiAssistant />
    </div>
  );
};

export default App;