import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioProjectsData } from '../data/interiorData';

const filterTabs = ['All', 'Living Spaces', 'Bedrooms', 'Kitchens', 'Complete Homes'];

export default function DynamicPortfolio({
  activeFilter = 'All',
  onFilterChange,
  onSelectProject,
}) {
  const [currentTab, setCurrentTab] = useState(activeFilter);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    onFilterChange?.(tab);
  };

  const filteredProjects = currentTab === 'All'
    ? portfolioProjectsData
    : portfolioProjectsData.filter((p) => p.category.toLowerCase() === currentTab.toLowerCase());

  return (
    <section className="portfolio-section" id="projects">
      <div className="section-container">
        {/* Section Header */}
        <div className="portfolio-header">
          <div className="portfolio-header-left">
            <span className="section-eyebrow">SELECTED PORTFOLIO</span>
            <h2 className="section-title">
              Designed to Be <em>Experienced</em>
            </h2>
            <p className="section-lead">
              A curated portfolio of completed homes, bespoke spaces, and architectural details
              crafted with authentic materials and emotional clarity.
            </p>
          </div>

          {/* Filter Navigation Tabs */}
          <div className="portfolio-filter-tabs">
            {filterTabs.map((tab) => {
              const isActive = currentTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  className={`port-tab-btn ${isActive ? 'port-tab-active' : ''}`}
                  onClick={() => handleTabClick(tab)}
                  aria-pressed={isActive}
                >
                  <span>{tab}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activePortTab"
                      className="port-tab-active-bg"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <motion.div layout className="editorial-portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const aspectClass = `aspect-${project.aspect.replace('/', '-')}`;
              const spanClass = `grid-${project.gridSpan}`;

              return (
                <motion.article
                  layout
                  key={project.id}
                  className={`editorial-card ${spanClass}`}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onSelectProject(project)}
                >
                  <div className={`editorial-image-frame ${aspectClass}`}>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="editorial-img"
                      loading="lazy"
                    />

                    <div className="editorial-card-shade" />

                    {/* Top Badges */}
                    <div className="editorial-top-tags">
                      <span className="editorial-room-type">{project.roomType}</span>
                    </div>

                    {/* Hover Action Pill */}
                    <div className="editorial-hover-pill">
                      <span>View Interior Details</span>
                      <ArrowUpRight size={13} />
                    </div>
                  </div>

                  {/* Caption Bar */}
                  <div className="editorial-card-caption">
                    <div className="caption-main">
                      <h3 className="editorial-title">{project.title}</h3>
                      <p className="editorial-meta">
                        <span>{project.location}</span>
                        <span className="meta-dot-sep">•</span>
                        <span>{project.area}</span>
                      </p>
                      <p className="editorial-snippet">{project.description}</p>
                    </div>

                    <button
                      type="button"
                      className="editorial-arrow-btn"
                      aria-label={`Open details for ${project.title}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                    >
                      <ArrowUpRight size={16} />
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
