import React, { useRef, useState } from 'react';
import { useOrchidBackground } from '../hooks/useOrchidBackground';
import { portfolioItems } from '../data/projects';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import PublicationsSection from './PublicationsSection';
import ProjectsSection from './ProjectsSection';
import ProjectModal from './ProjectModal';

export default function OrchidPortfolio() {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useOrchidBackground(containerRef);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'auto' }}>
      {/* WebGL background */}
      <div
        ref={containerRef}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, color: 'black' }}>
        {selectedProject && (
          <ProjectModal
            selectedProject={selectedProject}
            portfolioItems={portfolioItems}
            onClose={() => setSelectedProject(null)}
            onSelect={setSelectedProject}
          />
        )}

        <Navbar scrollToSection={scrollToSection} />
        <HeroSection />
        <PublicationsSection />
        <ProjectsSection
          portfolioItems={portfolioItems}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          onSelectProject={setSelectedProject}
        />
      </div>
    </div>
  );
}
