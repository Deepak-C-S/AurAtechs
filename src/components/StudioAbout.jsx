import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import StudioBlueprintVector from './vectors/StudioBlueprintVector';

export default function StudioAbout({ onContactClick }) {
  return (
    <section className="about-section" id="studio">
      <div className="section-container">
        <div className="about-grid">
          {/* Left Column: Technical Architectural Blueprint Section Drawing */}
          <div className="about-image-col">
            <div className="about-blueprint-frame">
              <StudioBlueprintVector />
            </div>
            <div className="about-image-caption">
              <span className="caption-principal">Ar. Amulya Kattimani</span>
              <span className="caption-role">FOUNDER &amp; PRINCIPAL ARCHITECT — AURATECTS</span>
            </div>
          </div>

          {/* Right Column: Editorial Typography & Studio Narrative */}
          <div className="about-text-col">
            <span className="section-eyebrow">STUDIO PHILOSOPHY</span>

            <h2 className="about-headline">
              &ldquo;Architecture reduced to its <em>essence</em> — where function, material, and emotion converge.&rdquo;
            </h2>

            <div className="about-body-paragraphs">
              <p>
                AurAtects is an architectural and interior design studio committed to crafting
                thoughtful, context-responsive spaces. We believe that true luxury lies in restraint,
                material honesty, and the precise orchestration of natural light.
              </p>
              <p>
                With commissions spanning Karnataka, pan-India, and international projects in Canada
                and the Caribbean, our practice delivers personalized solutions across bespoke villas,
                luxury residential interiors, hospitality retreats, and commercial workplaces.
              </p>
            </div>

            <div className="about-pillars-grid">
              <div className="pillar-item">
                <span className="pillar-num">01</span>
                <h4 className="pillar-title">Material Honesty</h4>
                <p className="pillar-desc">Raw stone, warm timber, textured lime plaster, and authentic patinas.</p>
              </div>
              <div className="pillar-item">
                <span className="pillar-num">02</span>
                <h4 className="pillar-title">Spatial Clarity</h4>
                <p className="pillar-desc">Uncluttered proportions, intentional sightlines, and generous daylight.</p>
              </div>
              <div className="pillar-item">
                <span className="pillar-num">03</span>
                <h4 className="pillar-title">Turnkey Precision</h4>
                <p className="pillar-desc">Seamless execution from structural concept to custom furniture handover.</p>
              </div>
            </div>

            <div className="about-cta-row">
              <button
                type="button"
                className="about-inquiry-btn"
                onClick={onContactClick}
              >
                <span>Initiate a Project Dialogue</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
