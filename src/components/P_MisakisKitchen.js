import React from 'react';
import { ProjectExpansionBase } from './ProjectExpansionBase';
// Import your images here
// import misakiImg1 from "../assets/img/misaki/image1.jpg";

export const MisakisKitchen = ({ arrowPosition = 50 }) => {
  const badges = [
    { text: "Hackathon Winner", variant: "primary" },
    { text: "UI/UX Design", variant: "primary" },
    { text: "Recipe App", variant: "primary" },
    { text: "Best Design", variant: "success" },
    { text: "3rd @Hack The Wave", variant: "success" },
    // Add more badges as needed
  ];

  const paragraphs = [
    "Add your Misaki's Kitchen project description here. Won Best Design and 3rd Place at Hack The Wave with $500 prize...",
    // Add more paragraphs as needed
  ];

  const mediaItems = [
    // Example:
    // { type: 'image', src: misakiImg1, alt: "Misaki's Kitchen", top: '0', height: '180px' },
  ];

  return (
    <ProjectExpansionBase 
      arrowPosition={arrowPosition}
      title="Misaki's Kitchen"
      badges={badges}
      paragraphs={paragraphs}
      mediaItems={mediaItems}
    />
  );
};
