import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = ({service}) => {
    const {user} = useContext(AuthContext)
    const {_id, img, title, price, description, ratting } = service;
    return (
        <div>
           <div className="card mx-auto w-96 bg-base-100 shadow-xl">
        <figure>
            <PhotoProvider>
                <PhotoView src={img}>
                <img src={img} alt="Shoes" />
                </PhotoView>
            </PhotoProvider>
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <span className='text-yellow-500 text-3xl font-bold'>{ratting}*</span>
            <p>{description}</p>
            <div className="card-actions justify-end">
            <strong className='absolute left-10 bottom-10'>{price}</strong>
            <Link to={`/service/${_id}`}>
           {
                user?.email ?
                <button className="btn btn-primary">View Details</button>
                :
                <button className="btn btn-warning">See All</button>
                
           }
            </Link>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ServiceDetails;