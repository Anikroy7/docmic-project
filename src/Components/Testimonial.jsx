import React from 'react';
import icon from '../images/testimonial_image/VectorPlay.png';
import ikbal from '../images/testimonial_image/Ikbal.png'

const Testimonial = () => {
    return (
        <section className='mt-9'>
            <h4 className='font-bold text-primary text-center my-5'>Testimonial</h4>
            <h1 className='text-2xl text-center font-bold mb-6'>Whay They Say ?</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '20% 60% 20%',

            }}>
                <div className='bg-blue-200 w-16 h-16 flex items-center justify-center rounded-full ml-28 mt-24'>
                    <img className='w-5 h-5 mr-2' src={icon} alt="" />
                </div>
                {/* main slider start */}

                <div>
                    <div className='flex bg-white p-8 rounded-md'>
                        <div>
                            <p className='font-semibold'>David Jeams</p>
                            <small className='font-semibold'>Patient</small>
                            <p className='text-justify'>
                                psimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content

                            </p>
                        </div>
                        <img src={ikbal} alt="" />

                    </div>
                </div>
                <div className='bg-blue-200 w-16 h-16 flex items-center justify-center rounded-full mt-24 ml-9'>
                    <img className='w-5 h-5 mr-2' src={icon} alt="" />
                </div>
            </div>
        </section >
    );
};

export default Testimonial;