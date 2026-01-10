import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const imageModules = import.meta.glob('../portfolio-images/**', { eager: true, as: 'url' });

const getImg = (p) => {
  if (!p) return '';
  const normalized = p.replace(/^\.?\/?src\/portfolio-images\/?/, '').replace(/^\.?\/?portfolio-images\/?/, '');
  const key = `../portfolio-images/${normalized}`;
  return imageModules[key] || '';
};

export default function OrchidPortfolio() {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Kinetic Pixels",
      category: "Tech",
      thumbnail: getImg("/src/portfolio-images/kinetic-pixels/thumbnail.png"),
      description: "Kinetic Pixels investigates how data can function as cultural material crafted and dynamically configured by coordinated swarms.",
      fullDescription: "Kinetic Pixels explores data as cultural material by translating symbolic, geographic, and historical information into rule-based mosaics constructed by coordinated aerial robots. Drawing inspiration from global tile traditions—such as Chinese 花砖, Iberian azulejos, and Islamic zellige—the project engages practices where complex cultural meaning emerges from simple, modular repetition.\n\nEight globally representative tile cultures are encoded as sparse 9-bit cellular automaton rulesets, combining a shared geographic grammar with deterministic identity bits derived from ISO standards and planetary context. These compact rules generate evolving mosaics whose similarities and differences emerge through rule-based pattern formation, and which are physically assembled, reconfigured, and animated by a multi-drone system.\n\nBy treating computation as a contemporary form of craft, Kinetic Pixels reframes tiles as both the building blocks of cities and the building blocks of data-driven space—asking how robotic systems might participate in the cultural production of material patterns, rather than merely executing them.",
      details: {
        year: "2025",
        role: "Solo",
        mediums: "Python, ROS, MatLab, Adobe Illustrator",
      },
      images: [
        { src: getImg("/src/portfolio-images/kinetic-pixels/tiles_tgt.png"), layout: "full" },
        { src: getImg("/src/portfolio-images/kinetic-pixels/tiles_all.png"), layout: "full" },
      ],
    },
    {
      id: 1,
      title: "Aerial Reverie",
      category: "Tech",
      thumbnail: getImg("/src/portfolio-images/aerial-reverie/still-1.jpg"),
      description: "An immersive VR storyworld illuminated by coordinated Crazyflie drone flight paths",
      fullDescription:
      "Aerial Reverie is an immersive VR storyworld illuminated by the motion of Crazyflie drones, their coordinated flight paths controlled via Python and ROS. The choreographed trajectories assemble a dynamic cityscape that becomes both simulation and narrative device, examining collective intelligence, industrial expansion, and the tension between nature, home, and rapidly evolving built environments.",
      details: {
        year: "2024",
        role: "Creative Director, Programming, 3D Modeling",
        mediums: "Python, ROS, Crazyflie Drones, Blender, After Effects, Ableton Live, Meta Quest 2",
      },
      images: [
        {
          type: "video",
          src: getImg("/src/portfolio-images/aerial-reverie/aerial-reverie.mp4"),
          layout: "full",
        },
        {
          type: "gif-row",
          items: [
            getImg("/src/portfolio-images/aerial-reverie/AR-clip-intro.gif"),
            getImg("/src/portfolio-images/aerial-reverie/AR-clip-after-intro.gif"),
            getImg("/src/portfolio-images/aerial-reverie/AR-clip-spirals-start.gif"),
            getImg("/src/portfolio-images/aerial-reverie/AR-clip-spiraling.gif"),
          ],
        },
        { type: "image",
          src: getImg("/src/portfolio-images/aerial-reverie/process-stills-2.png"), 
          layout: "full" 
        },
      ],
    },
    {
      id: 2,
      title: "PawLink",
      category: "Tech",
      thumbnail: getImg("/src/portfolio-images/pawlink/thumbnail.png"),
      description: "Smart-fabric collar with embedded sensors for continuous animal health monitoring",
      fullDescription:
      "PawLink is an integrated smart-fabric collar that leverages thermally drawn fiber technology with embedded capacitive and thermistor sensors to enable continuous, fabric-level inference.\n\nA compact ML classifier runs on collar-side data to detect behavioral patterns such as excessive scratching (linked to allergies, infections, or skin irritation), track temperature changes and activity levels for health and exercise monitoring, and activate a safety protocol: a “Lost Mode” that detects nearby humans to broadcast signals.\n\nPawLink demonstrates how computational textiles can function as compassionate, adaptive interfaces for animal wellbeing.",
      details: {
        year: "2024",
        role: "Software & Hardware Integration, Product Design",
        mediums: "Arduino, ML, Thermally Drawn Fibers, Weaving Loom, Metal Hardware",
      },
      images: [
        { src: getImg("/src/portfolio-images/pawlink/pawlink.png"), layout: "full" },
      ],
    },
    {
      id: 3,
      title: "Aligned",
      category: "Tech",
      thumbnail: getImg("/src/portfolio-images/aligned/thumbnail.png"),
      description: "Smart-fabric posture-sensing system with real-time ML-based detection and haptic feedback",
      fullDescription:
      "Aligned is a smart-fabric posture-sensing system integrating a custom PCB with four I²C-networked accelerometers and a vibration motor for haptic feedback.\n\nA lightweight machine-learning model distinguishes upright vs. slouched posture in real time, forming the foundation for a textile-embedded interface that supports healthier body awareness.\n\nThe system includes both a fully functioning prototype demonstrating real-time posture detection and a complete hardware pipeline, from circuit schematic to manufactured PCB, ready for textile integration in future iterations.",
      details: {
        year: "2024",
        role: "Software Lead (ML + Arduino), Hardware",
        mediums: "KiCad, Custom PCB, I²C, ML, Haptic Feedback",
      },
      images: [
        { src: getImg("/src/portfolio-images/aligned/gallery-w-ml.png"), layout: "full" },
      ],
    },
    {
      id: 4,
      title: "NÜWA",
      category: "Fashion",
      thumbnail: getImg("/src/portfolio-images/nuwa/thumbnail2.png"),
      description: "Modernized hanfu and qipao challenging techno-Orientalist narratives through textile craft",
      fullDescription:
      "Showcased at Fashion@Brown Runway Show 2024 & Rhode Island Fashion Week 2024.\n\nAncient deity, new cyborg. One with earth, integrated in cyberspace.\n\nIn techno-Orientalism, the West views the Chinese body in contradicting space-times: a relic of the past and a future both feared and desired. It seeks to collect a drop of what the Chinese body can provide — culture, technology, sex — and in turn, create a perverse reality with its voyeuristic eyes.\n\nHow can women of the Chinese diaspora reject and subsequently remake this techno-orientalist framework?\n\nEmbody the paradox of temporalities and collapse contrasting timescales into the present moment. Primordial, earth-forming goddess and futuristic robot condensed into one in the Now: the modern woman. Fetishization, subjugation by the malicious eye — we repair the wounds of our broken heavens with our molded clay bodies and the garments that adorn them.\n\nBy crafting modernized hanfu and qipao dresses, interweaving the histories of silk and brocade with technology, the Chinese body is situated in all timeframes, toppling the binarist narrative generated by the West. Placed before the public eye, Nüwa asks the audience to confront the simultaneous pleasure and discomfort of the techno-Orientalist paradigm.",
      details: {
        year: "2024",
        role: "Solo",
        mediums: "Brocade, Silk, LEDs",
      },
      images: [
          { src: getImg("/src/portfolio-images/nuwa/gallery.png"), layout: "full" },
      ],
    },
    {
      id: 5,
      title: "Spirit Oasis",
      category: "Tech",
      thumbnail: getImg("/src/portfolio-images/spirit-oasis/thumbnail.png"),
      description: "A reimagined 3D scene from Avatar: The Last Airbender with realistic water and lighting",
      fullDescription:
      "This project is a reimagination of a scene in the episode 'The Siege of the North' from Avatar: the Last Airbender. In the Spirit Oasis, two koi fish Tui and La maintain the balance between the Earth and the Moon. When the fish are disturbed, chaos ensues. \n\n Using ThreeJS and Blender, we modeled this scene using realistic water effects, lighting changes, and koi fish interaction.",
      details: {
        year: "2023",
        role: "Procedural Water + Grass, Custom Watercolor Toon Shading, 3D Modeling",
        mediums: "Three.js, Blender, GLSL",
      },
      images: [
        {
          type: "iframe",
          src: "https://spirit-oasis.vercel.app/",
          layout: "full"
        },
      ],
    },
  ];

  const filters = ["All", "Tech", "Fashion"];

  const filteredItems =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const ORCHID_COUNT = 12;

    const orchids = Array.from({ length: ORCHID_COUNT }).map(() => ({
      pos: new THREE.Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1),
      scale: 0.4 + Math.random() * 0.4,
      timeOffset: Math.random() * 10.0,
      rotation: Math.random() * Math.PI * 2.0,
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

          float t = (u_time + offs) * 0.5;

          float bloom = 0.2 + 0.2 * sin(t * 2.0) + hoverEffect * 0.8;
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

      // Remove any existing canvases to prevent duplicates
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 1);
      containerRef.current.appendChild(renderer.domElement);

      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      rt = new THREE.WebGLRenderTarget(width, height);

      const orchidMaterial = new THREE.ShaderMaterial({
        vertexShader: orchidVertex,
        fragmentShader: orchidFragment,
        uniforms: {
          u_time: { value: 0 },
          u_resolution: { value: new THREE.Vector2(width, height) },
          u_pos: { value: orchids.map((o) => o.pos) },
          u_scale: { value: orchids.map((o) => o.scale) },
          u_timeOffset: { value: orchids.map((o) => o.timeOffset) },
          u_rot: { value: orchids.map((o) => o.rotation) },
          u_mouse: { value: new THREE.Vector2(0, 0) },
        },
      });

      orchidScene = new THREE.Scene();
      orchidScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), orchidMaterial));

      const asciiMaterial = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec2 vUv;
          void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }
        `,
        fragmentShader: asciiFragment,
        uniforms: {
          tDiffuse: { value: rt.texture },
          resolution: { value: new THREE.Vector2(width, height) },
          charSize: { value: 8.0 },
        },
      });

      asciiScene = new THREE.Scene();
      asciiScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), asciiMaterial));

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

      animate();
    };

    init();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      try {
        if (renderer) renderer.dispose();
        if (rt) rt.dispose();
        if (renderer && renderer.domElement && containerRef.current)
          containerRef.current.removeChild(renderer.domElement);
      } catch (e) {
        // ignore cleanup errors
      }
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
          zIndex: 0,
        }}
      />

      {/* Content overlay */}
      <div style={{ position: "relative", zIndex: 1, color: "white" }}>
        {/* Project Detail View */}
        {selectedProject && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 200,
              overflowY: "auto",
              background: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "fixed",
                top: "2rem",
                right: "2rem",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                color: "white",
                fontSize: "1.5rem",
                cursor: "pointer",
                zIndex: 201,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
                e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
              }}
            >
              ×
            </button>

            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "3rem 2rem",
              }}
            >
              {/* Project Header */}
              <div style={{ marginBottom: "1rem" }}>
                <span
                  style={{
                    fontSize: "1.0rem",
                    color: "rgba(255, 255, 255, 0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {selectedProject.category}
                </span>
                <h1
                  className="font-argent-normal"
                  style={{
                    fontSize: "2.3rem",
                    fontWeight: "300",
                    margin: "1rem 0",
                    textShadow: "0 0 20px rgba(0,0,0,0.8)",
                  }}
                >
                  {selectedProject.title}
                </h1>

                {/* Project Details Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto max-content 1fr",
                    columnGap: "2rem",
                    marginBottom: "1rem",
                    background: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    padding: "1rem",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.5)", marginBottom: "0.4rem" }}>
                      Year
                    </div>
                    <div style={{ fontSize: "0.9rem", fontWeight: "400" }}>{selectedProject.details.year}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.5)", marginBottom: "0.4rem" }}>
                      Role
                    </div>
                    <div style={{ fontSize: "0.9rem", fontWeight: "400" }}>{selectedProject.details.role}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.5)", marginBottom: "0.4rem" }}>
                      Mediums
                    </div>
                    <div style={{ fontSize: "0.9rem", fontWeight: "400" }}>{selectedProject.details.mediums}</div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 300,
                    color: "rgba(255, 255, 255, 0.7)",
                    maxWidth: "100%",
                    lineHeight: "1.25",
                    whiteSpace: "pre-line",
                  }}
                >
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Image Gallery */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                {selectedProject.images.map((image, index) => {
                  const layoutStyles = {
                    full: { width: "100%", flexBasis: "100%" },
                    half: { width: "calc(50% - 0.5rem)", flexBasis: "calc(50% - 0.5rem)" },
                    third: { width: "calc(33.333% - 0.67rem)", flexBasis: "calc(33.333% - 0.67rem)" },
                    quarter: { width: "calc(25% - 0.75rem)", flexBasis: "calc(25% - 0.75rem)" },
                    "two-thirds": { width: "calc(66.666% - 0.5rem)", flexBasis: "calc(66.666% - 0.5rem)" },
                  };

                  const layout = image.layout || "full";
                  const style = layoutStyles[layout];

                  return (
                    <div
                      key={index}
                      style={{
                        ...style,
                        minHeight: image.type === "gif-row" ? "auto" : "300px",
                        background: "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.9rem",
                        color: "rgba(255, 255, 255, 0.3)",
                        overflow: "hidden",
                      }}
                    >
                      {image.type === "iframe" ? (
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            paddingBottom: "56.25%",
                            height: 0,
                            borderRadius: "8px",
                            overflow: "hidden",
                            background: "rgba(255, 255, 255, 0.05)",
                          }}
                        >
                          <iframe
                            src={image.src}
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              border: "none",
                            }}
                            loading="lazy"
                            allow="fullscreen"
                          />
                        </div>
                      ) : image.type === "gif-row" ? (
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "0.75rem",
                            width: "100%",
                          }}
                        >
                          {image.items.map((src, i) => (
                            <img
                              key={i}
                              src={src}
                              alt={`Aerial Reverie gif ${i + 1}`}
                              style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                                borderRadius: "6px",
                              }}
                            />
                          ))}
                        </div>
                      ) : image.type === "video" ? (
                        <video
                          src={image.src}
                          controls
                          playsInline
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                          autoPlay
                        />
                      ) : image.src ? (
                        <img
                          src={image.src}
                          alt={image.placeholder}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      ) : (
                        image.placeholder
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Navbar */}
        <nav
          style={{
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
            alignItems: "center",
          }}
        >
          <div className="font-argent-italic" style={{ fontSize: "1.3rem", fontWeight: "400" }}>vivian li</div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <button
              onClick={() => scrollToSection("publications")}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
                opacity: 0.8,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 1)}
              onMouseLeave={(e) => (e.target.style.opacity = 0.8)}
            >
              Publications
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
                opacity: 0.8,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 1)}
              onMouseLeave={(e) => (e.target.style.opacity = 0.8)}
            >
              Portfolio
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div
          style={{
            minHeight: "45vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem 2rem",
            textAlign: "center",
            paddingTop: "5rem",
          }}
        >
          <h1
            className="font-argent-italic"
            style={{
              fontSize: "4.5rem",
              fontWeight: "100",
              marginBottom: "0.5rem",
              textShadow:
                "0 0 40px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1), 2px 2px 8px rgba(0,0,0,1)",
            }}
          >
            vivian li
          </h1>
          <p
            className="dotgothic16-regular"
            style={{
              fontSize: "1rem",
              maxWidth: "900px",
              // fontWeight: "100",
              lineHeight: "1.5",
              textShadow: "none",
            }}
          >
            <span className="text-slab">
              I explore how computation can emerge from material behavior. Working across computational design, digital fabrication, computer graphics, and HCI, I develop reconfigurable textile and soft-material systems where sensing, logic, and actuation are encoded into geometry and structure.
              <br />
              <br />
              I am currently a researcher in the Computational Design Group @ Brown Visual Computing Lab and pursuing an Sc.M. in Electrical & Computer Engineering. I received my Sc.B. in Computer Science from Brown University.
            </span>
          </p>
        </div>

        {/* Publications Section */}
        <div id="publications" style={{ padding: "0.5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            className = "font-argent-normal"
            style={{
              fontSize: "2rem",
              fontWeight: "300",
              marginBottom: "1rem",
              textAlign: "center",
              textShadow: "0 0 20px rgba(0,0,0,0.8)",
            }}
          >
            publications
          </h2>

          <div
            onClick={() => window.open("https://www.nature.com/articles/s41586-024-08568-6", "_blank")}
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "1.5rem",
              display: "flex",
              gap: "1.5rem",
              alignItems: "start",
              cursor: "pointer",
              transition: "transform 0.2s, border-color 0.2s",
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
            {/* Thumbnail */}
            <img
              src={getImg("/src/portfolio-images/single-fibre/dither_it_figure-1.png")}
              alt="Single-fibre computing publication"
              style={{
                width: "180px",
                height: "135px",
                borderRadius: "4px",
                flexShrink: 0,
                objectFit: "cover",
              }}
            />

            {/* Publication details */}
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "400", marginBottom: "0.4rem" }}>
                A single-fibre computer enables textile networks and distributed inference
              </h3>
              <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.7)", marginBottom: "0.4rem" }}>
                Gupta, N., Cheung, H., Payra, S., Loke, G., Li, J., Zhao, Y., Balachander, L., Son, E., Li, V., Kravitz, S., Lohawala, S., Joannopoulos, J., & Fink, Y.
              </p>
              <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.5)" }}>Nature • 2025</p>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div id="portfolio" style={{ padding: "0.5rem 2rem 2.5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            className = "font-argent-normal"
            style={{
              fontSize: "1.8rem",
              fontWeight: "300",
              marginBottom: "1rem",
              textAlign: "center",
              textShadow: "0 0 20px rgba(0,0,0,0.8)",
            }}
          >
            portfolio
          </h2>

          {/* Filter Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  background: activeFilter === filter ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${activeFilter === filter ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.1)"}`,
                  borderRadius: "20px",
                  padding: "0.5rem 1.5rem",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: activeFilter === filter ? "500" : "300",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter) {
                    e.target.style.background = "rgba(255, 255, 255, 0.1)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter) {
                    e.target.style.background = "rgba(0, 0, 0, 0.4)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  }
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProject(item)}
                style={{
                  background: "rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.2s, border-color 0.2s",
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
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    background: "rgba(255, 255, 255, 0.05)",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.thumbnail ? (
                    <img src={item.thumbnail} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 1.0 }} />
                  ) : (
                    <span style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.3)" }}>Project Image</span>
                  )}
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <h3 style={{ fontSize: "1.0rem", fontWeight: "400", margin: 0 }}>{item.title}</h3>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "rgba(255, 255, 255, 0.5)",
                        background: "rgba(255, 255, 255, 0.1)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "12px",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.8rem", fontWeight: 300, color: "rgba(255, 255, 255, 0.7)", margin: 0 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}