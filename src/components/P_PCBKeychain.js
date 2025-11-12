import React from 'react';
import { ProjectExpansionBase } from './ProjectExpansionBase';
// Import your images here when you have them
// import keychainImg1 from "../assets/img/keychain/image1.jpg";

export const PCBKeychain = ({ arrowPosition = 50 }) => {
  const badges = [
    { text: "Altium Designer", variant: "primary" },
    { text: "PCB Design", variant: "primary" },
    { text: "SPICE Simulation", variant: "primary" },
    { text: "Reflow Soldering", variant: "primary" },
    { text: "SMT Assembly", variant: "primary" }
  ];

  const paragraphs = [
    "This LED keychain project was my first complete PCB design experience using Altium Designer, where I handled every phase from initial concept to final assembly. I initially got the idea to make this after struggling to find Christmas gifts for my friends, and a workshop I went to recently covered some PCB manufacturing techniques which I found interesting. I've since gained a lot more experience with Altium Designer through a research lab at UCLA! The project successfully combined circuit design, PCB layout, simulation validation, and manufacturing execution into a single end-to-end development experience, and it was a great self-led introduction to hardware design.",
    
    "The circuit features a classic 555 timer in an astable configuration, which drives a 4017 decade counter IC, sequentially illuminating an array of LEDs in a chasing pattern. I used Altium Designer to create the schematic and PCB layout from scratch, which took some getting used to. I also performed full circuit validation using Altium's built-in SPICE simulation to verify the timing characteristics before fabrication. Since the board shape of the PCB wasn't rectangular, placing and wiring the components properly was a big challenge, especially since this was my first time with PCB layout. I also created custom silkscreen artwork for each board, personalizing the back of every keychain with individual messages for each of my friends.",
    
    "After the boards were manufactured, I gained hands-on experience with reflow soldering, using solder paste and stencils to place the components and using a reflow solder oven to finish the assembly process. While this manual assembly process was time-intensive compared to professional assembly services, it provided valuable insight into SMT manufacturing workflows and the practical considerations of scaling from prototype to small-batch production. Overall, this project was an excellent introduction to the end-to-end process of PCB design and assembly, and it sparked my interest in pursuing further hardware design projects in the future!"
  ];

  const mediaItems = [
    // Add your images/videos when ready:
    // { type: 'image', src: keychainImg1, alt: 'PCB Keychain Front', top: '0', height: '180px' },
    // { type: 'image', src: keychainImg2, alt: 'PCB Keychain Back', top: '220px', height: '180px' },
    // { type: 'image', src: keychainImg3, alt: 'Keychain Lit Up', top: '440px', height: '180px' }
  ];

  return (
    <ProjectExpansionBase 
      arrowPosition={arrowPosition}
      title="PCB Keychain"
      badges={badges}
      paragraphs={paragraphs}
      mediaItems={mediaItems}
    />
  );
};
