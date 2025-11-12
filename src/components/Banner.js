import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header3D from './3Dfile.js'
import 'animate.css';

const toRotate = [ "Electrical Engineer", "Coder", "Builder", "UCLA Student"];
const TYPE_SPEED = 30;   // ms per char (typing)
const DELETE_SPEED = 18; // ms per char (deleting)
const HOLD_FULL = 2000;   // pause when word complete
const HOLD_EMPTY = 200;  // pause when word cleared

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

    // set next delay based on state
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
  }, [text, delta, tick]); // include tick in dependencies


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
        /* Make sure the animated wrapper doesn't clip children */
        .animate__zoomIn, .animate__fadeIn {
          overflow: visible;
        }

        /* Optional: if your .banner or column sets overflow hidden somewhere */
        .banner, .banner .col, .banner .row {
          overflow: visible;
        }

        /* The canvas wrapper already sets height in JS, but you can move it here if you prefer */
        .r3f-wrap {
          width: 100%;
          height: 60vh;    /* big hero presence */
          min-height: 420px;
        }

        /* Ensure the canvas fills the wrapper (r3f handles this, but this is safe) */
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
          overflow: visible; /* ensure the 3D isn't cropped by parent */
        }
          .banner,
        .banner * {
          overflow: visible !important;
        }

        .r3f-wrap {
          overflow: visible; /* ensure the 3D isn't cropped by parent */
        }


      `}</style>
    </section>
  )
}
