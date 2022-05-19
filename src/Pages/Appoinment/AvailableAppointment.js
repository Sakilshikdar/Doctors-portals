import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services , setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, 'PP')

    useEffect(()=>{
        const url = `http://localhost:5000/available?date=${formattedDate}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setServices(data))
    },[formattedDate])
    return (
        <div>
             <p className='text-secondary text-2xl text-center'>Available Appointments on {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                 services.map(service => <Service 
                 key={service._id}
                 service = {service}
                 setTreatment = {setTreatment}
                 ></Service>)
             }
            </div>
            {treatment && <Modal 
            treatment={treatment} 
            setTreatment= {setTreatment}
            date = {date}
            ></Modal>}
        </div>
    );
};

export default AvailableAppointment;