import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { DrivableCouch } from "./P_DrivableCouch";
import { Micromouse } from "./P_Micromouse";
import { PCBKeychain } from "./P_PCBKeychain";
import { DoorBot } from "./P_DoorBot";
import { PolyVoice } from "./P_PolyVoice";
import { TustinCode } from "./P_TustinCode";
import { GoatCode } from "./P_GoatCode";
import "animate.css";

import couchCover from "../assets/img/couch/couch_cover.jpeg";
import pcbCover from "../assets/img/keychain/keychain-cover.jpg";
import mmCover from "../assets/img/micromouse/mm-cover.png";
import websiteCover from "../assets/img/website/tustincode-cover.jpg";
import pvCover from "../assets/img/polyvoice/pv-cover.jpeg";
import dbotCover from "../assets/img/doorbot/doorbot-cover.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import goatCover from "../assets/img/goatcode/goatcode-cover.jpg";

function ProjectCard({ title, imgUrl, onClick }) {
  return (
    <div
      className="project-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
}

export const Projects = () => {
  const projects = [
    { title: "Motorized Couch", description: "the future of transportation", imgUrl: couchCover },
    { title: "Micromouse Robot", description: "autonomous maze-solving robot", imgUrl: mmCover },
    { title: "PCB Keychain", description: "custom LED keychain design", imgUrl: pcbCover },
    { title: "DoorBot", description: "smart doorbell system", imgUrl: dbotCover },
    { title: "Automated TikTok Video Maker", description: "finally, automatic brainrot", imgUrl: couchCover },
    { title: "tustincode.com Website", description: "Curriculum for Tustin USD", imgUrl: websiteCover },
    { title: "GoatCode", description: "become the goat of coding", imgUrl: goatCover },
    { title: "PolyVoice", description: "live voice translator for gaming\n1st Place @HackOC — $5,000", imgUrl: pvCover },
    // { title: "Misaki's Kitchen (hackathon project)", description: "anime-themed recipe book\nBest Design & 3rd @Hack The Wave — $500", imgUrl: couchCover },
  ];

  const [hasAnimated, setHasAnimated] = React.useState(false);
  const [openIdx, setOpenIdx] = React.useState(null);
  const [prevOpenIdx, setPrevOpenIdx] = React.useState(null);
  const [columnsPerRow, setColumnsPerRow] = React.useState(3);
  const [arrowPosition, setArrowPosition] = React.useState(50);
  const cardRefs = React.useRef([]);
  const containerRef = React.useRef(null);
  const lastRenderedContent = React.useRef({});

  // column num based on screen size
  React.useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width <= 767) setColumnsPerRow(1);
      else if (width <= 991) setColumnsPerRow(2);
      else setColumnsPerRow(3);
    };
    
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const handleCardClick = (idx) => {
    if (openIdx === idx) {
      setPrevOpenIdx(openIdx);
      setOpenIdx(null);
    } else if (openIdx !== null) {
      setPrevOpenIdx(openIdx);
      setOpenIdx(null);
            setTimeout(() => {
        setPrevOpenIdx(null);
        setOpenIdx(idx);
        
        // calculate arrow position
        setTimeout(() => {
          if (cardRefs.current[idx] && containerRef.current) {
            const cardRect = cardRefs.current[idx].getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2 - containerRect.left;
            const containerWidth = containerRect.width;
            const arrowPositionPercent = (cardCenter / containerWidth) * 100;
            setArrowPosition(arrowPositionPercent);
          }
        }, 0);
      }, 350);
    } else {
      setPrevOpenIdx(openIdx);
      setOpenIdx(idx);
      
      // calculate arrow pos
      setTimeout(() => {
        if (cardRefs.current[idx] && containerRef.current) {
          const cardRect = cardRefs.current[idx].getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2 - containerRect.left;
          const containerWidth = containerRect.width;
          const arrowPositionPercent = (cardCenter / containerWidth) * 100;
          setArrowPosition(arrowPositionPercent);
        }
      }, 0);
    }
  };

  const renderItems = () => {
    const items = [];
    const rows = Math.ceil(projects.length / columnsPerRow);
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columnsPerRow; col++) {
        const idx = row * columnsPerRow + col;
        if (idx < projects.length) {
          items.push(
            <div key={`card-${idx}`} ref={el => cardRefs.current[idx] = el}>
              <ProjectCard
                {...projects[idx]}
                onClick={() => handleCardClick(idx)}
              />
            </div>
          );
        }
      }
      
      const openRow = openIdx !== null ? Math.floor(openIdx / columnsPerRow) : -1;
      const prevRow = prevOpenIdx !== null ? Math.floor(prevOpenIdx / columnsPerRow) : -1;
      const shouldShow = openRow === row;
      
      const getContentForRow = () => {
        const firstCardInRow = row * columnsPerRow;
        const lastCardInRow = Math.min(firstCardInRow + columnsPerRow - 1, projects.length - 1);
        
        const getComponentByIdx = (idx) => {
          if (idx === 0) return <DrivableCouch arrowPosition={arrowPosition} />;
          if (idx === 1) return <Micromouse arrowPosition={arrowPosition} />;
          if (idx === 2) return <PCBKeychain arrowPosition={arrowPosition} />;
          if (idx === 3) return <DoorBot arrowPosition={arrowPosition} />;
          if (idx === 5) return <TustinCode arrowPosition={arrowPosition} />;
          if (idx === 6) return <GoatCode arrowPosition={arrowPosition} />;
          if (idx === 7) return <PolyVoice arrowPosition={arrowPosition} />;
          return null;
        };
        
        if (openIdx !== null && openIdx >= firstCardInRow && openIdx <= lastCardInRow) {
          const content = getComponentByIdx(openIdx);
          lastRenderedContent.current[row] = content;
          return content;
        }
        
        if (openIdx === null && prevRow === row && lastRenderedContent.current[row]) {
          return lastRenderedContent.current[row];
        }
        
        return null;
      };
      
      items.push(
        <div key={`expansion-${row}`} className={`expansion-panel ${shouldShow ? 'active' : ''}`}>
          <div className={`expansion-content ${shouldShow ? 'open' : ''}`}>
            {getContentForRow()}
          </div>
        </div>
      );
    }
    
    return items;
  };

  return (
    <section className="project" id="projects" style={{ paddingTop: "40px" }}>
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => {
                if (isVisible && !hasAnimated) setHasAnimated(true);
                return (
                  <div className={hasAnimated ? "animate__animated animate__fadeInUp" : "invisible"}>
                    <h2 style={{
                      fontSize: '48px',
                      fontWeight: '700',
                      color: '#2c2416',
                      marginBottom: '16px',
                      textAlign: 'center'
                    }}>
                      Personal Projects
                    </h2>
                    <p style={{ 
                      textAlign: 'center', 
                      fontSize: '18px', 
                      color: '#5a5040', 
                      marginBottom: '40px',
                      marginTop: '16px'
                    }}>
                      Fun side projects and experimental builds
                    </p>
                    <div ref={containerRef} className="projects-grid">
                      {renderItems()}
                    </div>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: clamp(12px, 2vw, 24px);
          row-gap: clamp(4px, 0.5vw, 8px);
          margin-top: 2rem;
        }
        
        @media (max-width: 991px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 767px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        .project-card {
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
        }

        .expansion-panel {
          grid-column: 1 / -1;
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .expansion-panel.active {
          grid-template-rows: 1fr;
        }

        .expansion-content {
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expansion-content.open {
          opacity: 1;
          transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.05s;
        }

        .proj-imgbx {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
        }

        /* Light theme adjustments for expansion content */
        .expansion-content .skill-bx {
          background: #fffdf9;
          box-shadow: 0 4px 20px rgba(44, 36, 22, 0.08);
          border: 1px solid rgba(44, 36, 22, 0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .expansion-panel, .expansion-content, .project-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
