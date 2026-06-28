import { getImg } from '../utils/imageLoader';
import diceplayPaper from '../assets/papers/SIG-2026-DicePlay.pdf';
import naturePaper from '../assets/papers/Nature-2025-SingleFibre.pdf';
import stitchswitchTeaser from '../assets/images/stitchswitch/main-teaser.png';

export const publications = [
  {
    id: 'stitchswitch',
    title: 'StitchSwitch: Programmable Surface Deformation and Bistability in Embroidered Textiles',
    authors: 'Vivian Li, Milin Kodnongbua, Heather Robertson, Yiyue Luo, Adriana Schulz',
    venue: 'UIST (Accepted) • 2026',
    thumbnail: stitchswitchTeaser,
    thumbnailFit: 'contain',
    pageUrl: null,
    paperUrl: null,
  },
  {
    id: 'diceplay',
    title: 'Diceplay: A Modular Canvas for Physical Image Composition',
    authors: 'Milin Kodnongbua, Zihan Jack Zhang, Shishi Xiao, Vivian Li, Heather Robertson, Rulin Chen, David Laidlaw, Adriana Schulz',
    venue: 'SIGGRAPH • 2026',
    thumbnail: getImg('/src/assets/images/diceplay/2026-diceplay.png'),
    thumbnailFit: 'contain',
    pageUrl: 'https://www.computationaldesign.group/publications/diceplay',
    paperUrl: diceplayPaper,
  },
  {
    id: 'nature',
    title: 'A single-fibre computer enables textile networks and distributed inference',
    authors:
      'Nikhil Gupta, Henry Cheung, Syamantak Payra, Gabriel Loke, Jenny Li, Yongyi Zhao, Latika Balachander, Ella Son, Vivian Li, Samuel Kravitz, Sehar Lohawala, John Joannopoulos & Yoel Fink',
    venue: 'Nature • 2025',
    thumbnail: getImg('/src/assets/images/single-fibre/dither_it_figure-1.png'),
    thumbnailFit: 'cover',
    pageUrl: 'https://www.nature.com/articles/s41586-024-08568-6',
    paperUrl: naturePaper,
  },
];
