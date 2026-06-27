import { getImg } from '../utils/imageLoader';

export const portfolioItems = [
  {
    id: 1,
    title: 'Kinetic Pixels',
    category: 'Tech',
    thumbnail: getImg('/src/portfolio-images/kinetic-pixels/thumbnail.png'),
    description:
      'Kinetic Pixels explores data as cultural material to be crafted and dynamically configured by coordinated robots.',
    fullDescription:
      'Kinetic Pixels explores data as cultural material by translating symbolic, geographic, and historical information into rule-based mosaics that can be constructed by coordinated aerial robots. Drawing inspiration from global tile traditions—such as Chinese 花砖, Iberian azulejos, and Islamic zellige—the project engages practices where complex cultural meaning emerges from simple, modular repetition.\n\nEight globally representative tile cultures are encoded as sparse 9-bit cellular automaton rulesets, computed through a two-stage process that ensures global uniqueness. A shared geographic grammar establishes common structural constraints across all systems, while a second pass derives deterministic identity bits from ISO country codes and planetary parameters. This separation allows cultural similarity and difference to emerge through rule-based pattern formation, producing evolving mosaics whose spatial sequences reflect both continuity and variation over time.\n\nTo explore how these abstract rules might be materially constructed and transformed, Kinetic Pixels computes a realistic simulation of a coordinated swarm flight trajectories to assemble and reconfigure mosaics frame by frame. Transitions are executed through distance-aware task allocation, collision-constrained trajectory planning, and frame-to-frame tile reuse, enabling efficient addition, removal, and transfer of tiles as patterns evolve. Cellular automaton outputs are mapped from discrete grids to real-world spatial coordinates, grounding rule-based pattern formation in feasible multi-robot motion.\n\nBy treating computation as a contemporary form of craft, Kinetic Pixels reframes tiles as both the building blocks of cities and the building blocks of data-driven space—asking how robotic systems might participate in the cultural production of material patterns, rather than merely executing them.',
    details: {
      year: '2025',
      role: 'Solo',
      mediums: 'Python, ROS, MatLab',
    },
    images: [
      { type: 'video', src: getImg('/src/portfolio-images/kinetic-pixels/header_tiles.mp4'), layout: 'full' },
      { src: getImg('/src/portfolio-images/kinetic-pixels/tiles_all.png'), layout: 'full' },
    ],
  },
  {
    id: 6,
    title: 'Aerial Reverie',
    category: 'Tech',
    thumbnail: getImg('/src/portfolio-images/aerial-reverie/still-1.jpg'),
    description: 'An immersive VR storyworld illuminated by coordinated Crazyflie drone flight paths',
    fullDescription:
      'Aerial Reverie is an immersive VR storyworld illuminated by the motion of Crazyflie drones, their coordinated flight paths controlled via Python and ROS. The choreographed trajectories assemble a dynamic cityscape that becomes both simulation and narrative device, examining collective intelligence, industrial expansion, and the tension between nature, home, and rapidly evolving built environments.',
    details: {
      year: '2024',
      role: 'Creative Director, Programming, 3D Modeling',
      mediums: 'Python, ROS, Crazyflie Drones, Blender, After Effects, Ableton Live, Meta Quest 2',
    },
    images: [
      { type: 'video', src: getImg('/src/portfolio-images/aerial-reverie/aerial-reverie.mp4'), layout: 'full' },
      {
        type: 'video-row',
        items: [
          getImg('/src/portfolio-images/aerial-reverie/AR-clip-intro.mp4'),
          getImg('/src/portfolio-images/aerial-reverie/AR-clip-after-intro.mp4'),
          getImg('/src/portfolio-images/aerial-reverie/AR-clip-spirals-start.mp4'),
          getImg('/src/portfolio-images/aerial-reverie/AR-clip-spiraling.mp4'),
        ],
      },
      { type: 'image', src: getImg('/src/portfolio-images/aerial-reverie/process-stills-2.png'), layout: 'full' },
    ],
  },
  {
    id: 2,
    title: 'PawLink',
    category: 'Tech',
    thumbnail: getImg('/src/portfolio-images/pawlink/thumbnail.png'),
    description: 'Smart-fabric collar with embedded sensors for continuous animal health monitoring',
    fullDescription:
      'PawLink is an integrated smart-fabric collar that leverages thermally drawn fiber technology with embedded capacitive and thermistor sensors to enable continuous, fabric-level inference.\n\nA compact ML classifier runs on collar-side data to detect behavioral patterns such as excessive scratching (linked to allergies, infections, or skin irritation), track temperature changes and activity levels for health and exercise monitoring, and activate a safety protocol: a "Lost Mode" that detects nearby humans to broadcast signals.\n\nPawLink demonstrates how computational textiles can function as compassionate, adaptive interfaces for animal wellbeing.',
    details: {
      year: '2024',
      role: 'Software & Hardware Integration, Product Design',
      mediums: 'Arduino, ML, Thermally Drawn Fibers, Weaving Loom, Metal Hardware',
    },
    images: [{ src: getImg('/src/portfolio-images/pawlink/pawlink.png'), layout: 'full' }],
  },
  {
    id: 3,
    title: 'Aligned',
    category: 'Tech',
    thumbnail: getImg('/src/portfolio-images/aligned/thumbnail.png'),
    description: 'Smart-fabric posture-sensing system with real-time ML-based detection and haptic feedback',
    fullDescription:
      'Aligned is a smart-fabric posture-sensing system integrating a custom PCB with four I²C-networked accelerometers and a vibration motor for haptic feedback.\n\nA lightweight machine-learning model distinguishes upright vs. slouched posture in real time, forming the foundation for a textile-embedded interface that supports healthier body awareness.\n\nThe system includes both a fully functioning prototype demonstrating real-time posture detection and a complete hardware pipeline, from circuit schematic to manufactured PCB, ready for textile integration in future iterations.',
    details: {
      year: '2024',
      role: 'Software Lead (ML + Arduino), Hardware',
      mediums: 'KiCad, Custom PCB, I²C, ML, Haptic Feedback',
    },
    images: [{ src: getImg('/src/portfolio-images/aligned/gallery-w-ml.png'), layout: 'full' }],
  },
  {
    id: 4,
    title: 'NÜWA',
    category: 'Art',
    thumbnail: getImg('/src/portfolio-images/nuwa/thumbnail2.png'),
    description: 'Modernized hanfu and qipao challenging techno-Orientalist narratives through textile craft',
    fullDescription:
      'Showcased at Fashion@Brown Runway Show 2024 & Rhode Island Fashion Week 2024.\n\nAncient deity, new cyborg. One with earth, integrated in cyberspace.\n\nIn techno-Orientalism, the West views the Chinese body in contradicting space-times: a relic of the past and a future both feared and desired. It seeks to collect a drop of what the Chinese body can provide — culture, technology, sex — and in turn, create a perverse reality with its voyeuristic eyes.\n\nHow can women of the Chinese diaspora reject and subsequently remake this techno-orientalist framework?\n\nEmbody the paradox of temporalities and collapse contrasting timescales into the present moment. Primordial, earth-forming goddess and futuristic robot condensed into one in the Now: the modern woman. Fetishization, subjugation by the malicious eye — we repair the wounds of our broken heavens with our molded clay bodies and the garments that adorn them.\n\nBy crafting modernized hanfu and qipao dresses, interweaving the histories of silk and brocade with technology, the Chinese body is situated in all timeframes, toppling the binarist narrative generated by the West. Placed before the public eye, Nüwa asks the audience to confront the simultaneous pleasure and discomfort of the techno-Orientalist paradigm.',
    details: {
      year: '2024',
      role: 'Solo',
      mediums: 'Brocade, Silk, LEDs',
    },
    images: [{ src: getImg('/src/portfolio-images/nuwa/gallery.png'), layout: 'full' }],
  },
  {
    id: 5,
    title: 'Spirit Oasis',
    category: 'Tech',
    thumbnail: getImg('/src/portfolio-images/spirit-oasis/thumbnail.png'),
    description: 'A reimagined 3D scene from Avatar: The Last Airbender with realistic water and lighting',
    fullDescription:
      "This project is a reimagination of a scene in the episode 'The Siege of the North' from Avatar: the Last Airbender. In the Spirit Oasis, two koi fish Tui and La maintain the balance between the Earth and the Moon. When the fish are disturbed, chaos ensues. \n\n Using ThreeJS and Blender, we modeled this scene using realistic water effects, lighting changes, and koi fish interaction.",
    details: {
      year: '2023',
      role: 'Procedural Water + Grass, Custom Watercolor Toon Shading, 3D Modeling',
      mediums: 'Three.js, Blender, GLSL',
    },
    images: [{ type: 'iframe', src: 'https://spirit-oasis.vercel.app/', layout: 'full' }],
  },
];
