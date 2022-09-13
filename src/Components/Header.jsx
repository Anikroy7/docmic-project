import React from 'react';
import poseImage from '../images/headerImage/pose_2.png';
import ellipseOne from '../images/headerImage/Ellipse 6.png';
import ellipseTwo from '../images/headerImage/Ellipse 7.png';
import ellipseThree from '../images/headerImage/Ellipse 8.png';
import ellipseFour from '../images/headerImage/Ellipse 9.png';
import vector from '../images/headerImage/Vector.png'

const Header = () => {
    return (
        <header className=''>
            <section style={{
                background: "#eaf2f5",

            }} className="hero-content flex-col lg:flex-row-reverse lg:justify-between" >
                <div className='relative'>
                    <img className='' src={poseImage} alt='img' />


                    {/* meet our doctors div start*/}


                    <div style={{
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
                        borderRadius: "10px"
                    }} className='bg-white p-2 w-[250px] absolute left-56 lg:top-96 sm:top-80 sm:left-56 sm:hidden lg:block md:block' >
                        <h2 className='text-xl mb-3'>Meet Our Doctors</h2>

                        {/* avartar start */}
                        <div className='flex  items-center '>
                            <div className="avatar-group -space-x-4 mb-3">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src={ellipseOne} alt='img1' />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src={ellipseTwo} alt='img2' />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src={ellipseThree} alt='img3' />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src={ellipseFour} alt='img4' />
                                    </div>
                                </div>
                            </div>


                            <div style={{
                                height: "38.8px",
                                width: "39.52px",
                                background: "#2D89FF"
                            }} className='flex items-center justify-center  text-2xl text-white rounded-full mb-2 ml-3'>
                                +
                            </div>
                        </div>

                        {/* avatar end */}

                        <div style={{
                            background: "linear-gradient(90deg, rgba(45, 137, 255, 0.57) 0%, rgba(45, 137, 255, 0) 100%)",
                            borderRadius: "50px",
                            width: "189px",
                            height: "18px",
                            marginBottom: '5px'

                        }}>

                        </div>
                        <div style={{
                            background: "linear-gradient(90deg, rgba(45, 137, 255, 0.3) 0%, rgba(45, 137, 255, 0) 100%)",
                            borderRadius: "50px",
                            width: "189px",
                            height: "18px"

                        }}>

                        </div>
                    </div>

                    {/* meet our doctors div end */}


                    {/* Regular cheak up div */}

                    <div className='flex bg-primary w-44 p-1 items-center rounded absolute lg:left-[-50px] lg:top-72 sm:left-[-30px] top-72'>
                        <img src={vector} alt="" />
                        <span className='text-white'> Regular Checkup</span>
                    </div>

                </div>
                <div className='lg:w-6/12 mt-0'>
                    <h1 className='lg:text-[50px] md:text-[60px] sm:text-2xl font-[500] lg:py-5 md:py-6'>
                        Your <span className='text-secondary'>Health</span> Is Our

                    </h1>
                    <h1 className='lg:text-[50px] md:text-[60px] sm:text-2xl  font-[500]'>
                        Top <span className='text-primary'>Priority</span>
                    </h1>


                    <p className="py-6">Empowering People to Improve Their Lives.Exceptional Care Close to You.</p>
                    <button style={{ padding: "15px 20px" }} className="btn btn-secondary">Meet Our Specialist</button>

                    <div className='flex justify-around mt-10'>
                        <div>
                            <p className='text-2xl text-primary font-bold'>262k+</p>
                            <p>Recovered Patients</p>
                        </div>
                        <div>
                            <p className='text-2xl text-primary font-bold'>96%</p>
                            <p>Satisfaction Rate</p>
                        </div>
                        <div>
                            <p className='text-2xl text-primary font-bold'>86+</p>
                            <p> Expert Doctors</p>
                        </div>

                    </div>
                </div>

            </ section>
        </header >
    );
};

export default Header;