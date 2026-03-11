import React, { useState } from 'react';
import './Menu.css';

const menuData = {
  starters: [
    { id: 's1', name: 'Jamón Ibérico de Bellota', description: 'Cortado a cuchillo, servido con pan con tomate.', price: '24€' },
    { id: 's2', name: 'Gambas al Ajillo', description: 'Gambas blancas al ajillo con un toque de guindilla.', price: '16€' },
    { id: 's3', name: 'Croquetas Caseras', description: 'De jamón o de boletus, receta tradicional.', price: '12€' },
    { id: 's4', name: 'Salmorejo Cordobés', description: 'Con huevo duro picado y virutas de jamón.', price: '9€' }
  ],
  mains: [
    { id: 'm1', name: 'Entrecot de Ternera', description: 'A la parrilla, con patatas panadera y pimientos del padrón.', price: '26€' },
    { id: 'm2', name: 'Lubina a la Sal', description: 'Lubina salvaje preparada a la sal, verduras de temporada.', price: '28€' },
    { id: 'm3', name: 'Arroz Abanda', description: 'Arroz caldoso con mariscos y alioli casero. (Mín. 2 personas)', price: '22€/pax' },
    { id: 'm4', name: 'Cochinillo Asado', description: 'Estilo segoviano, piel crujiente y carne tierna.', price: '29€' }
  ],
  desserts: [
    { id: 'd1', name: 'Tarta de Queso', description: 'Estilo viña, cremosa por dentro y tostada por fuera.', price: '8€' },
    { id: 'd2', name: 'Crema Catalana', description: 'Tradicional crema con azúcar caramelizado intenso.', price: '7€' },
    { id: 'd3', name: 'Torrija Caramelizada', description: 'Con helado de vainilla de Madagascar.', price: '8€' }
  ],
  drinks: [
    { id: 'dr1', name: 'Sangría de Vino Tinto', description: 'Jarra de sangría tradicional con frutas frescas.', price: '18€' },
    { id: 'dr2', name: 'Vino Rioja Reserva', description: 'Botella de vino tinto D.O. Ca. Rioja.', price: '26€' },
    { id: 'dr3', name: 'Agua Mineral', description: 'Agua con o sin gas (750ml).', price: '4€' },
    { id: 'dr4', name: 'Cerveza Artesana', description: 'Selección de cervezas locales.', price: '4.50€' }
  ]
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState<'starters' | 'mains' | 'desserts' | 'drinks'>('starters');

  const tabs = [
    { id: 'starters', label: 'Entrantes' },
    { id: 'mains', label: 'Platos Principales' },
    { id: 'desserts', label: 'Postres' },
    { id: 'drinks', label: 'Bebidas' }
  ] as const;

  return (
    <div>
      <div className="menu-hero">
        <div className="menu-hero-overlay"></div>
        <div className="container menu-hero-content">
          <h1 className="menu-hero-title">Nuestro Menú</h1>
          <p className="menu-hero-subtitle">Sabores Auténticos</p>
        </div>
      </div>

      <section className="section menu-section">
        <div className="container">
          <div className="menu-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`menu-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="menu-content">
            <div className="menu-grid">
              {menuData[activeTab].map(item => (
                <div key={item.id} className="menu-item">
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <div className="menu-item-dots"></div>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <p className="dietary-note">
              * Por favor, informe a nuestro personal sobre cualquier alergia o restricción biológica. <br/>
              Opciones veganas y sin gluten disponibles bajo petición.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
