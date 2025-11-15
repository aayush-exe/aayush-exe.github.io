import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";
import colorSharp from "../assets/img/color-sharp.png";
import i2blImg from "../assets/img/professional/i2bl.jpeg";
import dbfImg from "../assets/img/professional/dbf-ucla.jpeg";
import mobilityLabImg from "../assets/img/professional/mobility-lab.jpeg";
import cubesatImg from "../assets/img/professional/cubesat.jpg";
import roboticsImg from "../assets/img/professional/robotics.jpeg";
import fabcamp from "../assets/img/professional/fabcamp.jpg";

/* ---------------------------------------
  Professional Project Card Component
----------------------------------------*/
function ProfessionalCard({ title, organization, duration, description, tags, imgUrl, link }) {
  return (
    <Card 
      className="professional-card"
      style={{
        background: '#fffdf9',
        border: '2px solid rgba(44, 36, 22, 0.12)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        height: '100%',
        boxShadow: '0 4px 12px rgba(44, 36, 22, 0.06)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(44, 36, 22, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(44, 36, 22, 0.06)';
      }}
    >
      {imgUrl && (
        <div style={{ 
          height: '200px', 
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #f5f1e8 0%, #faf8f3 100%)'
        }}>
          <Card.Img 
            variant="top" 
            src={imgUrl} 
            style={{ 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      )}
      <Card.Body style={{ padding: '24px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginBottom: '12px'
        }}>
          <div style={{ flex: 1 }}>
            <Card.Title style={{ 
              fontSize: '20px', 
              fontWeight: '700',
              color: '#2c2416',
              marginBottom: '4px'
            }}>
              {title}
            </Card.Title>
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#7a6f5d',
              marginBottom: '4px'
            }}>
              {organization}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#9a8f7d',
              fontStyle: 'italic'
            }}>
              {duration}
            </div>
          </div>
        </div>
        
        <Card.Text style={{ 
          fontSize: '14px', 
          lineHeight: '1.6',
          color: '#5a5040',
          marginBottom: '16px'
        }}>
          {description}
        </Card.Text>

        {tags && tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '11px',
                  padding: '4px 10px',
                  background: '#f5f1e8',
                  border: '1px solid rgba(44, 36, 22, 0.15)',
                  borderRadius: '12px',
                  color: '#5a5040',
                  fontWeight: '500'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginTop: '16px',
              padding: '8px 16px',
              fontSize: '13px',
              color: '#fffdf9',
              background: '#4c956c',
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(76, 149, 108, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2c6e49';
              e.currentTarget.style.transform = 'translateX(4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(44, 110, 73, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#4c956c';
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(76, 149, 108, 0.2)';
            }}
          >
            Learn More →
          </a>
        )}
      </Card.Body>
    </Card>
  );
}

