import React from 'react';
import './Highlights.css';

const popularDishes = [
  {
    id: 1,
    name: 'Paella Valenciana',
    description: 'Arroz bomba con pollo, conejo, judías verdes, garrofón y azafrán puro.',
    price: '22€',
    image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&q=80&w=1470'
  },
  {
    id: 2,
    name: 'Pulpo a la Gallega',
    description: 'Pulpo tierno sobre cachelos, pimentón de la Vera y aceite de oliva virgen extra.',
    price: '24€',
    image: 'https://images.unsplash.com/photo-1626201297597-9e4fc416b2b5?auto=format&fit=crop&q=80&w=1528'
  },
  {
    id: 3,
    name: 'Croquetas de Jamón Ibérico',
    description: 'Bechamel cremosa y jamón de bellota 100% ibérico, fritas a la perfección.',
    price: '14€',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=1470'
  }
];

const Highlights = () => {
  return (
    <section className="section highlights">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-subtitle">Nuestra Especialidad</span>
          <h2 className="section-title">Platos Destacados</h2>
        </div>

        <div className="highlights-grid">
          {popularDishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <div className="dish-image-wrapper">
                <img src={dish.image} alt={dish.name} className="dish-image" />
              </div>
              <div className="dish-content">
                <div className="dish-header">
                  <h3 className="dish-title">{dish.name}</h3>
                  <span className="dish-price">{dish.price}</span>
                </div>
                <p className="dish-desc">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
