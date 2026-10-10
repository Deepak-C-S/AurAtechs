import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <img
                src="/auratects-logo.png"
                alt="AurAtects Leaf Logo"
                className="brand-logo-img"
              />
              <div className="brand-text-wrap">
                <span className="brand-name">AurAtects</span>
                <span className="brand-studio">INTERIOR DESIGN STUDIO</span>
              </div>
            </div>
            <p className="footer-tagline">
              Spaces That Feel Like You. Thoughtfully designed interiors for the way you live.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links-list">
              <a href="#hero">Home</a>
              <a href="#interiors">Room Styles</a>
              <a href="#projects">Our Projects</a>
              <a href="#services">Design Services</a>
              <a href="#about">About the Studio</a>
              <a href="#contact">Get a Quote</a>
            </div>
          </div>

          <div className="footer-sectors-col">
            <h4 className="footer-col-title">Services</h4>
            <div className="footer-links-list">
              <a href="#services">Complete Home Interiors</a>
              <a href="#services">Modular Kitchens</a>
              <a href="#services">Master Bedrooms</a>
              <a href="#services">Living Room Design</a>
              <a href="#services">Renovation &amp; Remodeling</a>
            </div>
          </div>

          <div className="footer-connect-col">
            <h4 className="footer-col-title">Contact &amp; Social</h4>
            <div className="footer-links-list">
              <a href="mailto:hello@auratects.in">hello@auratects.in</a>
              <a href="tel:+919886054321">+91 98860 54321</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-copyright">
            <span>&copy; {new Date().getFullYear()} AurAtects. All rights reserved.</span>
            <span className="footer-principal-tag">Principal Architect: Ar. Amulya Kattimani</span>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
