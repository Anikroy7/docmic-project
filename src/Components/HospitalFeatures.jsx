import React, { useEffect, useState } from 'react';
import featurePose from '../images/features_image/pose_7.png'
import FeaturesDetails from './FeaturesDetails';

const HospitalFeatures = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {

        fetch('features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))

    }, [])

    return (
        <section >

            {/* Categores container */}

            <div className="hero">

                <div className="lg:flex sm:flex-col lg:flex-row">
                    <div className='lg:w-1/2'>
                        <img src={featurePose} className="rounded-lg" alt='img' />
                    </div>
                    <div className='lg:w-1/2'>
                        <h5 className='font-bold text-primary'>Our Hospital Feature </h5>
                        <h1 className="lg:text-3xl sm:text-xl mt-5 font-semibold">Make An Appointment Easy And Fast Services </h1>

                        {/* all features section */}

                        <div className='grid grid-cols-2 gap-3 mt-5'>
                            {
                                features.map(feature => <FeaturesDetails
                                    feature={feature}
                                ></FeaturesDetails>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HospitalFeatures;