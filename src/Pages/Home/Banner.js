import React from 'react';
import chair from '../../assets/images/chair.png';
import Button from '../shared/Button';

const Banner = () => {
    return (
        <div class="hero py-24">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-[594px] sm:w-full lg:ml-44
                sm:ml-0 rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br /> excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;