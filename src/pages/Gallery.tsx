import React, { useState } from 'react';
import { X } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1374', title: 'Interior del Restaurante' },
  { id: 2, src: 'https://images.unsplash.com/photo-1626201297597-9e4fc416b2b5?auto=format&fit=crop&q=80&w=1528', title: 'Pulpo a la Gallega' },
  { id: 3, src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1470', title: 'Nuestra Bodega' },
  { id: 4, src: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&q=80&w=1470', title: 'Paella de Mariscos' },
  { id: 5, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2070', title: 'Ambiente en Terraza' },
  { id: 6, src: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=1470', title: 'Tapas Variadas' },
  { id: 7, src: 'https://images.unsplash.com/photo-1590846406792-0adc7f928f1e?auto=format&fit=crop&q=80&w=1374', title: 'Mesa Preparada' },
  { id: 8, src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=1364', title: 'Postres Artesanos' }
];

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setLightboxImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <div className="menu-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1374')" }}>
        <div className="menu-hero-overlay"></div>
        <div className="container menu-hero-content">
          <h1 className="menu-hero-title">Galería</h1>
          <p className="menu-hero-subtitle">Nuestros Espacios y Platos</p>
        </div>
      </div>

      <section className="section gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openLightbox(image.src)}
              >
                <img src={image.src} alt={image.title} className="gallery-img" loading="lazy" />
                <div className="gallery-img-overlay">
                  <span className="gallery-img-title">{image.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Cerrar">
            <X size={32} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Vista ampliada" 
            className="lightbox-img" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
