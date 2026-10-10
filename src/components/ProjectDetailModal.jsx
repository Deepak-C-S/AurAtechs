import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MapPin, Layers, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose, onEnquireProject }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const currentGallery = project.gallery || [project.thumbnail];

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-container"
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 25 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="modal-header">
            <div className="modal-header-meta">
              <span className="modal-cat-badge">{project.category}</span>
              <span className="modal-location">
                <MapPin size={13} /> {project.location}
              </span>
            </div>

            <div className="modal-header-actions">
              <button
                type="button"
                className="modal-close-btn"
                onClick={onClose}
                aria-label="Close Project Detail Modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="modal-body-scroll">
            {/* Title & Specs */}
            <div className="modal-title-area">
              <h2 className="modal-project-title">{project.title}</h2>
              <div className="modal-specs-grid">
                <div className="spec-item">
                  <span className="spec-label">SPACE TYPE</span>
                  <span className="spec-value">{project.roomType}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">SPATIAL SCALE</span>
                  <span className="spec-value">{project.area}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">LOCATION</span>
                  <span className="spec-value">{project.location}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">STUDIO SCOPE</span>
                  <span className="spec-value">Design, Joinery &amp; Styling</span>
                </div>
              </div>
            </div>

            {/* Real Interior Photography Showcase */}
            <div className="modal-visual-showcase">
              <div className="modal-gallery-showcase">
                <div className="modal-featured-image-box">
                  <img
                    src={currentGallery[activeImgIndex]}
                    alt={`${project.title} photograph ${activeImgIndex + 1}`}
                    className="modal-active-img"
                  />
                </div>

                {currentGallery.length > 1 && (
                  <div className="modal-thumbs-row">
                    {currentGallery.map((img, idx) => (
                      <button
                        key={img}
                        type="button"
                        className={`modal-thumb-btn ${activeImgIndex === idx ? 'thumb-active' : ''}`}
                        onClick={() => setActiveImgIndex(idx)}
                        aria-label={`View photograph ${idx + 1}`}
                      >
                        <img src={img} alt={`Space angle ${idx + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Material Palette & Finishes */}
            {project.materials && project.materials.length > 0 && (
              <div className="modal-materials-block">
                <span className="materials-title">CURATED FINISHES &amp; MATERIALITY</span>
                <div className="materials-pills-row">
                  {project.materials.map((mat) => (
                    <span key={mat} className="material-pill">
                      <CheckCircle2 size={12} className="mat-icon" />
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Story & Philosophy */}
            <div className="modal-narrative-section">
              <div className="narrative-left">
                <h3 className="narrative-subtitle">Design Concept &amp; Atmosphere</h3>
                <p className="narrative-text">{project.description}</p>
              </div>

              <div className="narrative-right">
                <div className="modal-cta-box">
                  <p className="cta-box-text">
                    Love this design aesthetic? Let’s create something tailored for your home.
                  </p>
                  <button
                    type="button"
                    className="modal-enquire-btn"
                    onClick={() => {
                      onClose();
                      onEnquireProject(project.title);
                    }}
                  >
                    <span>Request Quote for this Style</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
