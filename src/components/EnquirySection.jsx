import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

export default function EnquirySection({ prefillSubject = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    spaceType: 'Full Home Interior',
    area: '',
    requirements: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillSubject) {
      setFormData((prev) => ({
        ...prev,
        requirements: `Interested in: ${prefillSubject}`,
      }));
    }
  }, [prefillSubject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`AurAtects Interior Project Enquiry — ${formData.spaceType} [${formData.name}]`);
    const body = encodeURIComponent(
      `Customer Name: ${formData.name}\n` +
      `Contact (Phone/Email): ${formData.contact}\n` +
      `Space Type: ${formData.spaceType}\n` +
      `Approximate Area: ${formData.area || 'Not specified'}\n\n` +
      `Design Requirements & Vision:\n${formData.requirements}`
    );

    // Direct mailto trigger
    window.location.href = `mailto:hello@auratects.in?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello AurAtects! I'd like to discuss an interior project.\nName: ${formData.name || 'Homeowner'}\nSpace: ${formData.spaceType}`
    );
    window.open(`https://wa.me/919886054321?text=${text}`, '_blank');
  };

  return (
    <section className="enquiry-section" id="contact">
      <div className="section-container">
        <div className="enquiry-card-wrapper">
          <div className="enquiry-grid">
            {/* Left Column: Studio Greeting & Channels */}
            <div className="enquiry-intro-col">
              <span className="section-eyebrow">START A CONVERSATION</span>
              <h2 className="enquiry-heading">
                Start Your <em>Interior Project</em>
              </h2>
              <p className="enquiry-subtext">
                Tell us about your home, apartment, or villa. We will review your spatial needs,
                provide initial layout ideas, and guide you through each step.
              </p>

              <div className="enquiry-channels-list">
                <div className="channel-item">
                  <div className="channel-icon"><Mail size={16} /></div>
                  <div>
                    <h4 className="channel-label">Email Enquiries</h4>
                    <a href="mailto:hello@auratects.in" className="channel-value">hello@auratects.in</a>
                  </div>
                </div>

                <div className="channel-item">
                  <div className="channel-icon"><Phone size={16} /></div>
                  <div>
                    <h4 className="channel-label">Studio Advisory</h4>
                    <a href="tel:+919886054321" className="channel-value">+91 98860 54321</a>
                  </div>
                </div>

                <div className="channel-item">
                  <div className="channel-icon"><MapPin size={16} /></div>
                  <div>
                    <h4 className="channel-label">Design Studio</h4>
                    <p className="channel-value">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>

              <div className="whatsapp-quick-box">
                <p className="wa-text">Prefer quick messaging?</p>
                <button
                  type="button"
                  className="whatsapp-btn"
                  onClick={handleWhatsApp}
                >
                  <MessageSquare size={15} />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right Column: Clean Customer Enquiry Form */}
            <div className="enquiry-form-col">
              <form className="customer-enquiry-form" onSubmit={handleSubmit}>
                <h3 className="form-inner-title">Tell Us About Your Space</h3>

                <div className="form-field">
                  <label htmlFor="client-name">Your Full Name *</label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    placeholder="e.g. Priya & Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="client-contact">Phone Number or Email *</label>
                  <input
                    id="client-contact"
                    type="text"
                    required
                    placeholder="+91 98765 43210 or your@email.com"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  />
                </div>

                <div className="form-row-split">
                  <div className="form-field">
                    <label htmlFor="space-type">Space Type</label>
                    <select
                      id="space-type"
                      value={formData.spaceType}
                      onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                    >
                      <option value="Full Home Interior">Full Home Interior (Complete)</option>
                      <option value="Modular Kitchen & Dining">Modular Kitchen &amp; Dining</option>
                      <option value="Master Bedroom Suite">Master Bedroom Suite</option>
                      <option value="Living Room Transformation">Living Room Transformation</option>
                      <option value="Luxury Villa Interior">Luxury Villa Interior</option>
                      <option value="Apartment / Flat Interior">Apartment / Flat Interior</option>
                      <option value="Home Office / Studio">Home Office / Studio</option>
                      <option value="Renovation & Remodeling">Renovation &amp; Remodeling</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="approx-area">Approx. Area (sq.ft)</label>
                    <input
                      id="approx-area"
                      type="text"
                      placeholder="e.g. 1,800 sq.ft / 3 BHK"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="design-requirements">Your Vision or Specific Requirements</label>
                  <textarea
                    id="design-requirements"
                    rows="3"
                    placeholder="Tell us your preferences (e.g., warm wood, neutral tones, modern storage needs)..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  />
                </div>

                <button type="submit" className="enquiry-submit-button">
                  <span>Send Enquiry to AurAtects</span>
                  <ArrowRight size={15} />
                </button>

                {submitted && (
                  <div className="form-status-alert">
                    <CheckCircle2 size={16} className="alert-icon" />
                    <span>Opening your email client to send this project enquiry to hello@auratects.in.</span>
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
