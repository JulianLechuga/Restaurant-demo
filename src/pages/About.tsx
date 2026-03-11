import './About.css';

const About = () => {
  return (
    <div>
      <div className="menu-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1374')" }}>
        <div className="menu-hero-overlay"></div>
        <div className="container menu-hero-content">
          <h1 className="menu-hero-title">Nuestra Historia</h1>
          <p className="menu-hero-subtitle">Tradición y Pasión</p>
        </div>
      </div>

      <section className="section about-story">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-content">
              <span className="section-subtitle">El Comienzo</span>
              <h2 className="section-title">De Generación en Generación</h2>
              <p>
                El Rincón nació en 1998, un pequeño local familiar con un sueño claro: 
                ofrecer a nuestros clientes los sabores auténticos de nuestras abuelas, 
                utilizando los mejores ingredientes de nuestra tierra.
              </p>
              <p>
                A lo largo de los años, hemos crecido y evolucionado, pero nuestra esencia 
                siempre ha sido la misma. Cada plato que sale de nuestra cocina cuenta una 
                historia de amor por la gastronomía, de respeto por el producto y de 
                dedicación a cada detalle.
              </p>
            </div>
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1470" 
                alt="Historia del restaurante" 
                className="about-image" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-chef">
        <div className="container">
          <div className="about-grid reverse">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1377" 
                alt="Chef Antonio" 
                className="about-image" 
              />
            </div>
            <div className="about-text-content">
              <span className="section-subtitle">El Jefe de Cocina</span>
              <h2 className="section-title">Chef Antonio</h2>
              <p>
                Con más de 20 años de experiencia, el Chef Antonio ha llevado la cocina de 
                El Rincón a un nuevo nivel. Su visión combina las técnicas tradicionales de la 
                cocina española con toques contemporáneos.
              </p>
              <p>
                "Mi objetivo es que cada comensal sienta el alma de España en cada bocado, una 
                explosión de sabores que te transporte a los viñedos, a las costas y a los campos 
                de nuestra tierra."
              </p>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Signature_of_Antonio_Vivaldi.svg" 
                alt="Firma del Chef" 
                className="chef-signature" 
                style={{ width: '150px', marginTop: '2rem', opacity: 0.6, filter: 'invert(0.5)' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
