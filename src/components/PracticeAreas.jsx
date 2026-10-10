import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { practiceAreasData } from '../data/projectsData';
import {
  HospitalityPracticeVector,
  CommercialPracticeVector,
  ResidentialPracticeVector,
  InstitutionalPracticeVector,
  PEBPracticeVector,
} from './vectors/PracticeVectors';

const practiceVectorMap = {
  '01': HospitalityPracticeVector,
  '02': CommercialPracticeVector,
  '03': ResidentialPracticeVector,
  '04': InstitutionalPracticeVector,
  '05': PEBPracticeVector,
};

export default function PracticeAreas({ onEnquireSector }) {
  const [activePracticeIndex, setActivePracticeIndex] = useState(0);
  const activePractice = practiceAreasData[activePracticeIndex];
  const ActiveVector = practiceVectorMap[activePractice.number] || HospitalityPracticeVector;

  return (
    <section className="practice-section" id="practice">
      <div className="section-container">
        {/* Section Header */}
        <div className="practice-header">
          <div className="practice-header-left">
            <span className="section-eyebrow">PRACTICE DISCIPLINES</span>
            <h2 className="section-title">
              Practice <em>Areas</em>
            </h2>
          </div>
          <p className="section-lead">
            From intimate private sanctuaries to large-scale pre-engineered facilities, our studio
            provides holistic architectural design, interior masterplanning, and turnkey contracting.
          </p>
        </div>

        {/* Interactive Split Practice Display */}
        <div className="practice-split-layout">
          {/* Left Column: Clean Typographic Rows */}
          <div className="practice-list-col" role="list">
            {practiceAreasData.map((item, index) => {
              const isActive = activePracticeIndex === index;

              return (
                <div
                  key={item.number}
                  role="listitem"
                  className={`practice-row-item ${isActive ? 'practice-row-active' : ''}`}
                  onMouseEnter={() => setActivePracticeIndex(index)}
                  onClick={() => setActivePracticeIndex(index)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActivePracticeIndex(index);
                    }
                  }}
                >
                  <div className="practice-row-main">
                    <span className="practice-num">{item.number}</span>
                    <div className="practice-name-wrap">
                      <h3 className="practice-title">{item.title}</h3>
                      <span className="practice-tagline">{item.tagline}</span>
                    </div>
                  </div>

                  <div className="practice-row-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Architectural Vector Preview */}
          <div className="practice-preview-col">
            <div className="practice-preview-card">
              <div className="practice-preview-vector-box">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePractice.number}
                    className="practice-vector-container"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ActiveVector />
                  </motion.div>
                </AnimatePresence>
                <div className="practice-image-badge">
                  <span>DISCIPLINE {activePractice.number}</span>
                </div>
              </div>

              <div className="practice-preview-content">
                <div className="practice-preview-head">
                  <h4 className="preview-discipline-title">{activePractice.title}</h4>
                  <p className="preview-discipline-desc">{activePractice.description}</p>
                </div>

                <div className="preview-deliverables-list">
                  <span className="deliverables-heading">CORE CAPABILITIES:</span>
                  <div className="deliverables-tags">
                    {activePractice.deliverables.map((del) => (
                      <span key={del} className="deliverable-tag">
                        <CheckCircle2 size={11} className="del-icon" />
                        {del}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="practice-consult-btn"
                  onClick={() => onEnquireSector?.(activePractice.title)}
                >
                  <span>Consult on {activePractice.title}</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
