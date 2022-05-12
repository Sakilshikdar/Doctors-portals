import React from 'react';
import appointment from '../../assets/images/appointment.png'
import Doctor from '../../assets/images/doctor.png'
import Button from '../shared/Button';

const MakeAppointment = () => {
    return (
      <section style={{
          background:`url(${appointment})`
      }} className='flex border-4 justify-center items-center'>
          <div className='flex-1 hidden lg:block'>
              <img className='mt-[-140px]' src={Doctor}></img>
          </div>
          <div className='flex-1 p-12'>
        <h1 className='text-primary text-xl py-4 '>Appointment</h1>
        <h3 className='text-4xl text-white'>Make an appointment Today</h3>
        <p className='text-white py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ipsum cumque vel ipsam unde reprehenderit, sapiente repellat nam eaque provident nisi hic quam neque corrupti nihil quibusdam non aliquid natus accusamus consequuntur explicabo dolor expedita cum nostrum. Quo, unde in.</p>
        <Button>Get Started</Button>
          </div>
          
      </section>
    );
};

export default MakeAppointment;