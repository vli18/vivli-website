import React from 'react';
import { experiences } from '../data/experience';
import './ExperienceSection.css';

export default function ExperienceSection() {
  return (
    <div id="experience" className="section-container">
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
        experience
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        justifyContent: 'center',
      }}>
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card" style={{
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: '8px',
            padding: '1.25rem 0.6rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            textAlign: 'center',
          }}>
            {exp.logo
              ? <img src={exp.logo} alt={exp.company} style={{ height: '56px', width: 'auto', maxWidth: '100%', display: 'block' }} />
              : <div style={{ height: '56px', display: 'flex', alignItems: 'center', fontSize: '0.55rem', color: 'rgba(0,0,0,0.3)' }}>logo</div>
            }
            <div>
              <div style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: 'rgba(0,0,0,0.8)',
                lineHeight: 1.3,
                whiteSpace: 'pre-line',
              }}>
                {exp.company}
              </div>
              <div style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '0.82rem',
                color: 'rgba(0,0,0,0.5)',
                marginTop: '0.2rem',
              }}>
                {exp.role} · {exp.dates}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
