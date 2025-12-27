const imageModules = import.meta.glob('../portfolio-images/**', {
    eager: true,
    as: 'url'
  });
  
  export const getImg = (p) => {
    if (!p) return '';
    const normalized = p
      .replace(/^\.?\/?src\/portfolio-images\/?/, '')
      .replace(/^\.?\/?portfolio-images\/?/, '');
    const key = `../portfolio-images/${normalized}`;
    return imageModules[key] || '';
  };
  
  export const portfolioItems = [
    {
      id: 1,
      slug: "aerial-reverie",
      title: "Aerial Reverie",
      category: "Tech",
      thumbnail: getImg("/src/portfolio-images/aerial-reverie/thumbnail.jpg"),
      description:
        "An immersive VR storyworld illuminated by coordinated Crazyflie drone flight paths",
      fullDescription:
        "Aerial Reverie is an immersive VR storyworld illuminated by the motion of Crazyflie drones, their coordinated flight paths controlled via Python and ROS. The choreographed trajectories assemble a dynamic cityscape that becomes both simulation and narrative device, examining collective intelligence, industrial expansion, and the tension between nature, home, and rapidly evolving built environments.",
      details: {
        year: "2024",
        role: "",
        mediums: "Python, ROS, VR, Crazyflie Drones",
      },
      images: [
        { placeholder: "Hero Image", layout: "full" },
        { placeholder: "Detail 1", layout: "half" },
        { placeholder: "Detail 2", layout: "half" },
        { placeholder: "Process", layout: "third" },
        { placeholder: "Process 2", layout: "third" },
        { placeholder: "Process 3", layout: "third" },
      ],
    },
  
    {
      id: 2,
      slug: "pawlink",
      title: "PawLink",
      category: "Tech",
      thumbnail: getImg("/src/portfolio-images/pawlink/thumbnail.png"),
      description:
        "Smart-fabric collar with embedded sensors for continuous animal health monitoring",
      fullDescription:
        "PawLink is an integrated smart-fabric collar that leverages thermally drawn fiber technology...",
      details: {
        year: "2024",
        role: "Software & Hardware Integration, Product Design",
        mediums: "Thermally Drawn Fibers, ML, Embedded Sensors",
      },
      images: [
        { src: getImg("/src/portfolio-images/pawlink/pawlink.png"), layout: "full" },
      ],
    },
  
    {
      id: 3,
      slug: "aligned",
      title: "Aligned",
      category: "Tech",
      thumbnail: getImg("/src/portfolio-images/aligned/thumbnail.jpg"),
      description:
        "Smart-fabric posture-sensing system with real-time ML-based detection and haptic feedback",
      fullDescription:
        "Aligned is a smart-fabric posture-sensing system integrating a custom PCB...",
      details: {
        year: "2024",
        role: "",
        mediums: "Custom PCB, I²C, ML, Haptic Feedback",
      },
      images: [
        { placeholder: "Hero", layout: "full" },
        { placeholder: "Detail 1", layout: "half" },
        { placeholder: "Detail 2", layout: "half" },
      ],
    },
  
    {
      id: 4,
      slug: "kinetic-pixels",
      title: "Kinetic Pixels",
      category: "Tech",
      thumbnail: "",
      description:
        "A reimagined 3D scene from Avatar: The Last Airbender coded in Three.js",
      fullDescription:
        "A reimagination of a scene in the episode 'The Siege of the North'...",
      details: {
        year: "2025",
        role: "",
        mediums: "Three.js, Blender, GLSL",
      },
      images: [
        {
          type: "iframe",
          src: "https://spirit-oasis.vercel.app/",
          layout: "full",
        },
      ],
    },
  
    {
      id: 5,
      slug: "spirit-oasis",
      title: "Spirit Oasis",
      category: "Tech",
      thumbnail: getImg("/src/portfolio-images/spirit-oasis/thumbnail.png"),
      description:
        "A reimagined 3D scene from Avatar: The Last Airbender with realistic water and lighting",
      fullDescription:
        "This project is a reimagination of a scene in the episode 'The Siege of the North'...",
      details: {
        year: "2023",
        role: "",
        mediums: "Three.js, Blender, GLSL",
      },
      images: [
        {
          type: "iframe",
          src: "https://spirit-oasis.vercel.app/",
          layout: "full",
        },
      ],
    },
  
    {
      id: 6,
      slug: "nuwa",
      title: "NÜWA",
      category: "Fashion",
      thumbnail: getImg("/src/portfolio-images/nuwa/thumbnail.png"),
      description:
        "Modernized hanfu and qipao challenging techno-Orientalist narratives through textile craft",
      fullDescription:
        "Showcased at Fashion@Brown Runway Show 2024 & Rhode Island Fashion Week 2024...",
      details: {
        year: "2024",
        role: "",
        mediums: "Textile Design, Fashion, Cultural Commentary",
      },
      images: [
        { placeholder: "Runway 1", layout: "third" },
        { placeholder: "Runway 2", layout: "third" },
        { placeholder: "Runway 3", layout: "third" },
        { placeholder: "Detail Shot", layout: "full" },
        { placeholder: "Close-up 1", layout: "half" },
        { placeholder: "Close-up 2", layout: "half" },
      ],
    },
  ];
  