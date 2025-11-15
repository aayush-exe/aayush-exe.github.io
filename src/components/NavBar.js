import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/default-monochrome-full.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-whit.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import mailIcon from '../assets/img/mail-icon.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveLink(sectionId);
  };

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand onClick={() => scrollToSection('home')} style={{ width: '200px', height: 'auto', cursor: 'pointer' }} >
          <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => scrollToSection('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => scrollToSection('about-me')}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              className={activeLink === 'professional' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => scrollToSection('professional')}
            >
              Professional Work
            </Nav.Link>
            <Nav.Link
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => scrollToSection('projects')}
            >
              Personal Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
          
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
