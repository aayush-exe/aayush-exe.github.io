# Project Expansion Components

This directory contains the project expansion panel components for the portfolio website. Each project has its own file for easy customization while maintaining a consistent structure.

## File Structure

```
components/
├── ProjectExpansionBase.js    # Base component with standardized layout
├── P_DrivableCouch.js          # Motorized Couch project
├── P_DoorBot.js                # DoorBot project
├── P_TikTokMaker.js            # Automated TikTok Video Maker
├── P_TustinCode.js             # tustincode.com Website
├── P_IrvineCubeSat.js          # Irvine CubeSat project
├── P_VEXRobotics.js            # VEX Robotics project
├── P_GoatCode.js               # GoatCode project
├── P_PolyVoice.js              # PolyVoice hackathon project
└── P_MisakisKitchen.js         # Misaki's Kitchen hackathon project
```

## How It Works

### Base Component (`ProjectExpansionBase.js`)
The base component handles all the common structure:
- Arrow indicator that points to the clicked project card
- Title and badges section
- 2-column grid layout (text on left, media on right)
- Consistent styling and animations

### Individual Project Files
Each project file (e.g., `P_DrivableCouch.js`) simply defines:
1. **Badges**: Technology/skill tags
2. **Paragraphs**: Text content describing the project
3. **Media Items**: Images and videos to display

## Adding Content to a Project

### Example: Editing P_DoorBot.js

```javascript
import React from 'react';
import { ProjectExpansionBase } from './ProjectExpansionBase';
import doorBotImg1 from "../assets/img/doorbot/image1.jpg";
import doorBotImg2 from "../assets/img/doorbot/image2.jpg";

export const DoorBot = ({ arrowPosition = 50 }) => {
  const badges = [
    { text: "Raspberry Pi", variant: "primary" },
    { text: "Computer Vision", variant: "primary" },
    { text: "Python", variant: "primary" },
    { text: "OpenCV", variant: "primary" },
  ];

  const paragraphs = [
    "First paragraph describing your DoorBot project...",
    "Second paragraph with more details...",
    "Third paragraph about impact or results...",
  ];

  const mediaItems = [
    { 
      type: 'image', 
      src: doorBotImg1, 
      alt: 'DoorBot Hardware', 
      top: '0', 
      height: '180px' 
    },
    { 
      type: 'image', 
      src: doorBotImg2, 
      alt: 'DoorBot Interface', 
      top: '220px', 
      height: '180px' 
    },
    { 
      type: 'video', 
      src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID', 
      title: 'DoorBot Demo', 
      top: '440px', 
      height: '240px' 
    }
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
```

## Customization Options

### Badge Variants
- `"primary"` - Blue (default)
- `"secondary"` - Gray
- `"success"` - Green (good for awards/achievements)
- `"danger"` - Red
- `"warning"` - Yellow
- `"info"` - Light blue

### Media Items Configuration

**For Images:**
```javascript
{ 
  type: 'image',
  src: imageImport,           // Imported image
  alt: 'Description',          // Alt text
  top: '0',                    // Position from top (e.g., '0', '220px', '440px')
  height: '180px'              // Height of the image
}
```

**For Videos (YouTube):**
```javascript
{ 
  type: 'video',
  src: 'https://www.youtube.com/embed/VIDEO_ID',
  title: 'Video Title',
  top: '440px',
  height: '240px'
}
```

### Grid Layout
The default layout is `'2fr 1fr'` (text takes 2/3, media takes 1/3).

To customize for a specific project, you can pass `gridColumns` prop:
```javascript
<ProjectExpansionBase 
  gridColumns="1fr 1fr"  // Equal split
  // or
  gridColumns="3fr 1fr"  // Text takes 75%, media takes 25%
  // ... other props
/>
```

## Adding Images

1. Place your images in `src/assets/img/PROJECT_NAME/`
2. Import them at the top of your project file:
   ```javascript
   import myImage from "../assets/img/project_name/image.jpg";
   ```
3. Use in the mediaItems array:
   ```javascript
   { type: 'image', src: myImage, alt: 'Description', top: '0', height: '180px' }
   ```

## Tips

1. **Vertical Spacing**: Use increments of ~220px for `top` values (0, 220px, 440px, 660px, etc.)
2. **Paragraph Length**: Keep paragraphs focused - typically 3-5 paragraphs work best
3. **Badge Count**: 4-6 badges is ideal for readability
4. **Media Mix**: Mix images and videos for visual variety
5. **Image Heights**: Standard heights are 180px for images, 240px for videos

## Need Help?

- Look at `P_DrivableCouch.js` for a complete working example
- All projects use the same structure, making it easy to copy and modify
