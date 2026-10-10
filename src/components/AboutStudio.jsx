import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import amulyaFounderImg from '../assets/amulya-founder.jpg';

export default function AboutStudio({ onContactClick }) {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="about-grid">
          {/* Left Column: Founder Portrait */}
          <motion.div
            className="about-image-col"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="founder-portrait-frame">
              <img
                src={amulyaFounderImg}
                alt="Ar. Amulya Kattimani — Principal Architect at AurAtects"
                className="founder-portrait-img"
                loading="lazy"
              />
              <div className="founder-portrait-shade" />
            </div>
            <div className="founder-caption-block">
              <h4 className="founder-name">Ar. Amulya Kattimani</h4>
              <p className="founder-role">FOUNDER &amp; PRINCIPAL ARCHITECT — AURATECTS</p>
            </div>
          </motion.div>

          {/* Right Column: Studio Story & Design Philosophy */}
          <motion.div
            className="about-text-col"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-eyebrow">ABOUT THE STUDIO</span>

            <h2 className="about-headline">
              &ldquo;Good design is not just seen.<br />
              <em>It is felt.</em>&rdquo;
            </h2>

            <div className="about-body-text">
              <p>
                AurAtects is an architectural and bespoke interior design studio led by Principal Architect
                Ar. Amulya Kattimani. Rooted in a philosophy of simplicity, functionality, and emotional depth,
                the studio treats every home as a balance between spatial clarity and personal human connection.
              </p>
              <p>
                Her approach emphasizes the natural honesty of materials, light, and thoughtful spatial flow.
                Meaningful interiors are achieved when spaces are reduced to their essence—where comfort, daily
                rituals, and architectural beauty unite effortlessly.
              </p>
              <p>
                Amulya leads bespoke residential, villa, and hospitality commissions across Karnataka, pan-India,
                and internationally, including projects in Canada and the Caribbean Islands.
              </p>
            </div>

            <div className="about-values-grid">
              <div className="value-item">
                <span className="value-index">01</span>
                <h4 className="value-title">Designed Around You</h4>
                <p className="value-desc">Your daily lifestyle, your aesthetic comfort, and your budget.</p>
              </div>
              <div className="value-item">
                <span className="value-index">02</span>
                <h4 className="value-title">Material Honesty</h4>
                <p className="value-desc">Warm hardwoods, tactile natural stone, woven textures, and soft light.</p>
              </div>
              <div className="value-item">
                <span className="value-index">03</span>
                <h4 className="value-title">Turnkey Peace of Mind</h4>
                <p className="value-desc">Transparent coordination from initial layout sketches to final styling.</p>
              </div>
            </div>

            <button
              type="button"
              className="about-cta-btn"
              onClick={onContactClick}
            >
              <span>Speak with Ar. Amulya Kattimani</span>
              <ArrowUpRight size={14} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
