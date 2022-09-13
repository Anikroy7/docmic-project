import React from 'react';
import Experiences from './Experiences';
import FAQ from './FAQ';
import Footer from './Footer';
import Header from './Header';
import HospitalFeatures from './HospitalFeatures';
import Navbar from './Navbar';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar >
            <Header></Header>
            <Services></Services>
            <div style={{
                background: "linear-gradient(360deg, rgb(241,246,244), rgb(241,246,246), rgba(255,255,255,0))"
            }} className='px-3 p-6'>
                <Experiences></Experiences>
                <HospitalFeatures></HospitalFeatures>
                <FAQ></FAQ>
            </div>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div >
    );
};

export default Home;