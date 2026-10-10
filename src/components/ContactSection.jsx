import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactSection({ prefillSector }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential Interior',
    location: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillSector) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefillSector.includes('Hospitality')
          ? 'Hospitality / Resort'
          : prefillSector.includes('Commercial')
          ? 'Commercial Workspace'
          : prefillSector.includes('Residential')
          ? 'Residential Interior'
          : prefillSector.includes('PEB')
          ? 'PEB & Structural Architecture'
          : 'Bespoke Villa',
      }));
    }
  }, [prefillSector]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`AurAtects Architecture Enquiry — ${formData.projectType} [${formData.name}]`);
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Project Discipline: ${formData.projectType}\n` +
      `Location: ${formData.location}\n\n` +
      `Project Overview / Notes:\n${formData.message}`
    );

    // Provide seamless mailto action
    window.location.href = `mailto:hello@auratects.in?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        {/* Editorial Heading */}
        <div className="contact-head">
          <span className="section-eyebrow">BEGIN A COMMISSION</span>
          <h2 className="contact-main-title">
            Let’s create exceptional environments that <em>inspire &amp; endure.</em>
          </h2>
          <p className="contact-lead">
            We welcome inquiries for residential, commercial, and hospitality projects.
            Share your vision, spatial scale, and timeline with our studio.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Studio Channels */}
          <div className="contact-info-col">
            <div className="studio-info-card">
              <h3 className="studio-info-heading">Studio Coordinates</h3>

              <div className="info-item">
                <span className="info-icon"><MapPin size={16} /></span>
                <div>
                  <h4 className="info-title">Studio Location</h4>
                  <p className="info-detail">Bengaluru, Karnataka, India</p>
                  <p className="info-sub">Global commissions accepted (India · Canada · Caribbean)</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon"><Mail size={16} /></span>
                <div>
                  <h4 className="info-title">Direct Enquiries</h4>
                  <a href="mailto:hello@auratects.in" className="info-link">hello@auratects.in</a>
                  <p className="info-sub">Responses within 24 business hours</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon"><Phone size={16} /></span>
                <div>
                  <h4 className="info-title">Studio Advisory</h4>
                  <a href="tel:+918000000000" className="info-link">+91 98860 54321</a>
                  <p className="info-sub">Mon – Sat, 10:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon"><Clock size={16} /></span>
                <div>
                  <h4 className="info-title">Consultation Mode</h4>
                  <p className="info-detail">In-Person Studio Review or Global Video Sessions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Enquiry Form */}
          <div className="contact-form-col">
            <div className="form-card">
              <h3 className="form-card-title">Project Enquiry Form</h3>
              <p className="form-card-sub">Please fill in key details to schedule an initial concept discussion.</p>

              <form className="architectural-form" onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <div className="input-group">
                    <label htmlFor="client-name">Your Full Name *</label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Aranya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="client-email">Email Address *</label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="input-group">
                    <label htmlFor="client-phone">Phone / WhatsApp *</label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="project-type">Project Discipline</label>
                    <select
                      id="project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    >
                      <option value="Residential Interior">Residential Interior (Apartment / Penthouse)</option>
                      <option value="Bespoke Villa Architecture">Bespoke Villa &amp; Architecture</option>
                      <option value="Hospitality / Resort">Hospitality / Resort / Lounge</option>
                      <option value="Commercial Workspace">Commercial / Creative Workplace</option>
                      <option value="PEB & Structural Architecture">PEB &amp; Structural Architecture</option>
                      <option value="Renovation & Remodeling">Renovation &amp; Remodeling</option>
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="project-location">Project Location (City / Region)</label>
                  <input
                    id="project-location"
                    type="text"
                    placeholder="e.g. Indiranagar, Bengaluru / International"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="project-message">Brief Project Vision &amp; Spatial Requirements</label>
                  <textarea
                    id="project-message"
                    rows="3"
                    placeholder="Tell us about the site, area, design preferences, and estimated timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>Submit Project Inquiry</span>
                  <ArrowRight size={15} />
                </button>

                {submitted && (
                  <div className="form-success-banner">
                    <CheckCircle2 size={16} className="success-icon" />
                    <span>Thank you. Opening your email app to transmit your inquiry to AurAtects.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
