import React from 'react';

const ServiceDetails = ({ service }) => {
    const { name, info, img, id } = service;
    return (
        <div className="card bg-white py-3">
            <div className="p-3 items-center">
                <div className='flex items-center justify-between'>
                    <h2 className='font-semibold'>{name}</h2>
                    <img src={img} alt="" />
                </div>
                <p>{info}</p>
                {
                    id === 3 ? <p className='font-semibold mt-3 text-secondary'>Explore Now</p> : <p className='font-semibold mt-3'>Explore Now</p>
                }

            </div>
        </div>
    );
};

export default ServiceDetails;