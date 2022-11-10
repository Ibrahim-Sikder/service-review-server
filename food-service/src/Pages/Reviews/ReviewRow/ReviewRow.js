import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review }) => {
    const  {serviceName, description, reviewerName,email, _id, services, handleDelete} = review ;

    const [reviews, setReviews] = useState({});

    useEffect(()=>{
        fetch( `https://b6a11-service-review-server-side-ibrahim-sikder.vercel.app/services/${services}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[services])



    return (
        <div>
             <tr>
          <th>
          <label onClick={()=>handleDelete(_id)}>
          <button className='btn btn-ghost'>X</button>
          </label>
             
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="rounded w-24 h-24">
                 {
                     reviews?.img &&
                     <img src={reviews.img} alt="Avatar Tailwind CSS Component" />
                 }
                </div>
              </div>
              <div>
                <div className="font-bold">{serviceName}</div>
                <div className="text-sm opacity-50">{reviewerName}</div>
              </div>
            </div>
          </td>
          <td>
           
            <br/>
            <span className="badge badge-ghost badge-sm">{description}</span>
          </td>
          <td>Purple</td>
          <th>
            <button
           
             className="btn btn-ghost btn-xs">Update</button>
          </th>
        </tr>
        
       
  
       </div>
    );
};

export default ReviewRow;