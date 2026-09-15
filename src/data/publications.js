import { getImg } from '../utils/imageLoader';
import stitchswitchPaper from "../assets/papers/UIST-2026-StitchSwitch.pdf";
import diceplayPaper from '../assets/papers/SIG-2026-DicePlay.pdf';
import naturePaper from '../assets/papers/Nature-2025-SingleFibre.pdf';
import stitchswitchTeaser from '../assets/images/stitchswitch/main-teaser-nosleeve.png';

export const publications = [
  {
    id: 'stitchswitch',
    title: 'StitchSwitch: Programmable Surface Deformation and Bistability in Embroidered Textiles',
    authors: 'Vivian Li, Milin Kodnongbua, Heather Robertson, Yiyue Luo, Adriana Schulz',
    venueName: 'ACM UIST',
    status: 'To Appear',
    year: 2026,
    thumbnail: stitchswitchTeaser,
    thumbnailFit: 'contain',
    pageUrl: null,
    paperUrl: stitchswitchPaper,
  },
  {
    id: 'diceplay',
    title: 'Diceplay: A Modular Canvas for Physical Image Composition',
    authors: 'Milin Kodnongbua*, Zihan Jack Zhang*, Shishi Xiao*, Vivian Li, Heather Robertson, Rulin Chen, David Laidlaw, Adriana Schulz',
    venueName: 'ACM SIGGRAPH',
    year: 2026,
    thumbnail: getImg('/src/assets/images/diceplay/2026-diceplay.png'),
    thumbnailFit: 'contain',
    pageUrl: 'https://www.computationaldesign.group/publications/diceplay',
    doiUrl: 'https://doi.org/10.1145/3799902.3811206',
    paperUrl: diceplayPaper,
  },
  // {
  //   id: 'perceptual',
  //   title: 'Perceptual Sculptures: Computational Design of View-Dependent Hanging Art',
  //   authors: 'Christopher Mok, Vivian Li, Ashton Glover, Chaewon Bae, Adriana Schulz, Milin Kodnongbua',
  //   venueName: 'ACM Symposium on Computational Fabrication (SCF)',
  //   status: 'Conditionally Accepted',
  //   year: 2026,
  //   thumbnail: getImg('/src/assets/images/perceptual-sculpture/teaser.png'),
  //   thumbnailFit: 'contain',
  //   pageUrl: null,
  //   paperUrl: null,
  // },
  // {
  //   id: 'tunnelbook',
  //   title: 'Computational Design of Tunnel Books',
  //   authors: 'Zihan Jack Zhang, Apoorva Talwalkar, Vivian Li, Jaclyn Cohen, Nicole Sanchez-Soto, James Tompkin, Adriana Schulz',
  //   venueName: 'ACM Symposium on Computational Fabrication (SCF)',
  //   status: 'Conditionally Accepted',
  //   year: 2026,
  //   thumbnail: getImg('/src/assets/images/tunnel-book/fig_teaser.png'),
  //   thumbnailFit: 'contain',
  //   pageUrl: null,
  //   paperUrl: null,
  // },
  {
    id: 'nature',
    title: 'A single-fibre computer enables textile networks and distributed inference',
    authors:
      'Nikhil Gupta, Henry Cheung, Syamantak Payra, Gabriel Loke, Jenny Li, Yongyi Zhao, Latika Balachander, Ella Son, Vivian Li, Samuel Kravitz, Sehar Lohawala, John Joannopoulos & Yoel Fink',
    venueName: 'Nature',
    year: 2025,
    thumbnail: getImg('/src/assets/images/single-fibre/dither_it_figure-1.png'),
    thumbnailFit: 'cover',
    pageUrl: null,
    doiUrl: 'https://doi.org/10.1038/s41586-024-08568-6',
    paperUrl: naturePaper,
  },
];
