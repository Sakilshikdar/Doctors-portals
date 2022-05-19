import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Modal = ({ treatment, date, setTreatment }) => {
    const { _id, slots, name, price } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP')
    const handleSubmit = (even) => {
        even.preventDefault();
        const slot = even.target.slot.value;
        console.log(treatment._id, slot, name);

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            phone: even.target.phone.value
        }
        console.log(booking);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast(`Appointment is set on, ${formattedDate} at ${slot}`)
                }
                else{
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                console.log(data)
                setTreatment(null);
            })

    }
    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center text-secondary">Booking for:{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" value={user?.displayName} className="input input-bordered w-full " />
                        <input name='email' type="text" value={user?.email} className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full" />
                        <input type="submit" value='submit' className="btn btn-secondary w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;