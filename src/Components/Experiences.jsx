import React from 'react';
import serviceImage from '../images/expriences_image/pose_4.png';
import bloodPress from '../images/expriences_image/Blood_Pressure.png'
import Plastrer from '../images/expriences_image/Plastrer.png'
import First_Aid from '../images/expriences_image/First_Aid.png'

const Experiences = () => {
    return (
        <section style={{
            background: "linear-gradient(360deg, rgb(241,246,244), rgb(245,228,236), rgba(255,255,255,0))"
        }} className='px-3 mb-24 mt-20'>
            <h5 className='font-bold text-primary'>16+ Years Experiences </h5>


            {/* Categores container */}

            <div className="">
                <div className="lg:flex sm:flex-col lg:flex-row-reverse ">
                    <div className='lg:w-1/2 relative'>
                        <img src={serviceImage} className="rounded-lg h-96 w-full " alt='img' />
                        <div>
                            <img className='absolute top-8 right-[340px]' src={First_Aid} alt="" />
                            <img className='absolute top-7 right-24' src={bloodPress} alt="" />
                            <img className='absolute top-72 right-[340px]' src={Plastrer} alt="" />
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className="lg:text-3xl sm:text-xl mt-5 font-semibold">We Are Always ensure Best Medical Treatment For Your Health</h1>
                        <p className="py-6 text-justify">Medical treatment means the management and care of a patient to combat disease or disorder. Medical treatment includes: All treatment not otherwise excluded (below). Using prescription medications, or use of a non-prescription drug at prescription strength.Medical care has several important functions other than restoring or maintaining health. These other functions are assessment and certification of health status and helping to cope with the problems of illness--the caring function.</p>

                    </div>
                </div>


            </div>
        </section>
    );
};

export default Experiences;