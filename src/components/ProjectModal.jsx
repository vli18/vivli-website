import React, { useRef, useEffect } from 'react';
import './ProjectModal.css';

const pillStyles = [
  { label: null,       bg: 'rgba(0,0,0,0.06)',       border: 'rgba(0,0,0,0.1)',       color: 'rgba(0,0,0,0.55)' },
  { label: 'Role',     bg: 'rgba(120,80,200,0.07)',   border: 'rgba(120,80,200,0.2)',   color: 'rgba(90,50,170,0.8)' },
  { label: 'Mediums',  bg: 'rgba(40,160,140,0.07)',   border: 'rgba(40,160,140,0.2)',   color: 'rgba(20,120,105,0.85)' },
];

function GalleryItem({ image, projectTitle }) {
  if (image.type === 'iframe') {
    return (
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, background: 'rgba(0,0,0,0.03)' }}>
        <iframe
          src={image.src}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          loading="lazy"
          allow="fullscreen"
        />
      </div>
    );
  }

  if (image.type === 'video-row') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
        {image.items.map((src, i) => (
          <video
            key={i}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px', objectFit: 'cover' }}
          />
        ))}
      </div>
    );
  }

  if (image.type === 'video') {
    const autoplay = !!image.autoplay;
    return (
      <video
        src={image.src}
        autoPlay={autoplay}
        loop={autoplay}
        muted={autoplay}
        controls={!autoplay}
        playsInline
        preload={autoplay ? 'auto' : 'metadata'}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'cover',
          pointerEvents: autoplay ? 'none' : 'auto',
        }}
      />
    );
  }

  if (image.src) {
    return (
      <img
        src={image.src}
        alt={projectTitle}
        loading="lazy"
        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
      />
    );
  }

  return null;
}

export default function ProjectModal({ selectedProject, portfolioItems, onClose, onSelect }) {
  const thumbnailRefs = useRef({});

  useEffect(() => {
    const el = thumbnailRefs.current[selectedProject.id];
    if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [selectedProject.id]);

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-inner">
        {/* Thumbnail nav strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 0.75rem',
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
            overflowX: 'auto',
            flexShrink: 0,
            background: 'white',
          }}
        >
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              ref={(el) => { thumbnailRefs.current[item.id] = el; }}
              onClick={() => onSelect(item)}
              title={item.title}
              style={{
                width: '72px',
                height: '48px',
                borderRadius: '5px',
                overflow: 'hidden',
                cursor: 'pointer',
                flexShrink: 0,
                border: selectedProject.id === item.id ? '2px solid rgba(0,0,0,0.7)' : '2px solid transparent',
                opacity: selectedProject.id === item.id ? 1 : 0.45,
                transition: 'opacity 0.15s, border-color 0.15s',
              }}
              onMouseEnter={(e) => { if (selectedProject.id !== item.id) e.currentTarget.style.opacity = 0.75; }}
              onMouseLeave={(e) => { if (selectedProject.id !== item.id) e.currentTarget.style.opacity = 0.45; }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}

          <button
            onClick={onClose}
            className="modal-close-btn"
            style={{
              marginLeft: 'auto',
              flexShrink: 0,
              background: 'none',
              border: '1px solid rgba(0,0,0,0.15)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              cursor: 'pointer',
              fontSize: '1.2rem',
              color: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.06)'; e.currentTarget.style.color = 'black'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'rgba(0,0,0,0.5)'; }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <line x1="1" y1="1" x2="11" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="11" y1="1" x2="1" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div style={{ overflowY: 'auto', flex: 1 }}>
          {/* Header */}
          <div style={{ padding: '1.25rem 1.75rem 0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <h2
                className="font-argent-normal"
                style={{ fontSize: '1.7rem', fontWeight: '300', margin: 0, textShadow: 'none' }}
              >
                {selectedProject.title}
              </h2>
              <span style={{ fontSize: '0.75rem', color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {selectedProject.category}
              </span>
            </div>

            {/* Metadata pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.9rem' }}>
              {[
                { ...pillStyles[0], val: selectedProject.details.year },
                { ...pillStyles[1], label: selectedProject.details.roleLabel ?? 'Role', val: selectedProject.details.role },
                { ...pillStyles[2], label: selectedProject.details.mediumsLabel ?? 'Mediums', val: selectedProject.details.mediums },
              ].map(({ label, val, bg, border, color }) => (
                <span
                  key={label ?? 'year'}
                  style={{
                    fontSize: '0.82rem',
                    color,
                    background: bg,
                    border: `1px solid ${border}`,
                    borderRadius: '20px',
                    padding: '0.28rem 0.85rem',
                  }}
                >
                  {label && <span style={{ fontWeight: 600, marginRight: '0.3rem' }}>{label}:</span>}
                  {val}
                </span>
              ))}
            </div>

            <p
              style={{
                fontSize: '0.9rem',
                fontWeight: 300,
                color: 'rgba(0, 0, 0, 0.65)',
                lineHeight: '1.6',
                whiteSpace: 'pre-line',
                margin: 0,
              }}
            >
              {selectedProject.fullDescription}
            </p>

            {selectedProject.links?.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.9rem' }}>
                {selectedProject.links.map(({ label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-btn"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Gallery */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.75rem 1rem 1.5rem' }}>
            {selectedProject.images.map((image, index) => (
              <div key={index} style={{ width: '100%', background: 'transparent', overflow: 'hidden' }}>
                <GalleryItem image={image} projectTitle={selectedProject.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
