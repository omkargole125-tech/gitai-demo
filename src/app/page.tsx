import fs from 'fs';
import path from 'path';
import './page.css';
import TileGallery from '../components/TileGallery';

// Read all images from the public directory
function getImages() {
  const publicDir = path.join(process.cwd(), 'public');
  try {
    const files = fs.readdirSync(publicDir);
    // Filter only images
    return files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
  } catch (err) {
    console.error("Failed to read public directory:", err);
    return [];
  }
}

export default function Home() {
  const images = getImages();

  return (
    <main className="main-content">
      {/* Navigation */}
      <nav className="navbar fade-in-up">
        <div className="container nav-container">
          <div className="logo">GITAI.</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#gallery">Collection</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div className="title-wrapper fade-in-up delay-100">
              {/* Decorative Flower SVG */}
              <svg className="flower-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path fill="var(--primary)" d="M50,10 C45,30 30,45 10,50 C30,55 45,70 50,90 C55,70 70,55 90,50 C70,45 55,30 50,10 Z" />
                <circle cx="50" cy="50" r="10" fill="var(--accent)" />
              </svg>
              <h1>
                Elevate Your Space with <br/><span className="text-primary">Gitai Tiles</span>
              </h1>
            </div>
            <p className="fade-in-up delay-200 subtitle">
              Discover our premium collection of meticulously crafted tiles. 
              Perfect for modern homes and commercial spaces.
            </p>
            <div className="fade-in-up delay-300">
              <a href="#gallery" className="btn btn-primary">Explore Collection</a>
            </div>
          </div>
          
          <div className="fade-in-up delay-300" style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', position: 'relative', marginTop: '3rem' }}>
            {/* Decorative abstract shape to fill space */}
            <div style={{ width: '300px', height: '400px', borderRadius: '120px 20px 120px 20px', background: 'linear-gradient(135deg, var(--primary), var(--accent))', opacity: 0.1, position: 'absolute', top: '-20px', right: '10%' }}></div>
            <div style={{ width: '250px', height: '350px', borderRadius: '20px 120px 20px 120px', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem' }}>✨</div>
                <h3 style={{ marginTop: '1rem', color: 'var(--primary)' }}>Premium</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>Craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-background"></div>
      </header>

      {/* About Section */}
      <section id="about" className="section container">
        <div className="about-grid fade-in-up">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              At Gitai, we believe that every space deserves to be beautiful. 
              Our tiles are sourced from the finest materials and designed to bring elegance and durability to your interiors.
            </p>
            <p>
              Whether you are renovating your bathroom, designing a kitchen backsplash, or laying a grand living room floor, Gitai offers unmatched quality and aesthetics.
            </p>
          </div>
          <div className="about-stats" style={{ padding: 0, background: 'transparent', border: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
            <div className="stat glass" style={{ width: '100%', maxWidth: '300px', padding: '2rem', borderRadius: '16px', transform: 'translateX(-20px)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h3>{images.length}+</h3>
              <p style={{ margin: 0 }}>Premium Designs</p>
            </div>
            <div className="stat glass" style={{ width: '100%', maxWidth: '300px', padding: '2rem', borderRadius: '16px', transform: 'translateX(20px)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h3>100%</h3>
              <p style={{ margin: 0 }}>Quality Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section container">
        <div className="text-center fade-in-up">
          <h2>Our Collection</h2>
          <p className="subtitle">Browse through our exclusive tile designs.</p>
        </div>
        
        <TileGallery images={images} />
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="footer">
        <div className="container footer-content">
          <div className="footer-brand" style={{ flex: '1 1 300px' }}>
            <h2>GITAI.</h2>
            <p>Premium Tile Store</p>
            <p style={{ marginTop: '2rem', maxWidth: '300px', fontSize: '0.9rem', opacity: 0.8 }}>
              Bringing elegance and durability to your interiors with our meticulously crafted tiles.
            </p>
          </div>
          
          <div style={{ flex: '2 1 500px', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <div className="footer-contact glass contact-card" style={{ flex: '1 1 250px', padding: '2rem', margin: 0 }}>
              <h4>Get In Touch</h4>
              <p>We would love to hear from you. Visit our store or reach out to us directly!</p>
              <div className="contact-links">
                <a href="tel:952999503" className="contact-btn">
                  <span className="icon">📞</span> 952999503
                </a>
                <a href="mailto:sairajgole663@gmail.com" className="contact-btn">
                  <span className="icon">✉️</span> sairajgole663@gmail.com
                </a>
                <a href="https://www.google.com/maps/dir/?api=1&destination=17.667074,73.980240" target="_blank" rel="noopener noreferrer" className="contact-btn">
                  <span className="icon">📍</span> Get Directions
                </a>
              </div>
            </div>
            
            <div className="map-preview" style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column' }}>
              <iframe 
                src="https://maps.google.com/maps?q=17.667074,73.980240&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '16px', minHeight: '250px', flexGrow: 1 }} 
                allowFullScreen 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>&copy; {new Date().getFullYear()} Gitai Tiles. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
