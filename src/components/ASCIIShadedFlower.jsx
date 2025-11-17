import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ASCIIShadedFlower() {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, flower, composer;
    let time = 0;
    let growthProgress = 0;
    let animationId;

    // ----------------------
    // Shaders
    // ----------------------
    const vertexShader = `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float time;
      uniform vec3 color;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vec3 light = normalize(vec3(1.0, 1.0, 1.0));
        float brightness = max(dot(vNormal, light), 0.0);
        brightness = brightness * 0.8 + 0.2;
        
        gl_FragColor = vec4(color * brightness, 1.0);
      }
    `;

    const asciiFragmentShader = `
      uniform sampler2D tDiffuse;
      uniform vec2 resolution;
      uniform float charSize;
      
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec2 charCoord = floor(gl_FragCoord.xy / charSize) * charSize;
        vec2 charUv = charCoord / resolution.xy;
        
        vec4 color = texture2D(tDiffuse, charUv);
        float brightness = (color.r + color.g + color.b) / 3.0;
        
        vec2 charPixel = mod(gl_FragCoord.xy, charSize) / charSize;
        
        float char = 0.0;
        
        if (brightness > 0.8) {
          float dist = length(charPixel - 0.5);
          char = step(dist, 0.4) * (1.0 - step(dist, 0.25));
        } else if (brightness > 0.6) {
          char = step(0.3, charPixel.x) * step(charPixel.x, 0.7) +
                 step(0.3, charPixel.y) * step(charPixel.y, 0.7);
          char = min(char, 1.0);
        } else if (brightness > 0.4) {
          char = (step(0.4, charPixel.x) * step(charPixel.x, 0.6)) +
                 (step(0.4, charPixel.y) * step(charPixel.y, 0.6));
          char = min(char, 1.0);
        } else if (brightness > 0.2) {
          float dist = length(charPixel - 0.5);
          char = step(dist, 0.2);
        } else {
          char = 0.0;
        }
        
        gl_FragColor = vec4(color.rgb * char, 1.0);
      }
    `;

    // ----------------------
    // Init
    // ----------------------
    const init = () => {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);

      camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 10, 0);
      camera.lookAt(0, 0, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      containerRef.current.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 0.8);
      pointLight.position.set(5, 15, 5);
      scene.add(pointLight);

      createFlower();
      setupPostProcessing();
      animate();
    };

    // ----------------------
    // Flower
    // ----------------------
    const createFlower = () => {
      flower = new THREE.Group();

      // Stem
      const stemGeometry = new THREE.CylinderGeometry(0.08, 0.12, 3, 8);
      const stemMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(0x4a3728) }
        }
      });
      const stem = new THREE.Mesh(stemGeometry, stemMaterial);
      stem.position.y = 1.5;
      flower.add(stem);

      // Branches
      const branchGeometry = new THREE.CylinderGeometry(0.03, 0.05, 0.8, 6);
      const branchMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(0x5a4738) }
        }
      });

      for (let i = 0; i < 3; i++) {
        const branch = new THREE.Mesh(branchGeometry, branchMaterial);
        const angle = (i / 3) * Math.PI * 2;
        branch.position.set(
          Math.cos(angle) * 0.4,
          2.5,
          Math.sin(angle) * 0.4
        );
        branch.rotation.z = Math.PI / 6;
        branch.rotation.y = angle;
        flower.add(branch);
      }

      // Center
      const centerGeometry = new THREE.SphereGeometry(0.15, 12, 12);
      const centerMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(0xffd700) }
        }
      });
      const center = new THREE.Mesh(centerGeometry, centerMaterial);
      center.position.y = 3;
      flower.add(center);

      // Petals
      const petalCount = 5;
      for (let i = 0; i < petalCount; i++) {
        const petalGeometry = new THREE.SphereGeometry(0.6, 16, 16);

        const pos = petalGeometry.attributes.position;
        for (let j = 0; j < pos.count; j++) {
          const x = pos.getX(j);
          const y = pos.getY(j);

          pos.setY(j, y * 0.15);
          if (x > 0.1) {
            const notch = Math.max(0.0, 1.0 - (x - 0.1) * 2.0);
            pos.setY(j, y * 0.15 * notch);
          }
        }
        pos.needsUpdate = true;

        const petalMaterial = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms: {
            time: { value: 0 },
            color: { value: new THREE.Color(0xffb7d5) }
          }
        });

        const petal = new THREE.Mesh(petalGeometry, petalMaterial);
        const angle = (i / petalCount) * Math.PI * 2;

        petal.position.set(Math.cos(angle) * 0.8, 3, Math.sin(angle) * 0.8);
        petal.rotation.y = angle - Math.PI / 2;
        petal.rotation.x = Math.PI / 12;
        petal.scale.set(0, 0, 0);
        petal.userData.targetScale = 1;

        flower.add(petal);
      }

      flower.scale.set(0.1, 0.1, 0.1);
      scene.add(flower);
    };

    // ----------------------
    // ASCII Postprocessing
    // ----------------------
    const setupPostProcessing = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      const renderTarget = new THREE.WebGLRenderTarget(width, height);

      const asciiMaterial = new THREE.ShaderMaterial({
        uniforms: {
          tDiffuse: { value: renderTarget.texture },
          resolution: { value: new THREE.Vector2(width, height) },
          charSize: { value: 8.0 }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `,
        fragmentShader: asciiFragmentShader
      });

      const asciiScene = new THREE.Scene();
      const asciiPlane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), asciiMaterial);
      asciiScene.add(asciiPlane);

      const asciiCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      composer = { renderTarget, asciiScene, asciiCamera, asciiMaterial };
    };

    // ----------------------
    // Animation
    // ----------------------
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.01;

      if (growthProgress < 1) {
        growthProgress += 0.005;
        flower.scale.set(growthProgress, growthProgress, growthProgress);

        if (growthProgress > 0.5) {
          const p = (growthProgress - 0.5) * 2;
          flower.children.forEach((child) => {
            if (child.userData?.targetScale) {
              child.scale.set(p, p, p);
            }
          });
        }
      }

      flower.rotation.y = time * 0.1;

      flower.children.forEach((child) => {
        if (child.material?.uniforms?.time) {
          child.material.uniforms.time.value = time;
        }
      });

      renderer.setRenderTarget(composer.renderTarget);
      renderer.render(scene, camera);

      renderer.setRenderTarget(null);
      renderer.render(composer.asciiScene, composer.asciiCamera);
    };

    // ----------------------
    // Resize
    // ----------------------
    const handleResize = () => {
      if (!renderer || !camera) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      renderer.setSize(width, height);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      composer.renderTarget.setSize(width, height);
      composer.asciiMaterial.uniforms.resolution.value.set(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Initialize
    init();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      composer.renderTarget.dispose();
      if (renderer.domElement && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%", background: "black" }} />
  );
}
