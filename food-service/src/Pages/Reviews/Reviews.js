import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Reviews = () => {
  const {user} = useContext(AuthContext)
    return (
        <div className='mt-20 mb-20'>
          <div className='w-full mx-auto text-center'>
            <textarea className="textarea border w-2/4 mx-auto" placeholder="Your review"></textarea><br />
            <input className='border' type="text" placeholder="Your name" /><br />
            <p>{user?.displayName}</p>
            <img src={user?.photoURL} alt="" />
          </div>
        </div>
    );
};

export default Reviews;