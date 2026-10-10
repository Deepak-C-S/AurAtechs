import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MapPin, Layers, Compass, Image as ImageIcon } from 'lucide-react';
import {
  SkylinePenthouseVector,
  LuminaVillaVector,
  AmberLoungeVector,
  UrbanOasisVector,
  CoastalPavilionVector,
  CourtyardHouseVector,
  ApexHubVector,
  VayuMonolithVector,
} from './vectors/ProjectVectors';

const vectorMap = {
  'skyline-residence': SkylinePenthouseVector,
  'lumina-villa': LuminaVillaVector,
  'amber-lounge': AmberLoungeVector,
  'urban-oasis': UrbanOasisVector,
  'coastal-retreat': CoastalPavilionVector,
  'courtyard-house': CourtyardHouseVector,
  'apex-innovation-center': ApexHubVector,
  'vayu-monolith-estate': VayuMonolithVector,
};

export default function ProjectModal({ project, onClose, onEnquireProject }) {
  const [activeTab, setActiveTab] = useState('drawing'); // 'drawing' | 'gallery'
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
  const VectorComponent = vectorMap[project.id] || SkylinePenthouseVector;

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
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.98 }}
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
              <div className="modal-tab-toggle">
                <button
                  type="button"
                  className={`modal-tab-btn ${activeTab === 'drawing' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('drawing')}
                >
                  <Compass size={13} />
                  <span>Blueprint</span>
                </button>
                <button
                  type="button"
                  className={`modal-tab-btn ${activeTab === 'gallery' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('gallery')}
                >
                  <ImageIcon size={13} />
                  <span>Photography</span>
                </button>
              </div>

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
            {/* Title Section */}
            <div className="modal-title-area">
              <h2 className="modal-project-title">{project.name}</h2>
              <div className="modal-specs-grid">
                <div className="spec-item">
                  <span className="spec-label">LOCATION</span>
                  <span className="spec-value">{project.location}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">SPATIAL SCALE</span>
                  <span className="spec-value">{project.area}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">YEAR</span>
                  <span className="spec-value">{project.year}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">DISCIPLINE</span>
                  <span className="spec-value">{project.scope}</span>
                </div>
              </div>
            </div>

            {/* Visual Showcase (Vector Blueprint or Photo Gallery) */}
            <div className="modal-visual-showcase">
              {activeTab === 'drawing' ? (
                <div className="modal-vector-box">
                  <VectorComponent />
                </div>
              ) : (
                <div className="modal-gallery-showcase">
                  <div className="modal-featured-image-box">
                    <img
                      src={currentGallery[activeImageIndex]}
                      alt={`${project.name} view ${activeImageIndex + 1}`}
                      className="modal-active-img"
                    />
                  </div>

                  {currentGallery.length > 1 && (
                    <div className="modal-thumbs-row">
                      {currentGallery.map((img, idx) => (
                        <button
                          key={img}
                          type="button"
                          className={`modal-thumb-btn ${activeImageIndex === idx ? 'thumb-active' : ''}`}
                          onClick={() => setActiveImageIndex(idx)}
                          aria-label={`View photo ${idx + 1}`}
                        >
                          <img src={img} alt={`Thumbnail ${idx + 1}`} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Architectural Narrative & Concept */}
            <div className="modal-narrative-section">
              <div className="narrative-left">
                <h3 className="narrative-subtitle">Architectural Statement &amp; Spatial Philosophy</h3>
                <p className="narrative-text">{project.description}</p>
              </div>

              <div className="narrative-right">
                <h4 className="materials-title">
                  <Layers size={14} /> Materiality &amp; Palette
                </h4>
                <div className="materials-tags-wrap">
                  {project.materials.map((mat) => (
                    <span key={mat} className="material-tag">
                      {mat}
                    </span>
                  ))}
                </div>

                <div className="modal-cta-box">
                  <p className="cta-box-text">
                    Envisioning a similar architectural commission with AurAtects?
                  </p>
                  <button
                    type="button"
                    className="modal-enquire-btn"
                    onClick={() => {
                      onClose();
                      onEnquireProject(project.name);
                    }}
                  >
                    <span>Initiate Project Consultation</span>
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
