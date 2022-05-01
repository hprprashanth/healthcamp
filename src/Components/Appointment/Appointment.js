import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import './Appointment.css'
import medicalCamp from '../../images/Free-Medical-Camp.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import appointmentData from '../../data/AppointmentData'
import AppointmentType from '../AppointmentType/AppointmentType';
import Footer from '../Footer/Footer';

const Appointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const day = startDate.getDate();
    const month = months[startDate.getMonth()];
    const month1 = startDate.getMonth();
    const year = startDate.getFullYear();
    const fullDate = day + " " + month + " " + year;
    const fullDate1 = month1 + 1 + "/" + day + "/" + year;

    return (
        <div className="appointmentInfo">
            <div className="patientAppointment">
                <div className="doctorNav">
                    <Nav className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/dashboard">Doctors Zone</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className='mainBody'>
                    <div>
                        <div className="appointmentText">
                            <h1>Appointment</h1>
                            <div>
                                <div>
                                    <Calendar
                                        className="calender"
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="doctorImg">
                            <img src={medicalCamp} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="appointmentDetails">
                <h3>Available Appointment on {fullDate}</h3>
            </div>
            <div className="container">
                <div className="row">
                    {
                        appointmentData.map(app => <AppointmentType
                            key={app.key}
                            appointmentData={app}
                            fullDate1={fullDate1}
                        ></AppointmentType>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;