import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DisplayServiceDetails = () => {
    const {title, price, img, rating, description} = useLoaderData();
    return (
        <div className='mt-10'>
            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p className='font-bold text-3xl text-rose-900'>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Order Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DisplayServiceDetails;