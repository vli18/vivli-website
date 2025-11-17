import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ASCIIShadedOrchidField() {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    let renderer, camera, orchidScene, asciiScene;
    let orchidMaterial, asciiMaterial;
    let rt, animationId;
    const clock = new THREE.Clock();

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
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", background: "black" }}
    />
  );
}