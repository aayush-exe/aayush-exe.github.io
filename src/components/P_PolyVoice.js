import React from 'react';
import { ProjectExpansionBase, LinkStyle } from './ProjectExpansionBase';
import hackocImg from "../assets/img/polyvoice/HackocW.jpg";

export const PolyVoice = ({ arrowPosition = 50 }) => {
  const badges = [
    { text: "Python", variant: "primary" },
    { text: "OpenAI API", variant: "primary" },
    { text: "DeepL API", variant: "primary" },
    { text: "PyAudio", variant: "primary" },
    { text: "PySimpleGUI", variant: "primary" },
    { text: "Hackathon", variant: "success" },
    { text: "Project Management", variant: "success" }
  ];

  const paragraphs = [
    
    <>During the <LinkStyle href="https://hackoc.org/">HackOC Hackathon</LinkStyle> in May 2023, I teamed up with three friends to create PolyVoice, a live voice translation app targeted at gamers to break down language barriers through real-time speech conversion. With only 12 hours to build a working prototype, we focused on creating a strong back-end with a user interface that could select a certain language and translate spoken English into the target language in real time. Our hard work paid off when PolyVoice was voted the best app at the hackathon, earning us first place and a $5,000 prize (four Framework laptops). This project helped me get more comfortable with rapid prototyping and collaborative development under tight time constraints while keeping our schedule on track. I also got more experience with integrating multiple APIs alongside a GUI for speech recognition and translation.</>
    ,
    <>PolyVoice was built using Python, since it was the language our group was most comfortable with. First, the app captures the user's voice input through a microphone, which I implemented using Python's PyAudio library to handle real-time audio recording and file management. The recorded audio is then sent to OpenAI's Whisper API for speech recognition, which converts the spoken words into text. This text is subsequently translated using DeepL's API, which we chose for its ability to produce conversational and natural-sounding translations rather than literal word-for-word conversions. This is important in a gaming context since many words and phrases between languages don't translate directly, so choosing an API that delivers natural-sounding translations helps ease the gap. To make the app user-friendly, we also made a simple GUI using PySimpleGUI to create a dropdown menu allowing users to select their target language from six options. The translated text is then converted back into speech using Narakeet and fed into a virtual microphone set up on the computer.</>,
    
    <>Working within the 12-hour hackathon timeframe presented significant challenges, particularly around team collaboration and audio device management. We used Visual Studio's Live Share feature to collaborate on the Python codebase in real-time, which initially caused some issues with determining which team member's computer should handle audio input and output. For the presentation portion of the hackathon, we created a <LinkStyle href="https://aayushsehgal16.wixsite.com/hackoc">demo website</LinkStyle> to showcase PolyVoice's goals and our motivations behind the project during the presentation. While the app contains some bugs due to the compressed development timeline, we were able to deliver a live product presentation for everyone to try during the presentation stage, and the project was an invaluable learning experience in rapid API integration, Python library usage, and building functional prototypes under pressure. You can check out the full project on <LinkStyle href="https://github.com/thenicsusanto/OC-Hackathon-Voice-Converter">GitHub</LinkStyle> to see how we brought this idea to life in just half a day.</>
  ];

  const mediaItems = [
    { type: 'image', src: hackocImg, alt: 'HackOC 2023', top: '0', width: '85%', height: 'auto', objectFit: 'contain' },
    { type: 'video', src: 'https://www.youtube.com/embed/_9Xg-sea4P4', title: 'PolyVoice Demo', top: '400px', width: '85%', height: '240px' }
  ];

  return (
    <ProjectExpansionBase 
      arrowPosition={arrowPosition}
      title="PolyVoice (HackOC 2023 1st Place, $5,000 Prize)"
      badges={badges}
      paragraphs={paragraphs}
      mediaItems={mediaItems}
    />
  );
};
