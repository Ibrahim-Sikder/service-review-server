import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ReviewRow from './ReviewRow/ReviewRow';



const Reviews = () => {
  const {user, logOut} = useContext(AuthContext);
  const [reviews, setReview] = useState({});
  useEffect(()=>{
    fetch(`https://b6a11-service-review-server-side-ibrahim-sikder.vercel.app/review?email${user.email}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem('foodServiceToken')}`
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

// delete 
const handleDelete =id => {
  const proceed = window.confirm('Are you sure you want to delete!! ')
  if(proceed){
      fetch(`https://b6a11-service-review-server-side-ibrahim-sikder.vercel.app/review${id}`, {
          method: 'DELETE'

      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
          if(data.deletedCount > 0 ){
              alert("Deleted successfully ");
              const remaining = reviews.filter(odr=>odr._id !== id);
              setReview(remaining)
          }
      })
  }
}

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
        {
          reviews.map(review=> <ReviewRow
          key={review._id}
          rev={review}
          handleDelete={handleDelete}
          ></ReviewRow>)
        }
      
      </tbody>
      
      
    </table>
          </div>
      </div>
    )
}
export default Reviews;