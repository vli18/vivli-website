import React from 'react';
import picofme from '../assets/images/picofme.png';
import './HeroSection.css';
// import cvPdf from '../assets/papers/VL-CV-July2026.pdf';

const PX = 2;

const emailPixels = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,0,0,0,0,0,0,0,0,0,1,1],
  [1,0,1,0,0,0,0,0,0,0,1,0,1],
  [1,0,0,1,0,0,0,0,0,1,0,0,1],
  [1,0,0,0,1,0,0,0,1,0,0,0,1],
  [1,0,0,0,0,1,0,1,0,0,0,0,1],
  [1,0,0,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1],
];

const linkedinPixels = [
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,1,0,1,0,0,1,0,1],
  [1,0,0,0,1,1,1,1,0,1],
  [1,0,1,0,1,0,0,1,0,1],
  [1,0,1,0,1,0,0,1,0,1],
  [1,0,1,0,1,0,0,1,0,1],
  [1,0,1,0,1,0,0,1,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1],
];

function PixelIcon({ pixels, color = 'currentColor' }) {
  const vw = pixels[0].length * PX;
  const vh = pixels.length * PX;
  return (
    <svg
      width={Math.round(vw * 0.8)}
      height={Math.round(vh * 0.8)}
      viewBox={`0 0 ${vw} ${vh}`}
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0 }}
    >
      {pixels.flatMap((row, r) =>
        row.map((cell, c) =>
          cell ? (
            <rect key={`${r}-${c}`} x={c * PX} y={r * PX} width={PX} height={PX} fill={color} />
          ) : null
        )
      )}
    </svg>
  );
}

const contactBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.3rem',
  borderRadius: '4px',
  background: 'rgba(255,255,255,0.82)',
  border: '1.5px solid rgba(0,0,0,0.18)',
  color: 'rgba(0,0,0,0.72)',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'background 0.15s, border-color 0.15s',
};

export default function HeroSection() {
  return (
    <div id="about" className="hero-container">
      <h1
        className="font-argent-italic"
        style={{
          fontSize: '3.6rem',
          fontWeight: '100',
          marginBottom: '1.5rem',
          textShadow: 'none',
          textAlign: 'center',
        }}
      >
        vivian li
      </h1>

      <div className="portrait-bio-row">
        <div style={{ flexShrink: 0, display: 'flex' }}>
          <img src={picofme} alt="Vivian Li" className="portrait-img" />
        </div>

        <div className="bio-section" style={{ flex: 1 }}>
          <div
            style={{
              fontSize: '0.7rem',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.4)',
              marginBottom: '0.25rem',
            }}
          >
            about me
          </div>
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '0.98rem',
              lineHeight: '1.7',
              textShadow: 'none',
              margin: 0,
            }}
          >
            I am a Research Assistant in the{' '}
            <a
              href="https://www.computationaldesign.group/"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'rgb(0,120,130)', textDecorationColor: 'rgba(0,120,130,0.4)' }}
            >
              Computational Design Group
            </a>{' '}
            at Brown Visual Computing, advised by Professor{' '}
            <a
              href="https://www.computationaldesign.group/adriana"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'rgb(0,120,130)', textDecorationColor: 'rgba(0,120,130,0.4)' }}
            >
              Adriana Schulz
            </a>
            . I recently completed my B.S. in Computer Science and M.S. in Electrical and Computer Engineering at Brown
            University.
            <br />
            <br />
            My research is in <strong>computational design and fabrication</strong> at the intersection of{' '}
            <strong>computer graphics</strong> and <strong>human-computer interaction</strong>. I develop computational methods, interactive systems, 
            and fabrication workflows that explore new possibilities for creating and interacting with the physical world.
            <br />
            <br />
            Beyond research, I love making across fashion design, painting, printmaking, and mixed-media. I also enjoy music ♫, hiking ᨒ↟, and time with my dog, Yoyo.
          </p>

          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.35rem', flexWrap: 'wrap' }}>
            <a
              href="mailto:vivian_li1@brown.edu"
              title="Email"
              style={contactBtnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.07)';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.28)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.82)';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.18)';
              }}
            >
              <PixelIcon pixels={emailPixels} />
            </a>
            <a
              href="https://www.linkedin.com/in/vivianxli/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              style={contactBtnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.07)';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.28)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.82)';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.18)';
              }}
            >
              <PixelIcon pixels={linkedinPixels} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
