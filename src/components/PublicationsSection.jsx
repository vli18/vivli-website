import React from 'react';
import { publications } from '../data/publications';
import { renderAuthors } from '../utils/renderAuthors';
import './PublicationsSection.css';

export default function PublicationsSection() {
  return (
    <div id="publications" className="section-container">
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
        publications
      </h2>

      {publications.map((pub) => (
        <div key={pub.id} className="pub-card">
          {pub.thumbnail ? (
            pub.thumbnailFit === 'contain' ? (
              <div className="pub-thumb-wrap">
                <img src={pub.thumbnail} alt={pub.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            ) : (
              <img src={pub.thumbnail} alt={pub.title} className="pub-thumb-img" />
            )
          ) : (
            <div className="pub-thumb-wrap" style={{ background: 'rgba(0,0,0,0.04)' }} />
          )}

          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '400', marginTop: 0, marginBottom: '0.25rem' }}>{pub.title}</h3>
            <p style={{ fontSize: '0.85rem', color: 'rgba(0, 0, 0, 0.6)', marginBottom: '0.25rem' }}>
              {renderAuthors(pub.authors, 'Vivian Li')}
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(0, 0, 0, 0.45)', marginBottom: '0.5rem' }}>{pub.venue}</p>
            {(pub.pageUrl || pub.paperUrl) && (
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {pub.pageUrl && <a href={pub.pageUrl} target="_blank" rel="noreferrer" className="link-btn">Page</a>}
                {pub.paperUrl && <a href={pub.paperUrl} target="_blank" rel="noreferrer" className="link-btn">Paper</a>}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
