import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import Service from './Service';

const AvailableAppointment = ({day}) => {
    const [services , setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(()=>{
        const url = 'http://localhost:5000/service'
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
                 setTreatment = {setTreatment}
                 ></Service>)
             }
            </div>
            {treatment && <Modal 
            treatment={treatment} 
            setTreatment= {setTreatment}
            day = {day}
            ></Modal>}
        </div>
    );
};

export default AvailableAppointment;