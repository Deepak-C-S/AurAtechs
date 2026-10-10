import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Interiors', href: '#interiors' },
    { label: 'Our Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#hero" className="brand-link" aria-label="AurAtects Home">
            <img
              src="/auratects-logo.png"
              alt="AurAtects Leaf Logo"
              className="brand-logo-img"
            />
            <div clFassName="brand-text-wrap">
              <span className="brand-name">AurAtects</span>
              <span className="brand-studio">INTERIOR DESIGN STUDIO</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-right">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ y: -8, opacity: 0, rotate: -30 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 8, opacity: 0, rotate: 30 }}
                  transition={{ duration: 0.2 }}
                  className="theme-icon-wrap"
                >
                  {theme === 'light' ? <Moon size={15} strokeWidth={1.75} /> : <Sun size={15} strokeWidth={1.75} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href="#contact"
              className="quote-pill-btn desktop-only"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
            >
              <span>Get a Quote</span>
              <ArrowUpRight size={13} strokeWidth={2} />
            </a>

            <button
              type="button"
              className="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-drawer-inner">
              <div className="mobile-drawer-links">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="mobile-nav-item"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.08 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    <span className="mobile-nav-num">0{idx + 1}</span>
                    <span className="mobile-nav-title">{item.label}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mobile-drawer-footer">
                <a
                  href="#contact"
                  className="mobile-quote-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                >
                  <span>Get a Free Quote</span>
                  <ArrowUpRight size={15} />
                </a>

                <div className="mobile-theme-row">
                  <span>Theme: {theme === 'light' ? 'Warm Ivory' : 'Deep Charcoal'}</span>
                  <button
                    type="button"
                    className="theme-toggle-btn"
                    onClick={onToggleTheme}
                    aria-label="Toggle Theme"
                  >
                    {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
