import { getImg } from '../utils/imageLoader';

export const portfolioItems = [
  {
    id: 1,
    title: 'Kinetic Pixels',
    category: 'Tech',
    thumbnail: getImg('/src/assets/projects/kinetic-pixels/thumbnail.webp'),
    description:
      'Kinetic Pixels explores data as cultural material to be crafted and dynamically configured by coordinated robots.',
    fullDescription:
      'Kinetic Pixels explores data as cultural material by transforming symbolic, geographic, and historical information into evolving mosaics that can be assembled by coordinated aerial robots. Drawing inspiration from modular tile traditions across cultures, the project develops computational grammars that generate distinct yet structurally related patterns, translating cultural information into dynamic forms of architectural ornament.\n\nThrough simulations of robotic swarm construction, these digital mosaics are visualized as physically realizable assemblies, connecting abstract computational rules with robotic fabrication. Kinetic Pixels ultimately asks how autonomous systems can contribute to the cultural production of material patterns, positioning computation not only as a tool for fabrication but as a new medium for architectural expression.',
    tags: ['Simulation', 'Generative'],
    details: {
      year: 'Fall 2025',
      role: 'Solo',
      mediums: 'Python, ROS, MatLab',
    },
    images: [
      { type: 'video', src: getImg('/src/assets/projects/kinetic-pixels/header_tiles.mp4'), layout: 'full', autoplay: true },
      { src: getImg('/src/assets/projects/kinetic-pixels/tiles_all.webp'), layout: 'full' },
    ],
  },
  {
    id: 2,
    title: 'PawLink',
    category: 'Tech',
    thumbnail: getImg('/src/assets/projects/pawlink/thumbnail.webp'),
    description: 'Smart-fabric collar with embedded sensors for continuous animal health monitoring',
    fullDescription:
      'PawLink is an integrated smart-fabric collar that leverages thermally drawn fiber technology with embedded capacitive and thermistor sensors to enable continuous, fabric-level inference.\n\nA compact ML classifier runs on collar-side data to detect behavioral patterns such as excessive scratching (linked to allergies, infections, or skin irritation), track temperature changes and activity levels for health and exercise monitoring, and activate a safety protocol: a "Lost Mode" that detects nearby humans to broadcast signals.\n\nPawLink demonstrates how computational textiles can function as compassionate, adaptive interfaces for animal wellbeing.\n\nIn collaboration with Cheska Chiang.',
    tags: ['Wearables', 'ML', 'Hardware'],
    details: {
      year: 'Fall 2023',
      role: 'Software & Hardware Integration, Product Design',
      mediums: 'Arduino, ML, Thermally Drawn Fibers, Weaving Loom, Metal Hardware',
    },
    images: [{ src: getImg('/src/assets/projects/pawlink/pawlink.webp'), layout: 'full' }],
  },
  {
    id: 6,
    title: 'Aerial Reverie',
    category: 'Tech',
    thumbnail: getImg('/src/assets/projects/aerial-reverie/still-1.webp'),
    description: 'An immersive VR storyworld illuminated by coordinated Crazyflie drone flight paths',
    fullDescription:
      'Aerial Reverie is an immersive VR storyworld illuminated by the motion of Crazyflie drones, their coordinated flight paths controlled via Python and ROS. The choreographed trajectories assemble a dynamic cityscape that becomes both simulation and narrative device, examining collective intelligence, industrial expansion, and the tension between nature, home, and rapidly evolving built environments.\n\nIn collaboration with Izzy (Zigzag) Hettmansperger and Rosella Liu.',
    tags: ['VR', 'Robotics'],
    details: {
      year: 'Spring 2024',
      role: 'Creative Director, Programming, 3D Modeling',
      mediums: 'Python, ROS, Crazyflie Drones, Blender, After Effects, Ableton Live, Meta Quest 2',
    },
    images: [
      { type: 'video', src: getImg('/src/assets/projects/aerial-reverie/aerial-reverie.mp4'), layout: 'full' },
      {
        type: 'video-row',
        items: [
          getImg('/src/assets/projects/aerial-reverie/AR-clip-intro.mp4'),
          getImg('/src/assets/projects/aerial-reverie/AR-clip-after-intro.mp4'),
          getImg('/src/assets/projects/aerial-reverie/AR-clip-spirals-start.mp4'),
          getImg('/src/assets/projects/aerial-reverie/AR-clip-spiraling.mp4'),
        ],
      },
      { type: 'image', src: getImg('/src/assets/projects/aerial-reverie/process-stills-2.webp'), layout: 'full' },
    ],
  },
  {
    id: 3,
    title: 'Aligned',
    category: 'Tech',
    thumbnail: getImg('/src/assets/projects/aligned/thumbnail.webp'),
    description: 'Smart-fabric posture-sensing system with real-time ML-based detection and haptic feedback',
    fullDescription:
      'Aligned is a smart-fabric posture-sensing system integrating a custom PCB with four I²C-networked accelerometers and a vibration motor for haptic feedback. A lightweight machine-learning model distinguishes upright vs. slouched posture in real time, forming the foundation for a textile-embedded interface that supports healthier body awareness.\n\nThe system includes both a fully functioning prototype demonstrating real-time posture detection and a complete hardware pipeline, from circuit schematic to manufactured PCB, ready for textile integration in future iterations.\n\nIn collaboration with Alec Lippman.',
    tags: ['Wearables', 'ML', 'Hardware'],
    details: {
      year: 'Fall 2024 – Spring 2025',
      role: 'Software Lead, Hardware',
      mediums: 'KiCad, Custom PCB, I²C, ML, Haptic Feedback',
    },
    images: [{ src: getImg('/src/assets/projects/aligned/proj-page.webp'), layout: 'full' }],
  },
  {
    id: 4,
    title: 'NÜWA',
    category: 'Art',
    thumbnail: getImg('/src/assets/projects/nuwa/thumbnail2.webp'),
    description: 'Modernized hanfu and qipao challenging techno-Orientalist narratives through textile craft',
    fullDescription:
      'Showcased at Fashion@Brown Runway Show 2024 & Rhode Island Fashion Week 2024.\n\nAncient deity, new cyborg. One with earth, integrated in cyberspace.\n\nIn techno-Orientalism, the West views the Chinese body in contradicting space-times: a relic of the past and a future both feared and desired. It seeks to collect a drop of what the Chinese body can provide — culture, technology, sex — and in turn, create a perverse reality with its voyeuristic eyes.\n\nHow can women of the Chinese diaspora reject and subsequently remake this techno-orientalist framework?\n\nEmbody the paradox of temporalities and collapse contrasting timescales into the present moment. Primordial, earth-forming goddess and futuristic robot condensed into one in the Now: the modern woman. Fetishization, subjugation by the malicious eye — we repair the wounds of our broken heavens with our molded clay bodies and the garments that adorn them.\n\nBy crafting modernized hanfu and qipao dresses, interweaving the histories of silk and brocade with technology, the Chinese body is situated in all timeframes, toppling the binarist narrative generated by the West. Placed before the public eye, Nüwa asks the audience to confront the simultaneous pleasure and discomfort of the techno-Orientalist paradigm.',
    tags: ['Fashion', 'Hardware'],
    details: {
      year: 'Spring 2024',
      role: 'Solo',
      mediums: 'Brocade, Silk, LEDs',
    },
    images: [{ src: getImg('/src/assets/projects/nuwa/gallery.webp'), layout: 'full' }],
  },
  {
    id: 8,
    title: 'Color Me Noisy',
    category: 'Tech',
    thumbnail: getImg('/src/assets/projects/color-me-noisy/thumbnail.webp'),
    description: 'Reimplementation of an example-based pipeline for hand-colored animation rendering.',
    fullDescription: 'For CSCI 2240: Advanced Computer Graphics, we reimplemented the paper Color Me Noisy: Example-based Rendering of Hand-colored Animations with Temporal Noise Control. The method stylizes 3D animations with the appearance of hand-colored 2D artwork by transferring the visual characteristics of an example texture while maintaining temporal consistency across animation frames.\n\nThe implementation follows a multi-scale synthesis pipeline, progressively refining each frame from coarse to fine resolutions to propagate texture appearance while reducing flickering between consecutive frames. Core components include image pyramid construction, predeformation, patch-based texture synthesis using PatchMatch, and iterative upsampling and refinement to produce temporally stable, stylized animations. My primary contribution was implementing the bilinear interpolation used in the upsampling and downsampling stages of the image pyramid.\n\nIn collaboration with Sherry Zhang, Lexi Henrion, and Apoorva Talwalkar.',
    tags: ['Graphics'],
    details: {
      year: 'Spring 2025',
      role: 'Bilinear Interpolation, Image Pyramid',
      mediumsLabel: 'Language',
      mediums: 'C++',
    },
    links: [
      { label: 'Color Me Noisy Paper', url: 'https://cragl.cs.gmu.edu/noisy/' },
      { label: 'GitHub', url: 'https://github.com/Lenrion/ColorMeNoisy' },
    ],
    images: [
      { type: 'video', src: getImg('/src/assets/projects/color-me-noisy/color-me-noisy.mp4') },
    ],
  },
  {
    id: 5,
    title: 'Spirit Oasis',
    category: 'Tech',
    thumbnail: getImg('/src/assets/projects/spirit-oasis/thumbnail.webp'),
    description: 'A reimagined 3D scene from Avatar: The Last Airbender with realistic water and lighting',
    fullDescription:
      "This project is a reimagination of a scene in the episode 'The Siege of the North' from Avatar: the Last Airbender. In the Spirit Oasis, two koi fish Tui and La maintain the balance between the Earth and the Moon. When the fish are disturbed, chaos ensues.\n\nUsing ThreeJS and Blender, we modeled this scene using realistic water effects, lighting changes, and koi fish interaction.\n\nIn collaboration with Claire Yang, Beatrice Hoang, and Joe Maffa.",
    tags: ['Graphics', 'Modeling'],
    details: {
      year: 'Fall 2024',
      role: 'Procedural Water + Grass, Custom Watercolor Toon Shading, 3D Modeling',
      mediums: 'Three.js, Blender, GLSL',
    },
    images: [{ type: 'iframe', src: 'https://spirit-oasis.vercel.app/', layout: 'full' }],
  },
  {
    id: 7,
    title: 'Wet Dream',
    category: 'Art',
    thumbnail: getImg('/src/assets/projects/wet-dream/wet-dream-thumbnail.webp'),
    description: 'A surreal 3D animated film inspired by ecofeminism and Eastern folklore.',
    fullDescription: 'Wet Dream aims to visualize the interconnection of bodily and botanical visions as a form of liberating the female body by representing it through digitally crafted natural and surreal landscapes. We explore this imagery through the lens of eco-feminism and techno-orientalism – taking heavy inspiration from Eastern folktales as a way of exploring how we\'ve historically imagined and understood the female body and its relationship to nature.\n\nThrough layered symbols, the film aims to visualize the spiritual and cultural significance of botanical history while critiquing and expanding upon the representations of femininity.\n\nDirected by Anita Yen and Erin Xi · Produced by Erin Xi and Helen Lu · Original Music by Morning Close · 3D Artists: Anita Yen, Erin Xi, Vivian Li, Winnie Yi · Choreographer: Julia Fu',
    tags: ['Animation', 'Modeling'],
    details: {
      year: 'Spring 2024',
      role: '3D Artist',
      mediums: 'Blender, Unreal, Marvelous Designer',
    },
    images: [
      { type: 'video', src: getImg('/src/assets/projects/wet-dream/wet-dream.mp4') },
    ],
  },
];
