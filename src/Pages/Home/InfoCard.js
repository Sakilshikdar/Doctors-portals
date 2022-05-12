import React from 'react';

const InfoCard = ({img, title, bgClass}) => {
    return (
        <div>
            <div className={`card lg:card-side shadow-xl ${bgClass} `}>
                <figure className='pt-4 lg:pl-5 md:pl-0 sm:pl-0'>
                    <img src={img} />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;