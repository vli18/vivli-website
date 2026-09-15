import React from 'react';
import picofme from '../assets/images/picofme.png';
import './HeroSection.css';
// import cvPdf from '../assets/papers/VivianLi-CV-July2026.pdf';

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
              fontSize: '0.92rem',
              lineHeight: '1.6',
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
            . I recently completed my Sc.B. in Computer Science and Sc.M. in Electrical and Computer Engineering at Brown
            University.
            <br />
            <br />
            My research is in <strong>computational design and fabrication</strong>. I develop computational methods in graphics and optimization for new materials, 
            and build novel fabrication workflows. I'm broadly interested in how computation can expand what we're able to create, control, and interact with in the 
            physical world.  Currently, I'm developing optimization methods for multi-objective garment design and computational design of optical metamaterials for 
            soft robotics applications.
            <br />
            <br />
            That same love of making carries outside the lab too, through textiles, painting, printmaking, and other mediums. I also enjoy music ♫, hiking ᨒ↟, and spending time with my dog, Yoyo.
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
