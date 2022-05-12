import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        },
    ];
    return (
        <div className='my-28'>
           <div className='text-center'>
                <h2 className='text-xl font-bold uppercase text-primary'>Our Services</h2>
            <h3 className='text-4xl'>Service We Provides</h3>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    services.map(service =><Service
                    key={service.key}
                    service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;