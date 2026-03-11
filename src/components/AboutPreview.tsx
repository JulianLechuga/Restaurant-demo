import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPreview.css';

const AboutPreview = () => {
  return (
    <section className="section about-preview">
      <div className="container about-preview-container">
        <div className="about-preview-content">
          <span className="section-subtitle">Nuestra Filosofía</span>
          <h2 className="section-title">El Arte de la Cocina Española</h2>
          <p className="about-preview-text">
            En El Rincón, creemos que la comida es más que sustento; es cultura, recuerdo y celebración. 
            Nuestra cocina fusiona las recetas transmitidas de generación en generación con técnicas modernas 
            que realzan cada sabor. Utilizamos productos de temporada, de origen local, para llevar la 
            verdadera esencia de España a tu mesa.
          </p>
          <Link to="/about" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
            Nuestra Historia
          </Link>
        </div>
        <div className="about-preview-image">
          <img 
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=1470" 
            alt="Chef preparando plato" 
            className="rounded-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
