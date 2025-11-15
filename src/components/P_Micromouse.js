import React from 'react';
import { ProjectExpansionBase } from './ProjectExpansionBase';
// Import your images here when you have them
// import micromouseImg1 from "../assets/img/micromouse/image1.jpg";

export const Micromouse = ({ arrowPosition = 50 }) => {
  const badges = [
    { text: "STM32 Cube IDE", variant: "primary" },
    { text: "C Programming", variant: "primary" },
    { text: "PCB Design", variant: "primary" },
    { text: "PID Control", variant: "primary" },
    { text: "Sensor Processing", variant: "primary" },
    { text: "Embedded System Programming", variant: "primary" }
  ];

  const paragraphs = [
    "During the 2024-2025 academic year, I designed and built a small maze-solving robot alongside two other people through UCLA's IEEE club. The Micromouse project challenged me to integrate circuit-level logic, embedded programming, and algorithmic problem-solving to create an autonomous robot capable of navigating and solving a maze completely on its own using infrared sensors. With the help of IEEE's resources and mentorship, we developed a Micromouse that was capable of efficiently mapping and solving multiple maze configurations.",
    
    "The hardware design was created from the ground up. I designed both the schematic and PCB layout for the onboard sensors and motors using KiCAD, ensuring proper signal routing, power distribution, and component placement for the most compact form factor. The PCB integrated motor drivers, sensors, power management, and the STM32 microcontroller, all while maintaining minimal size and weight constraints.",
    
    "On the software side, we programmed the onboard STM32 using the STM32 Cube IDE in C. This included using signal processing techniques to analyze the obstacles around the mouse using IR light and implementing a PID control system for precise straight movement and turning on the corners. This allowed the robot to be consistent with wall-following and corner navigation, even in extremely long maze patterns. The maze-solving logic used a floodfill algorithm to map unknown mazes efficiently and find the optimal path to the center. The combination of real-time sensor processing, control theory, and algorithmic thinking made this project an excellent exercise in full-stack robotics development, and it was a great introduction to lower-level programming and the STM32 architecture."
  ];

  const mediaItems = [
    // Add your images/videos when ready:
    // { type: 'image', src: micromouseImg1, alt: 'Micromouse Robot', top: '0', height: '200px' },
    // { type: 'image', src: micromouseImg2, alt: 'PCB Design', top: '240px', height: '200px' },
    // { type: 'video', src: 'https://www.youtube.com/embed/VIDEO_ID', title: 'Micromouse Demo', top: '480px', height: '240px' }
  ];

  return (
    <ProjectExpansionBase 
      arrowPosition={arrowPosition}
      title="Micromouse Maze-Solving Robot"
      badges={badges}
      paragraphs={paragraphs}
      mediaItems={mediaItems}
    />
  );
};
