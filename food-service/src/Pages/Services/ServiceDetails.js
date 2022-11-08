import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({service}) => {
    const {_id, img, title, price, description, ratting } = service;
    return (
        <div>
           <div className="card mx-auto w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <span className='text-yellow-500 text-3xl font-bold'>{ratting}*</span>
            <p>{description}</p>
            <div className="card-actions justify-end">
            <strong className='absolute left-10 bottom-10'>{price}</strong>
            <Link to={`/service/${_id}`}>
            <button className="btn btn-warning">See All</button>
            </Link>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ServiceDetails;