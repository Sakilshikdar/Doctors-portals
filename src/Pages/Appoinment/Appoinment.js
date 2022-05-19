import React, { useState } from 'react';
import Footer from '../shared/Footer';
import AppointmentBanner from './AppoinmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
           <Footer></Footer>
        </div>
    );
};

export default Appoinment;