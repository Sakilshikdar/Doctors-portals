import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointment = ({day}) => {
    const [services , setServices] = useState([])

    useEffect(()=>{
        const url = 'services.json'
        fetch(url)
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
             <p className='text-secondary text-2xl text-center'>Available Appointments on {format(day, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                 services.map(service => <Service 
                 key={service._id}
                 service = {service}
                 ></Service>)
             }
            </div>
        </div>
    );
};

export default AvailableAppointment;