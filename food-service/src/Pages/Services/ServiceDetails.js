import './Service.css';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const ServiceDetails = ({service}) => {
const {user} = useContext(AuthContext)
    const {_id, img, title, price, description, ratting } = service;
    return (
        <div className='mb-28'>
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
            <p>{`${description.slice(0, 300)} ` + '...'}</p>
            <div className="card-actions justify-end">
            <strong className='absolute left-10 bottom-3 '>{price}</strong>
            <Link to={`/service/${_id}`}>   
                {
                    user?.email &&
                    <button className="btn btn-warning">View Details</button>
                   
                }
            </Link>
            </div>
            
        </div>
        
        </div>
       <div className="text-center">
      <Link to="/service">
      <button className="btn btn-warning text-white serviceBtn font-bold">See All</button>
      </Link>
       </div>
        </div>
    );
};

export default ServiceDetails;