/* ---------------------------------------
  Main Component
----------------------------------------*/
export const ProfessionalWork = () => {
  const [hasAnimated, setHasAnimated] = React.useState(false);

  const professionalProjects = [
    {
      title: "Bioelectronics Research",
      organization: "UCLA I2BL Lab",
      duration: "March 2025 - October 2025",
      description: "Optimized platform performance for varied loads using regression models and data analysis. Co-designed a new PCB testing platform using Altium and LTSpice, quadrupling operational area and achieving 0.1mm positional accuracy for higher ferrofluid loads.",
      tags: ["PCB Design", "PCBA", "Altium Designer", "LTSpice Validation", "Data Analysis", "Research Publication", "C++", "MATLAB"],
      imgUrl: i2blImg,
      link: "https://www.i2bl.org/"
    },
    {
      title: "Aircraft Design & Development",
      organization: "Design Build Fly at UCLA",
      duration: "Sep. 2024 - Present",
      description: "Designed GNC navigation system using GPS, PID control, and LiDAR sensors for autonomous glider landing. Created CAD models and ran FEA/CFD simulations in Ansys to validate structural integrity under stressful flight conditions. Designed a PCB for onboard electronics integrating sensors and flight controllers.",
      tags: ["GNC Systems", "Ansys", "FEA", "CFD", "SolidWorks", "CAD", "PID Control", "PCB Design", "Altium Designer"],
      imgUrl: dbfImg,
      link: "https://www.dbfucla.com/"
    },
    {
      title: "Autonomous Vehicle Research & Development",
      organization: "Mobility Lab at UCLA",
      duration: "March 2025 - Present",
      description: "Annotated and synchronized large-scale 3D point cloud and sensor data, creating ground-truth datasets for training proprietary true perception autonomous driving models. Contributed to the optimization and testing of QuantV2X, a PyTorch-based autonomous vehicle framework designed to reduce latency in V2X (Vehicle-to-Everything) cooperative perception scenarios. Utilized Python and PyTorch to test the quantization of a full-perception model, analyzing performance losses across parameter variations to optimize processing and transmission latency.",
      tags: ["Python", "PyTorch", "3D Point Cloud Processing", "V2X Systems", "Autonomous Driving", "Data Annotation", "Model Quantization", "Sensor Fusion"],
      imgUrl: mobilityLabImg,
      link: "https://mobility-lab.seas.ucla.edu/"
    },
    {
      title: "FabCamp Camp Counselor",
      organization: "UCI Samueli School of Engineering",
      duration: "June 2023 - August 2023 (90+ Hours)",
      description: "Collaborated with the OC STEM initiative under CLAOC as a key member of the FabCamp Intern team, mentoring middle schoolers in fabrication technologies. Assisted students in mastering comprehensive curriculum on manufacturing and fabrication techniques through hands-on projects. Facilitated enriching discussions and fostered a conducive learning environment while addressing student queries effectively.",
      tags: ["Manufacturing Techniques", "Fabrication Processes", "Education", "STEM Outreach"],
      imgUrl: fabcamp,
      link: "https://sites.uci.edu/fabcamp/"
    },
    {
      title: "Satellite Avionics Engineering",
      organization: "Irvine CubeSat STEM Program",
      duration: "2023 - 2024",
      description: "Led avionics division in designing and building avionics systems for a CubeSat satellite from scratch. Developed a custom star-tracking algorithm for positioning data and integrated GPS and communication subsystems to ensure reliable operation in low Earth orbit.",
      tags: ["CubeSat", "Satellite Avionics", "Embedded Systems Programming", "Signal Processing", "Image Processing"],
      imgUrl: cubesatImg,
      link: null
    },
    {
      title: "VEX Robotics Team",
      organization: "VEX Robotics - Team 2496",
      duration: "Aug. 2020 - May 2024",
      description: "Lead Programmer & Driver for 8-person team. Qualified for World Championships 4 consecutive years and secured 25 tournament awards. Spearheaded design, programming, and operation of 3 major robot iterations annually. Mentored 80+ junior engineers and volunteered at 15 regional tournaments.",
      tags: ["Robotics", "C++", "Competition", "Leadership", "Mentorship", "CAD"],
      imgUrl: roboticsImg,
      link: null
    }
  ];

  return (
    <section className="professional-work" id="professional" style={{ 
      padding: '80px 0', 
      position: 'relative',
      background: 'linear-gradient(to bottom, #faf8f3 0%, #f5f1e8 100%)'
    }}>
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => {
                if (isVisible && !hasAnimated) setHasAnimated(true);
                return (
                  <div className={hasAnimated ? "animate__animated animate__fadeInUp" : "invisible"}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                      <h2 style={{
                        fontSize: '48px',
                        fontWeight: '700',
                        color: '#2c2416',
                        marginBottom: '16px'
                      }}>
                        Professional Work
                      </h2>
                      <p style={{
                        fontSize: '18px',
                        color: '#5a5040',
                        maxWidth: '600px',
                        margin: '0 auto'
                      }}>
                        Team projects, competitions, and professional development work
                      </p>
                    </div>

                    <Row className="g-4">
                      {professionalProjects.map((project, idx) => (
                        <Col key={idx} xs={12} md={6} lg={4}>
                          <ProfessionalCard {...project} />
                        </Col>
                      ))}
                    </Row>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" style={{ opacity: 0.3 }} />
    </section>
  );
};

export default ProfessionalWork;
