import React from 'react';
import Experiences from './Experiences';
import Header from './Header';
import Navbar from './Navbar';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar >
            <Header></Header>
            <Services></Services>
            <Experiences></Experiences>
        </div >
    );
};

export default Home;