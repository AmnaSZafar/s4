import React, {Component} from 'react';
import {Accordion, Carousel} from 'react-bootstrap';

export default class Apply extends Component{
    render(){
        return(
            <div>
                <main id="main">
                    <br /><br /><br /><br />
                    <div className="container mt-5">
                    {/* <img   src="assets/img/apply.png" alt="apply banner" className="img-fluid" /> */}
                    <Carousel fade>
                        <Carousel.Item>
                            <img  
                            className="img-fluid d-block w-100"
                            src="assets/img/apply.png"
                            alt="apply"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  
                            className="img-fluid d-block w-100"
                            src="assets/img/11.jpg"
                            alt="apply"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  
                            className="img-fluid d-block w-100"
                            src="assets/img/22.jpg"
                            alt="apply"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  
                            className="img-fluid d-block w-100"
                            src="assets/img/33.jpg"
                            alt="apply"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            className=" img-fluid d-block w-100"
                            src="assets/img/44.jpg"
                            alt="apply"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            className="img-fluid d-block w-100"
                            src="assets/img/55.jpg"
                            alt="apply"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                            className="img-fluid d-block w-100"
                            src="assets/img/66.jpg"
                            alt="apply"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  
                            className="img-fluid d-block w-100"
                            src="assets/img/77.jpg"
                            alt="apply"
                            />
                            
                        </Carousel.Item>
                        

                        
                        </Carousel>
                    <div className="row d-flex justify-content-center align-items-center">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScbgDl8rI8WsqPnXEBJlzMVwqt3LkbWN5Qak5FxW25zEXXVew/viewform?embedded=true" width={6600} height={1700} frameBorder={0} marginHeight={0} marginWidth={0}>Loading???</iframe>
                    </div>
                    </div>
                    <br />
                    
                    {/* ======= Pricing Section ======= */}
                    <section id="pricing" className="pricing section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title" style={{color: 'rgba(55, 64, 85, 0.9) !important'}}>
                        <h2>Study-Internship Program Details</h2>
                        <hr />
                        <h2>Cost-Effective | 95% More Learning-Content | Market-Competitive </h2>
                        <p>We offer One Year courses which are specially designed for young enthusiasts. We offer market-competitve trainings and internship opportunities.</p>
                        </div>
                        <div className="row">
                        <div className="col-lg-6 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={100}>
                            <div className="box featured">
                            <span className="advanced">Advanced</span>
                            <p /><h3>Full-stack web development</h3> <br /> <small>One Year Course</small> <br />
                            <p />
                            <h4><sup>PKR</sup><del><small>12,499</small></del> 6,667<span> per month For the first year</span></h4>
                            <ul>
                                <li><i className="fab fa-html5" /> Html <i className="bx bx-check" /></li>
                                <li><i className="fab fa-css3-alt" /> Css <i className="bx bx-check" /></li>
                                <li><i className="fab fa-bootstrap" /> Bootstrap <i className="bx bx-check" /></li>
                                <li><i className="fab fa-jquery" /> jquery <i className="bx bx-check" /></li>
                                <li><i className="fab fa-node-js" /> Javascript <i className="bx bx-check" /></li>
                                <li><i className="fas fa-database" /> Hosting / Domain / Online Pyment Gateway <i className="bx bx-check" /></li>
                                <li><i className="fab fa-node" /> NodeJs <i className="bx bx-check" /></li>
                                <li><i className="fab fa-angular" /> angular <i className="bx bx-check" /></li>
                                <li><i className="fas fa-server" /> MongoDB <i className="bx bx-check" /></li>
                                <li><i className="fab fa-react" /> ReactJs <i className="bx bx-check" /></li>
                                <li><i className="fab fa-vuejs" /> VueJs <i className="bx bx-check" /></li>
                                <li><i className="fas fa-briefcase" /> <b>INTERNSHIP</b> <i className="bx bx-check" /></li>
                                <li>BONUS: AWS Training</li>
                                <li>Training is offered by International Instructors</li>
                                <li>Disclaimer: <br /> 
                                International Certification Fee is not included. (Optional)</li>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                    <Accordion.Header>Details</Accordion.Header>
                                    <Accordion.Body>
                                        
                                        During the course of ONE YEAR, students will have to pass multiple levels.<br />
                                        <b>Level 1</b><br />
                                        Understanding Data Structures <br />
                                        Algorithmic Exercises <br />
                                        Understanding Big-O &amp; optimized algorithms <br />
                                        <b>Level 2</b><br />
                                        Front-end Basics: <br />
                                        HTML <br />
                                        CSS <br />
                                        Bootstrap <br />
                                        Tailwind CSS <br />
                                        jquery <br />
                                        Javascript <br />
                                        <b>Level 2</b><br />
                                        Back-end Basics:
                                        SQL/Hosting / Domain / Online Pyment Gateway/POSTGRE SQL <br />
                                        Api<br />
                                        Nodejs <br />
                                        angular <br />
                                        Implement relational databases and schemas <br />
                                        <b>Level 3</b><br />
                                        React<br />
                                        Redux<br />
                                        Express js <br />
                                        start building portfolio projects <br />
                                        <b>Level 4</b><br />
                                        LAMP STACK <br />
                                        MERN STACK <br />
                                        <b>Level 5</b><br />
                                        Internships <br />
                                        Freelancing portal access by Syntics <br />  
                                        
                                    </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={200}>
                            <div className="box featured">
                            <span className="advanced">Advanced</span>
                            <p /><h3>Artificial Intelligence (Machine Learning &amp; Deep Learning)</h3> <br /> <small>One Year Course</small> <br />
                            <p />
                            <h4><sup>PKR</sup><del><small>14,599</small></del> 7,100<span> per month for the first year</span></h4>
                            <ul>
                                <li><i className="fas fa-calculator" /> Math Foundations <i className="bx bx-check" /></li>
                                <li><i className="fab fa-python" /> Python <i className="bx bx-check" /></li>
                                <li><i className="fas fa-database" /> Data-structures <i className="bx bx-check" /></li>
                                <li><i className="fab fa-hive" /> Intro to Artificial Intelligence <i className="bx bx-check" /></li>
                                <li><i className="fab fa-trade-federation" /> Advanced Python Libraries <i className="bx bx-check" /></li>
                                <li><i className="fas fa-project-diagram" /> AI projects <i className="bx bx-check" /></li>
                                <li><i className="fas fa-laptop-code" /> Machine Learning <i className="bx bx-check" /></li>
                                <li><i className="fas fa-code-branch" /> Machine Learning Projects <i className="bx bx-check" /></li>
                                <li><i className="fab fa-codepen" /> Deep Learning <i className="bx bx-check" /></li>
                                <li><i className="fas fa-code-branch" /> Deep Learning Projects <i className="bx bx-check" /></li>
                                <li><i className="fas fa-briefcase" /> <b>INTERNSHIP</b> <i className="bx bx-check" /></li>
                                <li>Training is offered by International Instructors</li>

                                <li></li>
                                <li>Disclaimer: <br /> 
                                International Certification Fee is not included. (Optional)</li>
                                <li />
                                <li />
                                <li />
                                <li />
                                <Accordion>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Details</Accordion.Header>
                                        <Accordion.Body>
                                        
                                        During the course of ONE YEAR, students will have to pass multiple levels.<br />
                                        <b>Level 1</b><br />
                                        Math Foundations: <br />
                                        Discrete Mathematics <br />
                                        Data Structures <br />
                                        Programming Basics in python (Part 1) <br />
                                        Programming Basics in python (Part 2) <br />
                                        Artificial Intelligence Basics <br />
                                        <b>Level 2</b><br />
                                        Artificial Intelligence Branches <br />
                                        Advanced Mathematics <br />
                                        Neural Networks Basics<br />
                                        Neural Network Projects <br />
                                        <b>Level 3</b><br />
                                        What is Machine Learning <br />
                                        Advanced Python Libraries like Tensorflow, numpy, pandas... <br />
                                        Machine Learning Projects using databases<br />
                                        <b>Level 4</b><br />
                                        What is Deep Learning <br />
                                        Advanced Python Libraries like Keras <br />
                                        Deep Learning Projects using databases<br />
                                        <b>Level 5</b><br />
                                        Internships <br />
                                        Freelancing portal access by Syntics <br />
                                        
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* End Pricing Section */}  
                </main>
            </div>
        )
    }
}

// export default Apply;