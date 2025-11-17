import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ASCIIWatercolor() {
  const containerRef = useRef(null);

  useEffect(() => {
    let renderer, clock;
    let watercolorScene, asciiScene;
    let camera;
    let renderTargets = [];
    let watercolorMaterial, asciiMaterial;
    let animationId;

    let pointer = { x: 0.5, y: 0.5, clicked: false };

    // -------------------------------------------------------------
    // 1. WATER COLOR SHADERS (original, with new green stem)
    // -------------------------------------------------------------

    const watercolorVertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.);
      }
    `;

    const watercolorFragmentShader = `
      uniform float u_ratio;
      uniform vec2 u_point;
      uniform float u_time;
      uniform float u_stop_time;
      uniform vec3 u_stop_randomizer;
      uniform sampler2D u_texture;
      uniform vec3 u_background_color;

      varying vec2 vUv;

      #define PI 3.14159265359

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

      float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                              -0.577350269189626, 0.024390243902439);
          vec2 i = floor(v + dot(v, C.yy));
          vec2 x0 = v - i + dot(i, C.xx);
          vec2 i1 = (x0.x > x0.y) ? vec2(1.,0.) : vec2(0.,1.);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute(permute(i.y + vec3(0., i1.y, 1.))
                         + i.x + vec3(0., i1.x, 1.));
          vec3 m = max(0.5 - vec3(
              dot(x0,x0),
              dot(x12.xy,x12.xy),
              dot(x12.zw,x12.zw)
          ), 0.);
          m = m*m; m = m*m;
          vec3 x = 2. * fract(p * C.www) - 1.;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 -
               0.85373472095314 * (a0*a0 + h*h);
          vec3 g;
          g.x = a0.x*x0.x + h.x*x0.y;
          g.yz = a0.yz*x12.xz + h.yz*x12.yw;
          return 130. * dot(m, g);
      }

      float get_dot_shape(vec2 dist, float radius_max, float radius_line) {
          return 1. - smoothstep(radius_line * radius_max, radius_max,
                                 dot(dist, dist) * 4.);
      }

      float get_stem_shape(vec2 _cursor, vec2 _uv, float _t,
                           float _size, float _flowery, vec2 _rand) {

          float stroke_width = .01;
          float noise_power = .2;

          float cursor_horizontal_noise =
              noise_power * (1. + (1. - _flowery))
              * snoise(3. * _uv * (_rand - .5));

          cursor_horizontal_noise *=
              pow(dot(_cursor.y,_cursor.y), .3 * _flowery);
          cursor_horizontal_noise *=
              pow(dot(_uv.y,_uv.y), .3);
          _cursor.x += cursor_horizontal_noise;

          _cursor.y *= (1. - ((1. - _flowery)*.7));
          _cursor.y += ((1. - _flowery)*.7 * _rand.x);

          stroke_width =
              (1. - _flowery) * .9 *
              pow(dot(_uv.y,_cursor.x), 1.)
              + _flowery * .03;
          stroke_width -= .02;

          float left = smoothstep(-stroke_width, 0., _cursor.x);
          float right= smoothstep(stroke_width, 0., _cursor.x);
          float stem_shape = left * right;

          float stem_top_mask =
              smoothstep(_cursor.y - .1, _cursor.y, min(-.1, _t - 1.));

          stem_shape *= stem_top_mask;
          stem_shape += .5 * get_dot_shape(_cursor + vec2(0.,.02),
                                           .15 * _size, .5);
          stem_shape *= stem_top_mask;

          return stem_shape;
      }

      void main() {

          float speed = 1.3;
          float t = speed * u_stop_time;

          vec2 uv = vUv;
          uv += 0.00007 * snoise(vUv*6. + vec2(0.,15.*cos(0.1*u_time)));
          uv.y += 0.00005;

          vec3 color = texture2D(u_texture, uv).xyz;
          color += 0.0015 * u_background_color;

          vec2 cursor = uv - u_point.xy;
          cursor.x *= u_ratio;

          float base_radius = .02 + .2 * u_stop_randomizer.y;
          float grow_duration = .6;
          float grow_speed = 2. * speed;
          float bloom_duration= .3 * u_stop_randomizer.y;

          float is_open = step(.1, base_radius);

          // -----------------------------------------------------
          // 🌿 UPDATED STEM COLOR — WATER COLOR GREEN
          // -----------------------------------------------------
          if (t < grow_duration) {

              vec3 stem_color = vec3(0.6, 0.8, 0.5);   // 💚 new stem color

              float stem_shape =
                get_stem_shape(cursor, uv, grow_speed*t,
                               base_radius, 1.,
                               u_stop_randomizer.xy);

              stem_shape +=
                get_stem_shape(cursor, uv, grow_speed*t,
                               0.,0.,u_stop_randomizer.yz);

              stem_shape +=
                get_stem_shape(cursor, uv, grow_speed*t,
                               0.,0.,u_stop_randomizer.zy);

              vec3 stem = stem_shape * stem_color;
              color -= stem;
          }

          if (t < grow_duration + is_open * bloom_duration) {

              float blooming_time =
                max(0., pow(1.1*t,2.) - .05);

              float radius = base_radius * blooming_time;

              vec2 noisy_cursor = vUv - u_point.xy;
              noisy_cursor.x *= u_ratio;
              noisy_cursor.y *= (1. + u_stop_randomizer.y * is_open);
              noisy_cursor -=
                .02 * snoise(noisy_cursor*10.
                             + vec2(0.,10.*sin(.5*t+PI)));

              vec3 flower_color = u_background_color;
              flower_color -= normalize(vec3(
                .5 + .5*sin(2.*u_time),
                .3,
                .5 + .5*sin(2.*u_time+PI)));
              color -= .4 * get_dot_shape(noisy_cursor,
                                          1.5*radius, .0)
                       * flower_color;

              color = .7*color +
                      .3* mix(u_background_color, color,
                              1. - get_dot_shape(noisy_cursor,
                                                 radius,0.));

              noisy_cursor.y -= .02;
              float inner_r = .7*radius;
              float inner_w = .2*radius;
              float ring_shape =
                get_dot_shape(noisy_cursor,
                              inner_r + inner_w,.9)
                - get_dot_shape(noisy_cursor,inner_r,.9);
              color += .2*blooming_time * ring_shape
                       * step(.1, base_radius);

              inner_r = .4*radius;
              inner_w = .1*radius;
              ring_shape =
                get_dot_shape(noisy_cursor,
                              inner_r + inner_w,.9)
                - get_dot_shape(noisy_cursor,inner_r,.9);
              color += .1 * pow(t,.5) * ring_shape
                       * step(.1, base_radius);

              vec2 low_noise_cursor = vUv - u_point.xy;
              low_noise_cursor.x *= .5*u_ratio;
              low_noise_cursor.y += .02;
              low_noise_cursor +=
                .01 * snoise(low_noise_cursor*10. + t);
              color -= is_open *
                       pow(t,5.) *
                       get_dot_shape(low_noise_cursor,
                                     .01*radius,0.);
          }

          gl_FragColor = vec4(color, 1.);
      }
    `;

    // -------------------------------------------------------------
    // ASCII SHADER
    // -------------------------------------------------------------

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
          float d = length(charPixel - 0.5);
          char = step(d, 0.4) * (1.0 - step(d, 0.25));

        } else if (brightness > 0.6) {
          char = step(0.3, charPixel.x) * step(charPixel.x, 0.7)
               + step(0.3, charPixel.y) * step(charPixel.y, 0.7);
          char = min(char, 1.0);

        } else if (brightness > 0.4) {
          char = (step(0.4, charPixel.x) * step(charPixel.x, 0.6))
               + (step(0.4, charPixel.y) * step(charPixel.y, 0.6));
          char = min(char, 1.0);

        } else if (brightness > 0.2) {
          float d = length(charPixel - 0.5);
          char = step(d, 0.2);
        }

        gl_FragColor = vec4(color.rgb * char, 1.0);
      }
    `;

    // -------------------------------------------------------------
    // INIT
    // -------------------------------------------------------------

    const init = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0xffffff, 1);

      containerRef.current.appendChild(renderer.domElement);

      watercolorScene = new THREE.Scene();
      asciiScene = new THREE.Scene();

      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      clock = new THREE.Clock();

      renderTargets = [
        new THREE.WebGLRenderTarget(width, height),
        new THREE.WebGLRenderTarget(width, height),
      ];

      watercolorMaterial = new THREE.ShaderMaterial({
        uniforms: {
          u_ratio: { value: width / height },
          u_point: { value: new THREE.Vector2(pointer.x, 1 - pointer.y) },
          u_time: { value: 0 },
          u_stop_time: { value: 0 },
          u_stop_randomizer: { value: new THREE.Vector3() },
          u_texture: { value: null },
          u_background_color: { value: new THREE.Color(0xffffff) },
        },
        vertexShader: watercolorVertexShader,
        fragmentShader: watercolorFragmentShader,
      });

      watercolorScene.add(
        new THREE.Mesh(new THREE.PlaneGeometry(2, 2), watercolorMaterial)
      );

      asciiMaterial = new THREE.ShaderMaterial({
        uniforms: {
          tDiffuse: { value: renderTargets[0].texture },
          resolution: { value: new THREE.Vector2(width, height) },
          charSize: { value: 8.0 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() { vUv = uv; gl_Position = vec4(position,1.0); }
        `,
        fragmentShader: asciiFragmentShader,
      });

      asciiScene.add(
        new THREE.Mesh(new THREE.PlaneGeometry(2, 2), asciiMaterial)
      );

      window.addEventListener("click", onClick);
      window.addEventListener("touchstart", onTouch);

      animate();
    };

    // -------------------------------------------------------------
    // CLICK + TOUCH
    // -------------------------------------------------------------
    const onClick = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = (e.clientX - rect.left) / rect.width;
      pointer.y = (e.clientY - rect.top) / rect.height - 0.05;
      pointer.y = Math.max(0, pointer.y);
      pointer.clicked = true;
    };

    const onTouch = (e) => {
      const t = e.touches[0];
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = (t.clientX - rect.left) / rect.width;
      pointer.y = (t.clientY - rect.top) / rect.height - 0.05;
      pointer.y = Math.max(0, pointer.y);
      pointer.clicked = true;
    };

    // -------------------------------------------------------------
    // ANIMATION
    // -------------------------------------------------------------

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      watercolorMaterial.uniforms.u_texture.value = renderTargets[0].texture;
      watercolorMaterial.uniforms.u_time.value = elapsed;

      if (pointer.clicked) {
        watercolorMaterial.uniforms.u_point.value = new THREE.Vector2(
          pointer.x,
          1 - pointer.y
        );
        watercolorMaterial.uniforms.u_stop_randomizer.value = new THREE.Vector3(
          Math.random(),
          Math.random(),
          Math.random()
        );
        watercolorMaterial.uniforms.u_stop_time.value = 0;
        pointer.clicked = false;
      }

      watercolorMaterial.uniforms.u_stop_time.value += delta;

      renderer.setRenderTarget(renderTargets[1]);
      renderer.setClearColor(0xffffff, 1);
      renderer.clear();
      renderer.render(watercolorScene, camera);

      let temp = renderTargets[0];
      renderTargets[0] = renderTargets[1];
      renderTargets[1] = temp;

      renderer.setRenderTarget(null);
      renderer.setClearColor(0xffffff, 1);
      renderer.clear();

      asciiMaterial.uniforms.tDiffuse.value = renderTargets[0].texture;
      renderer.render(asciiScene, camera);
    };

    // -------------------------------------------------------------
    // RESIZE
    // -------------------------------------------------------------

    const resize = () => {
      if (!renderer) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      renderer.setSize(width, height);
      renderer.setClearColor(0xffffff, 1);

      watercolorMaterial.uniforms.u_ratio.value = width / height;
      asciiMaterial.uniforms.resolution.value.set(width, height);

      renderTargets[0].setSize(width, height);
      renderTargets[1].setSize(width, height);
    };

    window.addEventListener("resize", resize);

    // -------------------------------------------------------------
    // CLEANUP
    // -------------------------------------------------------------

    init();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchstart", onTouch);

      cancelAnimationFrame(animationId);

      if (renderer) renderer.dispose();
      renderTargets.forEach((rt) => rt.dispose());
      if (renderer?.domElement) {
        containerRef.current?.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", background: "#ffffff" }}
    />
  );
}
