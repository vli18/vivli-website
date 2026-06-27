import React from 'react';
import './ProjectsSection.css';

const FILTERS = ['All', 'Tech', 'Art'];

export default function ProjectsSection({ portfolioItems, activeFilter, setActiveFilter, onSelectProject }) {
  const filteredItems =
    activeFilter === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div id="portfolio" className="section-container">
      <h2
        className="font-argent-normal"
        style={{
          fontSize: '2rem',
          fontWeight: '300',
          marginTop: 0,
          marginBottom: '0.6rem',
          textAlign: 'center',
          textShadow: 'none',
        }}
      >
        projects
      </h2>

      {/* Filter buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              background: activeFilter === filter ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${activeFilter === filter ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.15)'}`,
              borderRadius: '20px',
              padding: '0.5rem 1.5rem',
              color: 'black',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: activeFilter === filter ? '500' : '300',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              if (activeFilter !== filter) {
                e.target.style.background = 'rgba(0, 0, 0, 0.05)';
                e.target.style.borderColor = 'rgba(0, 0, 0, 0.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== filter) {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'rgba(0, 0, 0, 0.15)';
              }
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectProject(item)}
            style={{
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
            }}
          >
            <div
              style={{
                width: '100%',
                height: '200px',
                background: 'rgba(0, 0, 0, 0.04)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {item.thumbnail ? (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1.0 }}
                />
              ) : (
                <span style={{ fontSize: '0.8rem', color: 'rgba(0, 0, 0, 0.3)' }}>Project Image</span>
              )}
            </div>

            <div style={{ padding: '1.5rem' }}>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}
              >
                <h3 style={{ fontSize: '1.0rem', fontWeight: '400', margin: 0 }}>{item.title}</h3>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'rgba(0, 0, 0, 0.45)',
                    background: 'rgba(0, 0, 0, 0.07)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                  }}
                >
                  {item.category}
                </span>
              </div>
              <p style={{ fontSize: '0.8rem', fontWeight: 300, color: 'rgba(0, 0, 0, 0.6)', margin: 0 }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
