import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/UseTitle';
import './Service.css';
const DisplayServiceDetails = () => {
  const {user} = useContext(AuthContext)
    const {title, price, img, rating, description} = useLoaderData();
    // REVIEW 
    useTitle('Review')



    const handlePlaceholder = event =>{
        event.preventDefault();
        const form = event.target;
        const Service_name = form.Service_name.value;
        const description = form.description.value;
        const email = user?.email ;
        const name = user?.displayName ;
        const img = user?.photoURL;
        const review = {
          reviewerName: name,
          email,
          img,
          description,
          serviceName : Service_name
        }

        fetch('https://b6a11-service-review-server-side-ibrahim-sikder.vercel.app/review', {
          method : 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.acknowledged){
            alert("Review added successfully ")
            form.reset();
          }
        })
        .catch(err=> console.log(err))

    }

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
       
     
      <div className='mt-20 mb-20 '>
         <h2 className='text-4xl text-center font-bold mb-5'>Please add Reviews </h2>
       <div className="flex align-items-center justify-center inputGroup w-full">
       
       <form onSubmit={handlePlaceholder}>
        <input type="text" placeholder="Service name" name="Service_name" className="input input-bordered input-primary w-full max-w-xs" /><br />
        <input type="text" placeholder="Name" name="name" className="input input-bordered input-primary w-full max-w-xs" /><br />
        <input type="text" placeholder="PhotoUrl" name="photoUrl" className="input input-bordered input-primary w-full max-w-xs" /><br />
        <textarea className="textarea textarea-primary" name="description" placeholder="Description"></textarea>
        <button type="submit" className="btn btn-warning">Add review </button>
        </form>
       </div>
    </div>


        </div>
    );
};

export default DisplayServiceDetails;