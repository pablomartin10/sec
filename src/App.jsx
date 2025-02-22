import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

export default function App() {
  // Array con la información de cada formulario:
  const forms = [
    {
      title: "Formulario 1",
      link: "https://ejemplo.com/formulario1", // Reemplaza con la URL real
      image: "https://via.placeholder.com/300x200?text=Formulario+1", // Imagen representativa
    },
    {
      title: "Formulario 2",
      link: "https://ejemplo.com/formulario2", // Reemplaza con la URL real
      image: "https://via.placeholder.com/300x200?text=Formulario+2",
    },
    {
      title: "Formulario 3",
      link: "https://ejemplo.com/formulario3", // Reemplaza con la URL real
      image: "https://via.placeholder.com/300x200?text=Formulario+3",
    },
    // Agrega más formularios según sea necesario...
  ];

  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Security Health Checks</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            padding: '20px'
          }}
        >
          {forms.map((form, index) => (
            <a
              key={index}
              href={form.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img
                  src={form.image}
                  alt={form.title}
                  style={{ width: '100%', display: 'block' }}
                />
                <div style={{ padding: '10px', textAlign: 'center' }}>
                  <h2 style={{ fontSize: '18px', margin: '0' }}>{form.title}</h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
