
import 'react-multi-carousel/lib/styles.css';

import React from 'react';
import img4 from "../assets/img/about-me/nature.JPG";
import img2 from "../assets/img/about-me/sky.jpeg";
import img3 from "../assets/img/about-me/drink.JPG";
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
                        <p>TODO TODO TODO I've had an interest in engineering ever since I worked on robotics projects in high school. At UCLA, I developed GNC systems for aircraft as well as control methods through innovative PCB design in a research setting, strengthening my passion for autonomous control systems. </p>
                        <p>On the weekends, you can find me café-hopping in LA, exploring a new hike, or spending some time on the beach.</p>
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
