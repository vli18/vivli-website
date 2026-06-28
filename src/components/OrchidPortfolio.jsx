import React, { useRef, useState, useEffect } from 'react';
import { useOrchidBackground } from '../hooks/useOrchidBackground';
import { portfolioItems } from '../data/projects';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import PublicationsSection from './PublicationsSection';
import ProjectsSection from './ProjectsSection';
import ProjectModal from './ProjectModal';

function slugify(title) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function findBySlug(slug) {
  return portfolioItems.find((p) => slugify(p.title) === slug) ?? null;
}

export default function OrchidPortfolio() {
  const containerRef = useRef(null);
  const bgPausedRef = useRef(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useOrchidBackground(containerRef, bgPausedRef);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Sync modal state from URL hash on mount and on popstate (back/forward).
  useEffect(() => {
    const syncFromHash = () => {
      const slug = window.location.hash.slice(1);
      const project = slug ? findBySlug(slug) : null;
      bgPausedRef.current = !!project;
      setSelectedProject(project);
    };

    syncFromHash();
    window.addEventListener('popstate', syncFromHash);
    return () => window.removeEventListener('popstate', syncFromHash);
  }, []);

  const openProject = (project) => {
    bgPausedRef.current = true;
    setSelectedProject(project);
    window.history.pushState({ projectId: project.id }, '', `#${slugify(project.title)}`);
  };

  const closeProject = () => {
    bgPausedRef.current = false;
    setSelectedProject(null);
    window.history.pushState(null, '', window.location.pathname);
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
            onClose={closeProject}
            onSelect={openProject}
          />
        )}

        <Navbar scrollToSection={scrollToSection} />
        <HeroSection />
        <PublicationsSection />
        <ProjectsSection
          portfolioItems={portfolioItems}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          onSelectProject={openProject}
        />
      </div>
    </div>
  );
}
