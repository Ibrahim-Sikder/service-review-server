import React, { useEffect, useState } from 'react';
import DisplayServiceHome from './DisplayServiceHome';


const ServiceHome = () => {
    const [services, setServices ] = useState([]);
    useEffect(()=>{
        fetch('https://b6a11-service-review-server-side-ibrahim-sikder.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
       },[])

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
            {
               services.map(service=> <DisplayServiceHome
                key={service._id}
                service={service}
               ></DisplayServiceHome>) 
            }
       </div>
    );
};

export default ServiceHome;