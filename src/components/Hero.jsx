import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin, Layers } from 'lucide-react';

const heroFeaturedSpaces = [
  {
    id: 'living',
    name: 'The Sunlit Pavilion',
    room: 'Curated Living Room',
    location: 'Indiranagar, Bengaluru',
    coordinates: '12.97° N, 77.59° E',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    tag: 'Bespoke Oak Millwork'
  },
  {
    id: 'bedroom',
    name: 'Quiet Master Sanctuary',
    room: 'Master Bedroom Suite',
    location: 'Whitefield, Bengaluru',
    coordinates: '12.96° N, 77.74° E',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
    tag: 'Limewash & Indirect Light'
  },
  {
    id: 'kitchen',
    name: 'Artisan Culinary Atelier',
    room: 'Modular Kitchen & Bar',
    location: 'Koramangala, Bengaluru',
    coordinates: '12.93° N, 77.62° E',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    tag: 'Quartz Island & Oak Units'
  },
  {
    id: 'penthouse',
    name: 'The Olive Penthouse',
    room: 'Duplex Living & Lounge',
    location: 'Lavelle Road, Bengaluru',
    coordinates: '12.97° N, 77.60° E',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    tag: 'Double-Height Glazing'
  }
];

export default function Hero({ onExploreClick }) {
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);
  const activeSpace = heroFeaturedSpaces[activeSpaceIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="hero-section" id="hero">
      <div className="section-container">
        <div className="hero-split-grid">
          {/* Left Column: Expressive Typography & Studio Introduction */}
          <motion.div
            className="hero-text-col"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="hero-meta-badge">
              <span className="meta-dot" />
              <span className="meta-text">CONTEMPORARY INTERIOR DESIGN STUDIO</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title">
              <span className="hero-title-line">Spaces That</span>
              <span className="hero-title-line italic-accent">Feel Like</span>
              <span className="hero-title-line">You.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-narrative">
              Thoughtfully designed interiors for the way you live, work, and feel. Led by Ar. Amulya Kattimani,
              we bring warm textures, natural light, and bespoke functional joinery into your home.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-actions-row">
              <a
                href="#interiors"
                className="hero-primary-cta"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreClick?.('#interiors');
                }}
              >
                <span>Discover Your Interior Style</span>
                <span className="cta-arrow-box">
                  <ArrowDown size={14} strokeWidth={2} />
                </span>
              </a>

              <a
                href="#projects"
                className="hero-secondary-link"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreClick?.('#projects');
                }}
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight size={13} strokeWidth={1.5} />
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-features-bar">
              <span className="hero-pill">Bespoke Millwork</span>
              <span className="hero-pill">Lighting Curation</span>
              <span className="hero-pill">Turnkey Handover</span>
              <span className="hero-pill">Bengaluru &amp; Global</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Real Luxury Interior Photography (Contained with Margins) */}
          <motion.div
            className="hero-image-col"
            initial={{ opacity: 0, scale: 0.97, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="hero-photo-frame">
              {/* Media Container */}
              <div className="hero-real-image-box">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSpace.id}
                    className="hero-img-wrap"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img
                      src={activeSpace.image}
                      alt={`${activeSpace.name} - ${activeSpace.room} by AurAtects`}
                      className="hero-real-img"
                      loading="eager"
                    />
                    <div className="hero-real-shade" />
                  </motion.div>
                </AnimatePresence>

                {/* Real Space Tag */}
                <div className="hero-space-tag">
                  <span className="space-tag-dot" />
                  <span>{activeSpace.tag}</span>
                </div>
              </div>

              {/* Space Switcher Tabs */}
              <div className="hero-space-tabs-bar">
                {heroFeaturedSpaces.map((space, idx) => (
                  <button
                    key={space.id}
                    type="button"
                    className={`hero-space-btn ${activeSpaceIndex === idx ? 'space-btn-active' : ''}`}
                    onClick={() => setActiveSpaceIndex(idx)}
                    aria-label={`Show ${space.name}`}
                  >
                    <span className="space-btn-num">0{idx + 1}</span>
                    <span className="space-btn-title">{space.name.split(' ')[1] || space.name}</span>
                  </button>
                ))}
              </div>

              {/* Caption */}
              <div className="hero-vector-caption">
                <div className="caption-left">
                  <span className="caption-label">{activeSpace.name.toUpperCase()}</span>
                  <span className="caption-meta">{activeSpace.room.toUpperCase()} · {activeSpace.location.toUpperCase()}</span>
                </div>
                <span className="caption-coord">[ {activeSpace.coordinates} ]</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
