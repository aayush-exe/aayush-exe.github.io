import React from 'react';
import { ProjectExpansionBase } from './ProjectExpansionBase';
// Import your images here
// import tustincodeImg1 from "../assets/img/tustincode/image1.jpg";

export const TustinCode = ({ arrowPosition = 50 }) => {
  const badges = [
    { text: "React", variant: "primary" },
    { text: "Web Development", variant: "primary" },
    { text: "Education", variant: "primary" },
    // Add more badges as needed
  ];

  const paragraphs = [
    "Add your tustincode.com Website project description here...",
    // Add more paragraphs as needed
  ];

  const mediaItems = [
    // Example:
    // { type: 'image', src: tustincodeImg1, alt: 'TustinCode Website', top: '0', height: '300px' },
  ];

  return (
    <ProjectExpansionBase 
      arrowPosition={arrowPosition}
      title="tustincode.com Website"
      badges={badges}
      paragraphs={paragraphs}
      mediaItems={mediaItems}
    />
  );
};
