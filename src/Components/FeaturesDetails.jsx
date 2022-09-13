import React from 'react';

const FeaturesDetails = ({ feature }) => {
    const { name, info, img } = feature;
    console.log(img);
    return (
        <div className="rounded-lg bg-white">
            <div className="p-3 items-center">
                <div className='flex items-center justify-between'>
                    <h2 className='font-semibold'>{name}</h2>
                    <img src={img} alt="" />
                </div>
                <p>{info}</p>

            </div>
        </div>
    );
};

export default FeaturesDetails;