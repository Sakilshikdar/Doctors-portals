import React from 'react';
import Footer from '../shared/Footer';
import Banner from './Banner';
import Contact from './Contract';
import ExtraPart from './ExtraPart';
import Info from './Info';
import MakeAppointment from './MakeAppoinment';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExtraPart></ExtraPart>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;