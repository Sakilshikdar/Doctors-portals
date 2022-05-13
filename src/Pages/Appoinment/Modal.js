import { format } from 'date-fns';
import React from 'react';

const Modal = ({ treatment, day , setTreatment }) => {
    const {slots, name} = treatment;
    const handleSubmit = (even) =>{
        even.preventDefault();
        const slot = even.target.slot.value;
        console.log(treatment._id, slot, name);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center text-secondary">Booking for:{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>
                        <input type="text" disabled value={format(day, 'PP')} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered w-full " />
                        <input name='email' type="text" placeholder="Your Email" className="input input-bordered w-full " />
                        <input name='Phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full" />
                        <input type="submit" value='submit' className="btn btn-secondary w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;