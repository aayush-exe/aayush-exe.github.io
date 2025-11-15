import React from 'react';
import { ProjectExpansionBase, LinkStyle } from './ProjectExpansionBase';
import couchSkel from "../assets/img/couch/couch_skel.jpeg";
import couchStill from "../assets/img/couch/couch_still.jpeg";

export const DrivableCouch = ({ arrowPosition = 50 }) => {
  const badges = [
    
    { text: "Electric Vehicle", variant: "primary" },
    { text: "EV Power Management Systems", variant: "primary" },
    { text: "PID Control", variant: "primary" },
    { text: "C", variant: "primary" },
    { text: "C++", variant: "primary" },
    { text: "Regenerative Braking", variant: "primary" },
    { text: "Manufacturing", variant: "primary" },
    { text: "Content Creation", variant: "primary" },
    { text: "Project Management", variant: "primary" }

  ];

  const paragraphs = [
    "During Summer 2024, I led the engineering design and construction of a fully functional electric couch, which was essentially a high-powered electric scooter platform disguised as furniture. With a three-person team, we integrated dual 1500W brushless motors controlled by two 100A FlipSky ESCs, coordinated through an ESP32 microcontroller receiving wireless input from a modified Wiimote controller. Since this was a completely custom build without any reference designs, every aspect of the system required ground-up problem-solving: establishing reliable communication protocols between the ESP32 and ESCs, implementing robust power distribution for the 3kW dual-motor system, and ensuring synchronized motor operation for stable vehicle dynamics. This project provided deep hands-on experience with electric vehicle power management, real-time embedded control systems, and the iterative debugging process required when integrating unfamiliar hardware at high power levels.",
    
    "The control system for the speeds of the motors was a big challenge. The two ESCs had to operate independently without communication with one another, since the serial port was occupied by the ESP32 itself. Additionally, our steering system relied on simple speed modulation instead of a physical steering column, so speed matching between the two motors was important to ensure it can drive straight. As a workaround, I developed and tuned a custom PID control algorithm running on the ESP32 to maintain speed matching between motors and provide auto-straightening functionality, preventing the vehicle from veering during operation. Additionally, I implemented regenerative braking control, increasing the range from 6 miles to 10 miles (measured with a 2-person load).",
    
    <>The project gained unexpected traction when our team revisited it in summer 2025. We created some educational engineering content for <LinkStyle href="https://www.instagram.com/garage_goblins_">Instagram</LinkStyle>, <LinkStyle href="https://www.tiktok.com/@garage_goblins_">TikTok</LinkStyle>, and <LinkStyle href="https://www.youtube.com/@garage_goblins/shorts">YouTube</LinkStyle> about the project that accumulated over 15 million views and growing our following to 40,000 followers. This success drove us to add more technical innovations and improvements to the platform, with seatbelts, turn signals/brake lights, and off-road capabilities being a few. The success of our platform also brought collaborations with established content creators, including <LinkStyle href="https://youtu.be/7jc4RYlRAsE?si=UPrq0xVc8f3z8pm2">Family Friendly</LinkStyle> and <LinkStyle href="https://www.instagram.com/reel/DN1AQ2GXju4/">Keys to the Jungle</LinkStyle>, to promote engineering education and inspire the next generation of makers. Working on this project was truly an unforgettable experience that demonstrated how technical projects can both develop engineering skills and soft skills through explaining communicating complex concepts to broader audiences with social media. Our team is excited to continue to create more projects and videos on our channel in the upcoming summer!</>
  ];

  const mediaItems = [
    { type: 'image', src: couchStill, alt: 'Motorized Couch', top: '0', width: '70%', height: 'auto', objectFit: 'contain' },
    { type: 'image', src: couchSkel, alt: 'Couch Frame', top: '320px', width: '70%', height: 'auto', objectFit: 'contain' },
    { type: 'video', src: 'https://www.youtube.com/embed/lW1N-u-RgjY', title: 'Motorized Couch Video', top: '620px', width: '70%', height: '200px' }
  ];

  return (
    <ProjectExpansionBase 
      arrowPosition={arrowPosition}
      title="Motorized Couch"
      badges={badges}
      paragraphs={paragraphs}
      mediaItems={mediaItems}
    />
  );
};