
import 'react-multi-carousel/lib/styles.css';

import React from 'react';
import img4 from "../assets/img/about-me/nature.jpeg";
import img2 from "../assets/img/about-me/sky.jpeg";
import img3 from "../assets/img/about-me/drink.jpeg";
import img1 from "../assets/img/about-me/city.JPEG";
import img5 from "../assets/img/about-me/seaside.jpeg";

export const AboutMe = () => {

    return (
        <section className="skill" id="about-me" style={{ paddingTop: '220px' }}>
                <div className="col-12">
                <div className="skill-bx wow zoomIn">
                    <h2>About Me</h2>
                    <div className="row align-items-center">
                    <div className="col-md-6">
                        <p>My journey in engineering began when I joined my school's robotics team, and I immediately fell in love with the challenge of bringing mechanical systems to life through code. Throughout high school, I competed in robotics competitions and learned the fundamentals of building and programming robots. Software development in the context of robotics sparked my interest for coding, which led me to explore control systems and software optimization.</p>
                        <p>At UCLA, I've explored more electrical engineering concepts, and I'm particularly interested in embedded systems and computer vision projects. I've been fortunate to work on diverse engineering projects through research labs and student project teams, ranging from designing GNC navigation systems for autonomous aircraft to developing innovative PCB platforms for bioelectronics research. These experiences have strengthened my passion for autonomous systems and taught me how different engineering disciplines come together to solve complex problems.</p>
                        <p>Outside of work, I enjoy exploring LA by café-hopping around the city to find the best coffee spots, discovering new hiking trails, or spending time at the beach. I also love cooking and baking, and when I'm not in the lab or outdoors, you can find me working on some side projects.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="image-collage">
                            <div className="collage-grid">
                                <div className="collage-item collage-large">
                                    <img src={img1} alt="Downtown LA at night" />
                                </div>
                                <div className="collage-item collage-small-top">
                                    <img src={img2} alt="Sky from a plane" />
                                </div>
                                <div className="collage-item collage-small-bottom">
                                    <img src={img3} alt="Reading on the river" />
                                </div>
                                <div className="collage-item collage-medium">
                                    <img src={img4} alt="Nature hike" />
                                </div>
                                <div className="collage-item collage-fifth">
                                    <img src={img5} alt="Seaside couch view" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </div>
        </section>
        )
}
