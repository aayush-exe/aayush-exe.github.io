import React from 'react';
import { ProjectExpansionBase } from './ProjectExpansionBase';
// Import your images here
// import goatcodeImg1 from "../assets/img/goatcode/image1.jpg";

export const GoatCode = ({ arrowPosition = 50 }) => {
  const badges = [
    { text: "Education Platform", variant: "primary" },
    { text: "React", variant: "primary" },
    { text: "Firebase", variant: "primary" },
    // Add more badges as needed
  ];

  const paragraphs = [
    "Add your GoatCode project description here...",
    // Add more paragraphs as needed
  ];

  const mediaItems = [
    // Example:
    // { type: 'image', src: goatcodeImg1, alt: 'GoatCode', top: '0', height: '300px' },
  ];

  return (
    <ProjectExpansionBase 
      arrowPosition={arrowPosition}
      title="GoatCode"
      badges={badges}
      paragraphs={paragraphs}
      mediaItems={mediaItems}
    />
  );
};
