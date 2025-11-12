import React from 'react';
import { ProjectExpansionBase } from './ProjectExpansionBase';
// Import your images here when you have them
// import micromouseImg1 from "../assets/img/micromouse/image1.jpg";

export const Micromouse = ({ arrowPosition = 50 }) => {
  const badges = [
    { text: "STM32", variant: "primary" },
    { text: "C Programming", variant: "primary" },
    { text: "KiCAD", variant: "primary" },
    { text: "PCB Design", variant: "primary" },
    { text: "PID Control", variant: "primary" },
    { text: "IR Sensors", variant: "primary" },
    { text: "Floodfill Algorithm", variant: "primary" }
  ];

  const paragraphs = [
    "During the 2024-2025 academic year, I designed and built a small maze-solving robot from scratch as part of my embedded systems coursework. The Micromouse project challenged me to integrate circuit-level logic, embedded programming, and algorithmic problem-solving to create an autonomous robot capable of dynamically navigating and solving a maze using infrared sensors.",
    
    "The hardware design was a complete ground-up build. I designed both the schematic and PCB layout for the onboard sensor systems using KiCAD, ensuring proper signal routing, power distribution, and component placement for the compact form factor required by competition standards. The PCB integrated motor drivers, sensor arrays, power management, and the STM32 microcontroller, all while maintaining minimal size and weight constraints.",
    
    "On the software side, I programmed the entire embedded system using STM32 Cube IDE in C. This included implementing a robust PID control system for precise turning and target-following behavior, allowing the robot to maintain consistent wall-following and accurate corner navigation. The maze-solving logic utilized a floodfill algorithm to map unknown mazes efficiently and find the optimal path to the center. The combination of real-time sensor processing, control theory, and algorithmic thinking made this project an excellent exercise in full-stack robotics development."
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
