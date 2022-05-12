import React, { useState } from 'react';
import Footer from '../shared/Footer';
import AppointmentBanner from './AppoinmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appoinment = () => {
    const [day, setDay] = useState(new Date())
    return (
        <div>
            <AppointmentBanner day={day} setDay={setDay}></AppointmentBanner>
            <AvailableAppointment day={day} setDay={setDay}></AvailableAppointment>
           <Footer></Footer>
        </div>
    );
};

export default Appoinment;