import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Compass, Image as ImageIcon } from 'lucide-react';
import { projectsData } from '../data/projectsData';
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

const categories = ['All', 'Residential', 'Hospitality', 'Commercial', 'Villas', 'PEB'];

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

export default function SelectedWorks({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('vectors'); // 'vectors' | 'photos'

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="works-section" id="works">
      <div className="section-container">
        {/* Section Header */}
        <div className="works-header">
          <div className="works-header-left">
            <span className="section-eyebrow">ARCHITECTURAL PORTFOLIO</span>
            <h2 className="section-title">
              Selected <em>Compositions</em>
            </h2>
            <p className="section-lead">
              An asymmetric editorial collection of built works, isometric studies, and section drawings
              across residential sanctuaries, hospitality escapes, and modern workplaces.
            </p>
          </div>

          <div className="works-controls-wrap">
            {/* View Mode Switcher: Blueprint Drawings vs Photography */}
            <div className="view-mode-toggle">
              <button
                type="button"
                className={`mode-btn ${viewMode === 'vectors' ? 'mode-active' : ''}`}
                onClick={() => setViewMode('vectors')}
                aria-label="View Vector Architectural Blueprints"
              >
                <Compass size={14} />
                <span>Vector Studies</span>
              </button>
              <button
                type="button"
                className={`mode-btn ${viewMode === 'photos' ? 'mode-active' : ''}`}
                onClick={() => setViewMode('photos')}
                aria-label="View Photography"
              >
                <ImageIcon size={14} />
                <span>Photography</span>
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="category-filter-bar">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`filter-pill ${isActive ? 'filter-pill-active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={isActive}
                  >
                    <span>{cat}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activePillIndicator"
                        className="pill-active-bg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Asymmetrical Architectural Portfolio Grid */}
        <motion.div layout className="asymmetric-project-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const aspectClass = `aspect-${project.aspect.replace('/', '-')}`;
              const spanClass = `grid-${project.gridSpan}`;
              const VectorComponent = vectorMap[project.id] || SkylinePenthouseVector;

              return (
                <motion.article
                  layout
                  key={project.id}
                  className={`project-card ${spanClass}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.55, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onSelectProject(project)}
                >
                  <div className={`project-image-box ${aspectClass}`}>
                    {viewMode === 'vectors' ? (
                      <div className="project-vector-container">
                        <VectorComponent />
                      </div>
                    ) : (
                      <>
                        <img
                          src={project.thumbnail}
                          alt={project.name}
                          className="project-img"
                          loading="lazy"
                        />
                        <div className="project-curtain-overlay" />
                      </>
                    )}

                    {/* Top Badges */}
                    <div className="project-top-meta">
                      <span className="project-index-num">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="project-category-tag">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Trigger Action */}
                    <div className="project-hover-action">
                      <span className="action-text">Inspect Etude</span>
                      <span className="action-icon">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Project Details Caption */}
                  <div className="project-caption-bar">
                    <div className="caption-text-block">
                      <h3 className="project-heading">{project.name}</h3>
                      <p className="project-location-meta">
                        <span>{project.location}</span>
                        <span className="meta-separator">/</span>
                        <span>{project.year}</span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="project-view-btn"
                      aria-label={`View details of ${project.name}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                    >
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
