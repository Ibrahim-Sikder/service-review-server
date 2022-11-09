import React from 'react';
import { Link } from 'react-router-dom';

const DisplayServiceHome = ({service}) => {
    const {img, title, price, description, ratting} = service
    return (
        <div>
            <div className='mb-28'>
        <div className="card mx-auto w-96 bg-base-100 shadow-xl">
            <figure>
                
                    <img src={img} alt="Shoes" />
                    
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <span className='text-yellow-500 text-3xl font-bold'>{ratting}*</span>
                <p>{description.slice(0, 300) + '...'}</p>
                <div className="card-actions justify-end">
                <strong className='absolute left-10 bottom-3 '>{price}</strong>
                </div>  
            </div>
                
                </div>
                <div className="text-center">
            <Link to="/service">
            <button className="btn btn-warning text-white serviceBtn font-bold">See All</button>
            </Link>
                </div>
                </div>
        </div>
    );
};

export default DisplayServiceHome;