import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <span className="hero-subtitle">Tradición y Vanguardia</span>
        <h1 className="hero-title">El Rincón</h1>
        <p className="hero-description">
          Descubre la auténtica esencia de la gastronomía española.
          Platos elaborados con pasión, ingredientes locales y un toque de innovación.
        </p>
        <div className="hero-actions">
          <Link to="/reservations" className="btn btn-primary">
            Reservar una mesa <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
          <Link to="/menu" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
            Ver el menú
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
