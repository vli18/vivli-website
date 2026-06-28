import React from 'react';
import './Navbar.css';

const navStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  padding: '0.65rem 2rem',
  background: 'rgba(0, 0, 0, 0.92)',
  backdropFilter: 'blur(12px)',
  borderBottom: '1px solid rgba(255,255,255,0.07)',
  boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
};

const navButtonStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  fontSize: '1rem',
  opacity: 0.85,
  transition: 'opacity 0.2s',
};

export default function Navbar({ scrollToSection }) {
  return (
    <nav style={navStyle}>
      <div className="nav-dither" aria-hidden="true">
        <div className="nav-dither-band band-1" />
        <div className="nav-dither-band band-2" />
        <div className="nav-dither-band band-3" />
        <div className="nav-dither-band band-4" />
      </div>

      <div className="font-argent-normal" style={{ fontSize: '1.3rem', fontWeight: '400', color: 'white' }}>
        vivian li
      </div>

      <div className="nav-decorative" />

      <div className="nav-links">
        <button
          className="font-argent-normal"
          onClick={() => scrollToSection('about')}
          style={navButtonStyle}
          onMouseEnter={(e) => (e.target.style.opacity = 1)}
          onMouseLeave={(e) => (e.target.style.opacity = 0.8)}
        >
          About
        </button>
        <button
          className="font-argent-normal"
          onClick={() => scrollToSection('publications')}
          style={navButtonStyle}
          onMouseEnter={(e) => (e.target.style.opacity = 1)}
          onMouseLeave={(e) => (e.target.style.opacity = 0.8)}
        >
          Publications
        </button>
        <button
          className="font-argent-normal"
          onClick={() => scrollToSection('portfolio')}
          style={navButtonStyle}
          onMouseEnter={(e) => (e.target.style.opacity = 1)}
          onMouseLeave={(e) => (e.target.style.opacity = 0.8)}
        >
          Projects
        </button>
        <button className="font-argent-normal" style={{ ...navButtonStyle, cursor: 'default', opacity: 0.4 }}>CV</button>
      </div>
    </nav>
  );
}
