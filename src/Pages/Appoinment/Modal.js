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
            <input type="checkbox" id="Booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-center text-secondary">Booking for:{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>
                        <input type="text" disabled value={format(day, 'PP')} class="input input-bordered w-full" />
                        <select name='slot' class="select select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Name" class="input input-bordered w-full " />
                        <input name='email' type="text" placeholder="Your Email" class="input input-bordered w-full " />
                        <input name='Phone' type="text" placeholder="Your Phone Number" class="input input-bordered w-full" />
                        <input type="submit" value='submit' class="btn btn-secondary w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;