import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import './Addservice.css';


const AddService = () => {
    const {user} = useContext(AuthContext)
    const handlePlaceholder = event =>{
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const price= form.price.value;
        const description = form.description.value;
        const email = user?.email ;
        const name = user?.displayName ;


        const addService = {
            serviceName: serviceName,
            email,
            name,
            description,
            price : price
          }
  
          fetch('https://b6a11-service-review-server-side-ibrahim-sikder.vercel.app/addServices', {
            method : 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.acknowledged){
              alert("Service added successfully ")
              form.reset();
            }
          })
          .catch(err=> console.log(err))





    }
    return (
        <div className='mt-20 mb-20 '>
             <h2 className='text-4xl text-center font-bold mb-5'>Please add service </h2>
           <div className="flex align-items-center justify-center inputGroup w-full">
           
           <form onSubmit={handlePlaceholder}>
            <input type="text" placeholder="Service name" name="serviceName" className="input input-bordered input-primary w-full max-w-xs" /><br />
            <input type="text" placeholder="price" name="price" className="input input-bordered input-primary w-full max-w-xs" /><br />
            <textarea className="textarea textarea-primary" name="description" placeholder="Description"></textarea>
            <button type="submit" className="btn btn-accent">Add Service</button>
            </form>
           </div>
        </div>
    );
};

export default AddService;