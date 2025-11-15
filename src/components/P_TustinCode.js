import React from 'react';
import { ProjectExpansionBase, LinkStyle } from './ProjectExpansionBase';
import lessonsImg from "../assets/img/website/lessons.png";
import lessonExampleImg from "../assets/img/website/lesson-example.png";
import flowchartImg from "../assets/img/website/flowchart.png";

export const TustinCode = ({ arrowPosition = 50 }) => {
  const badges = [
    { text: "WordPress", variant: "primary" },
    { text: "Web Development", variant: "primary" },
    { text: "HTML/CSS", variant: "primary" },
    { text: "Curriculum Development", variant: "primary" },
    { text: "Robotics", variant: "primary" }
  ];

  const paragraphs = [
    "During high school, I worked at a robotics summer camp for my district and noticed a significant gap in robotics-specific programming instruction for students. While the camp covered mechanical design and robot assembly, there wasn't a structured pathway for students to learn the programming skills needed to bring their robots to life. Recognizing this need, three other friends and I decided to create a comprehensive solution that would integrate seamlessly with the existing summer camp curriculum and provide students with the programming foundation they needed to succeed in robotics.",
    
    "We built tustincode.com from the ground up using WordPress, combined with custom HTML and CSS to create a user-friendly learning platform. The website featured a complete curriculum we developed ourselves, organized into three self-guided tracks that allowed students to progress at their own pace while learning programming concepts essential to robotics. The curriculum covered everything from basic programming fundamentals to advanced robot control systems, with interactive examples and exercises designed specifically for the summer camp's robotics projects. The website was integrated directly into the camp's official curriculum, becoming an essential resource that students could reference during camp sessions and continue learning from at home.",

    <>TustinCode received over 10,000 unique visits throughout its lifetime, with a peak of 3,500 unique monthly visitors during the summer camp season. It was also officially endorsed by our school district and was used by 93 competitive VEX teams in Tustin! Unfortunately, WordPress significantly increased their hosting fees, forcing us to stop hosting the website this summer. However, <LinkStyle href="https://drive.google.com/drive/folders/1n7qxWANF27HQFBxVgMsULKVE7MhfqgQH?usp=drive_link">the curriculum materials are still available</LinkStyle> and actively used by students in the summer camp to this day! This project taught me valuable lessons about developing educational content catered to specific needs and creating scalable and long-lasting solutions that can make an impact for many years. It was incredibly rewarding to see students using the resources our team created to bring their robotics projects to life!</>
  ];

  const mediaItems = [
    { type: 'image', src: lessonsImg, alt: 'TustinCode Lessons Page', top: '0', width: '328px', height: '208px', objectFit: 'cover' },
    { type: 'image', src: lessonExampleImg, alt: 'Lesson Example', top: '223px', width: '328px', height: '208px', objectFit: 'cover' },
    { type: 'image', src: flowchartImg, alt: 'Curriculum Flowchart', top: '446px', width: '328px', height: '208px', objectFit: 'cover' }
  ];

  return (
    <ProjectExpansionBase 
      arrowPosition={arrowPosition}
      title="tustincode.com Website"
      badges={badges}
      paragraphs={paragraphs}
      mediaItems={mediaItems}
      // gridColumns="1.5fr 1fr"
    />
  );
};
