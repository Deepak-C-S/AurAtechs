import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/interiorData';

export default function DesignServices({ onEnquireService }) {
  return (
    <section className="services-section" id="services">
      <div className="section-container">
        {/* Section Header */}
        <div className="services-header">
          <div className="services-header-left">
            <span className="section-eyebrow">WHAT WE DELIVER</span>
            <h2 className="section-title">
              Our Interior <em>Design Services</em>
            </h2>
          </div>
          <p className="section-lead">
            From single-room transformations to full turnkey homes, our studio provides cohesive
            interior architecture, custom joinery, and attentive project management.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.number}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => onEnquireService(service.title)}
              tabIndex={0}
              role="button"
              aria-label={`Inquire about ${service.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onEnquireService(service.title);
                }
              }}
            >
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <button type="button" className="service-arrow-btn" aria-label="Consult">
                  <ArrowUpRight size={15} />
                </button>
              </div>

              <div className="service-card-main">
                <h3 className="service-title">{service.title}</h3>
                <span className="service-tagline">{service.tagline}</span>
                <p className="service-desc">{service.description}</p>
              </div>

              <div className="service-card-bottom">
                <span className="service-action-link">
                  <span>Consult on this space</span>
                  <ArrowUpRight size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
