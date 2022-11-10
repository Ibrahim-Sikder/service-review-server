import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';



const Reviews = () => {
  const {user, logOut} = useContext(AuthContext);
  const [reviews, setReview] = useState({});
  useEffect(()=>{
    fetch(`https://b6a11-service-review-server-side-ibrahim-sikder.vercel.app/review?email${user.email}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem('genius-token')}`
    }


    })
    .then(res=>{
      if(res.send === 401 || res.send === 403 ){
        return  logOut()
     }
     return  res.json()
    })
    .then(data=>setReview(data))
},[user?.email])

    return (
      <div>
         
          <div className="overflow-x-auto w-full">
    <table className="table w-full">
      
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
  
      
      </tbody>
      
      
    </table>
          </div>
      </div>
    )
}
export default Reviews;