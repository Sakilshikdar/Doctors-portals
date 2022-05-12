import React from 'react';

const Service = ({ service, setTreatment}) => {
    const { name, slots } = service;
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body text-center">
                    <h2 className='text-secondary text-xl'>{name}</h2>
                    <h2>{slots[0] ?
                    slots[0] :
                    <span className='text-red-500'>Try another day</span>
                    }</h2>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div class="card-actions justify-center">
                        <label
                        onClick={()=>setTreatment(service)}
                        disabled= {slots.length === 0}
                         for="Booking-modal"
                          class="btn modal-button text-white bg-secondary btn-primary uppercase">Book Appointment
                          </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;