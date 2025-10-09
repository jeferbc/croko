import React from 'react';
import Link from 'next/link';

const ServiceRouter = () => {
  return (
    <section className="service-router-section" style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, #fff5f7 0%, #ffe8f0 100%)'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-5">
              <h1 className="mb-3" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
                ¿Cómo Quieres Pintar Tu Barriguita?
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                Elige la opción perfecta para celebrar tu embarazo con arte
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* OPTION 1: Professional Service */}
          <div className="col-lg-5 col-md-6 mb-4">
            <Link href="/servicio" style={{ textDecoration: 'none' }}>
              <div className="service-option-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                border: '3px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(255,105,180,0.3)';
                e.currentTarget.style.borderColor = '#ff69b4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'transparent';
              }}>
                <div className="icon-wrapper mb-4 text-center">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #ff69b4, #ff1493)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    fontSize: '2.5rem'
                  }}>
                    🎨
                  </div>
                </div>

                <h3 className="text-center mb-3" style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#333'
                }}>
                  Servicio Profesional
                </h3>

                <p className="text-center mb-3" style={{
                  fontSize: '1.1rem',
                  color: '#ff1493',
                  fontWeight: '600'
                }}>
                  Sesión con Artista en Tu Casa
                </p>

                <p className="text-center mb-4" style={{ color: '#666', lineHeight: '1.6' }}>
                  Carolina va a tu domicilio en Medellín con todos los materiales, crea un diseño único y toma fotos profesionales.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '25px' }}>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff69b4' }}>✓</span>
                    Artista profesional especializada
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff69b4' }}>✓</span>
                    Diseños únicos y personalizados
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff69b4' }}>✓</span>
                    Fotos profesionales incluidas
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff69b4' }}>✓</span>
                    Solo en Medellín
                  </li>
                </ul>

                <div className="text-center">
                  <button style={{
                    background: 'linear-gradient(135deg, #ff69b4, #ff1493)',
                    color: 'white',
                    border: 'none',
                    padding: '15px 40px',
                    borderRadius: '30px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    Ver Servicio Profesional →
                  </button>
                </div>
              </div>
            </Link>
          </div>

          {/* OPTION 2: DIY Kit */}
          <div className="col-lg-5 col-md-6 mb-4">
            <Link href="/kit" style={{ textDecoration: 'none' }}>
              <div className="service-option-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                border: '3px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(147,112,219,0.3)';
                e.currentTarget.style.borderColor = '#9370db';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'transparent';
              }}>
                <div className="icon-wrapper mb-4 text-center">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #9370db, #8a2be2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    fontSize: '2.5rem'
                  }}>
                    📦
                  </div>
                </div>

                <h3 className="text-center mb-3" style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#333'
                }}>
                  Kit DIY
                </h3>

                <p className="text-center mb-3" style={{
                  fontSize: '1.1rem',
                  color: '#8a2be2',
                  fontWeight: '600'
                }}>
                  Todo Lo Necesario Enviado a Tu Casa
                </p>

                <p className="text-center mb-4" style={{ color: '#666', lineHeight: '1.6' }}>
                  Recibe en tu casa todo lo necesario para pintar tu barriguita en familia. Perfecto para toda Colombia.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '25px' }}>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#9370db' }}>✓</span>
                    Pinturas hipoalergénicas
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#9370db' }}>✓</span>
                    3 plantillas personalizables
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#9370db' }}>✓</span>
                    Videos tutoriales paso a paso
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#9370db' }}>✓</span>
                    Envío a toda Colombia
                  </li>
                </ul>

                <div className="text-center">
                  <button style={{
                    background: 'linear-gradient(135deg, #9370db, #8a2be2)',
                    color: 'white',
                    border: 'none',
                    padding: '15px 40px',
                    borderRadius: '30px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    Ver Kit DIY →
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="trust-indicators text-center">
              <p style={{ fontSize: '0.95rem', color: '#888', marginBottom: '15px' }}>
                Más de 500 familias colombianas han celebrado su embarazo con Croko
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  <span style={{ color: '#ffa500', marginRight: '5px' }}>★★★★★</span>
                  4.9/5 en Google
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  ✓ Pinturas hipoalergénicas
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  ✓ Aptas para embarazo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRouter;
