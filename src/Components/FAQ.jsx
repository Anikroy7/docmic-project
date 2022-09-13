import React from 'react';
import faqImage from '../images/FAQ_image/pose_8.png';
import blood_press from '../images/FAQ_image/Blood_Pressure.png'
import Defibrillator from '../images/FAQ_image/Defibrillator.png'
import Gloves from '../images/FAQ_image/Gloves.png'
import light from '../images/FAQ_image/light.png'

const FAQ = () => {
    return (
        <section>
            <h5 className='font-semibold text-primary mt-16 py-3' >FAQ Questions </h5 >


            {/* Categores container */}


            <div className="lg:flex justify-between">
                <div>
                    <h1 className='text-2xl py-3'>Get Your General Answer </h1>
                    <p className='flex items-center mb-2 justify-between'>
                        <span>Get Your General Answer</span>
                        <span className='text-2xl text-secondary'
                        >+</span>
                    </p>
                    <p className='flex items-center mb-2 justify-between'>
                        <span>Will I always see my own doctor?</span>
                        <span className='text-2xl text-secondary'
                        >+</span>
                    </p>
                    <p className='flex items-center mb-2 justify-between'>
                        <span>What is one Medical’s care?</span>
                        <span className='text-2xl text-secondary'
                        >+</span>
                    </p>
                    <p className='flex items-center mb-2 justify-between'>
                        <span>What is evidence based medicine?</span>
                        <span className='text-2xl text-secondary'
                        >+</span>
                    </p>
                    <p className='flex items-center mb-2 justify-between'>
                        <span>What is an academic medical center? </span>
                        <span className='text-2xl text-secondary'
                        >+</span>
                    </p>

                </div>
                <div className='relative mr-16'>
                    <img src={faqImage} alt="" />
                    <div>
                        <img className='absolute top-8 right-[240px]' src={Defibrillator} alt="" />
                        <img className='absolute top-7 right-12' src={blood_press} alt="" />
                        <img className='absolute top-52 right-[60px]' src={Gloves} alt="" />

                    </div>
                    <div className='bg-white rounded-lg w-60 p-2 flex items-center absolute top-52 right-44'>
                        <span>
                            <img src={light} alt="" />
                        </span>
                        <span className='ml-4'>Get Solutions From Our Experts</span>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default FAQ;