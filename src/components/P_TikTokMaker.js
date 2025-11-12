import React from 'react';
import { ProjectExpansionBase } from './ProjectExpansionBase';
// Import your images here
// import tiktokImg1 from "../assets/img/tiktok/image1.jpg";

export const TikTokMaker = ({ arrowPosition = 50 }) => {
  const badges = [
    { text: "Python", variant: "primary" },
    { text: "OpenAI API", variant: "primary" },
    { text: "Video Editing", variant: "primary" },
    { text: "Automation", variant: "primary" },
    // Add more badges as needed
  ];

  const paragraphs = [
    "Add your Automated TikTok Video Maker project description here...",
    // Add more paragraphs as needed
  ];

  const mediaItems = [
    // Example:
    // { type: 'image', src: tiktokImg1, alt: 'TikTok Maker', top: '0', height: '180px' },
  ];

  return (
    <ProjectExpansionBase 
      arrowPosition={arrowPosition}
      title="Automated TikTok Video Maker"
      badges={badges}
      paragraphs={paragraphs}
      mediaItems={mediaItems}
    />
  );
};
