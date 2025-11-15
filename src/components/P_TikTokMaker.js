import React from 'react';
import { ProjectExpansionBase, LinkStyle } from './ProjectExpansionBase';
// Import your images here
// import tiktokImg1 from "../assets/img/tiktok/image1.jpg";

export const TikTokMaker = ({ arrowPosition = 50 }) => {
  const badges = [
    { text: "Python", variant: "primary" },
    { text: "MoviePy", variant: "primary" },
    { text: "Amazon AWS", variant: "primary" },
    { text: "OpenAI API", variant: "primary" },
    { text: "BeautifulSoup", variant: "primary" },
    { text: "Raspberry Pi", variant: "primary" },
    { text: "Google Drive API", variant: "primary" },
  ];

  const paragraphs = [
    "This was a fun side project born out of self-awareness about my TikTok addiction—specifically those videos featuring Minecraft parkour gameplay in the background while narrating Reddit stories with perfectly-timed captions. I realized these videos were incredibly engaging despite their simple format, and thought it would be interesting to automate the entire creation process. The goal was twofold: first, to convert anything I wanted to read into an engaging video format for personal entertainment, and second, to explore the potential of posting popular stories automatically to generate passive income through social media monetization.",

    <>I built a comprehensive automation pipeline using Python along with several APIs working in tandem to handle the complete video creation workflow. The system can either scrape stories directly from Reddit or accept custom text input, then automatically converts the text to speech with generated subtitles. The captions are intelligently paced to match the narration timing, with animations and visual effects added to maintain viewer engagement throughout the video. Once the video is fully edited and rendered, it's automatically uploaded to Google Drive for storage and potential distribution. I also integrated Discord functionality that allows users to send video requests through Discord channels and automatically receive the completed video uploaded directly from Google Drive. You can check out the full implementation and technical details on <LinkStyle href="https://github.com/aayush-exe/reddit-videomaker">GitHub</LinkStyle>.</>,

    "I'm currently working on taking this automation to the next level by fully offloading the video processing to a Raspberry Pi. The vision is to have a dedicated device that generates videos completely autonomously every day, creating a self-sustaining content pipeline with real monetization potential. However, this has proven challenging due to the Raspberry Pi's limited processing power for video rendering and the inaccessibility of some existing video editing libraries on ARM architecture. I'm exploring optimization techniques and alternative libraries to make this fully automated daily video generation system a reality, which would be a fascinating demonstration of edge computing applied to content creation."
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
