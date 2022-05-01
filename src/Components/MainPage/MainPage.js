/* eslint-disable react/style-prop-object */
import React from 'react';
import { Nav, Card } from 'react-bootstrap';
import './MainPage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import neurology from '../../images/neurology_dept.jpg';
import radiology from '../../images/radiology-dept.jpg';
import cardiology from '../../images/cardiology.jpg';
import childcare from '../../images/childcare.jpg';
import medicalCamp from '../../images/Free-Medical-Camp.jpg';
import { Button } from '@material-ui/core';
import bgRemoveDoctor from '../../images/5790-removebg.png';
import drImage from '../../images/dr-image.png';
import Footer from '../Footer/Footer';

const MainPage = () => {
    return (
        <div className="doctorPortal">
            <div className="doctorHeading">
                <div className="doctorNav">
                    <Nav className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/">Home</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link className="navLink" href="/about">About</Nav.Link>
                        </Nav.Item> */}
                        {/* <Nav.Item>
                            <Nav.Link className="navLink" href="/dentalServices">Dental Services</Nav.Link>
                        </Nav.Item> */}
                        {/* <Nav.Item>
                            <Nav.Link className="navLink" href="/reviews">Reviews</Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/dashboard">Doctors Zone</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link className="navLink" href="/contactUs">Contact Us</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </div>
                <div className='row mainBody'>
                    <div className="col-md-5">
                        <div className="doctorText">
                            <h1>Health Care Camp
                            <br />
                            Starts Here</h1>
                            <p>Explore exciting careers in health care at the our College of Nursing & Health Sciences Health Care Exploration Camp. Gain an understanding of a variety of health care careers and the health care industry during this five day, hands-on health care immersion. This is an ideal opportunity for you to interact with health care professionals, job shadow at UnityPoint Health, experience patient simulation scenarios, and learn about careers in health care.</p>
                            <Link style={{ textDecoration: "none" }} to="/appointment">
                                <Button className="button">GET APPOINTMENT</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="doctorImg">
                            <img src={medicalCamp} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="publicServices">
                <div>
                    <FontAwesomeIcon className="icon" icon={faClock} />
                    <div>
                        <p>Opening Hours</p>
                        <small>
                            Office Appointment Hours
                            <br />
                        </small>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                    <div>
                        <p>Visit our location</p>
                        <small>Nashua, NH</small>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
                    <div>
                        <p>Contact us now</p>
                        <small>+8809638164898</small>
                    </div>
                </div>
            </div>
            <div className="ourServices">
                <div>
                    <p>OUR SERVICES</p>
                    <h2>Services We Provide</h2>
                    <div className="servicesDetails">
                        <div>
                            <img src={cardiology} alt="" style={{width: "11rem",height: "11rem"}}/>
                            <p>Cardiology Treatment</p>
                            <p>A cardiologist is a doctor who specializes in treating diseases of the cardiovascular system — mainly the heart and blood vessels. In order to become a cardiologist, a physician must attend four years of medical school and an additional six to eight years of internal medicine and specialized cardiology training.</p>
                        </div>
                        <div>
                            <img src={radiology} alt="" style={{width: "11rem",height: "11rem"}}/>
                            <p>Radiology Treatment</p>
                            <p>Radiation therapy (also called radiotherapy) is a cancer treatment that uses high doses of radiation to kill cancer cells and shrink tumors. At low doses, radiation is used in x-rays to see inside your body, as with x-rays of your teeth or broken bones</p>
                        </div>
                        <div>
                            <img src={neurology} alt="" style={{width: "11rem",height: "11rem"}} />
                            <p>Neurology Treatment</p>
                            <p>Neurologists treat nervous system conditions. This includes conditions that impact your brain, like concussions or seizures, but it doesn't include mental health conditions like depression. Neurologists specialize in physical conditions that are caused by damage or disease to your nervous system</p>
                        </div>
                        <div>
                            <img src={childcare} alt="" style={{width: "11rem",height: "11rem"}}/>
                            <p>Child Care</p>
                            <p>High-quality child care keeps children safe and healthy. In addition, it helps children develop skills they will need for success in school and in their lives outside of school: Social, emotional and communication skills. Pre-literacy and basic mathematical skills and concepts.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="makeAppointment">
                <div>
                    <img src={bgRemoveDoctor} alt="" />
                </div>
                <div>
                    <h4>APPOINTMENT</h4>
                    <h1>Make an Appointment <br />Today</h1>
                    <p></p>
                    <Button className="button">LEARN MORE</Button>
                </div>
            </div>
            <div className="ourDoctors">
                <div>
                    <h4>Our Doctors</h4>
                    <div className="ourDoctorsDetails">
                        <Card style={{ width: '21rem', border: "none" }}>
                            <img style={{ height: "300px" }} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <p>Dr. Ram Reddy</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> +8809638164898</p>
                            </div>
                        </Card>
                        <Card style={{ width: '21rem', border: "none" }}>
                            <img style={{ height: "300px" }} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <p>Dr. Ram Reddy</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> +8809638164898</p>
                            </div>
                        </Card>
                        <Card style={{ width: '21rem', border: "none" }}>
                            <img style={{ height: "300px" }} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <p>Dr. Ram Reddy</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> +8809638164898</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="contactUs">
                <div>
                    <h4>Contact Us</h4>
                    <h1>Always contact with us</h1>
                    <div className="contactUsDetails">
                        <div>
                            <input placeholder="Email Address*" type="text" />
                            <br />
                            <input placeholder="Subject*" type="text" />
                            <br />
                            <input placeholder="Your Message*" type="text" />
                            <br />
                            <Button className="submitBtn">Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default MainPage;