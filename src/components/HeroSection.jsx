import React from 'react';
import picofme from '../assets/images/picofme.png';
import './HeroSection.css';

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
        <div style={{ flexShrink: 0 }}>
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
              marginBottom: '0.5rem',
            }}
          >
            about me
          </div>
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '1rem',
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
            . I recently completed my B.S. in Computer Science and M.S. in Electrical and Computer Engineering at Brown
            University.
            <br />
            <br />
            My research is in <strong>computational design and fabrication</strong> at the intersection of{' '}
            <strong>computer graphics</strong> and <strong>human-computer interaction</strong>. I develop interactive
            systems and computational methods that enable the design and fabrication of novel physical artifacts.
            <br />
            <br />
            For more information, please see my CV.
          </p>
        </div>
      </div>
    </div>
  );
}
