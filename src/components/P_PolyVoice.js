import React from 'react';
import { ProjectExpansionBase } from './ProjectExpansionBase';
// Import your images here
// import polyvoiceImg1 from "../assets/img/polyvoice/image1.jpg";

export const PolyVoice = ({ arrowPosition = 50 }) => {
  const badges = [
    { text: "Hackathon Winner", variant: "primary" },
    { text: "Real-time Translation", variant: "primary" },
    { text: "Voice Recognition", variant: "primary" },
    { text: "1st Place @HackOC", variant: "success" },
    // Add more badges as needed
  ];

  const paragraphs = [
    "Add your PolyVoice project description here. Won 1st Place at HackOC with $5,000 prize...",
    // Add more paragraphs as needed
  ];

  const mediaItems = [
    // Example:
    // { type: 'image', src: polyvoiceImg1, alt: 'PolyVoice', top: '0', height: '180px' },
  ];

  return (
    <ProjectExpansionBase 
      arrowPosition={arrowPosition}
      title="PolyVoice"
      badges={badges}
      paragraphs={paragraphs}
      mediaItems={mediaItems}
    />
  );
};
