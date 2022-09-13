import React from 'react';
import faqImage from '../images/FAQ_image/pose_8.png'
const FAQ = () => {
    return (
        <section>
            <h5 className='font-semibold text-primary mt-16' >FAQ Questions </h5 >


            {/* Categores container */}


            <div className="flex justify-between">
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
                <div>
                    <img src={faqImage} alt="" />
                </div>
            </div>

        </section >
    );
};

export default FAQ;