import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ORCHID_COUNT = 16;

const orchidVertexShader = `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = vec4(position,1.0);
  }
`;

const orchidFragmentShader = `
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

      float colorPhase = mod(float(i) * 1.0 + u_time * 0.12, 4.0);
      vec3 pink   = vec3(1.00, 0.75, 0.85);
      vec3 purple = vec3(0.78, 0.50, 0.95);
      vec3 teal   = vec3(0.40, 0.88, 0.88);
      vec3 mint   = vec3(0.60, 0.95, 0.80);

      vec3 baseColor;
      if (colorPhase < 1.0)      baseColor = mix(pink,   purple, colorPhase);
      else if (colorPhase < 2.0) baseColor = mix(purple, teal,   colorPhase - 1.0);
      else if (colorPhase < 3.0) baseColor = mix(teal,   mint,   colorPhase - 2.0);
      else                       baseColor = mix(mint,   pink,   colorPhase - 3.0);

      vec3 orchidColor = baseColor * (0.65 + 0.35 * pulse);

      float glow = 0.08 / (length(p) + 0.03);
      vec3 glowCol = baseColor * glow * 0.6;

      col += orchidColor * shape * 0.85;
      col += glowCol * 0.35;
    }

    // Fade orchids toward center — only show on side edges
    float distToEdge = min(vUv.x, 1.0 - vUv.x);
    float edgeMask = 1.0 - smoothstep(0.15, 0.29, distToEdge);
    col *= edgeMask;

    gl_FragColor = vec4(col, 1.0);
  }
`;

const asciiFragmentShader = `
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

    gl_FragColor = vec4(mix(vec3(1.0), color.rgb, ch), 1.0);
  }
`;

export function useOrchidBackground(containerRef) {
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    let renderer, orchidScene, asciiScene, rt, animationId;
    const clock = new THREE.Clock();

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePos.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Distribute orchids along left and right edges only.
    // Positions are in aspect-adjusted UV space (same coords as the shader's uv after
    // uv.x *= aspect), so we compute the edge zone using the current aspect ratio.
    const aspect = window.innerWidth / window.innerHeight;
    const edgeInner = 0.46 * aspect;

    const orchids = Array.from({ length: ORCHID_COUNT }).map((_, i) => {
      const side = i < ORCHID_COUNT / 2 ? -1 : 1;
      const absX = edgeInner + Math.random() * (aspect * 0.58);
      return {
        pos: new THREE.Vector2(side * absX, Math.random() * 2.4 - 1.2),
        scale: 0.4 + Math.random() * 0.4,
        timeOffset: Math.random() * 10.0,
        rotation: Math.random() * Math.PI * 2.0,
      };
    });

    const init = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      while (container.firstChild) container.removeChild(container.firstChild);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0xffffff, 1);
      container.appendChild(renderer.domElement);

      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      rt = new THREE.WebGLRenderTarget(width, height);

      const orchidMaterial = new THREE.ShaderMaterial({
        vertexShader: orchidVertexShader,
        fragmentShader: orchidFragmentShader,
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
        fragmentShader: asciiFragmentShader,
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
        orchidMaterial.uniforms.u_mouse.value.set(mousePos.current.x, mousePos.current.y);

        renderer.setRenderTarget(rt);
        renderer.render(orchidScene, camera);
        renderer.setRenderTarget(null);
        renderer.render(asciiScene, camera);
      };

      animate();
    };

    init();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      try {
        if (renderer) renderer.dispose();
        if (rt) rt.dispose();
        if (renderer?.domElement && container) container.removeChild(renderer.domElement);
      } catch {
        // ignore cleanup errors
      }
    };
  }, []);
}
