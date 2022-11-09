import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';

const Service = () => {
    const [services, setServices ] = useState([]);
    useEffect(()=>{
     fetch('http://localhost:5000/allService')
     .then(res => res.json())
     .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center mt-20'>
                
                <p className='text-2xl font-semibold text-red-500 mb-3'>Services</p>
                <h2 className='text-5xl mb-5 font-bold '>Which provide I service you.</h2>
                <p className='text-2xl w-2/3 mx-auto'>A Food Service Worker is a professional who makes food and ensures that the kitchen and dining area are clean and safe.  They must also follow strict rules set by Managers in order to maintain a high level of customer satisfaction. Post this job for free. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    services.map(service=> <ServiceDetails
                        key={service._id}
                    service={service}
                    >
                    </ServiceDetails>
                    )
                }
            </div>
        </div>
    );
};

export default Service;