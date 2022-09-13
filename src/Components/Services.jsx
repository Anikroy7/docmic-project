import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <section className='mt-16 mb-10'>
            <h6 className='font-bold text-primary text-center mb-1'> Our Services</h6>
            <h1 className='text-center text-2xl font-bold'>Services For Your Health</h1>

            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 px-3 mt-14'>
                {
                    services.map(service => <ServiceDetails
                        service={service}
                    ></ServiceDetails>)
                }
            </div>
        </section>
    );
};

export default Services;