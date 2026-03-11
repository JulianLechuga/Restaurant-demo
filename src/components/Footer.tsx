import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3 className="footer-title">El Rincón</h3>
          <p className="footer-desc">
            Disfruta de la auténtica gastronomía española con un toque moderno
            en un ambiente cálido y acogedor.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram" className="social-link"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook" className="social-link"><Facebook size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-subtitle">Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><Link to="/menu">Nuestro Menú</Link></li>
            <li><Link to="/reservations">Reservar Mesa</Link></li>
            <li><Link to="/about">Conócenos</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-subtitle">Contacto</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Calle Mayor 12, Ciudad, España</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+34 912 345 678</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>info@elrinconrestaurante.es</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-subtitle">Horario</h4>
          <ul className="footer-contact">
            <li>
              <Clock size={18} className="contact-icon" />
              <div>
                <strong>Mar - Jue:</strong> 13:00 - 16:00 / 20:00 - 23:30<br/>
                <strong>Vie - Sáb:</strong> 13:00 - 16:00 / 20:30 - 00:30<br/>
                <strong>Domingo:</strong> 13:00 - 16:30<br/>
                <strong>Lunes:</strong> Cerrado
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Restaurante El Rincón. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
