import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header3D from './3Dfile.js'
import 'animate.css';

// char typing effect vars
const toRotate = [ "Electrical Engineer", "Coder", "Builder", "UCLA Student"];
const TYPE_SPEED = 30;
const DELETE_SPEED = 18;
const HOLD_FULL = 2000;
const HOLD_EMPTY = 200;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  const [delta, setDelta] = useState(TYPE_SPEED);

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const next = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(next);

    if (!isDeleting && next === fullText) {
      setIsDeleting(true);
      setDelta(HOLD_FULL);
    } else if (isDeleting && next === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(HOLD_EMPTY);
    } else {
      setDelta(isDeleting ? DELETE_SPEED : TYPE_SPEED);
    }
  }, [loopNum, isDeleting, text]);

  useEffect(() => {
    const timer = setTimeout(() => tick(), delta);
    return () => clearTimeout(timer);
  }, [text, delta, tick]);


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={6} xl={5}>
              <div className="animate__animated animate__fadeIn">
                <h1>{`I'm Aayush: `}</h1>
                <h1> 
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "UCLA Student", "Computer Engineer", "Project Hobbyist" ]'>
                    <span className="wrap">{text}</span></span></h1>
                  <p>I'm a second-year Electrical Engineering major at UCLA, and I'm interested in embedded systems, robotics, product engineering, and software development.</p>
              </div>
          </Col>

          <Col xs={12} sm={12} md={6} xl={7} style={{overflow: "visible"}}>
          <div className="animate__animated animate__fadeIn">
              <Header3D />
            </div>
            <style>
            {`
              overflow: visible !important;
            `}
          </style>
          </Col>

        </Row>
      </Container>
      <style>{`
        .animate__zoomIn, .animate__fadeIn {
          overflow: visible;
        }

        .banner, .banner .col, .banner .row {
          overflow: visible;
        }

        .r3f-wrap {
          width: 100%;
          height: 60vh;    /* big hero presence */
          min-height: 420px;
        }

        .r3f-wrap > canvas {
          width: 100% !important;
          height: 100% !important;
          display: block;
        }
        .banner, .banner .row, .banner .col { overflow: visible; }
        .banner,
        .banner * {
          overflow: visible !important;
        }

        .r3f-wrap {
          overflow: visible;
        }
          .banner,
        .banner * {
          overflow: visible !important;
        }

        .r3f-wrap {
          overflow: visible;
        }


      `}</style>
    </section>
  )
}
