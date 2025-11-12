import React from 'react';
import { ProjectExpansionBase } from './ProjectExpansionBase';
// Import your images here
// import doorBotImg1 from "../assets/img/doorbot/image1.jpg";

export const DoorBot = ({ arrowPosition = 50 }) => {
  const badges = [
    { text: "Arduino IDE", variant: "primary" },
    { text: "Discord API", variant: "primary" },
    { text: "Webhook Integration", variant: "primary" },
    { text: "IoT", variant: "primary" }
  ];

  const paragraphs = [
    "This automation project solved a recurring problem for my project team. We relied on manual updates about our lab's open/closed status on Discord, but since this system was unreliable, team members frequently made unnecessary trips to the lab because the Discord status wasn't kept up to date. At first, I attempted to use my Arduino device as an IoT device, but I had trouble connecting it to the network on the college campus since it automatically blocked any unrecognized IoT devices. Instead, I switched over to using Discord's webhook API, creating an automated system that posts real-time status updates whenever the lab door opens or closes.",
    
    "The implementation uses a simple limit switch mounted on the door frame to detect door state changes, with the Arduino monitoring the switch and triggering HTTP POST requests to a Discord webhook endpoint. Ever since its installation in April, the status of our lab has been updating automatically with no errors so far! This project was a great demonstration of interfacing simple hardware sensors with web API integration to automate simple manual processes."
  ];

  const mediaItems = [
    // Example:
    // { type: 'image', src: doorBotImg1, alt: 'DoorBot', top: '0', height: '180px' },
    // { type: 'video', src: 'https://www.youtube.com/embed/VIDEO_ID', title: 'DoorBot Demo', top: '220px', height: '240px' }
  ];

  return (
    <ProjectExpansionBase 
      arrowPosition={arrowPosition}
      title="DoorBot"
      badges={badges}
      paragraphs={paragraphs}
      mediaItems={mediaItems}
    />
  );
};
