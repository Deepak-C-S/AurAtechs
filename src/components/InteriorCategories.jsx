import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { interiorCategoriesData } from '../data/interiorData';

export default function InteriorCategories({ onSelectCategory }) {
  return (
    <section className="categories-section" id="interiors">
      <div className="section-container">
        {/* Section Header */}
        <div className="categories-header">
          <div className="categories-header-left">
            <span className="section-eyebrow">ROOM INSPIRATIONS</span>
            <h2 className="section-title">
              Find Your <em>Kind of Space</em>
            </h2>
          </div>
          <p className="section-lead">
            Explore spaces tailored to the rituals of everyday living—from light-filled lounges to
            precision-engineered culinary ateliers.
          </p>
        </div>

        {/* 6 Room Category Cards Grid with Real Photography */}
        <div className="categories-grid">
          {interiorCategoriesData.map((category, index) => (
            <motion.div
              key={category.id}
              className="category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              onClick={() => onSelectCategory(category.filterKey)}
              tabIndex={0}
              role="button"
              aria-label={`Explore ${category.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectCategory(category.filterKey);
                }
              }}
            >
              {/* Real Interior Photography Frame */}
              <div className="category-photo-frame">
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-real-img"
                  loading="lazy"
                />
                <div className="category-shade-overlay" />

                <span className="category-num-tag">0{index + 1}</span>
                <div className="category-hover-arrow">
                  <ArrowUpRight size={15} />
                </div>
              </div>

              {/* Card Text Content */}
              <div className="category-card-body">
                <div className="category-title-row">
                  <h3 className="category-card-title">{category.title}</h3>
                </div>
                <p className="category-card-tagline">{category.tagline}</p>
                <p className="category-card-desc">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
