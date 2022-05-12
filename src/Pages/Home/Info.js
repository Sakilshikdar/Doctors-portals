import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard img={clock}  bgClass='bg-gradient-to-r from-secondary to-primary' title='Opening Hours'></InfoCard>
            <InfoCard img={marker} bgClass='bg-accent' title='Our Locations'></InfoCard>
            <InfoCard img={phone}  bgClass='bg-gradient-to-r from-secondary to-primary' title='Contract Us'></InfoCard>
        </div>
    );
};

export default Info;