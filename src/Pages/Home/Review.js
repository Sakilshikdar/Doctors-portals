import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card shadow-xl text-primary-content">
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus similique velit reiciendis tempora! Cum.</p>
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={review.img} alt=''/>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-xl'>{review.name}</p>
                            <h4>{review.location}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;