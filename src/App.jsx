import { useState, useEffect } from 'react';
import IntroLoader from './components/IntroLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteriorCategories from './components/InteriorCategories';
import DynamicPortfolio from './components/DynamicPortfolio';
import ProjectDetailModal from './components/ProjectDetailModal';
import DesignServices from './components/DesignServices';
import AboutStudio from './components/AboutStudio';
import EnquirySection from './components/EnquirySection';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('auratects_theme') || 'light';
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [portfolioFilter, setPortfolioFilter] = useState('All');
  const [prefillSubject, setPrefillSubject] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('auratects_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const scrollToSection = (targetId) => {
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryFilterKey) => {
    setPortfolioFilter(categoryFilterKey);
    scrollToSection('#projects');
  };

  const handleEnquireService = (serviceName) => {
    setPrefillSubject(`Service: ${serviceName}`);
    scrollToSection('#contact');
  };

  const handleEnquireProject = (projectTitle) => {
    setPrefillSubject(`Project Inspiration: ${projectTitle}`);
    scrollToSection('#contact');
  };

  return (
    <div className="site-wrapper">
      {/* Quick skippable brand entrance */}
      <IntroLoader />

      {/* Navigation */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        {/* 1. Hero Section with Real Architectural Photography */}
        <Hero onExploreClick={scrollToSection} />

        {/* 2. Customer-Focused Interior Categories ("Find Your Kind of Space") */}
        <InteriorCategories onSelectCategory={handleCategorySelect} />

        {/* 3. Dynamic Visual Portfolio ("Designed to Be Experienced") */}
        <DynamicPortfolio
          activeFilter={portfolioFilter}
          onFilterChange={setPortfolioFilter}
          onSelectProject={setSelectedProject}
        />

        {/* 4. Interior Design Services */}
        <DesignServices onEnquireService={handleEnquireService} />

        {/* 5. About AurAtects & Founder Note */}
        <AboutStudio onContactClick={() => scrollToSection('#contact')} />

        {/* 6. Start Your Interior Project (Enquiry Section) */}
        <EnquirySection prefillSubject={prefillSubject} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onEnquireProject={handleEnquireProject}
        />
      )}
    </div>
  );
}
