import React, { useState } from 'react';
import { Phone, Calendar, Clock, Users } from 'lucide-react';
import './Reservations.css';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Reservation Submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '' });
  };

  return (
    <div>
      <div className="menu-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1470')" }}>
        <div className="menu-hero-overlay"></div>
        <div className="container menu-hero-content">
          <h1 className="menu-hero-title">Reservas</h1>
          <p className="menu-hero-subtitle">Tu Mesa Te Espera</p>
        </div>
      </div>

      <section className="section reservations-section">
        <div className="container">
          <div className="reservations-grid">
            <div className="reservations-info">
              <span className="section-subtitle">Planifica Tu Visita</span>
              <h2 className="section-title">Haz Una Reserva</h2>
              <p className="info-text">
                Para reservas de más de 8 personas, eventos privados o peticiones especiales, 
                por favor contáctenos directamente por teléfono.
              </p>
              
              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <Phone size={24} />
                </div>
                <div>
                  <h3>Reservas por Teléfono</h3>
                  <p className="contact-detail">+34 912 345 678</p>
                  <p className="contact-subdetail">Lunes a Domingo, 10:00 - 20:00</p>
                </div>
              </div>

              <div className="booking-policies">
                <h3>Políticas de Reserva</h3>
                <ul>
                  <li>Mantenemos la mesa un máximo de 15 minutos de cortesía.</li>
                  <li>Dress code: Smart Casual.</li>
                  <li>Opciones sin gluten y veganas disponibles (indicar en notas).</li>
                </ul>
              </div>
            </div>

            <div className="book-form-container">
              {isSubmitted ? (
                <div className="success-message">
                  <h3>¡Reserva Recibida!</h3>
                  <p>Nos pondremos en contacto pronto para confirmar su mesa.</p>
                </div>
              ) : (
                <form className="book-form" onSubmit={handleSubmit}>
                  <h3 className="form-title">Datos de la Reserva</h3>
                  
                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="date"><Calendar size={16}/> Fecha</label>
                      <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="time"><Clock size={16}/> Hora</label>
                      <select id="time" name="time" required value={formData.time} onChange={handleChange}>
                        <option value="">Seleccionar Hora</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="guests"><Users size={16}/> Comensales</label>
                    <select id="guests" name="guests" required value={formData.guests} onChange={handleChange}>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Persona' : 'Personas'}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <input type="text" id="name" name="name" placeholder="Ej. Juan Pérez" required value={formData.name} onChange={handleChange} />
                  </div>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Teléfono</label>
                      <input type="tel" id="phone" name="phone" placeholder="+34 600..." required value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">Notas o Peticiones Especiales</label>
                    <textarea id="notes" name="notes" rows={3} placeholder="Alergias, celebraciones..." value={formData.notes} onChange={handleChange}></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Solicitar Reserva
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
