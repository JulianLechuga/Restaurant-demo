import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="menu-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1374')" }}>
        <div className="menu-hero-overlay"></div>
        <div className="container menu-hero-content">
          <h1 className="menu-hero-title">Contacto</h1>
          <p className="menu-hero-subtitle">Estamos a su disposición</p>
        </div>
      </div>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-wrapper">
              <span className="section-subtitle">Dónde Encontrarnos</span>
              <h2 className="section-title">Información de Contacto</h2>
              <p className="contact-intro">
                Nos encantaría saber de ti. Tanto si es para una reserva grande, 
                eventos privados o simplemente para saludarnos, no dudes en ponerte en contacto.
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-card-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="info-card-title">Dirección</h3>
                    <p className="info-card-text">Calle Mayor 12<br/>28013 Madrid, España</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="info-card-title">Teléfono</h3>
                    <p className="info-card-text">+34 912 345 678</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="info-card-title">Email</h3>
                    <p className="info-card-text">info@elrinconrestaurante.es</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="info-card-title">Horario de Apertura</h3>
                    <ul className="info-card-hours">
                      <li><span>Martes - Jueves</span><span>13:00 - 16:00 | 20:00 - 23:30</span></li>
                      <li><span>Viernes - Sábado</span><span>13:00 - 16:00 | 20:30 - 00:30</span></li>
                      <li><span>Domingo</span><span>13:00 - 16:30</span></li>
                      <li><span>Lunes</span><span className="closed">Cerrado</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-container">
              {/* Google Maps Embed iframe */}
              <iframe 
                title="Mapa de Restaurante El Rincón"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.492576203276!2d-3.7088461241199583!3d40.41680195543666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287c2fb24831%3A0xc6cb1c4927bfae6d!2sC.%20Mayor%2C%2012%2C%20Centro%2C%2028013%20Madrid!5e0!3m2!1ses!2ses!4v1709405230973!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
