import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/default-monochrome-white-full.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-whit.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import mailIcon from "../assets/img/mail-icon.svg";
import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="logo" style={{ width: '200px', height: 'auto' }} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/aayush-sehgal-5a688927b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/aayush-exe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="" className="icon2" style={{ transform: "scale(1.5)" }} />
              </a>

              <a
                href="mailto:asehgal@ucla.edu"
              >
                <img src={mailIcon} alt="Email" style={{ transform: "scale(1.25)" }} />
              </a>
              <a
                href="https://www.instagram.com/aaayush.seh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" style={{ transform: "scale(1.25)" }} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size={12} sm={6}>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', margin: '10px 0 0 0' }}>
              Thanks for checking out my portfolio! <br />Built using React and Node.js
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
