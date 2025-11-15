import React from 'react';
import { ProjectExpansionBase, LinkStyle } from './ProjectExpansionBase';
import goatcodeSs1 from "../assets/img/goatcode/ss1.png";
import goatcodeSs2 from "../assets/img/goatcode/ss2.png";
import goatcodeSs3 from "../assets/img/goatcode/ss3.png";
import goatcodeSs4 from "../assets/img/goatcode/ss4.png";

export const GoatCode = ({ arrowPosition = 50 }) => {
  const badges = [
    { text: "Swift", variant: "primary" },
    { text: "iOS Development", variant: "primary" },
    { text: "UI/UX Design", variant: "primary" },
    { text: "Python", variant: "primary" },
    { text: "Education Outreach", variant: "primary" }

  ];

  const paragraphs = [
    "GoatCode was an iOS educational app designed to help ESL (English as a Second Language) students learn Python programming in an interactive and accessible way. Recognizing that traditional coding education often presents language barriers for non-native English speakers, we built a platform that supports five different languages, making Python fundamentals approachable for a global audience. I worked with a team of three other friends on this project, where I led the programming efforts and spearheaded the UX design to ensure the app was both visually engaging and intuitive to navigate.",

    "We developed GoatCode using Swift for iOS, focusing on creating an interactive learning experience that went beyond simple tutorial content. One of the biggest challenges was designing an elegant system for knowledge checks and learning pathways that could effectively teach programming concepts while remaining accessible to ESL learners. This required careful consideration of visual communication, simplified explanations, and progressive difficulty curves that didn't rely heavily on complex English vocabulary. Through this process, I gained invaluable experience in UI/UX design principles, particularly around designing for diverse user backgrounds and learning styles.",

    <>We successfully launched the app on the App Store and received over 1,500 downloads from students worldwide, demonstrating the global need for multilingual programming education. Unfortunately, we had to later remove GoatCode from the App Store due to ongoing maintenance and hosting costs that became unsustainable for our student team. However, the project remains one of my most rewarding experiences in educational technology, and the complete source code is available on <LinkStyle href="https://github.com/savagesausage04/GoatCode">this GitHub</LinkStyle> for anyone interested in exploring the codebase or building upon our work to create similar educational tools.</>
  ];

  const mediaItems = [
    { type: 'image', src: goatcodeSs1, alt: 'GoatCode Screenshot 1', top: '0', left: '-40px', width: '25%', height: 'auto', objectFit: 'contain' },
    { type: 'image', src: goatcodeSs2, alt: 'GoatCode Screenshot 2', top: '0', left: '15px', width: '25%', height: 'auto', objectFit: 'contain' },
    { type: 'image', src: goatcodeSs3, alt: 'GoatCode Screenshot 3', top: '300px', left: '260px', width: '25%', height: 'auto', objectFit: 'contain' },
    { type: 'image', src: goatcodeSs4, alt: 'GoatCode Screenshot 4', top: '300px', left: '80px', width: '25%', height: 'auto', objectFit: 'contain' }
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
