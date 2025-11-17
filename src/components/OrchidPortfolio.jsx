import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function OrchidPortfolio() {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    let renderer, camera, orchidScene, asciiScene;
    let orchidMaterial, asciiMaterial;
    let rt, animationId;
    const clock = new THREE.Clock(); // Initialize clock immediately

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePos.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const ORCHID_COUNT = 12;

    const orchids = Array.from({ length: ORCHID_COUNT }).map(() => ({
      pos: new THREE.Vector2(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      ),
      scale: 0.4 + Math.random() * 0.4,
      timeOffset: Math.random() * 10.0,
      rotation: Math.random() * Math.PI * 2.0
    }));

    const orchidVertex = `
      varying vec2 vUv;
      void main(){
        vUv = uv;
        gl_Position = vec4(position,1.0);
      }
    `;

    const orchidFragment = `
      precision highp float;
      varying vec2 vUv;

      uniform float u_time;
      uniform vec2 u_resolution;

      uniform vec2 u_pos[${ORCHID_COUNT}];
      uniform float u_scale[${ORCHID_COUNT}];
      uniform float u_timeOffset[${ORCHID_COUNT}];
      uniform float u_rot[${ORCHID_COUNT}];
      uniform vec2 u_mouse;

      vec2 rotate(vec2 p, float a){
        float s = sin(a), c = cos(a);
        return vec2(p.x*c - p.y*s, p.x*s + p.y*c);
      }

      float petal(vec2 p, float angle, float width, float height){
        float a = atan(p.y, p.x);
        float r = length(p);
        float diff = abs(a - angle);
        return smoothstep(width, 0.0, diff) * smoothstep(height, 0.0, r);
      }

      void main(){
        vec2 uv = vUv * 2.0 - 1.0;
        uv.x *= u_resolution.x / u_resolution.y;

        vec3 col = vec3(0.0);

        for(int i = 0; i < ${ORCHID_COUNT}; i++){

          vec2 center = u_pos[i];
          float sc = u_scale[i];
          float offs = u_timeOffset[i];
          float rot = u_rot[i];

          vec2 p = (uv - center) / sc;
          p = rotate(p, rot);

          // Mouse distance effect
          float mouseDist = length(u_mouse - center);
          float hoverEffect = smoothstep(0.6, 0.2, mouseDist);

          float t = (u_time + offs) * 0.5; // Faster than 0.3, slower than 0.7

          float bloom = 0.2 + 0.2 * sin(t * 2.0) + hoverEffect * 0.8; // More bloom on hover
          float pulse = 0.6 + 0.2 * sin(t * 1.3) + hoverEffect * 0.4;

          p *= (1.0 + bloom);

          float p1 = petal(p, 0.0, 0.9, 0.8);
          float p2 = petal(p, 3.14159, 0.9, 0.8);
          float p3 = petal(p, 1.57, 0.7, 0.7);
          float p4 = petal(p, -1.57, 0.7, 0.7);

          float lip = smoothstep(0.25, 0.0, length(p * 1.3));

          float shape = max(max(p1, p2), max(p3, p4));
          shape = max(shape, lip * 0.6);

          vec3 orchidColor = 0.55 + 0.45 * vec3(
            0.9 + 0.1 * sin(t + p.x * 3.0),
            0.5 + 0.5 * sin(t * 1.2),
            1.0
          ) * pulse;

          float glow = 0.08 / (length(p) + 0.03);
          vec3 glowCol = vec3(0.8, 0.6, 1.0) * glow;

          col += orchidColor * shape * 0.8;
          col += glowCol * 0.5;
        }

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const asciiFragment = `
      uniform sampler2D tDiffuse;
      uniform vec2 resolution;
      uniform float charSize;

      void main(){
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec2 charCoord = floor(gl_FragCoord.xy / charSize) * charSize;
        vec2 charUv = charCoord / resolution.xy;

        vec4 color = texture2D(tDiffuse, charUv);
        float brightness = (color.r + color.g + color.b) / 3.0;

        vec2 cp = mod(gl_FragCoord.xy, charSize) / charSize;

        float ch = 0.0;

        if (brightness > 0.8) {
          float d = length(cp - 0.5);
          ch = step(d, 0.4) * (1.0 - step(d, 0.25));
        } else if (brightness > 0.6) {
          ch = step(0.3, cp.x) * step(cp.x, 0.7)
             + step(0.3, cp.y) * step(cp.y, 0.7);
          ch = min(ch, 1.0);
        } else if (brightness > 0.4) {
          ch = (step(0.4, cp.x) * step(cp.x, 0.6))
             + (step(0.4, cp.y) * step(cp.y, 0.6));
          ch = min(ch, 1.0);
        } else if (brightness > 0.2) {
          float d = length(cp - 0.5);
          ch = step(d, 0.2);
        } else {
          ch = 0.0;
        }

        gl_FragColor = vec4(color.rgb * ch, 1.0);
      }
    `;

    const init = () => {
      if (!containerRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;

      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }    

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 1);
      containerRef.current.appendChild(renderer.domElement);

      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      rt = new THREE.WebGLRenderTarget(width, height);

      orchidMaterial = new THREE.ShaderMaterial({
        vertexShader: orchidVertex,
        fragmentShader: orchidFragment,
        uniforms: {
          u_time: { value: 0 },
          u_resolution: { value: new THREE.Vector2(width, height) },
          u_pos: { value: orchids.map(o => o.pos) },
          u_scale: { value: orchids.map(o => o.scale) },
          u_timeOffset: { value: orchids.map(o => o.timeOffset) },
          u_rot: { value: orchids.map(o => o.rotation) },
          u_mouse: { value: new THREE.Vector2(0, 0) }
        }
      });

      orchidScene = new THREE.Scene();
      orchidScene.add(
        new THREE.Mesh(new THREE.PlaneGeometry(2, 2), orchidMaterial)
      );

      asciiMaterial = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec2 vUv;
          void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }
        `,
        fragmentShader: asciiFragment,
        uniforms: {
          tDiffuse: { value: rt.texture },
          resolution: { value: new THREE.Vector2(width, height) },
          charSize: { value: 8.0 }
        }
      });

      asciiScene = new THREE.Scene();
      asciiScene.add(
        new THREE.Mesh(new THREE.PlaneGeometry(2, 2), asciiMaterial)
      );

      animate();
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const t = clock.getElapsedTime();
      orchidMaterial.uniforms.u_time.value = t;
      
      // Ensure mouse position is updated
      const mx = mousePos.current.x;
      const my = mousePos.current.y;
      orchidMaterial.uniforms.u_mouse.value.set(mx, my);

      renderer.setRenderTarget(rt);
      renderer.render(orchidScene, camera);

      renderer.setRenderTarget(null);
      renderer.render(asciiScene, camera);
    };

    init();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      rt.dispose();
      if (renderer.domElement && containerRef.current)
        containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "auto" }}>
      {/* Background shader */}
      <div
        ref={containerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0
        }}
      />

      {/* Content overlay */}
      <div style={{ position: "relative", zIndex: 1, color: "white" }}>
        {/* Navbar */}
        <nav style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "1.5rem 2rem",
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ fontSize: "1.2rem", fontWeight: "400" }}>vivian li</div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <button onClick={() => scrollToSection('publications')} style={{ 
              background: "none", 
              border: "none", 
              color: "white", 
              cursor: "pointer",
              fontSize: "1rem",
              opacity: 0.8, 
              transition: "opacity 0.2s" 
            }}
               onMouseEnter={(e) => e.target.style.opacity = 1}
               onMouseLeave={(e) => e.target.style.opacity = 0.8}>
              Publications
            </button>
            <button onClick={() => scrollToSection('portfolio')} style={{ 
              background: "none", 
              border: "none", 
              color: "white", 
              cursor: "pointer",
              fontSize: "1rem",
              opacity: 0.8, 
              transition: "opacity 0.2s" 
            }}
               onMouseEnter={(e) => e.target.style.opacity = 1}
               onMouseLeave={(e) => e.target.style.opacity = 0.8}>
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} style={{ 
              background: "none", 
              border: "none", 
              color: "white", 
              cursor: "pointer",
              fontSize: "1rem",
              opacity: 0.8, 
              transition: "opacity 0.2s" 
            }}
               onMouseEnter={(e) => e.target.style.opacity = 1}
               onMouseLeave={(e) => e.target.style.opacity = 0.8}>
              Contact
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div style={{
          minHeight: "45vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 2rem",
          textAlign: "center",
          paddingTop: "5rem"
        }}>
          <h1 style={{
            fontSize: "3rem",
            fontWeight: "300",
            marginBottom: "0.5rem",
            textShadow: "0 0 20px rgba(0,0,0,0.8)"
          }}>
            vivian li
          </h1>
          <p style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            fontWeight: "300",
            textShadow: "0 0 20px rgba(0,0,0,0.8)"
          }}>
            Creative technologist crafting immersive digital experiences at the intersection of art and code
          </p>
        </div>

        {/* Publications Section */}
        <div id="publications" style={{
          padding: "0.5rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "1.8rem",
            fontWeight: "300",
            marginBottom: "1rem",
            textAlign: "center",
            textShadow: "0 0 20px rgba(0,0,0,0.8)"
          }}>
            Publications
          </h2>

          <div style={{
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: "1.5rem",
            display: "flex",
            gap: "1.5rem",
            alignItems: "start"
          }}>
            {/* Thumbnail */}
            <div style={{
              width: "180px",
              height: "135px",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "4px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.8rem",
              color: "rgba(255, 255, 255, 0.3)"
            }}>
              Thumbnail
            </div>

            {/* Publication details */}
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: "1.2rem",
                fontWeight: "400",
                marginBottom: "0.4rem"
              }}>
                Novel Approaches to Computational Design in Interactive Media
              </h3>
              <p style={{
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: "0.4rem"
              }}>
                Smith, J., Doe, A., Johnson, K.
              </p>
              <p style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.5)"
              }}>
                Journal of Creative Technology • 2024
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div id="portfolio" style={{
          padding: "0.5rem 2rem 2.5rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "1.8rem",
            fontWeight: "300",
            marginBottom: "1rem",
            textAlign: "center",
            textShadow: "0 0 20px rgba(0,0,0,0.8)"
          }}>
            Portfolio
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}>
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.2s, border-color 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div style={{
                  width: "100%",
                  height: "200px",
                  background: "rgba(255, 255, 255, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  color: "rgba(255, 255, 255, 0.3)"
                }}>
                  Project Image
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{
                    fontSize: "1.2rem",
                    fontWeight: "400",
                    marginBottom: "0.5rem"
                  }}>
                    Project Title {item}
                  </h3>
                  <p style={{
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.7)"
                  }}>
                    Brief description of the project and technologies used
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}