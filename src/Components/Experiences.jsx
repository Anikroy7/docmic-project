import React from 'react';
import serviceImage from '../images/expriences_image/pose_4.png'

const Experiences = () => {
    return (
        <section style={{
            background: "linear-gradient(360deg, rgb(241,246,244), rgb(245,228,236), rgba(255,255,255,0))"
        }} className='px-3 h-screen'>
            <h5 className='font-bold text-primary'>16+ Years Experiences </h5>


            {/* Categores container */}

            <div className="hero">
                <div className="lg:flex sm:flex-col lg:flex-row-reverse ">
                    <div className='lg:w-1/2'>
                        <img src={serviceImage} className="rounded-lg w-full" alt='img' />
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className="lg:text-3xl sm:text-xl mt-5 font-semibold">We Are Always ensure Best Medical Treatment For Your Health</h1>
                        <p className="py-6 text-justify">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;