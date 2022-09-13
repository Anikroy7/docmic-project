import React from 'react';
import iconleft from '../images/testimonial_image/VectorLeft.png';
import iconRight from '../images/testimonial_image/VectorRight.png';
import ikbal from '../images/testimonial_image/Ikbal.png';
import ornamentOne from '../images/testimonial_image/OrnamentOne.jpg';
import ornamentTwo from '../images/testimonial_image/OrnamentTwo.jpg';

const Testimonial = () => {
    return (
        <section className='mt-9'>
            <h4 className='font-bold text-primary text-center my-5'>Testimonial</h4>
            <h1 className='text-2xl text-center font-bold mb-6'>Whay They Say ?</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '20% 60% 20%',

            }}>
                <div className='bg-blue-200 w-16 h-16 flex items-center justify-center rounded-full lg:ml-28 lg:mt-24 sm:mt-60 sm:ml-5'>
                    <img className='w-5 h-5 mr-2' src={iconleft} alt="" />
                </div>
                {/* main slider start */}

                <div    >
                    <div className='lg:flex md:flex  bg-white p-8 rounded-md'>
                        <div>
                            <p className='font-semibold'>David Jeams</p>
                            <small className='font-semibold'>Patient</small>
                            <p className='text-justify mt-3'>
                                “Thank you for being the dedicated, thoughtful, and compassionate doctor that you are! You always go above and beyond and work tirelessly towards a healthy outcome. I feel so blessed to know you and have you as my doctor.”

                            </p>
                        </div>
                        <img src={ikbal} alt="" />

                    </div>
                    <div className='relative'>
                        <img className='absolute lg:top-[-290px] sm:top-[-540px] right-0' src={ornamentOne} alt="" />
                        <img className='absolute top-[-55px] z-0' src={ornamentTwo} alt="" />
                    </div>
                </div>
                <div className='bg-blue-200 w-16 h-16 flex items-center justify-center rounded-full lg:mt-24 lg:ml-9 sm:mt-60 sm:ml-6'>
                    <img className='w-5 h-5' src={iconRight} alt="" />
                </div>
            </div>
        </section >
    );
};

export default Testimonial;