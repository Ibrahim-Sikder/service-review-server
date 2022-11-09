import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Service.css';
const DisplayServiceDetails = () => {
  const {user} = useContext(AuthContext)
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
       
       <div className="reviewSection mb-20 mt-20">
       <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={user.photoURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
        <p>{user.email}</p>
          <h2 className="card-title">Reviewer name: {user.displayName}</h2>
          <p>Review feedback</p>
          <div className="card-actions">
            <button className="btn btn-primary">Please review me</button>
          </div>
        </div>
      </div>
         
         
          
        
       </div>
        </div>
    );
};

export default DisplayServiceDetails;